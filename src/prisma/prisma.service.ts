import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { createPool } from 'mysql2/promise';
import { WsGateway } from 'src/ws/ws.gateway';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly redisService: RedisService) {
    const adapter = new PrismaMariaDb(process.env.DATABASE_URL || '');

    super({
      adapter,
      log: ['info', 'warn', 'error'], // Opcional: logs para monitoreo
    });
  }

  // Helper para convertir BigInt a Number en objetos
  private convertBigIntToNumber<T>(data: T[]): T[] {
    return data.map(item => {
      const converted = { ...item };
      for (const key in converted) {
        if (typeof converted[key] === 'bigint') {
          (converted as any)[key] = Number(converted[key]);
        }
      }
      return converted;
    });
  }

  async onModuleInit() {
    await this.$connect();

    // Publicar los resúmenes al iniciar el backend
    console.log('Backend iniciado, publicando resúmenes...');
    await this.publishSummariesByAges();
    await this.publishRoomsByAgesAndGenre();
    await this.publishParticipantesOrdenados();
    await this.publishAlimentosStats();
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Cierra las conexiones al finalizar
  }

  // Método para obtener todos los participantes
  async getParticipantes() {
    const participantes = await this.$queryRaw<
      { id: number; name: string; compania: string; tipo: string }[]
    >`
      SELECT
        d.id,
        CONCAT(d.apellido, ', ', d.nombre) AS name,
        CASE
          WHEN c.id_comp = 1 THEN 'SC'
          WHEN c.id_comp = 2 THEN 'Staff'
          ELSE CONCAT('C', c.id_comp - 2)
        END AS compania,
        d.tipo
      FROM datos d
      JOIN comp c ON d.id_comp = c.id_comp;
    `;

    console.log(
      '\x1b[95mLista total consultada:',
      participantes.length,
      '\x1b[0m',
    );
    console.log(
      'Primeros 3 con tipo:',
      participantes
        .slice(0, 3)
        .map((p) => ({ id: p.id, name: p.name, tipo: p.tipo })),
    );
    return this.convertBigIntToNumber(participantes);
  }

  // Método para obtener un participante por id_part
  async getParticipanteById(id: string) {
    if (!id || isNaN(Number(id))) {
      throw new Error('El id proporcionado no es válido');
    }

    try {
      const participante = await this.$queryRaw<
        {
          id: number;
          comp: string;
          nombre: string;
          apellido: string;
          habitacion: string;
          edad: number;
          estaca: string;
          barrio: string;
          asistio: string;
        }[]
      >`
      SELECT
        a.id,
        CASE
          WHEN b.id_comp = 1 THEN 'SC'
          WHEN b.id_comp = 2 THEN 'Staff'
          WHEN b.id_comp IS NOT NULL THEN CONCAT('C', b.id_comp - 2)
          ELSE 'Sin compañía'
        END AS comp,
        COALESCE(a.nombre, 'Desconocido') AS nombre,
        COALESCE(a.apellido, 'Desconocido') AS apellido,
        COALESCE(c.habitacion, 'Sin habitación') AS habitacion,
        COALESCE(a.edad, 0) AS edad,
        COALESCE(d.estaca, 'Sin estaca') AS estaca,
        COALESCE(e.barrio, 'Sin barrio') AS barrio,
        COALESCE(f.asistio, 'No') AS asistio
      FROM datos a
      LEFT JOIN comp b ON a.id_comp = b.id_comp
      LEFT JOIN habitacion c ON a.id_habitacion = c.id_habitacion
      LEFT JOIN estaca d ON a.id_estaca = d.id_estaca
      LEFT JOIN barrio e ON a.id_barrio = e.id_barrio
      LEFT JOIN asistencia f ON a.id = f.datos_id
      WHERE a.id = ${id};
    `;

      if (participante.length === 0) {
        throw new Error('Participante no encontrado');
      }

      const nombre = participante[0].nombre || 'Desconocido';
      const apellido = participante[0].apellido || 'Desconocido';
      console.log(`Se consultó a \x1b[33m${nombre} ${apellido}\x1b[0m`);

      return this.convertBigIntToNumber(participante);
    } catch (error) {
      console.error('Error al consultar el participante:', error);
      throw new Error('Error al consultar el participante');
    }
  }

  // Método para obtener un participante por id_part
  async getFullParticipanteById(id: string) {
    if (!id || isNaN(Number(id))) {
      throw new Error('El id proporcionado no es válido');
    }

    try {
      const participante = await this.$queryRaw<
        {
          id: number;
          comp: string;
          nombre: string;
          apellido: string;
          habitacion: string;
          edad: number;
          estaca: string;
          barrio: string;
          asistio: string;
          telefono: string;
          nacimiento: string;
          sexo: string;
          tipo: string;
          talla: string;
          correo: string;
          nom_c1: string;
          telef_c1: string;
          grupo_sang: string;
          miembro: string;
          enf_cronica: string;
          trat_med: string;
          seguro: string;
          alergia_med: string;
          dieta: string;
          obs_dieta: string;
          alergia_alimento: string;
          alergia_medicamento: string;
          alergia_polvo_pelos_acaro: string;
        }[]
      >`
      SELECT
        a.id,
        CASE
          WHEN b.id_comp = 1 THEN 'SC'
          WHEN b.id_comp = 2 THEN 'Staff'
          WHEN b.id_comp IS NOT NULL THEN CONCAT('C', b.id_comp - 2)
          ELSE 'Sin compañía'
        END AS comp,
        COALESCE(a.nombre, 'Desconocido') AS nombre,
        COALESCE(a.apellido, 'Desconocido') AS apellido,
        COALESCE(c.habitacion, 'Sin habitación') AS habitacion,
        COALESCE(a.edad, 0) AS edad,
        COALESCE(d.estaca, 'Sin estaca') AS estaca,
        COALESCE(e.barrio, 'Sin barrio') AS barrio,
        COALESCE(f.asistio, 'No') AS asistio,
        COALESCE(a.telefono, '') AS telefono,
        COALESCE(DATE_FORMAT(a.nacimiento, '%Y-%m-%d'), '') AS nacimiento,
        COALESCE(a.sexo, '') AS sexo,
        COALESCE(a.tipo, 'Participante') AS tipo,
        COALESCE(a.talla, '') AS talla,
        COALESCE(a.correo, '') AS correo,
        COALESCE(a.nom_c1, '') AS nom_c1,
        COALESCE(a.telef_c1, '') AS telef_c1,
        COALESCE(a.grupo_sang, '') AS grupo_sang,
        COALESCE(a.miembro, '') AS miembro,
        COALESCE(a.enf_cronica, '') AS enf_cronica,
        COALESCE(a.trat_med, '') AS trat_med,
        COALESCE(a.seguro, '') AS seguro,
        COALESCE(a.alergia_med, '') AS alergia_med,
        COALESCE(a.dieta, 'No') AS dieta,
        COALESCE(a.obs_dieta, '') AS obs_dieta,
        COALESCE(a.alergia_alimento, 'No') AS alergia_alimento,
        COALESCE(a.alergia_medicamento, 'No') AS alergia_medicamento,
        COALESCE(a.alergia_polvo_pelos_acaro, 'No') AS alergia_polvo_pelos_acaro
      FROM datos a
      LEFT JOIN comp b ON a.id_comp = b.id_comp
      LEFT JOIN habitacion c ON a.id_habitacion = c.id_habitacion
      LEFT JOIN estaca d ON a.id_estaca = d.id_estaca
      LEFT JOIN barrio e ON a.id_barrio = e.id_barrio
      LEFT JOIN asistencia f ON a.id = f.datos_id
      WHERE a.id = ${id};
    `;

      if (participante.length === 0) {
        throw new Error('Participante no encontrado');
      }

      const nombre = participante[0].nombre || 'Desconocido';
      const apellido = participante[0].apellido || 'Desconocido';
      console.log(
        `Se consultó \x1b[4mtoda la información\x1b[24m de \x1b[33m${nombre} ${apellido}\x1b[0m`,
      );

      return this.convertBigIntToNumber(participante);
    } catch (error) {
      console.error('Error al consultar el participante:', error);
      throw new Error('Error al consultar el participante');
    }
  }

  // Método para actualizar 'asistio' en la tabla asistencia
  async updateAsistencia(id: string) {
    const participante = await this.getParticipanteById(id); // Obtener el nombre

    // Ejecutamos la actualización de la asistencia
    await this.$executeRaw`
    UPDATE asistencia
    SET asistio = "Si"
    WHERE datos_id = ${id};
  `;

    const nombre = participante?.[0]?.nombre || 'Desconocido';
    const apellido = participante?.[0]?.apellido || 'Desconocido';
    console.log(
      `\x1b[32mLa asistencia de \x1b[33m${nombre} ${apellido}\x1b[32m ha sido registrada\x1b[0m`,
    );

    // Publicar estadísticas actualizadas de alimentos
    await this.publishAlimentosStats();

    return { message: 'Asistencia actualizada con éxito' };
  }
  // Método para ejecutar la consulta según la edad
  async getSummaryByAge(edad: number) {
    const result = await this.$queryRaw<
      {
        id_comp: number;
        comp: string;
        hombres: number;
        mujeres: number;
      }[]
    >`
      SELECT
        c.id_comp,
        c.comp,
        SUM(CASE WHEN a.sexo = 'H' AND a.tipo = 'Participante' AND b.asistio = 'Si' THEN 1 ELSE 0 END) AS hombres,
        SUM(CASE WHEN a.sexo = 'M' AND a.tipo = 'Participante' AND b.asistio = 'Si' THEN 1 ELSE 0 END) AS mujeres
      FROM
        comp c
      LEFT JOIN
        datos a ON c.id_comp = a.id_comp
      LEFT JOIN
        asistencia b ON a.id = b.datos_id
      WHERE
        c.id_comp IN (
          SELECT DISTINCT id_comp
          FROM datos
          WHERE edad = ${edad}
        )
      GROUP BY
        c.id_comp
      ORDER BY
        hombres DESC,
        mujeres DESC;
    `;
    return this.convertBigIntToNumber(result);
  }

  // Método para ejecutar la consulta de habitaciones según la edad y género
  async getRoomsByAgesAndGenre(edad: number, sexo: string) {
    const result = await this.$queryRaw<
      {
        id_habitacion: number;
        habitacion: string;
        camas: number;
        registrados: number;
        ocupados: number;
        libres: number;
      }[]
    >`
 SELECT
        a.id_habitacion,
        a.habitacion,
        a.capacidad AS 'camas',
        COUNT(b.id) AS 'registrados',
        COUNT(CASE WHEN c.asistio = 'Si' THEN 1 END) AS 'ocupados',
        a.capacidad - COUNT(CASE WHEN c.asistio = 'Si' THEN 1 END) AS 'libres'
    FROM habitacion a
    JOIN datos b ON a.id_habitacion = b.id_habitacion
    JOIN asistencia c ON b.id = c.datos_id
    WHERE b.sexo = ${sexo}
      AND a.id_habitacion IN (
          SELECT id_habitacion
          FROM datos
          WHERE edad = ${edad}
          GROUP BY id_habitacion
      )
    GROUP BY a.id_habitacion,a.habitacion, a.capacidad;
  `;

    // Convertir BigInt a Number
    const converted = this.convertBigIntToNumber(result);
    // Convertir los resultados agregados a tipo number
    return (converted as any).map((row) => ({
      ...row,
      registrados: Number(row.registrados),
      ocupados: Number(row.ocupados),
      libres: Number(row.libres),
    }));
  }

  // Método para publicar y guardar en Hashes
  async publishSummariesByAges() {
    const edades = [13, 14, 15, 16, 17, 18];

    for (const edad of edades) {
      const summary = await this.getSummaryByAge(edad);
      const channel = `summary-age-${edad}`;
      const serializedSummary = JSON.stringify(summary);

      // Guardar el último mensaje en un Redis Hash
      await this.redisService.setHash(
        `last-message:${channel}`,
        'message',
        serializedSummary,
      );

      // Publicar el mensaje en el canal Pub/Sub
      await this.redisService.publish(channel, serializedSummary);

      console.log(
        `Publicado y guardado resumen para edad ${edad} en el canal ${channel}`,
      );
    }
  }
  // Método para publicar habitaciones y guardar en Hashes
  async publishRoomsByAgesAndGenre() {
    const edades = [13, 14, 15, 16, 17, 18];
    const generos = ['H', 'M'];
    for (const genero of generos) {
      for (const edad of edades) {
        const rooms = await this.getRoomsByAgesAndGenre(edad, genero);
        const channel = `rooms-age-${edad}-${genero}`;
        const serializedRooms = JSON.stringify(rooms);

        // Guardar el último mensaje en un Redis Hash
        await this.redisService.setHash(
          `last-message:${channel}`,
          'message',
          serializedRooms,
        );

        // Publicar el mensaje en el canal Pub/Sub
        await this.redisService.publish(channel, serializedRooms);

        console.log(
          `Publicado y guardado resumen para edad ${edad} y sexo ${genero} en el canal ${channel}`,
        );
      }
    }
  }

  // PrismaService - Agregar nueva consulta para obtener estacas
  async getEstacas() {
    const estacas = await this.$queryRaw<
      { id_estaca: number; estaca: string }[]
    >`SELECT id_estaca, estaca FROM estaca;`;

    console.log('Estacas consultadas:', estacas);
    return this.convertBigIntToNumber(estacas);
  }
  // Método para obtener barrios por estaca
  async getBarriosByEstaca(estacaId: string) {
    const barrios = await this.$queryRaw<
      { id_barrio: number; barrio: string }[]
    >`
      SELECT id_barrio, barrio
      FROM barrio
      WHERE id_estaca = ${estacaId};
    `;
    return this.convertBigIntToNumber(barrios);
  }
  // Obtener el último mensaje desde Redis Hash
  async getLastMessage(channel: string) {
    const message = await this.redisService.getHashField(
      `last-message:${channel}`,
      'message',
    );
    return message ? JSON.parse(message) : null;
  }
  // Método para obtener lista completa ordenada por compañía y sexo
  async getParticipantesOrdenados(): Promise<
    {
      id: number;
      nombres: string;
      sexo: string;
      estaca: string;
      barrio: string;
      compañia: number;
      habitacion: string;
      asistio: string;
      dieta: string;
      obs_dieta: string;
      tipo: string;
      nacimiento: string;
    }[]
  > {
    try {
      const participantes = await this.$queryRaw<
        {
          id: number;
          nombres: string;
          sexo: string;
          estaca: string;
          barrio: string;
          compañia: number;
          habitacion: string;
          asistio: string;
          dieta: string;
          obs_dieta: string;
          tipo: string;
          nacimiento: string;
        }[]
      >`
        SELECT
          a.id AS id,
          CONCAT(a.apellido, ", ", a.nombre) AS nombres,
          a.sexo AS sexo,
          CONCAT("Estaca ", f.estaca) AS estaca,
          e.barrio AS barrio,
          a.id_comp AS compañia,
          c.habitacion AS habitacion,
          d.asistio AS asistio,
          a.dieta AS dieta,
          a.obs_dieta AS obs_dieta,
          a.tipo AS tipo,
          DATE_FORMAT(a.nacimiento, '%Y-%m-%d') AS nacimiento
        FROM datos a
        JOIN habitacion c ON a.id_habitacion = c.id_habitacion
        JOIN asistencia d ON a.id = d.datos_id
        JOIN barrio e ON a.id_barrio = e.id_barrio
        JOIN estaca f ON a.id_estaca = f.id_estaca
        ORDER BY a.id_comp, a.sexo DESC, d.asistio DESC;
      `;

      console.log('Lista ordenada consultada');
      return this.convertBigIntToNumber(participantes);
    } catch (error) {
      console.error('Error al consultar la lista ordenada:', error);
      throw new Error('Error al consultar la lista ordenada de participantes');
    }
  }

  // Método para obtener lista completa ordenada por compañía y sexo
  async getParticipantesByCompania(id: string) {
    try {
      const participantes = await this.$queryRaw<
        {
          id: number;
          nombres: string;
          sexo: string;
          estaca: string;
          barrio: string;
          edad: number;
          comp: string;
          tipo: string;
          habitacion: string;
          asistio: string;
        }[]
      >`
        SELECT
          a.id,
          CONCAT(a.apellido, ", ", a.nombre) AS nombres,
          a.sexo AS sexo,
          COALESCE(f.estaca, 'Sin estaca') AS estaca,
          COALESCE(e.barrio, 'Sin barrio') AS barrio,
          a.edad,
          a.tipo,
          CASE
            WHEN g.id_comp = 1 THEN 'SC'
            WHEN g.id_comp = 2 THEN 'Staff'
            ELSE CONCAT('C', g.id_comp - 2)
          END AS comp,
          COALESCE(c.habitacion, 'Sin habitación') AS habitacion,
          COALESCE(d.asistio, 'No') AS asistio
        FROM datos a
        LEFT JOIN habitacion c ON a.id_habitacion = c.id_habitacion
        LEFT JOIN asistencia d ON a.id = d.datos_id
        LEFT JOIN barrio e ON a.id_barrio = e.id_barrio
        LEFT JOIN estaca f ON a.id_estaca = f.id_estaca
        JOIN comp g ON a.id_comp = g.id_comp
        WHERE g.id_comp = ${id}
        ORDER BY a.tipo DESC, a.sexo DESC, COALESCE(d.asistio, 'No') DESC;
      `;

      console.log('Lista ordenada por compania consultada');
      return this.convertBigIntToNumber(participantes);
    } catch (error) {
      console.error(
        'Error al consultar la lista ordenada por compania:',
        error,
      );
      throw new Error(
        'Error al consultar la lista ordenada de participantes por compania',
      );
    }
  }

  // Método para obtener los datos de salud de todos los participantes
  async getSaludData() {
    try {
      const saludData = await this.$queryRaw<
        {
          id: number;
          nombres: string;
          edad: number;
          sexo: string;
          comp: string;
          grupo_sang: string;
          enf_cronica: string;
          trat_med: string;
          alergia_med: string;
          dieta: string;
          obs_dieta: string;
          alergia_alimento: string;
          alergia_medicamento: string;
          alergia_polvo_pelos_acaro: string;
        }[]
      >`
        SELECT
          a.id,
          CONCAT(COALESCE(a.nombre, ''), " ", COALESCE(a.apellido, '')) AS nombres,
          COALESCE(a.edad, 0) AS edad,
          COALESCE(a.sexo, 'H') AS sexo,
          CASE
            WHEN g.id_comp IS NULL THEN 'Sin Compañía'
            WHEN g.id_comp = 1 THEN 'SC'
            WHEN g.id_comp = 2 THEN 'Staff'
            ELSE CONCAT('C', g.id_comp - 2)
          END AS comp,
          COALESCE(a.grupo_sang, '') AS grupo_sang,
          COALESCE(a.enf_cronica, '') AS enf_cronica,
          COALESCE(a.trat_med, '') AS trat_med,
          COALESCE(a.alergia_med, '') AS alergia_med,
          COALESCE(a.dieta, 'No') AS dieta,
          COALESCE(a.obs_dieta, '') AS obs_dieta,
          COALESCE(a.alergia_alimento, 'No') AS alergia_alimento,
          COALESCE(a.alergia_medicamento, 'No') AS alergia_medicamento,
          COALESCE(a.alergia_polvo_pelos_acaro, 'No') AS alergia_polvo_pelos_acaro
        FROM datos a
        LEFT JOIN comp g ON a.id_comp = g.id_comp
        ORDER BY COALESCE(g.id_comp, 999), nombres;
      `;

      console.log('\x1b[95mDatos de salud consultados:', saludData.length, 'registros\x1b[0m');

      // Convertir BigInt a Number para serialización JSON
      return this.convertBigIntToNumber(saludData);
    } catch (error) {
      console.error('\x1b[31m❌ Error al consultar los datos de salud:\x1b[0m', error);
      console.error('Detalles del error:', error.message);
      console.error('Stack trace:', error.stack);
      throw error;
    }
  }

  // Método para obtener los datos de salud de todos los participantes
  async getFullSaludData(id: string) {
    try {
      const saludData = await this.$queryRaw<
        {
          id: number;
          nombres: string;
          edad: number;
          sexo: string;
          comp: string;
          grupo_sang: string;
          enf_cronica: string;
          trat_med: string;
          alergia_med: string;
        }[]
      >`
        SELECT
          a.id,
          CONCAT(a.nombre, " ", a.apellido) AS nombres,
          a.edad,
          a.sexo,
          CASE
            WHEN g.id_comp = 1 THEN 'Compañia SC'
            WHEN g.id_comp = 2 THEN 'Compañia Staff'
            ELSE CONCAT('Compañia ', g.id_comp - 2)
          END AS comp,
          a.grupo_sang,
          a.enf_cronica,
          a.trat_med,
          a.alergia_med
        FROM datos a
        JOIN comp g ON a.id_comp = g.id_comp
        ORDER BY g.id_comp, nombres;
      `;

      console.log('\x1b[95mDatos de salud completos consultados\x1b[0m');
      return this.convertBigIntToNumber(saludData);
    } catch (error) {
      console.error('Error al consultar los datos de salud completos:', error);
      throw new Error('Error al consultar los datos de salud completos');
    }
  }

  async publishParticipantesOrdenados(changedParticipantId?: number) {
    try {
      const participantes = await this.getParticipantesOrdenados();

      // Si se proporciona un ID, determinar la compañía que cambió
      let changedCompany: number | undefined;
      if (changedParticipantId) {
        const changedParticipant = participantes.find(
          (p) => p.id === changedParticipantId,
        );
        if (changedParticipant) {
          changedCompany = changedParticipant.compañia;
          console.log(
            `Participante ID ${changedParticipantId} cambió en Compañía ${changedCompany}`,
          );
        }
      }

      // Crear el mensaje con metadata
      const messagePayload = {
        data: participantes,
        changedCompany: changedCompany,
      };
      const message = JSON.stringify(messagePayload);
      const channel = 'participantes-ordenados';

      // Guardar en Redis Hash
      await this.redisService.setHash(
        `last-message:${channel}`,
        'message',
        message,
      );

      // Publicar en el canal
      await this.redisService.publish(channel, message);

      console.log('Lista de participantes ordenados publicada y guardada');
      return participantes;
    } catch (error) {
      console.error('Error al publicar lista ordenada:', error);
      throw new Error('Error al publicar lista ordenada de participantes');
    }
  }

  async publishAlimentosStats() {
    try {
      const participantes = await this.getAlimentosStats();
      const message = JSON.stringify(participantes);
      const channel = 'alimentos-stats';

      // Guardar en Redis Hash
      await this.redisService.setHash(
        `last-message:${channel}`,
        'message',
        message,
      );

      // Publicar en el canal
      await this.redisService.publish(channel, message);

      console.log('Estadísticas de alimentos publicadas y guardadas');
      return participantes;
    } catch (error) {
      console.error('Error al publicar estadísticas de alimentos:', error);
      throw new Error('Error al publicar estadísticas de alimentos');
    }
  }

  async publishDireccionStats() {
    try {
      const participantes = await this.getParticipantesOrdenados();

      // Contar participantes que asistieron (compañía > 2)
      const participantesAsistieron = participantes.filter(
        (p) => p.asistio === 'Si' && p.compañia > 2,
      ).length;

      // Contar staff que asistieron (compañía === 2)
      const staffAsistieron = participantes.filter(
        (p) => p.asistio === 'Si' && p.compañia === 2,
      ).length;

      // Filtrar cumpleañeros del día que asistieron
      const hoy = new Date();
      const diaHoy = hoy.getDate();
      const mesHoy = hoy.getMonth() + 1; // Los meses en JS van de 0-11

      const cumpleaneros = participantes.filter((p) => {
        if (!p.nacimiento || p.asistio !== 'Si') return false;

        // Parsear la fecha de nacimiento sin timezone (formato: YYYY-MM-DD)
        // Extraer directamente día y mes de la cadena sin conversiones de timezone
        const [, mes, dia] = p.nacimiento.split('-').map(Number);

        return dia === diaHoy && mes === mesHoy;
      });

      const stats = {
        participantesAsistieron,
        staffAsistieron,
        totalAsistieron: participantesAsistieron + staffAsistieron,
        cumpleaneros,
        timestamp: new Date().toISOString(),
      };

      const message = JSON.stringify(stats);
      const channel = 'direccion-stats';

      // Guardar en Redis Hash
      await this.redisService.setHash(
        `last-message:${channel}`,
        'message',
        message,
      );

      // Publicar en el canal
      await this.redisService.publish(channel, message);

      console.log('Estadísticas de dirección publicadas y guardadas');
      return stats;
    } catch (error) {
      console.error('Error al publicar estadísticas de dirección:', error);
      throw new Error('Error al publicar estadísticas de dirección');
    }
  }

  // Método para crear un nuevo participante y su asistencia en una transacción
  async createParticipanteWithAsistencia(data: {
    apellido: string;
    nombre: string;
    nacimiento: string;
    edad: number;
    sexo: string;
    id_estaca: number;
    id_barrio: number;
    id_comp: number;
    id_habitacion: number;
  }) {
    return this.$transaction(async (prisma) => {
      // 1. Insertar en la tabla 'datos'
      const newParticipante = await prisma.$executeRaw`
        INSERT INTO datos (apellido, nombre, nacimiento, edad, sexo, id_estaca, id_barrio, id_comp, id_habitacion, tipo)
        VALUES (${data.apellido}, ${data.nombre}, ${data.nacimiento}, ${data.edad}, ${data.sexo}, ${data.id_estaca}, ${data.id_barrio}, ${data.id_comp}, ${data.id_habitacion}, "Participante");
      `;

      // Obtener el ID del último registro insertado en 'datos'
      const lastInsertedIdResult = await prisma.$queryRaw<{ id: number }[]>`
        SELECT LAST_INSERT_ID() as id;
      `;
      const datosId = Number(lastInsertedIdResult[0].id); // Convert BigInt to Number

      // 2. Insertar en la tabla 'asistencia' usando el ID de 'datos'
      await prisma.$executeRaw`
        INSERT INTO asistencia (datos_id, asistio, id_participacion)
        VALUES (${datosId}, 'Si', 2);
      `;

      console.log(
        `Nuevo participante con ID ${datosId} y su asistencia registrados con éxito.`,
      );
      return {
        message: 'Participante y asistencia registrados con éxito',
        id: datosId,
      };
    });
  }

  // Método para obtener estadísticas para alimentos
  async getAlimentosStats() {
    try {
      const participantes = await this.$queryRaw<
        {
          id: number;
          nombres: string;
          sexo: string;
          estaca: string;
          barrio: string;
          compañia: number;
          habitacion: string;
          asistio: string;
          dieta: string;
          obs_dieta: string;
          tipo: string;
        }[]
      >`
        SELECT
          a.id AS id,
          CONCAT(a.apellido, ", ", a.nombre) AS nombres,
          COALESCE(a.sexo, 'H') AS sexo,
          COALESCE(CONCAT("Estaca ", f.estaca), 'Sin estaca') AS estaca,
          COALESCE(e.barrio, 'Sin barrio') AS barrio,
          a.id_comp AS compañia,
          COALESCE(c.habitacion, 'Sin habitación') AS habitacion,
          COALESCE(d.asistio, 'No') AS asistio,
          COALESCE(a.dieta, 'No') AS dieta,
          COALESCE(a.obs_dieta, '') AS obs_dieta,
          COALESCE(a.tipo, 'Participante') AS tipo
        FROM datos a
        LEFT JOIN habitacion c ON a.id_habitacion = c.id_habitacion
        LEFT JOIN asistencia d ON a.id = d.datos_id
        LEFT JOIN barrio e ON a.id_barrio = e.id_barrio
        LEFT JOIN estaca f ON a.id_estaca = f.id_estaca
        ORDER BY a.id_comp, a.sexo DESC, d.asistio DESC;
      `;

      console.log('Estadísticas de alimentos consultadas');
      return this.convertBigIntToNumber(participantes);
    } catch (error) {
      console.error('Error al consultar estadísticas de alimentos:', error);
      throw new Error('Error al consultar estadísticas de alimentos');
    }
  }

  // Método para obtener todas las habitaciones con sus ocupantes
  async getHabitacionesConOcupantes() {
    try {
      // Primero obtenemos todas las habitaciones con su información básica
      // El sexo lo obtenemos del primer ocupante de la habitación
      const habitaciones = await this.$queryRaw<
        {
          id_habitacion: number;
          habitacion: string;
          sexo: string;
          camas: bigint;
          ocupados: bigint;
          libres: bigint;
        }[]
      >`
        SELECT
          h.id_habitacion,
          h.habitacion,
          COALESCE(
            (SELECT d.sexo
             FROM datos d
             WHERE d.id_habitacion = h.id_habitacion
             LIMIT 1),
            'H'
          ) AS sexo,
          CASE
            WHEN h.capacidad IS NULL OR h.capacidad = '' OR CAST(h.capacidad AS SIGNED) <= 0
            THEN 0
            ELSE CAST(h.capacidad AS SIGNED)
          END AS camas,
          COUNT(CASE WHEN a.asistio = 'Si' THEN 1 END) AS ocupados,
          GREATEST(0,
            CASE
              WHEN h.capacidad IS NULL OR h.capacidad = '' OR CAST(h.capacidad AS SIGNED) <= 0
              THEN 0
              ELSE CAST(h.capacidad AS SIGNED)
            END - COUNT(CASE WHEN a.asistio = 'Si' THEN 1 END)
          ) AS libres
        FROM habitacion h
        LEFT JOIN datos d ON h.id_habitacion = d.id_habitacion
        LEFT JOIN asistencia a ON d.id = a.datos_id
        GROUP BY h.id_habitacion, h.habitacion, h.capacidad
        ORDER BY sexo, h.habitacion;
      `;

      // Ahora obtenemos los ocupantes de cada habitación
      const habitacionesConOcupantes = await Promise.all(
        habitaciones.map(async (habitacion) => {
          const ocupantes = await this.$queryRaw<
            {
              id: number;
              nombre: string;
              edad: number;
              compania: string;
              tipo: string;
            }[]
          >`
            SELECT
              d.id,
              CONCAT(d.nombre, ' ', d.apellido) AS nombre,
              d.edad,
              CASE
                WHEN c.id_comp = 1 THEN 'SC'
                WHEN c.id_comp = 2 THEN 'Staff'
                ELSE CONCAT('C', c.id_comp - 2)
              END AS compania,
              d.tipo AS tipo
            FROM datos d
            JOIN asistencia a ON d.id = a.datos_id
            JOIN comp c ON d.id_comp = c.id_comp
            WHERE d.id_habitacion = ${habitacion.id_habitacion}
              AND a.asistio = 'Si'
            ORDER BY d.tipo DESC, d.apellido, d.nombre;
          `;

          return {
            id_habitacion: Number(habitacion.id_habitacion),
            habitacion: habitacion.habitacion,
            sexo: habitacion.sexo,
            camas: Number(habitacion.camas),
            ocupados: Number(habitacion.ocupados),
            libres: Math.max(0, Number(habitacion.libres)),
            ocupantes: this.convertBigIntToNumber(ocupantes),
          };
        }),
      );

      console.log('\x1b[95mHabitaciones con ocupantes consultadas\x1b[0m');
      return habitacionesConOcupantes;
    } catch (error) {
      console.error('Error al consultar habitaciones con ocupantes:', error);
      throw new Error('Error al consultar habitaciones con ocupantes');
    }
  }

  // Método para actualizar información médica de un participante (dieta y alergias)
  async updateMedicalInfo(
    id: number,
    data: {
      dieta?: 'Si' | 'No';
      obs_dieta?: string;
      alergia_alimento?: 'Si' | 'No';
      alergia_medicamento?: 'Si' | 'No';
      alergia_polvo_pelos_acaro?: 'Si' | 'No';
    },
  ) {
    try {
      const updated = await this.datos.update({
        where: { id },
        data: {
          dieta: data.dieta,
          obs_dieta: data.obs_dieta,
          alergia_alimento: data.alergia_alimento,
          alergia_medicamento: data.alergia_medicamento,
          alergia_polvo_pelos_acaro: data.alergia_polvo_pelos_acaro,
        },
      });

      console.log(
        `\x1b[33mInformación médica actualizada para ID: ${id}\x1b[0m`,
      );
      return updated;
    } catch (error) {
      console.error('Error al actualizar información médica:', error);
      throw new Error('Error al actualizar información médica');
    }
  }

  // Método para obtener todos los participantes con información médica
  async getAllParticipantesConInfoMedica() {
    try {
      const participantes = await this.$queryRaw<
        {
          id: number;
          nombre: string;
          apellido: string;
          tipo: string;
          dieta: string;
          obs_dieta: string;
          alergia_alimento: string;
          alergia_medicamento: string;
          alergia_polvo_pelos_acaro: string;
        }[]
      >`
        SELECT
          d.id,
          d.nombre,
          d.apellido,
          d.tipo,
          d.dieta,
          d.obs_dieta,
          d.alergia_alimento,
          d.alergia_medicamento,
          d.alergia_polvo_pelos_acaro
        FROM datos d
        ORDER BY d.apellido, d.nombre;
      `;

      console.log(
        '\x1b[95mLista de participantes con info médica consultada\x1b[0m',
      );
      return this.convertBigIntToNumber(participantes);
    } catch (error) {
      console.error('Error al consultar participantes con info médica:', error);
      throw new Error('Error al consultar participantes con info médica');
    }
  }
}
