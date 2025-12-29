import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(username: string, password: string) {
    // Buscar usuario en la base de datos
    const user = await this.prismaService.$queryRaw<
      { id: number; username: string; password: string; nombre: string }[]
    >`
      SELECT id, username, password, nombre
      FROM admin_users
      WHERE username = ${username}
    `;

    if (user.length === 0) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    // Verificar contraseña con Argon2
    const isPasswordValid = await argon2.verify(user[0].password, password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    // Generar token de sesión
    const token = randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // Token válido por 24 horas

    // Crear sesión
    await this.prismaService.$executeRaw`
      INSERT INTO admin_sessions (user_id, token, expires_at)
      VALUES (${user[0].id}, ${token}, ${expiresAt})
    `;

    return {
      success: true,
      token,
      user: {
        id: user[0].id,
        username: user[0].username,
        nombre: user[0].nombre,
      },
    };
  }

  async validateToken(token: string) {
    const session = await this.prismaService.$queryRaw<
      { id: number; user_id: number; expires_at: Date }[]
    >`
      SELECT id, user_id, expires_at
      FROM admin_sessions
      WHERE token = ${token}
    `;

    if (session.length === 0) {
      throw new UnauthorizedException('Token inválido');
    }

    // Verificar si el token expiró
    if (new Date() > new Date(session[0].expires_at)) {
      // Eliminar token expirado
      await this.prismaService.$executeRaw`
        DELETE FROM admin_sessions WHERE id = ${session[0].id}
      `;
      throw new UnauthorizedException('Token expirado');
    }

    // Obtener información del usuario
    const user = await this.prismaService.$queryRaw<
      { id: number; username: string; nombre: string }[]
    >`
      SELECT id, username, nombre
      FROM admin_users
      WHERE id = ${session[0].user_id}
    `;

    if (user.length === 0) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return {
      userId: user[0].id,
      username: user[0].username,
      nombre: user[0].nombre,
    };
  }

  async logout(token: string) {
    await this.prismaService.$executeRaw`
      DELETE FROM admin_sessions WHERE token = ${token}
    `;

    return { success: true, message: 'Sesión cerrada correctamente' };
  }
}
