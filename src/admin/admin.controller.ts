import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { AuthService } from 'src/auth/auth.service';
import { LoginDtoSchema, LoginDto } from 'src/auth/dto/auth.dto';
import { ZodError } from 'zod';

interface AdminSettings {
  soloStaff: boolean;
  inscripcionesCerradas: boolean;
}

@Controller('admin')
export class AdminController {
  constructor(
    private readonly redisService: RedisService,
    private readonly authService: AuthService,
  ) {}

  // Obtener configuración actual
  @Get('settings')
  async getSettings(): Promise<AdminSettings> {
    const soloStaff = await this.redisService.get('admin:solo_staff');
    const inscripcionesCerradas = await this.redisService.get(
      'admin:inscripciones_cerradas',
    );

    return {
      soloStaff: soloStaff === 'true',
      inscripcionesCerradas: inscripcionesCerradas === 'true',
    };
  }

  // Login de administrador
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: any) {
    try {
      const validatedData: LoginDto = LoginDtoSchema.parse(body);
      return await this.authService.login(
        validatedData.username,
        validatedData.password,
      );
    } catch (error) {
      if (error instanceof ZodError) {
        throw new UnauthorizedException('Datos de login inválidos');
      }
      throw error;
    }
  }

  // Logout de administrador
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Headers('authorization') authorization: string) {
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    return await this.authService.logout(token);
  }

  // Validar token de administrador
  @Get('validate')
  async validateToken(@Headers('authorization') authorization: string) {
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const user = await this.authService.validateToken(token);
    return {
      success: true,
      user,
    };
  }

  // Actualizar configuración (requiere autenticación)
  @Post('settings')
  @HttpCode(HttpStatus.OK)
  async updateSettings(
    @Body() settings: AdminSettings,
    @Headers('authorization') authorization: string,
  ) {
    // Validar token
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    await this.authService.validateToken(token);

    // Guardar en Redis
    await this.redisService.set(
      'admin:solo_staff',
      settings.soloStaff.toString(),
    );
    await this.redisService.set(
      'admin:inscripciones_cerradas',
      settings.inscripcionesCerradas.toString(),
    );

    // Publicar cambios via WebSocket
    const message = JSON.stringify(settings);
    await this.redisService.publish('admin-settings', message);

    return {
      success: true,
      message: 'Configuración actualizada',
      settings,
    };
  }
}
