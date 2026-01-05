import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermutaService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Intercambia dos participantes entre compañías
   */
  async intercambiarParticipantes(persona1Id: number, persona2Id: number) {
    // Validar que los IDs sean diferentes
    if (persona1Id === persona2Id) {
      throw new BadRequestException(
        'No se puede intercambiar una persona consigo misma',
      );
    }

    // Obtener ambas personas
    const persona1 = await this.prisma.datos.findUnique({
      where: { id: persona1Id },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        id_comp: true,
        comp: {
          select: {
            comp: true,
          },
        },
      },
    });

    const persona2 = await this.prisma.datos.findUnique({
      where: { id: persona2Id },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        id_comp: true,
        comp: {
          select: {
            comp: true,
          },
        },
      },
    });

    // Validar que ambas personas existan
    if (!persona1) {
      throw new BadRequestException(
        `No se encontró el participante con ID ${persona1Id}`,
      );
    }

    if (!persona2) {
      throw new BadRequestException(
        `No se encontró el participante con ID ${persona2Id}`,
      );
    }

    // Validar que no estén en la misma compañía
    if (persona1.id_comp === persona2.id_comp) {
      throw new BadRequestException(
        'Los participantes ya están en la misma compañía',
      );
    }

    // Realizar el intercambio en una transacción
    const resultado = await this.prisma.$transaction(async (prisma) => {
      // Guardar las compañías originales
      const compania1 = persona1.id_comp;
      const compania2 = persona2.id_comp;

      // Intercambiar las compañías
      await prisma.datos.update({
        where: { id: persona1Id },
        data: { id_comp: compania2 },
      });

      await prisma.datos.update({
        where: { id: persona2Id },
        data: { id_comp: compania1 },
      });

      return {
        mensaje: 'Intercambio realizado exitosamente',
        persona1: {
          id: persona1.id,
          nombre: `${persona1.nombre} ${persona1.apellido}`,
          companiaAnterior: persona1.comp.comp,
          companiaNueva: persona2.comp.comp,
        },
        persona2: {
          id: persona2.id,
          nombre: `${persona2.nombre} ${persona2.apellido}`,
          companiaAnterior: persona2.comp.comp,
          companiaNueva: persona1.comp.comp,
        },
      };
    });

    console.log(
      `\x1b[92mIntercambio realizado:\x1b[0m ${resultado.persona1.nombre} (${resultado.persona1.companiaAnterior} → ${resultado.persona1.companiaNueva}) ↔ ${resultado.persona2.nombre} (${resultado.persona2.companiaAnterior} → ${resultado.persona2.companiaNueva})`,
    );

    // Publicar actualizaciones a los canales de pub/sub
    console.log('Publicando actualizaciones de intercambio...');
    await this.prisma.publishSummariesByAges();
    await this.prisma.publishRoomsByAgesAndGenre();

    return resultado;
  }

  /**
   * Cambia un participante a una nueva compañía
   */
  async cambiarCompania(personaId: number, nuevaCompaniaId: number) {
    // Validar que la compañía exista
    const compania = await this.prisma.comp.findUnique({
      where: { id_comp: nuevaCompaniaId },
      select: {
        id_comp: true,
        comp: true,
      },
    });

    if (!compania) {
      throw new BadRequestException(
        `No se encontró la compañía con ID ${nuevaCompaniaId}`,
      );
    }

    // Obtener la persona
    const persona = await this.prisma.datos.findUnique({
      where: { id: personaId },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        id_comp: true,
        comp: {
          select: {
            comp: true,
          },
        },
      },
    });

    if (!persona) {
      throw new BadRequestException(
        `No se encontró el participante con ID ${personaId}`,
      );
    }

    // Validar que no sea la misma compañía
    if (persona.id_comp === nuevaCompaniaId) {
      throw new BadRequestException(
        'El participante ya está en esa compañía',
      );
    }

    // Realizar el cambio
    await this.prisma.datos.update({
      where: { id: personaId },
      data: { id_comp: nuevaCompaniaId },
    });

    const resultado = {
      mensaje: 'Cambio de compañía realizado exitosamente',
      persona: {
        id: persona.id,
        nombre: `${persona.nombre} ${persona.apellido}`,
        companiaAnterior: persona.comp.comp,
        companiaNueva: compania.comp,
      },
    };

    console.log(
      `\x1b[93mCambio de compañía:\x1b[0m ${resultado.persona.nombre} (${resultado.persona.companiaAnterior} → ${resultado.persona.companiaNueva})`,
    );

    // Publicar actualizaciones a los canales de pub/sub
    console.log('Publicando actualizaciones de cambio simple...');
    await this.prisma.publishSummariesByAges();
    await this.prisma.publishRoomsByAgesAndGenre();

    return resultado;
  }

  /**
   * Obtiene el historial de permutas (opcional - para auditoría)
   */
  async obtenerHistorial() {
    // Esto requeriría una tabla de auditoría para registrar los cambios
    // Por ahora solo retornamos un mensaje
    return {
      mensaje:
        'El historial de permutas requiere implementar una tabla de auditoría',
    };
  }

  /**
   * Cambia un participante a una nueva compañía y habitación
   */
  async cambioCompuesto(
    personaId: number,
    nuevaCompaniaId: number,
    nuevaHabitacionId: number,
    marcarAsistencia?: boolean,
  ) {
    // Validar que la compañía exista
    const compania = await this.prisma.comp.findUnique({
      where: { id_comp: nuevaCompaniaId },
      select: {
        id_comp: true,
        comp: true,
      },
    });

    if (!compania) {
      throw new BadRequestException(
        `No se encontró la compañía con ID ${nuevaCompaniaId}`,
      );
    }

    // Validar que la habitación exista
    const habitacion = await this.prisma.habitacion.findUnique({
      where: { id_habitacion: nuevaHabitacionId },
      select: {
        id_habitacion: true,
        habitacion: true,
      },
    });

    if (!habitacion) {
      throw new BadRequestException(
        `No se encontró la habitación con ID ${nuevaHabitacionId}`,
      );
    }

    // Obtener la persona
    const persona = await this.prisma.datos.findUnique({
      where: { id: personaId },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        id_comp: true,
        id_habitacion: true,
        comp: {
          select: {
            comp: true,
          },
        },
        habitacion: {
          select: {
            habitacion: true,
          },
        },
      },
    });

    if (!persona) {
      throw new BadRequestException(
        `No se encontró el participante con ID ${personaId}`,
      );
    }

    // Validar que no sea la misma compañía y habitación
    if (
      persona.id_comp === nuevaCompaniaId &&
      persona.id_habitacion === nuevaHabitacionId
    ) {
      throw new BadRequestException(
        'El participante ya está en esa compañía y habitación',
      );
    }

    // Realizar el cambio compuesto
    await this.prisma.datos.update({
      where: { id: personaId },
      data: {
        id_comp: nuevaCompaniaId,
        id_habitacion: nuevaHabitacionId,
      },
    });

    // Si se debe marcar asistencia, actualizar la tabla asistencia
    if (marcarAsistencia) {
      await this.prisma.asistencia.upsert({
        where: { datos_id: personaId },
        update: { asistio: 'Si' },
        create: { datos_id: personaId, asistio: 'Si' },
      });
    }

    const resultado = {
      mensaje: `Cambio compuesto realizado exitosamente${marcarAsistencia ? ' y asistencia marcada' : ''}`,
      persona: {
        id: persona.id,
        nombre: `${persona.nombre} ${persona.apellido}`,
        companiaAnterior: persona.comp?.comp || 'Sin asignar',
        companiaNueva: compania.comp,
        habitacionAnterior: persona.habitacion?.habitacion || 'Sin asignar',
        habitacionNueva: habitacion.habitacion,
        asistenciaMarcada: marcarAsistencia || false,
      },
    };

    console.log(
      `\x1b[95mCambio compuesto:\x1b[0m ${resultado.persona.nombre} (Compañía: ${resultado.persona.companiaAnterior} → ${resultado.persona.companiaNueva} | Habitación: ${resultado.persona.habitacionAnterior} → ${resultado.persona.habitacionNueva}${marcarAsistencia ? ' | Asistencia: Sí' : ''})`,
    );

    // Publicar actualizaciones a los canales de pub/sub
    console.log('Publicando actualizaciones de cambio compuesto...');
    await this.prisma.publishSummariesByAges();
    await this.prisma.publishRoomsByAgesAndGenre();

    return resultado;
  }

  /**
   * Obtiene todas las compañías disponibles
   */
  async obtenerCompanias() {
    const companias = await this.prisma.comp.findMany({
      select: {
        id_comp: true,
        comp: true,
      },
      orderBy: {
        id_comp: 'asc',
      },
    });

    return companias;
  }
}
