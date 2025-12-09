
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model asistencia
 * 
 */
export type asistencia = $Result.DefaultSelection<Prisma.$asistenciaPayload>
/**
 * Model barrio
 * 
 */
export type barrio = $Result.DefaultSelection<Prisma.$barrioPayload>
/**
 * Model comp
 * 
 */
export type comp = $Result.DefaultSelection<Prisma.$compPayload>
/**
 * Model datos
 * 
 */
export type datos = $Result.DefaultSelection<Prisma.$datosPayload>
/**
 * Model estaca
 * 
 */
export type estaca = $Result.DefaultSelection<Prisma.$estacaPayload>
/**
 * Model habitacion
 * 
 */
export type habitacion = $Result.DefaultSelection<Prisma.$habitacionPayload>
/**
 * Model participacion
 * 
 */
export type participacion = $Result.DefaultSelection<Prisma.$participacionPayload>
/**
 * Model salud
 * 
 */
export type salud = $Result.DefaultSelection<Prisma.$saludPayload>
/**
 * Model inventario_salud
 * 
 */
export type inventario_salud = $Result.DefaultSelection<Prisma.$inventario_saludPayload>
/**
 * Model medicinas_recetadas
 * 
 */
export type medicinas_recetadas = $Result.DefaultSelection<Prisma.$medicinas_recetadasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const asistencia_asistio: {
  Si: 'Si',
  No: 'No'
};

export type asistencia_asistio = (typeof asistencia_asistio)[keyof typeof asistencia_asistio]


export const datos_tipo: {
  Staff: 'Staff',
  Participante: 'Participante'
};

export type datos_tipo = (typeof datos_tipo)[keyof typeof datos_tipo]


export const datos_miembro: {
  Si: 'Si',
  No: 'No'
};

export type datos_miembro = (typeof datos_miembro)[keyof typeof datos_miembro]


export const datos_dieta: {
  Si: 'Si',
  No: 'No'
};

export type datos_dieta = (typeof datos_dieta)[keyof typeof datos_dieta]


export const datos_alergia_alimento: {
  Si: 'Si',
  No: 'No'
};

export type datos_alergia_alimento = (typeof datos_alergia_alimento)[keyof typeof datos_alergia_alimento]


export const datos_alergia_medicamento: {
  Si: 'Si',
  No: 'No'
};

export type datos_alergia_medicamento = (typeof datos_alergia_medicamento)[keyof typeof datos_alergia_medicamento]


export const datos_alergia_polvo_pelos_acaro: {
  Si: 'Si',
  No: 'No'
};

export type datos_alergia_polvo_pelos_acaro = (typeof datos_alergia_polvo_pelos_acaro)[keyof typeof datos_alergia_polvo_pelos_acaro]

}

export type asistencia_asistio = $Enums.asistencia_asistio

export const asistencia_asistio: typeof $Enums.asistencia_asistio

export type datos_tipo = $Enums.datos_tipo

export const datos_tipo: typeof $Enums.datos_tipo

export type datos_miembro = $Enums.datos_miembro

export const datos_miembro: typeof $Enums.datos_miembro

export type datos_dieta = $Enums.datos_dieta

export const datos_dieta: typeof $Enums.datos_dieta

export type datos_alergia_alimento = $Enums.datos_alergia_alimento

export const datos_alergia_alimento: typeof $Enums.datos_alergia_alimento

export type datos_alergia_medicamento = $Enums.datos_alergia_medicamento

export const datos_alergia_medicamento: typeof $Enums.datos_alergia_medicamento

export type datos_alergia_polvo_pelos_acaro = $Enums.datos_alergia_polvo_pelos_acaro

export const datos_alergia_polvo_pelos_acaro: typeof $Enums.datos_alergia_polvo_pelos_acaro

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Asistencias
 * const asistencias = await prisma.asistencia.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Asistencias
   * const asistencias = await prisma.asistencia.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.asistencia`: Exposes CRUD operations for the **asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.asistenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barrio`: Exposes CRUD operations for the **barrio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barrios
    * const barrios = await prisma.barrio.findMany()
    * ```
    */
  get barrio(): Prisma.barrioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comp`: Exposes CRUD operations for the **comp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comps
    * const comps = await prisma.comp.findMany()
    * ```
    */
  get comp(): Prisma.compDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datos`: Exposes CRUD operations for the **datos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datos
    * const datos = await prisma.datos.findMany()
    * ```
    */
  get datos(): Prisma.datosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estaca`: Exposes CRUD operations for the **estaca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estacas
    * const estacas = await prisma.estaca.findMany()
    * ```
    */
  get estaca(): Prisma.estacaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitacion`: Exposes CRUD operations for the **habitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitacions
    * const habitacions = await prisma.habitacion.findMany()
    * ```
    */
  get habitacion(): Prisma.habitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participacion`: Exposes CRUD operations for the **participacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participacions
    * const participacions = await prisma.participacion.findMany()
    * ```
    */
  get participacion(): Prisma.participacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salud`: Exposes CRUD operations for the **salud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saluds
    * const saluds = await prisma.salud.findMany()
    * ```
    */
  get salud(): Prisma.saludDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario_salud`: Exposes CRUD operations for the **inventario_salud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventario_saluds
    * const inventario_saluds = await prisma.inventario_salud.findMany()
    * ```
    */
  get inventario_salud(): Prisma.inventario_saludDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicinas_recetadas`: Exposes CRUD operations for the **medicinas_recetadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicinas_recetadas
    * const medicinas_recetadas = await prisma.medicinas_recetadas.findMany()
    * ```
    */
  get medicinas_recetadas(): Prisma.medicinas_recetadasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    asistencia: 'asistencia',
    barrio: 'barrio',
    comp: 'comp',
    datos: 'datos',
    estaca: 'estaca',
    habitacion: 'habitacion',
    participacion: 'participacion',
    salud: 'salud',
    inventario_salud: 'inventario_salud',
    medicinas_recetadas: 'medicinas_recetadas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "asistencia" | "barrio" | "comp" | "datos" | "estaca" | "habitacion" | "participacion" | "salud" | "inventario_salud" | "medicinas_recetadas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      asistencia: {
        payload: Prisma.$asistenciaPayload<ExtArgs>
        fields: Prisma.asistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findFirst: {
            args: Prisma.asistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findMany: {
            args: Prisma.asistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          create: {
            args: Prisma.asistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          createMany: {
            args: Prisma.asistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.asistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          update: {
            args: Prisma.asistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          deleteMany: {
            args: Prisma.asistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.asistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.asistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      barrio: {
        payload: Prisma.$barrioPayload<ExtArgs>
        fields: Prisma.barrioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barrioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barrioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          findFirst: {
            args: Prisma.barrioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barrioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          findMany: {
            args: Prisma.barrioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>[]
          }
          create: {
            args: Prisma.barrioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          createMany: {
            args: Prisma.barrioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.barrioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          update: {
            args: Prisma.barrioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          deleteMany: {
            args: Prisma.barrioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barrioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.barrioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barrioPayload>
          }
          aggregate: {
            args: Prisma.BarrioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarrio>
          }
          groupBy: {
            args: Prisma.barrioGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarrioGroupByOutputType>[]
          }
          count: {
            args: Prisma.barrioCountArgs<ExtArgs>
            result: $Utils.Optional<BarrioCountAggregateOutputType> | number
          }
        }
      }
      comp: {
        payload: Prisma.$compPayload<ExtArgs>
        fields: Prisma.compFieldRefs
        operations: {
          findUnique: {
            args: Prisma.compFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.compFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          findFirst: {
            args: Prisma.compFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.compFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          findMany: {
            args: Prisma.compFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>[]
          }
          create: {
            args: Prisma.compCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          createMany: {
            args: Prisma.compCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.compDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          update: {
            args: Prisma.compUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          deleteMany: {
            args: Prisma.compDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.compUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.compUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$compPayload>
          }
          aggregate: {
            args: Prisma.CompAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComp>
          }
          groupBy: {
            args: Prisma.compGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompGroupByOutputType>[]
          }
          count: {
            args: Prisma.compCountArgs<ExtArgs>
            result: $Utils.Optional<CompCountAggregateOutputType> | number
          }
        }
      }
      datos: {
        payload: Prisma.$datosPayload<ExtArgs>
        fields: Prisma.datosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          findFirst: {
            args: Prisma.datosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          findMany: {
            args: Prisma.datosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>[]
          }
          create: {
            args: Prisma.datosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          createMany: {
            args: Prisma.datosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.datosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          update: {
            args: Prisma.datosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          deleteMany: {
            args: Prisma.datosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.datosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          aggregate: {
            args: Prisma.DatosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatos>
          }
          groupBy: {
            args: Prisma.datosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatosGroupByOutputType>[]
          }
          count: {
            args: Prisma.datosCountArgs<ExtArgs>
            result: $Utils.Optional<DatosCountAggregateOutputType> | number
          }
        }
      }
      estaca: {
        payload: Prisma.$estacaPayload<ExtArgs>
        fields: Prisma.estacaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estacaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estacaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          findFirst: {
            args: Prisma.estacaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estacaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          findMany: {
            args: Prisma.estacaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>[]
          }
          create: {
            args: Prisma.estacaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          createMany: {
            args: Prisma.estacaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estacaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          update: {
            args: Prisma.estacaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          deleteMany: {
            args: Prisma.estacaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estacaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estacaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estacaPayload>
          }
          aggregate: {
            args: Prisma.EstacaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstaca>
          }
          groupBy: {
            args: Prisma.estacaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstacaGroupByOutputType>[]
          }
          count: {
            args: Prisma.estacaCountArgs<ExtArgs>
            result: $Utils.Optional<EstacaCountAggregateOutputType> | number
          }
        }
      }
      habitacion: {
        payload: Prisma.$habitacionPayload<ExtArgs>
        fields: Prisma.habitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.habitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.habitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          findFirst: {
            args: Prisma.habitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.habitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          findMany: {
            args: Prisma.habitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>[]
          }
          create: {
            args: Prisma.habitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          createMany: {
            args: Prisma.habitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.habitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          update: {
            args: Prisma.habitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          deleteMany: {
            args: Prisma.habitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.habitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.habitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacionPayload>
          }
          aggregate: {
            args: Prisma.HabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitacion>
          }
          groupBy: {
            args: Prisma.habitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.habitacionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitacionCountAggregateOutputType> | number
          }
        }
      }
      participacion: {
        payload: Prisma.$participacionPayload<ExtArgs>
        fields: Prisma.participacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          findFirst: {
            args: Prisma.participacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          findMany: {
            args: Prisma.participacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>[]
          }
          create: {
            args: Prisma.participacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          createMany: {
            args: Prisma.participacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.participacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          update: {
            args: Prisma.participacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          deleteMany: {
            args: Prisma.participacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.participacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participacionPayload>
          }
          aggregate: {
            args: Prisma.ParticipacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacion>
          }
          groupBy: {
            args: Prisma.participacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.participacionCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacionCountAggregateOutputType> | number
          }
        }
      }
      salud: {
        payload: Prisma.$saludPayload<ExtArgs>
        fields: Prisma.saludFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saludFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saludFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          findFirst: {
            args: Prisma.saludFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saludFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          findMany: {
            args: Prisma.saludFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>[]
          }
          create: {
            args: Prisma.saludCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          createMany: {
            args: Prisma.saludCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saludDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          update: {
            args: Prisma.saludUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          deleteMany: {
            args: Prisma.saludDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saludUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saludUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saludPayload>
          }
          aggregate: {
            args: Prisma.SaludAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalud>
          }
          groupBy: {
            args: Prisma.saludGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaludGroupByOutputType>[]
          }
          count: {
            args: Prisma.saludCountArgs<ExtArgs>
            result: $Utils.Optional<SaludCountAggregateOutputType> | number
          }
        }
      }
      inventario_salud: {
        payload: Prisma.$inventario_saludPayload<ExtArgs>
        fields: Prisma.inventario_saludFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventario_saludFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventario_saludFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          findFirst: {
            args: Prisma.inventario_saludFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventario_saludFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          findMany: {
            args: Prisma.inventario_saludFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>[]
          }
          create: {
            args: Prisma.inventario_saludCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          createMany: {
            args: Prisma.inventario_saludCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventario_saludDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          update: {
            args: Prisma.inventario_saludUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          deleteMany: {
            args: Prisma.inventario_saludDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventario_saludUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventario_saludUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_saludPayload>
          }
          aggregate: {
            args: Prisma.Inventario_saludAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario_salud>
          }
          groupBy: {
            args: Prisma.inventario_saludGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventario_saludGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventario_saludCountArgs<ExtArgs>
            result: $Utils.Optional<Inventario_saludCountAggregateOutputType> | number
          }
        }
      }
      medicinas_recetadas: {
        payload: Prisma.$medicinas_recetadasPayload<ExtArgs>
        fields: Prisma.medicinas_recetadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicinas_recetadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicinas_recetadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          findFirst: {
            args: Prisma.medicinas_recetadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicinas_recetadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          findMany: {
            args: Prisma.medicinas_recetadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>[]
          }
          create: {
            args: Prisma.medicinas_recetadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          createMany: {
            args: Prisma.medicinas_recetadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.medicinas_recetadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          update: {
            args: Prisma.medicinas_recetadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          deleteMany: {
            args: Prisma.medicinas_recetadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicinas_recetadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.medicinas_recetadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinas_recetadasPayload>
          }
          aggregate: {
            args: Prisma.Medicinas_recetadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicinas_recetadas>
          }
          groupBy: {
            args: Prisma.medicinas_recetadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medicinas_recetadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicinas_recetadasCountArgs<ExtArgs>
            result: $Utils.Optional<Medicinas_recetadasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    asistencia?: asistenciaOmit
    barrio?: barrioOmit
    comp?: compOmit
    datos?: datosOmit
    estaca?: estacaOmit
    habitacion?: habitacionOmit
    participacion?: participacionOmit
    salud?: saludOmit
    inventario_salud?: inventario_saludOmit
    medicinas_recetadas?: medicinas_recetadasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarrioCountOutputType
   */

  export type BarrioCountOutputType = {
    datos: number
  }

  export type BarrioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | BarrioCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * BarrioCountOutputType without action
   */
  export type BarrioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarrioCountOutputType
     */
    select?: BarrioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarrioCountOutputType without action
   */
  export type BarrioCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type CompCountOutputType
   */

  export type CompCountOutputType = {
    datos: number
  }

  export type CompCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | CompCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * CompCountOutputType without action
   */
  export type CompCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompCountOutputType
     */
    select?: CompCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompCountOutputType without action
   */
  export type CompCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type DatosCountOutputType
   */

  export type DatosCountOutputType = {
    asistencia: number
    salud: number
  }

  export type DatosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencia?: boolean | DatosCountOutputTypeCountAsistenciaArgs
    salud?: boolean | DatosCountOutputTypeCountSaludArgs
  }

  // Custom InputTypes
  /**
   * DatosCountOutputType without action
   */
  export type DatosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatosCountOutputType
     */
    select?: DatosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatosCountOutputType without action
   */
  export type DatosCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }

  /**
   * DatosCountOutputType without action
   */
  export type DatosCountOutputTypeCountSaludArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saludWhereInput
  }


  /**
   * Count Type EstacaCountOutputType
   */

  export type EstacaCountOutputType = {
    barrio: number
    datos: number
  }

  export type EstacaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barrio?: boolean | EstacaCountOutputTypeCountBarrioArgs
    datos?: boolean | EstacaCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * EstacaCountOutputType without action
   */
  export type EstacaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstacaCountOutputType
     */
    select?: EstacaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstacaCountOutputType without action
   */
  export type EstacaCountOutputTypeCountBarrioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barrioWhereInput
  }

  /**
   * EstacaCountOutputType without action
   */
  export type EstacaCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type HabitacionCountOutputType
   */

  export type HabitacionCountOutputType = {
    datos: number
  }

  export type HabitacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | HabitacionCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitacionCountOutputType
     */
    select?: HabitacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type ParticipacionCountOutputType
   */

  export type ParticipacionCountOutputType = {
    asistencia: number
  }

  export type ParticipacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencia?: boolean | ParticipacionCountOutputTypeCountAsistenciaArgs
  }

  // Custom InputTypes
  /**
   * ParticipacionCountOutputType without action
   */
  export type ParticipacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacionCountOutputType
     */
    select?: ParticipacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipacionCountOutputType without action
   */
  export type ParticipacionCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }


  /**
   * Count Type SaludCountOutputType
   */

  export type SaludCountOutputType = {
    medicinas_recetadas: number
  }

  export type SaludCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicinas_recetadas?: boolean | SaludCountOutputTypeCountMedicinas_recetadasArgs
  }

  // Custom InputTypes
  /**
   * SaludCountOutputType without action
   */
  export type SaludCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaludCountOutputType
     */
    select?: SaludCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaludCountOutputType without action
   */
  export type SaludCountOutputTypeCountMedicinas_recetadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicinas_recetadasWhereInput
  }


  /**
   * Count Type Inventario_saludCountOutputType
   */

  export type Inventario_saludCountOutputType = {
    medicinas_recetadas: number
  }

  export type Inventario_saludCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicinas_recetadas?: boolean | Inventario_saludCountOutputTypeCountMedicinas_recetadasArgs
  }

  // Custom InputTypes
  /**
   * Inventario_saludCountOutputType without action
   */
  export type Inventario_saludCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario_saludCountOutputType
     */
    select?: Inventario_saludCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Inventario_saludCountOutputType without action
   */
  export type Inventario_saludCountOutputTypeCountMedicinas_recetadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicinas_recetadasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id_asistencia: number | null
    datos_id: number | null
    id_participacion: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id_asistencia: number | null
    datos_id: number | null
    id_participacion: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id_asistencia: number | null
    datos_id: number | null
    asistio: $Enums.asistencia_asistio | null
    id_participacion: number | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id_asistencia: number | null
    datos_id: number | null
    asistio: $Enums.asistencia_asistio | null
    id_participacion: number | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id_asistencia: number
    datos_id: number
    asistio: number
    id_participacion: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id_asistencia?: true
    datos_id?: true
    id_participacion?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id_asistencia?: true
    datos_id?: true
    id_participacion?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id_asistencia?: true
    datos_id?: true
    asistio?: true
    id_participacion?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id_asistencia?: true
    datos_id?: true
    asistio?: true
    id_participacion?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id_asistencia?: true
    datos_id?: true
    asistio?: true
    id_participacion?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencia to aggregate.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type asistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithAggregationInput | asistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: asistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id_asistencia: number
    datos_id: number
    asistio: $Enums.asistencia_asistio
    id_participacion: number
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends asistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type asistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asistencia?: boolean
    datos_id?: boolean
    asistio?: boolean
    id_participacion?: boolean
    datos?: boolean | datosDefaultArgs<ExtArgs>
    participacion?: boolean | participacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>



  export type asistenciaSelectScalar = {
    id_asistencia?: boolean
    datos_id?: boolean
    asistio?: boolean
    id_participacion?: boolean
  }

  export type asistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_asistencia" | "datos_id" | "asistio" | "id_participacion", ExtArgs["result"]["asistencia"]>
  export type asistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | datosDefaultArgs<ExtArgs>
    participacion?: boolean | participacionDefaultArgs<ExtArgs>
  }

  export type $asistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistencia"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>
      participacion: Prisma.$participacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asistencia: number
      datos_id: number
      asistio: $Enums.asistencia_asistio
      id_participacion: number
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type asistenciaGetPayload<S extends boolean | null | undefined | asistenciaDefaultArgs> = $Result.GetResult<Prisma.$asistenciaPayload, S>

  type asistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<asistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface asistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistencia'], meta: { name: 'asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {asistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenciaFindUniqueArgs>(args: SelectSubset<T, asistenciaFindUniqueArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, asistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenciaFindFirstArgs>(args?: SelectSubset<T, asistenciaFindFirstArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, asistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id_asistencia`
     * const asistenciaWithId_asistenciaOnly = await prisma.asistencia.findMany({ select: { id_asistencia: true } })
     * 
     */
    findMany<T extends asistenciaFindManyArgs>(args?: SelectSubset<T, asistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {asistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends asistenciaCreateArgs>(args: SelectSubset<T, asistenciaCreateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {asistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asistenciaCreateManyArgs>(args?: SelectSubset<T, asistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asistencia.
     * @param {asistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends asistenciaDeleteArgs>(args: SelectSubset<T, asistenciaDeleteArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {asistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asistenciaUpdateArgs>(args: SelectSubset<T, asistenciaUpdateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {asistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asistenciaDeleteManyArgs>(args?: SelectSubset<T, asistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asistenciaUpdateManyArgs>(args: SelectSubset<T, asistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistencia.
     * @param {asistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends asistenciaUpsertArgs>(args: SelectSubset<T, asistenciaUpsertArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends asistenciaCountArgs>(
      args?: Subset<T, asistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends asistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistenciaGroupByArgs['orderBy'] }
        : { orderBy?: asistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, asistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistencia model
   */
  readonly fields: asistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends datosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, datosDefaultArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participacion<T extends participacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, participacionDefaultArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the asistencia model
   */
  interface asistenciaFieldRefs {
    readonly id_asistencia: FieldRef<"asistencia", 'Int'>
    readonly datos_id: FieldRef<"asistencia", 'Int'>
    readonly asistio: FieldRef<"asistencia", 'asistencia_asistio'>
    readonly id_participacion: FieldRef<"asistencia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * asistencia findUnique
   */
  export type asistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findUniqueOrThrow
   */
  export type asistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findFirst
   */
  export type asistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findFirstOrThrow
   */
  export type asistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findMany
   */
  export type asistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencias to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia create
   */
  export type asistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a asistencia.
     */
    data: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
  }

  /**
   * asistencia createMany
   */
  export type asistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistencia update
   */
  export type asistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a asistencia.
     */
    data: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
    /**
     * Choose, which asistencia to update.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia updateMany
   */
  export type asistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistencias.
     */
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyInput>
    /**
     * Filter which asistencias to update
     */
    where?: asistenciaWhereInput
    /**
     * Limit how many asistencias to update.
     */
    limit?: number
  }

  /**
   * asistencia upsert
   */
  export type asistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the asistencia to update in case it exists.
     */
    where: asistenciaWhereUniqueInput
    /**
     * In case the asistencia found by the `where` argument doesn't exist, create a new asistencia with this data.
     */
    create: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
    /**
     * In case the asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
  }

  /**
   * asistencia delete
   */
  export type asistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter which asistencia to delete.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia deleteMany
   */
  export type asistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencias to delete
     */
    where?: asistenciaWhereInput
    /**
     * Limit how many asistencias to delete.
     */
    limit?: number
  }

  /**
   * asistencia without action
   */
  export type asistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
  }


  /**
   * Model barrio
   */

  export type AggregateBarrio = {
    _count: BarrioCountAggregateOutputType | null
    _avg: BarrioAvgAggregateOutputType | null
    _sum: BarrioSumAggregateOutputType | null
    _min: BarrioMinAggregateOutputType | null
    _max: BarrioMaxAggregateOutputType | null
  }

  export type BarrioAvgAggregateOutputType = {
    id_barrio: number | null
    id_estaca: number | null
  }

  export type BarrioSumAggregateOutputType = {
    id_barrio: number | null
    id_estaca: number | null
  }

  export type BarrioMinAggregateOutputType = {
    id_barrio: number | null
    id_estaca: number | null
    barrio: string | null
  }

  export type BarrioMaxAggregateOutputType = {
    id_barrio: number | null
    id_estaca: number | null
    barrio: string | null
  }

  export type BarrioCountAggregateOutputType = {
    id_barrio: number
    id_estaca: number
    barrio: number
    _all: number
  }


  export type BarrioAvgAggregateInputType = {
    id_barrio?: true
    id_estaca?: true
  }

  export type BarrioSumAggregateInputType = {
    id_barrio?: true
    id_estaca?: true
  }

  export type BarrioMinAggregateInputType = {
    id_barrio?: true
    id_estaca?: true
    barrio?: true
  }

  export type BarrioMaxAggregateInputType = {
    id_barrio?: true
    id_estaca?: true
    barrio?: true
  }

  export type BarrioCountAggregateInputType = {
    id_barrio?: true
    id_estaca?: true
    barrio?: true
    _all?: true
  }

  export type BarrioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barrio to aggregate.
     */
    where?: barrioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barrios to fetch.
     */
    orderBy?: barrioOrderByWithRelationInput | barrioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barrioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barrios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barrios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barrios
    **/
    _count?: true | BarrioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarrioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarrioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarrioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarrioMaxAggregateInputType
  }

  export type GetBarrioAggregateType<T extends BarrioAggregateArgs> = {
        [P in keyof T & keyof AggregateBarrio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarrio[P]>
      : GetScalarType<T[P], AggregateBarrio[P]>
  }




  export type barrioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barrioWhereInput
    orderBy?: barrioOrderByWithAggregationInput | barrioOrderByWithAggregationInput[]
    by: BarrioScalarFieldEnum[] | BarrioScalarFieldEnum
    having?: barrioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarrioCountAggregateInputType | true
    _avg?: BarrioAvgAggregateInputType
    _sum?: BarrioSumAggregateInputType
    _min?: BarrioMinAggregateInputType
    _max?: BarrioMaxAggregateInputType
  }

  export type BarrioGroupByOutputType = {
    id_barrio: number
    id_estaca: number
    barrio: string
    _count: BarrioCountAggregateOutputType | null
    _avg: BarrioAvgAggregateOutputType | null
    _sum: BarrioSumAggregateOutputType | null
    _min: BarrioMinAggregateOutputType | null
    _max: BarrioMaxAggregateOutputType | null
  }

  type GetBarrioGroupByPayload<T extends barrioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarrioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarrioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarrioGroupByOutputType[P]>
            : GetScalarType<T[P], BarrioGroupByOutputType[P]>
        }
      >
    >


  export type barrioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barrio?: boolean
    id_estaca?: boolean
    barrio?: boolean
    estaca?: boolean | estacaDefaultArgs<ExtArgs>
    datos?: boolean | barrio$datosArgs<ExtArgs>
    _count?: boolean | BarrioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barrio"]>



  export type barrioSelectScalar = {
    id_barrio?: boolean
    id_estaca?: boolean
    barrio?: boolean
  }

  export type barrioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_barrio" | "id_estaca" | "barrio", ExtArgs["result"]["barrio"]>
  export type barrioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estaca?: boolean | estacaDefaultArgs<ExtArgs>
    datos?: boolean | barrio$datosArgs<ExtArgs>
    _count?: boolean | BarrioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $barrioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barrio"
    objects: {
      estaca: Prisma.$estacaPayload<ExtArgs>
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barrio: number
      id_estaca: number
      barrio: string
    }, ExtArgs["result"]["barrio"]>
    composites: {}
  }

  type barrioGetPayload<S extends boolean | null | undefined | barrioDefaultArgs> = $Result.GetResult<Prisma.$barrioPayload, S>

  type barrioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barrioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarrioCountAggregateInputType | true
    }

  export interface barrioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barrio'], meta: { name: 'barrio' } }
    /**
     * Find zero or one Barrio that matches the filter.
     * @param {barrioFindUniqueArgs} args - Arguments to find a Barrio
     * @example
     * // Get one Barrio
     * const barrio = await prisma.barrio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barrioFindUniqueArgs>(args: SelectSubset<T, barrioFindUniqueArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barrio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barrioFindUniqueOrThrowArgs} args - Arguments to find a Barrio
     * @example
     * // Get one Barrio
     * const barrio = await prisma.barrio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barrioFindUniqueOrThrowArgs>(args: SelectSubset<T, barrioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barrio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioFindFirstArgs} args - Arguments to find a Barrio
     * @example
     * // Get one Barrio
     * const barrio = await prisma.barrio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barrioFindFirstArgs>(args?: SelectSubset<T, barrioFindFirstArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barrio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioFindFirstOrThrowArgs} args - Arguments to find a Barrio
     * @example
     * // Get one Barrio
     * const barrio = await prisma.barrio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barrioFindFirstOrThrowArgs>(args?: SelectSubset<T, barrioFindFirstOrThrowArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barrios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barrios
     * const barrios = await prisma.barrio.findMany()
     * 
     * // Get first 10 Barrios
     * const barrios = await prisma.barrio.findMany({ take: 10 })
     * 
     * // Only select the `id_barrio`
     * const barrioWithId_barrioOnly = await prisma.barrio.findMany({ select: { id_barrio: true } })
     * 
     */
    findMany<T extends barrioFindManyArgs>(args?: SelectSubset<T, barrioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barrio.
     * @param {barrioCreateArgs} args - Arguments to create a Barrio.
     * @example
     * // Create one Barrio
     * const Barrio = await prisma.barrio.create({
     *   data: {
     *     // ... data to create a Barrio
     *   }
     * })
     * 
     */
    create<T extends barrioCreateArgs>(args: SelectSubset<T, barrioCreateArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barrios.
     * @param {barrioCreateManyArgs} args - Arguments to create many Barrios.
     * @example
     * // Create many Barrios
     * const barrio = await prisma.barrio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barrioCreateManyArgs>(args?: SelectSubset<T, barrioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Barrio.
     * @param {barrioDeleteArgs} args - Arguments to delete one Barrio.
     * @example
     * // Delete one Barrio
     * const Barrio = await prisma.barrio.delete({
     *   where: {
     *     // ... filter to delete one Barrio
     *   }
     * })
     * 
     */
    delete<T extends barrioDeleteArgs>(args: SelectSubset<T, barrioDeleteArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barrio.
     * @param {barrioUpdateArgs} args - Arguments to update one Barrio.
     * @example
     * // Update one Barrio
     * const barrio = await prisma.barrio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barrioUpdateArgs>(args: SelectSubset<T, barrioUpdateArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barrios.
     * @param {barrioDeleteManyArgs} args - Arguments to filter Barrios to delete.
     * @example
     * // Delete a few Barrios
     * const { count } = await prisma.barrio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barrioDeleteManyArgs>(args?: SelectSubset<T, barrioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barrios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barrios
     * const barrio = await prisma.barrio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barrioUpdateManyArgs>(args: SelectSubset<T, barrioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barrio.
     * @param {barrioUpsertArgs} args - Arguments to update or create a Barrio.
     * @example
     * // Update or create a Barrio
     * const barrio = await prisma.barrio.upsert({
     *   create: {
     *     // ... data to create a Barrio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barrio we want to update
     *   }
     * })
     */
    upsert<T extends barrioUpsertArgs>(args: SelectSubset<T, barrioUpsertArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barrios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioCountArgs} args - Arguments to filter Barrios to count.
     * @example
     * // Count the number of Barrios
     * const count = await prisma.barrio.count({
     *   where: {
     *     // ... the filter for the Barrios we want to count
     *   }
     * })
    **/
    count<T extends barrioCountArgs>(
      args?: Subset<T, barrioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarrioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barrio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarrioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarrioAggregateArgs>(args: Subset<T, BarrioAggregateArgs>): Prisma.PrismaPromise<GetBarrioAggregateType<T>>

    /**
     * Group by Barrio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barrioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends barrioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barrioGroupByArgs['orderBy'] }
        : { orderBy?: barrioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, barrioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarrioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barrio model
   */
  readonly fields: barrioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barrio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barrioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estaca<T extends estacaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estacaDefaultArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    datos<T extends barrio$datosArgs<ExtArgs> = {}>(args?: Subset<T, barrio$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the barrio model
   */
  interface barrioFieldRefs {
    readonly id_barrio: FieldRef<"barrio", 'Int'>
    readonly id_estaca: FieldRef<"barrio", 'Int'>
    readonly barrio: FieldRef<"barrio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * barrio findUnique
   */
  export type barrioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter, which barrio to fetch.
     */
    where: barrioWhereUniqueInput
  }

  /**
   * barrio findUniqueOrThrow
   */
  export type barrioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter, which barrio to fetch.
     */
    where: barrioWhereUniqueInput
  }

  /**
   * barrio findFirst
   */
  export type barrioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter, which barrio to fetch.
     */
    where?: barrioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barrios to fetch.
     */
    orderBy?: barrioOrderByWithRelationInput | barrioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barrios.
     */
    cursor?: barrioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barrios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barrios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barrios.
     */
    distinct?: BarrioScalarFieldEnum | BarrioScalarFieldEnum[]
  }

  /**
   * barrio findFirstOrThrow
   */
  export type barrioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter, which barrio to fetch.
     */
    where?: barrioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barrios to fetch.
     */
    orderBy?: barrioOrderByWithRelationInput | barrioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barrios.
     */
    cursor?: barrioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barrios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barrios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barrios.
     */
    distinct?: BarrioScalarFieldEnum | BarrioScalarFieldEnum[]
  }

  /**
   * barrio findMany
   */
  export type barrioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter, which barrios to fetch.
     */
    where?: barrioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barrios to fetch.
     */
    orderBy?: barrioOrderByWithRelationInput | barrioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barrios.
     */
    cursor?: barrioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barrios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barrios.
     */
    skip?: number
    distinct?: BarrioScalarFieldEnum | BarrioScalarFieldEnum[]
  }

  /**
   * barrio create
   */
  export type barrioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * The data needed to create a barrio.
     */
    data: XOR<barrioCreateInput, barrioUncheckedCreateInput>
  }

  /**
   * barrio createMany
   */
  export type barrioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barrios.
     */
    data: barrioCreateManyInput | barrioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barrio update
   */
  export type barrioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * The data needed to update a barrio.
     */
    data: XOR<barrioUpdateInput, barrioUncheckedUpdateInput>
    /**
     * Choose, which barrio to update.
     */
    where: barrioWhereUniqueInput
  }

  /**
   * barrio updateMany
   */
  export type barrioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barrios.
     */
    data: XOR<barrioUpdateManyMutationInput, barrioUncheckedUpdateManyInput>
    /**
     * Filter which barrios to update
     */
    where?: barrioWhereInput
    /**
     * Limit how many barrios to update.
     */
    limit?: number
  }

  /**
   * barrio upsert
   */
  export type barrioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * The filter to search for the barrio to update in case it exists.
     */
    where: barrioWhereUniqueInput
    /**
     * In case the barrio found by the `where` argument doesn't exist, create a new barrio with this data.
     */
    create: XOR<barrioCreateInput, barrioUncheckedCreateInput>
    /**
     * In case the barrio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barrioUpdateInput, barrioUncheckedUpdateInput>
  }

  /**
   * barrio delete
   */
  export type barrioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    /**
     * Filter which barrio to delete.
     */
    where: barrioWhereUniqueInput
  }

  /**
   * barrio deleteMany
   */
  export type barrioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barrios to delete
     */
    where?: barrioWhereInput
    /**
     * Limit how many barrios to delete.
     */
    limit?: number
  }

  /**
   * barrio.datos
   */
  export type barrio$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * barrio without action
   */
  export type barrioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
  }


  /**
   * Model comp
   */

  export type AggregateComp = {
    _count: CompCountAggregateOutputType | null
    _avg: CompAvgAggregateOutputType | null
    _sum: CompSumAggregateOutputType | null
    _min: CompMinAggregateOutputType | null
    _max: CompMaxAggregateOutputType | null
  }

  export type CompAvgAggregateOutputType = {
    id_comp: number | null
  }

  export type CompSumAggregateOutputType = {
    id_comp: number | null
  }

  export type CompMinAggregateOutputType = {
    id_comp: number | null
    comp: string | null
  }

  export type CompMaxAggregateOutputType = {
    id_comp: number | null
    comp: string | null
  }

  export type CompCountAggregateOutputType = {
    id_comp: number
    comp: number
    _all: number
  }


  export type CompAvgAggregateInputType = {
    id_comp?: true
  }

  export type CompSumAggregateInputType = {
    id_comp?: true
  }

  export type CompMinAggregateInputType = {
    id_comp?: true
    comp?: true
  }

  export type CompMaxAggregateInputType = {
    id_comp?: true
    comp?: true
  }

  export type CompCountAggregateInputType = {
    id_comp?: true
    comp?: true
    _all?: true
  }

  export type CompAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comp to aggregate.
     */
    where?: compWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comps to fetch.
     */
    orderBy?: compOrderByWithRelationInput | compOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: compWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comps
    **/
    _count?: true | CompCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompMaxAggregateInputType
  }

  export type GetCompAggregateType<T extends CompAggregateArgs> = {
        [P in keyof T & keyof AggregateComp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComp[P]>
      : GetScalarType<T[P], AggregateComp[P]>
  }




  export type compGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compWhereInput
    orderBy?: compOrderByWithAggregationInput | compOrderByWithAggregationInput[]
    by: CompScalarFieldEnum[] | CompScalarFieldEnum
    having?: compScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompCountAggregateInputType | true
    _avg?: CompAvgAggregateInputType
    _sum?: CompSumAggregateInputType
    _min?: CompMinAggregateInputType
    _max?: CompMaxAggregateInputType
  }

  export type CompGroupByOutputType = {
    id_comp: number
    comp: string
    _count: CompCountAggregateOutputType | null
    _avg: CompAvgAggregateOutputType | null
    _sum: CompSumAggregateOutputType | null
    _min: CompMinAggregateOutputType | null
    _max: CompMaxAggregateOutputType | null
  }

  type GetCompGroupByPayload<T extends compGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompGroupByOutputType[P]>
            : GetScalarType<T[P], CompGroupByOutputType[P]>
        }
      >
    >


  export type compSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comp?: boolean
    comp?: boolean
    datos?: boolean | comp$datosArgs<ExtArgs>
    _count?: boolean | CompCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comp"]>



  export type compSelectScalar = {
    id_comp?: boolean
    comp?: boolean
  }

  export type compOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_comp" | "comp", ExtArgs["result"]["comp"]>
  export type compInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | comp$datosArgs<ExtArgs>
    _count?: boolean | CompCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $compPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comp"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comp: number
      comp: string
    }, ExtArgs["result"]["comp"]>
    composites: {}
  }

  type compGetPayload<S extends boolean | null | undefined | compDefaultArgs> = $Result.GetResult<Prisma.$compPayload, S>

  type compCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<compFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompCountAggregateInputType | true
    }

  export interface compDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comp'], meta: { name: 'comp' } }
    /**
     * Find zero or one Comp that matches the filter.
     * @param {compFindUniqueArgs} args - Arguments to find a Comp
     * @example
     * // Get one Comp
     * const comp = await prisma.comp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends compFindUniqueArgs>(args: SelectSubset<T, compFindUniqueArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {compFindUniqueOrThrowArgs} args - Arguments to find a Comp
     * @example
     * // Get one Comp
     * const comp = await prisma.comp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends compFindUniqueOrThrowArgs>(args: SelectSubset<T, compFindUniqueOrThrowArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compFindFirstArgs} args - Arguments to find a Comp
     * @example
     * // Get one Comp
     * const comp = await prisma.comp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends compFindFirstArgs>(args?: SelectSubset<T, compFindFirstArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compFindFirstOrThrowArgs} args - Arguments to find a Comp
     * @example
     * // Get one Comp
     * const comp = await prisma.comp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends compFindFirstOrThrowArgs>(args?: SelectSubset<T, compFindFirstOrThrowArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comps
     * const comps = await prisma.comp.findMany()
     * 
     * // Get first 10 Comps
     * const comps = await prisma.comp.findMany({ take: 10 })
     * 
     * // Only select the `id_comp`
     * const compWithId_compOnly = await prisma.comp.findMany({ select: { id_comp: true } })
     * 
     */
    findMany<T extends compFindManyArgs>(args?: SelectSubset<T, compFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comp.
     * @param {compCreateArgs} args - Arguments to create a Comp.
     * @example
     * // Create one Comp
     * const Comp = await prisma.comp.create({
     *   data: {
     *     // ... data to create a Comp
     *   }
     * })
     * 
     */
    create<T extends compCreateArgs>(args: SelectSubset<T, compCreateArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comps.
     * @param {compCreateManyArgs} args - Arguments to create many Comps.
     * @example
     * // Create many Comps
     * const comp = await prisma.comp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends compCreateManyArgs>(args?: SelectSubset<T, compCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comp.
     * @param {compDeleteArgs} args - Arguments to delete one Comp.
     * @example
     * // Delete one Comp
     * const Comp = await prisma.comp.delete({
     *   where: {
     *     // ... filter to delete one Comp
     *   }
     * })
     * 
     */
    delete<T extends compDeleteArgs>(args: SelectSubset<T, compDeleteArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comp.
     * @param {compUpdateArgs} args - Arguments to update one Comp.
     * @example
     * // Update one Comp
     * const comp = await prisma.comp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends compUpdateArgs>(args: SelectSubset<T, compUpdateArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comps.
     * @param {compDeleteManyArgs} args - Arguments to filter Comps to delete.
     * @example
     * // Delete a few Comps
     * const { count } = await prisma.comp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends compDeleteManyArgs>(args?: SelectSubset<T, compDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comps
     * const comp = await prisma.comp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends compUpdateManyArgs>(args: SelectSubset<T, compUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comp.
     * @param {compUpsertArgs} args - Arguments to update or create a Comp.
     * @example
     * // Update or create a Comp
     * const comp = await prisma.comp.upsert({
     *   create: {
     *     // ... data to create a Comp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comp we want to update
     *   }
     * })
     */
    upsert<T extends compUpsertArgs>(args: SelectSubset<T, compUpsertArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compCountArgs} args - Arguments to filter Comps to count.
     * @example
     * // Count the number of Comps
     * const count = await prisma.comp.count({
     *   where: {
     *     // ... the filter for the Comps we want to count
     *   }
     * })
    **/
    count<T extends compCountArgs>(
      args?: Subset<T, compCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompAggregateArgs>(args: Subset<T, CompAggregateArgs>): Prisma.PrismaPromise<GetCompAggregateType<T>>

    /**
     * Group by Comp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends compGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compGroupByArgs['orderBy'] }
        : { orderBy?: compGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, compGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comp model
   */
  readonly fields: compFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends comp$datosArgs<ExtArgs> = {}>(args?: Subset<T, comp$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comp model
   */
  interface compFieldRefs {
    readonly id_comp: FieldRef<"comp", 'Int'>
    readonly comp: FieldRef<"comp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comp findUnique
   */
  export type compFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter, which comp to fetch.
     */
    where: compWhereUniqueInput
  }

  /**
   * comp findUniqueOrThrow
   */
  export type compFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter, which comp to fetch.
     */
    where: compWhereUniqueInput
  }

  /**
   * comp findFirst
   */
  export type compFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter, which comp to fetch.
     */
    where?: compWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comps to fetch.
     */
    orderBy?: compOrderByWithRelationInput | compOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comps.
     */
    cursor?: compWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comps.
     */
    distinct?: CompScalarFieldEnum | CompScalarFieldEnum[]
  }

  /**
   * comp findFirstOrThrow
   */
  export type compFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter, which comp to fetch.
     */
    where?: compWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comps to fetch.
     */
    orderBy?: compOrderByWithRelationInput | compOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comps.
     */
    cursor?: compWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comps.
     */
    distinct?: CompScalarFieldEnum | CompScalarFieldEnum[]
  }

  /**
   * comp findMany
   */
  export type compFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter, which comps to fetch.
     */
    where?: compWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comps to fetch.
     */
    orderBy?: compOrderByWithRelationInput | compOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comps.
     */
    cursor?: compWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comps.
     */
    skip?: number
    distinct?: CompScalarFieldEnum | CompScalarFieldEnum[]
  }

  /**
   * comp create
   */
  export type compCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * The data needed to create a comp.
     */
    data: XOR<compCreateInput, compUncheckedCreateInput>
  }

  /**
   * comp createMany
   */
  export type compCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comps.
     */
    data: compCreateManyInput | compCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comp update
   */
  export type compUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * The data needed to update a comp.
     */
    data: XOR<compUpdateInput, compUncheckedUpdateInput>
    /**
     * Choose, which comp to update.
     */
    where: compWhereUniqueInput
  }

  /**
   * comp updateMany
   */
  export type compUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comps.
     */
    data: XOR<compUpdateManyMutationInput, compUncheckedUpdateManyInput>
    /**
     * Filter which comps to update
     */
    where?: compWhereInput
    /**
     * Limit how many comps to update.
     */
    limit?: number
  }

  /**
   * comp upsert
   */
  export type compUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * The filter to search for the comp to update in case it exists.
     */
    where: compWhereUniqueInput
    /**
     * In case the comp found by the `where` argument doesn't exist, create a new comp with this data.
     */
    create: XOR<compCreateInput, compUncheckedCreateInput>
    /**
     * In case the comp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compUpdateInput, compUncheckedUpdateInput>
  }

  /**
   * comp delete
   */
  export type compDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
    /**
     * Filter which comp to delete.
     */
    where: compWhereUniqueInput
  }

  /**
   * comp deleteMany
   */
  export type compDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comps to delete
     */
    where?: compWhereInput
    /**
     * Limit how many comps to delete.
     */
    limit?: number
  }

  /**
   * comp.datos
   */
  export type comp$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * comp without action
   */
  export type compDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comp
     */
    select?: compSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comp
     */
    omit?: compOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: compInclude<ExtArgs> | null
  }


  /**
   * Model datos
   */

  export type AggregateDatos = {
    _count: DatosCountAggregateOutputType | null
    _avg: DatosAvgAggregateOutputType | null
    _sum: DatosSumAggregateOutputType | null
    _min: DatosMinAggregateOutputType | null
    _max: DatosMaxAggregateOutputType | null
  }

  export type DatosAvgAggregateOutputType = {
    id: number | null
    edad: number | null
    id_estaca: number | null
    id_barrio: number | null
    id_comp: number | null
    id_habitacion: number | null
  }

  export type DatosSumAggregateOutputType = {
    id: number | null
    edad: number | null
    id_estaca: number | null
    id_barrio: number | null
    id_comp: number | null
    id_habitacion: number | null
  }

  export type DatosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    edad: number | null
    nacimiento: Date | null
    id_estaca: number | null
    id_barrio: number | null
    id_comp: number | null
    id_habitacion: number | null
    telefono: string | null
    sexo: string | null
    tipo: $Enums.datos_tipo | null
    correo: string | null
    talla: string | null
    nom_c1: string | null
    telef_c1: string | null
    grupo_sang: string | null
    miembro: $Enums.datos_miembro | null
    enf_cronica: string | null
    trat_med: string | null
    seguro: string | null
    alergia_med: string | null
    dieta: $Enums.datos_dieta | null
    obs_dieta: string | null
    alergia_alimento: $Enums.datos_alergia_alimento | null
    alergia_medicamento: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type DatosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    edad: number | null
    nacimiento: Date | null
    id_estaca: number | null
    id_barrio: number | null
    id_comp: number | null
    id_habitacion: number | null
    telefono: string | null
    sexo: string | null
    tipo: $Enums.datos_tipo | null
    correo: string | null
    talla: string | null
    nom_c1: string | null
    telef_c1: string | null
    grupo_sang: string | null
    miembro: $Enums.datos_miembro | null
    enf_cronica: string | null
    trat_med: string | null
    seguro: string | null
    alergia_med: string | null
    dieta: $Enums.datos_dieta | null
    obs_dieta: string | null
    alergia_alimento: $Enums.datos_alergia_alimento | null
    alergia_medicamento: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type DatosCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    edad: number
    nacimiento: number
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono: number
    sexo: number
    tipo: number
    correo: number
    talla: number
    nom_c1: number
    telef_c1: number
    grupo_sang: number
    miembro: number
    enf_cronica: number
    trat_med: number
    seguro: number
    alergia_med: number
    dieta: number
    obs_dieta: number
    alergia_alimento: number
    alergia_medicamento: number
    alergia_polvo_pelos_acaro: number
    _all: number
  }


  export type DatosAvgAggregateInputType = {
    id?: true
    edad?: true
    id_estaca?: true
    id_barrio?: true
    id_comp?: true
    id_habitacion?: true
  }

  export type DatosSumAggregateInputType = {
    id?: true
    edad?: true
    id_estaca?: true
    id_barrio?: true
    id_comp?: true
    id_habitacion?: true
  }

  export type DatosMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    edad?: true
    nacimiento?: true
    id_estaca?: true
    id_barrio?: true
    id_comp?: true
    id_habitacion?: true
    telefono?: true
    sexo?: true
    tipo?: true
    correo?: true
    talla?: true
    nom_c1?: true
    telef_c1?: true
    grupo_sang?: true
    miembro?: true
    enf_cronica?: true
    trat_med?: true
    seguro?: true
    alergia_med?: true
    dieta?: true
    obs_dieta?: true
    alergia_alimento?: true
    alergia_medicamento?: true
    alergia_polvo_pelos_acaro?: true
  }

  export type DatosMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    edad?: true
    nacimiento?: true
    id_estaca?: true
    id_barrio?: true
    id_comp?: true
    id_habitacion?: true
    telefono?: true
    sexo?: true
    tipo?: true
    correo?: true
    talla?: true
    nom_c1?: true
    telef_c1?: true
    grupo_sang?: true
    miembro?: true
    enf_cronica?: true
    trat_med?: true
    seguro?: true
    alergia_med?: true
    dieta?: true
    obs_dieta?: true
    alergia_alimento?: true
    alergia_medicamento?: true
    alergia_polvo_pelos_acaro?: true
  }

  export type DatosCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    edad?: true
    nacimiento?: true
    id_estaca?: true
    id_barrio?: true
    id_comp?: true
    id_habitacion?: true
    telefono?: true
    sexo?: true
    tipo?: true
    correo?: true
    talla?: true
    nom_c1?: true
    telef_c1?: true
    grupo_sang?: true
    miembro?: true
    enf_cronica?: true
    trat_med?: true
    seguro?: true
    alergia_med?: true
    dieta?: true
    obs_dieta?: true
    alergia_alimento?: true
    alergia_medicamento?: true
    alergia_polvo_pelos_acaro?: true
    _all?: true
  }

  export type DatosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos to aggregate.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datos
    **/
    _count?: true | DatosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatosMaxAggregateInputType
  }

  export type GetDatosAggregateType<T extends DatosAggregateArgs> = {
        [P in keyof T & keyof AggregateDatos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatos[P]>
      : GetScalarType<T[P], AggregateDatos[P]>
  }




  export type datosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
    orderBy?: datosOrderByWithAggregationInput | datosOrderByWithAggregationInput[]
    by: DatosScalarFieldEnum[] | DatosScalarFieldEnum
    having?: datosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatosCountAggregateInputType | true
    _avg?: DatosAvgAggregateInputType
    _sum?: DatosSumAggregateInputType
    _min?: DatosMinAggregateInputType
    _max?: DatosMaxAggregateInputType
  }

  export type DatosGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    edad: number
    nacimiento: Date | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo: string | null
    talla: string | null
    nom_c1: string | null
    telef_c1: string | null
    grupo_sang: string | null
    miembro: $Enums.datos_miembro | null
    enf_cronica: string | null
    trat_med: string | null
    seguro: string | null
    alergia_med: string | null
    dieta: $Enums.datos_dieta | null
    obs_dieta: string | null
    alergia_alimento: $Enums.datos_alergia_alimento | null
    alergia_medicamento: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro: $Enums.datos_alergia_polvo_pelos_acaro | null
    _count: DatosCountAggregateOutputType | null
    _avg: DatosAvgAggregateOutputType | null
    _sum: DatosSumAggregateOutputType | null
    _min: DatosMinAggregateOutputType | null
    _max: DatosMaxAggregateOutputType | null
  }

  type GetDatosGroupByPayload<T extends datosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatosGroupByOutputType[P]>
            : GetScalarType<T[P], DatosGroupByOutputType[P]>
        }
      >
    >


  export type datosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    edad?: boolean
    nacimiento?: boolean
    id_estaca?: boolean
    id_barrio?: boolean
    id_comp?: boolean
    id_habitacion?: boolean
    telefono?: boolean
    sexo?: boolean
    tipo?: boolean
    correo?: boolean
    talla?: boolean
    nom_c1?: boolean
    telef_c1?: boolean
    grupo_sang?: boolean
    miembro?: boolean
    enf_cronica?: boolean
    trat_med?: boolean
    seguro?: boolean
    alergia_med?: boolean
    dieta?: boolean
    obs_dieta?: boolean
    alergia_alimento?: boolean
    alergia_medicamento?: boolean
    alergia_polvo_pelos_acaro?: boolean
    asistencia?: boolean | datos$asistenciaArgs<ExtArgs>
    barrio?: boolean | barrioDefaultArgs<ExtArgs>
    comp?: boolean | compDefaultArgs<ExtArgs>
    estaca?: boolean | estacaDefaultArgs<ExtArgs>
    habitacion?: boolean | habitacionDefaultArgs<ExtArgs>
    salud?: boolean | datos$saludArgs<ExtArgs>
    _count?: boolean | DatosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datos"]>



  export type datosSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    edad?: boolean
    nacimiento?: boolean
    id_estaca?: boolean
    id_barrio?: boolean
    id_comp?: boolean
    id_habitacion?: boolean
    telefono?: boolean
    sexo?: boolean
    tipo?: boolean
    correo?: boolean
    talla?: boolean
    nom_c1?: boolean
    telef_c1?: boolean
    grupo_sang?: boolean
    miembro?: boolean
    enf_cronica?: boolean
    trat_med?: boolean
    seguro?: boolean
    alergia_med?: boolean
    dieta?: boolean
    obs_dieta?: boolean
    alergia_alimento?: boolean
    alergia_medicamento?: boolean
    alergia_polvo_pelos_acaro?: boolean
  }

  export type datosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "edad" | "nacimiento" | "id_estaca" | "id_barrio" | "id_comp" | "id_habitacion" | "telefono" | "sexo" | "tipo" | "correo" | "talla" | "nom_c1" | "telef_c1" | "grupo_sang" | "miembro" | "enf_cronica" | "trat_med" | "seguro" | "alergia_med" | "dieta" | "obs_dieta" | "alergia_alimento" | "alergia_medicamento" | "alergia_polvo_pelos_acaro", ExtArgs["result"]["datos"]>
  export type datosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencia?: boolean | datos$asistenciaArgs<ExtArgs>
    barrio?: boolean | barrioDefaultArgs<ExtArgs>
    comp?: boolean | compDefaultArgs<ExtArgs>
    estaca?: boolean | estacaDefaultArgs<ExtArgs>
    habitacion?: boolean | habitacionDefaultArgs<ExtArgs>
    salud?: boolean | datos$saludArgs<ExtArgs>
    _count?: boolean | DatosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $datosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "datos"
    objects: {
      asistencia: Prisma.$asistenciaPayload<ExtArgs>[]
      barrio: Prisma.$barrioPayload<ExtArgs>
      comp: Prisma.$compPayload<ExtArgs>
      estaca: Prisma.$estacaPayload<ExtArgs>
      habitacion: Prisma.$habitacionPayload<ExtArgs>
      salud: Prisma.$saludPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      edad: number
      nacimiento: Date | null
      id_estaca: number
      id_barrio: number
      id_comp: number
      id_habitacion: number
      telefono: string | null
      sexo: string
      tipo: $Enums.datos_tipo
      correo: string | null
      talla: string | null
      nom_c1: string | null
      telef_c1: string | null
      grupo_sang: string | null
      miembro: $Enums.datos_miembro | null
      enf_cronica: string | null
      trat_med: string | null
      seguro: string | null
      alergia_med: string | null
      dieta: $Enums.datos_dieta | null
      obs_dieta: string | null
      alergia_alimento: $Enums.datos_alergia_alimento | null
      alergia_medicamento: $Enums.datos_alergia_medicamento | null
      alergia_polvo_pelos_acaro: $Enums.datos_alergia_polvo_pelos_acaro | null
    }, ExtArgs["result"]["datos"]>
    composites: {}
  }

  type datosGetPayload<S extends boolean | null | undefined | datosDefaultArgs> = $Result.GetResult<Prisma.$datosPayload, S>

  type datosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatosCountAggregateInputType | true
    }

  export interface datosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['datos'], meta: { name: 'datos' } }
    /**
     * Find zero or one Datos that matches the filter.
     * @param {datosFindUniqueArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datosFindUniqueArgs>(args: SelectSubset<T, datosFindUniqueArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datosFindUniqueOrThrowArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datosFindUniqueOrThrowArgs>(args: SelectSubset<T, datosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindFirstArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datosFindFirstArgs>(args?: SelectSubset<T, datosFindFirstArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindFirstOrThrowArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datosFindFirstOrThrowArgs>(args?: SelectSubset<T, datosFindFirstOrThrowArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datos
     * const datos = await prisma.datos.findMany()
     * 
     * // Get first 10 Datos
     * const datos = await prisma.datos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datosWithIdOnly = await prisma.datos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends datosFindManyArgs>(args?: SelectSubset<T, datosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datos.
     * @param {datosCreateArgs} args - Arguments to create a Datos.
     * @example
     * // Create one Datos
     * const Datos = await prisma.datos.create({
     *   data: {
     *     // ... data to create a Datos
     *   }
     * })
     * 
     */
    create<T extends datosCreateArgs>(args: SelectSubset<T, datosCreateArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datos.
     * @param {datosCreateManyArgs} args - Arguments to create many Datos.
     * @example
     * // Create many Datos
     * const datos = await prisma.datos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datosCreateManyArgs>(args?: SelectSubset<T, datosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Datos.
     * @param {datosDeleteArgs} args - Arguments to delete one Datos.
     * @example
     * // Delete one Datos
     * const Datos = await prisma.datos.delete({
     *   where: {
     *     // ... filter to delete one Datos
     *   }
     * })
     * 
     */
    delete<T extends datosDeleteArgs>(args: SelectSubset<T, datosDeleteArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datos.
     * @param {datosUpdateArgs} args - Arguments to update one Datos.
     * @example
     * // Update one Datos
     * const datos = await prisma.datos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datosUpdateArgs>(args: SelectSubset<T, datosUpdateArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datos.
     * @param {datosDeleteManyArgs} args - Arguments to filter Datos to delete.
     * @example
     * // Delete a few Datos
     * const { count } = await prisma.datos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datosDeleteManyArgs>(args?: SelectSubset<T, datosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datos
     * const datos = await prisma.datos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datosUpdateManyArgs>(args: SelectSubset<T, datosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Datos.
     * @param {datosUpsertArgs} args - Arguments to update or create a Datos.
     * @example
     * // Update or create a Datos
     * const datos = await prisma.datos.upsert({
     *   create: {
     *     // ... data to create a Datos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datos we want to update
     *   }
     * })
     */
    upsert<T extends datosUpsertArgs>(args: SelectSubset<T, datosUpsertArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosCountArgs} args - Arguments to filter Datos to count.
     * @example
     * // Count the number of Datos
     * const count = await prisma.datos.count({
     *   where: {
     *     // ... the filter for the Datos we want to count
     *   }
     * })
    **/
    count<T extends datosCountArgs>(
      args?: Subset<T, datosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatosAggregateArgs>(args: Subset<T, DatosAggregateArgs>): Prisma.PrismaPromise<GetDatosAggregateType<T>>

    /**
     * Group by Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends datosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datosGroupByArgs['orderBy'] }
        : { orderBy?: datosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, datosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the datos model
   */
  readonly fields: datosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for datos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencia<T extends datos$asistenciaArgs<ExtArgs> = {}>(args?: Subset<T, datos$asistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    barrio<T extends barrioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, barrioDefaultArgs<ExtArgs>>): Prisma__barrioClient<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comp<T extends compDefaultArgs<ExtArgs> = {}>(args?: Subset<T, compDefaultArgs<ExtArgs>>): Prisma__compClient<$Result.GetResult<Prisma.$compPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estaca<T extends estacaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estacaDefaultArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitacion<T extends habitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, habitacionDefaultArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    salud<T extends datos$saludArgs<ExtArgs> = {}>(args?: Subset<T, datos$saludArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the datos model
   */
  interface datosFieldRefs {
    readonly id: FieldRef<"datos", 'Int'>
    readonly nombre: FieldRef<"datos", 'String'>
    readonly apellido: FieldRef<"datos", 'String'>
    readonly edad: FieldRef<"datos", 'Int'>
    readonly nacimiento: FieldRef<"datos", 'DateTime'>
    readonly id_estaca: FieldRef<"datos", 'Int'>
    readonly id_barrio: FieldRef<"datos", 'Int'>
    readonly id_comp: FieldRef<"datos", 'Int'>
    readonly id_habitacion: FieldRef<"datos", 'Int'>
    readonly telefono: FieldRef<"datos", 'String'>
    readonly sexo: FieldRef<"datos", 'String'>
    readonly tipo: FieldRef<"datos", 'datos_tipo'>
    readonly correo: FieldRef<"datos", 'String'>
    readonly talla: FieldRef<"datos", 'String'>
    readonly nom_c1: FieldRef<"datos", 'String'>
    readonly telef_c1: FieldRef<"datos", 'String'>
    readonly grupo_sang: FieldRef<"datos", 'String'>
    readonly miembro: FieldRef<"datos", 'datos_miembro'>
    readonly enf_cronica: FieldRef<"datos", 'String'>
    readonly trat_med: FieldRef<"datos", 'String'>
    readonly seguro: FieldRef<"datos", 'String'>
    readonly alergia_med: FieldRef<"datos", 'String'>
    readonly dieta: FieldRef<"datos", 'datos_dieta'>
    readonly obs_dieta: FieldRef<"datos", 'String'>
    readonly alergia_alimento: FieldRef<"datos", 'datos_alergia_alimento'>
    readonly alergia_medicamento: FieldRef<"datos", 'datos_alergia_medicamento'>
    readonly alergia_polvo_pelos_acaro: FieldRef<"datos", 'datos_alergia_polvo_pelos_acaro'>
  }
    

  // Custom InputTypes
  /**
   * datos findUnique
   */
  export type datosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos findUniqueOrThrow
   */
  export type datosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos findFirst
   */
  export type datosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos.
     */
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos findFirstOrThrow
   */
  export type datosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos.
     */
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos findMany
   */
  export type datosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos create
   */
  export type datosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The data needed to create a datos.
     */
    data: XOR<datosCreateInput, datosUncheckedCreateInput>
  }

  /**
   * datos createMany
   */
  export type datosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datos.
     */
    data: datosCreateManyInput | datosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * datos update
   */
  export type datosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The data needed to update a datos.
     */
    data: XOR<datosUpdateInput, datosUncheckedUpdateInput>
    /**
     * Choose, which datos to update.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos updateMany
   */
  export type datosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datos.
     */
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyInput>
    /**
     * Filter which datos to update
     */
    where?: datosWhereInput
    /**
     * Limit how many datos to update.
     */
    limit?: number
  }

  /**
   * datos upsert
   */
  export type datosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The filter to search for the datos to update in case it exists.
     */
    where: datosWhereUniqueInput
    /**
     * In case the datos found by the `where` argument doesn't exist, create a new datos with this data.
     */
    create: XOR<datosCreateInput, datosUncheckedCreateInput>
    /**
     * In case the datos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datosUpdateInput, datosUncheckedUpdateInput>
  }

  /**
   * datos delete
   */
  export type datosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter which datos to delete.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos deleteMany
   */
  export type datosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos to delete
     */
    where?: datosWhereInput
    /**
     * Limit how many datos to delete.
     */
    limit?: number
  }

  /**
   * datos.asistencia
   */
  export type datos$asistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * datos.salud
   */
  export type datos$saludArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    where?: saludWhereInput
    orderBy?: saludOrderByWithRelationInput | saludOrderByWithRelationInput[]
    cursor?: saludWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaludScalarFieldEnum | SaludScalarFieldEnum[]
  }

  /**
   * datos without action
   */
  export type datosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
  }


  /**
   * Model estaca
   */

  export type AggregateEstaca = {
    _count: EstacaCountAggregateOutputType | null
    _avg: EstacaAvgAggregateOutputType | null
    _sum: EstacaSumAggregateOutputType | null
    _min: EstacaMinAggregateOutputType | null
    _max: EstacaMaxAggregateOutputType | null
  }

  export type EstacaAvgAggregateOutputType = {
    id_estaca: number | null
  }

  export type EstacaSumAggregateOutputType = {
    id_estaca: number | null
  }

  export type EstacaMinAggregateOutputType = {
    id_estaca: number | null
    estaca: string | null
  }

  export type EstacaMaxAggregateOutputType = {
    id_estaca: number | null
    estaca: string | null
  }

  export type EstacaCountAggregateOutputType = {
    id_estaca: number
    estaca: number
    _all: number
  }


  export type EstacaAvgAggregateInputType = {
    id_estaca?: true
  }

  export type EstacaSumAggregateInputType = {
    id_estaca?: true
  }

  export type EstacaMinAggregateInputType = {
    id_estaca?: true
    estaca?: true
  }

  export type EstacaMaxAggregateInputType = {
    id_estaca?: true
    estaca?: true
  }

  export type EstacaCountAggregateInputType = {
    id_estaca?: true
    estaca?: true
    _all?: true
  }

  export type EstacaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estaca to aggregate.
     */
    where?: estacaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estacas to fetch.
     */
    orderBy?: estacaOrderByWithRelationInput | estacaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estacaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estacas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estacas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estacas
    **/
    _count?: true | EstacaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstacaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstacaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstacaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstacaMaxAggregateInputType
  }

  export type GetEstacaAggregateType<T extends EstacaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstaca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstaca[P]>
      : GetScalarType<T[P], AggregateEstaca[P]>
  }




  export type estacaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estacaWhereInput
    orderBy?: estacaOrderByWithAggregationInput | estacaOrderByWithAggregationInput[]
    by: EstacaScalarFieldEnum[] | EstacaScalarFieldEnum
    having?: estacaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstacaCountAggregateInputType | true
    _avg?: EstacaAvgAggregateInputType
    _sum?: EstacaSumAggregateInputType
    _min?: EstacaMinAggregateInputType
    _max?: EstacaMaxAggregateInputType
  }

  export type EstacaGroupByOutputType = {
    id_estaca: number
    estaca: string
    _count: EstacaCountAggregateOutputType | null
    _avg: EstacaAvgAggregateOutputType | null
    _sum: EstacaSumAggregateOutputType | null
    _min: EstacaMinAggregateOutputType | null
    _max: EstacaMaxAggregateOutputType | null
  }

  type GetEstacaGroupByPayload<T extends estacaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstacaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstacaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstacaGroupByOutputType[P]>
            : GetScalarType<T[P], EstacaGroupByOutputType[P]>
        }
      >
    >


  export type estacaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estaca?: boolean
    estaca?: boolean
    barrio?: boolean | estaca$barrioArgs<ExtArgs>
    datos?: boolean | estaca$datosArgs<ExtArgs>
    _count?: boolean | EstacaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estaca"]>



  export type estacaSelectScalar = {
    id_estaca?: boolean
    estaca?: boolean
  }

  export type estacaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estaca" | "estaca", ExtArgs["result"]["estaca"]>
  export type estacaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barrio?: boolean | estaca$barrioArgs<ExtArgs>
    datos?: boolean | estaca$datosArgs<ExtArgs>
    _count?: boolean | EstacaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estacaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estaca"
    objects: {
      barrio: Prisma.$barrioPayload<ExtArgs>[]
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estaca: number
      estaca: string
    }, ExtArgs["result"]["estaca"]>
    composites: {}
  }

  type estacaGetPayload<S extends boolean | null | undefined | estacaDefaultArgs> = $Result.GetResult<Prisma.$estacaPayload, S>

  type estacaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estacaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstacaCountAggregateInputType | true
    }

  export interface estacaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estaca'], meta: { name: 'estaca' } }
    /**
     * Find zero or one Estaca that matches the filter.
     * @param {estacaFindUniqueArgs} args - Arguments to find a Estaca
     * @example
     * // Get one Estaca
     * const estaca = await prisma.estaca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estacaFindUniqueArgs>(args: SelectSubset<T, estacaFindUniqueArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estaca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estacaFindUniqueOrThrowArgs} args - Arguments to find a Estaca
     * @example
     * // Get one Estaca
     * const estaca = await prisma.estaca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estacaFindUniqueOrThrowArgs>(args: SelectSubset<T, estacaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estaca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaFindFirstArgs} args - Arguments to find a Estaca
     * @example
     * // Get one Estaca
     * const estaca = await prisma.estaca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estacaFindFirstArgs>(args?: SelectSubset<T, estacaFindFirstArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estaca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaFindFirstOrThrowArgs} args - Arguments to find a Estaca
     * @example
     * // Get one Estaca
     * const estaca = await prisma.estaca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estacaFindFirstOrThrowArgs>(args?: SelectSubset<T, estacaFindFirstOrThrowArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estacas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estacas
     * const estacas = await prisma.estaca.findMany()
     * 
     * // Get first 10 Estacas
     * const estacas = await prisma.estaca.findMany({ take: 10 })
     * 
     * // Only select the `id_estaca`
     * const estacaWithId_estacaOnly = await prisma.estaca.findMany({ select: { id_estaca: true } })
     * 
     */
    findMany<T extends estacaFindManyArgs>(args?: SelectSubset<T, estacaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estaca.
     * @param {estacaCreateArgs} args - Arguments to create a Estaca.
     * @example
     * // Create one Estaca
     * const Estaca = await prisma.estaca.create({
     *   data: {
     *     // ... data to create a Estaca
     *   }
     * })
     * 
     */
    create<T extends estacaCreateArgs>(args: SelectSubset<T, estacaCreateArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estacas.
     * @param {estacaCreateManyArgs} args - Arguments to create many Estacas.
     * @example
     * // Create many Estacas
     * const estaca = await prisma.estaca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estacaCreateManyArgs>(args?: SelectSubset<T, estacaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estaca.
     * @param {estacaDeleteArgs} args - Arguments to delete one Estaca.
     * @example
     * // Delete one Estaca
     * const Estaca = await prisma.estaca.delete({
     *   where: {
     *     // ... filter to delete one Estaca
     *   }
     * })
     * 
     */
    delete<T extends estacaDeleteArgs>(args: SelectSubset<T, estacaDeleteArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estaca.
     * @param {estacaUpdateArgs} args - Arguments to update one Estaca.
     * @example
     * // Update one Estaca
     * const estaca = await prisma.estaca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estacaUpdateArgs>(args: SelectSubset<T, estacaUpdateArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estacas.
     * @param {estacaDeleteManyArgs} args - Arguments to filter Estacas to delete.
     * @example
     * // Delete a few Estacas
     * const { count } = await prisma.estaca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estacaDeleteManyArgs>(args?: SelectSubset<T, estacaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estacas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estacas
     * const estaca = await prisma.estaca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estacaUpdateManyArgs>(args: SelectSubset<T, estacaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estaca.
     * @param {estacaUpsertArgs} args - Arguments to update or create a Estaca.
     * @example
     * // Update or create a Estaca
     * const estaca = await prisma.estaca.upsert({
     *   create: {
     *     // ... data to create a Estaca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estaca we want to update
     *   }
     * })
     */
    upsert<T extends estacaUpsertArgs>(args: SelectSubset<T, estacaUpsertArgs<ExtArgs>>): Prisma__estacaClient<$Result.GetResult<Prisma.$estacaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estacas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaCountArgs} args - Arguments to filter Estacas to count.
     * @example
     * // Count the number of Estacas
     * const count = await prisma.estaca.count({
     *   where: {
     *     // ... the filter for the Estacas we want to count
     *   }
     * })
    **/
    count<T extends estacaCountArgs>(
      args?: Subset<T, estacaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstacaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estaca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstacaAggregateArgs>(args: Subset<T, EstacaAggregateArgs>): Prisma.PrismaPromise<GetEstacaAggregateType<T>>

    /**
     * Group by Estaca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estacaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estacaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estacaGroupByArgs['orderBy'] }
        : { orderBy?: estacaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estacaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstacaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estaca model
   */
  readonly fields: estacaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estaca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estacaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barrio<T extends estaca$barrioArgs<ExtArgs> = {}>(args?: Subset<T, estaca$barrioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barrioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    datos<T extends estaca$datosArgs<ExtArgs> = {}>(args?: Subset<T, estaca$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estaca model
   */
  interface estacaFieldRefs {
    readonly id_estaca: FieldRef<"estaca", 'Int'>
    readonly estaca: FieldRef<"estaca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estaca findUnique
   */
  export type estacaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter, which estaca to fetch.
     */
    where: estacaWhereUniqueInput
  }

  /**
   * estaca findUniqueOrThrow
   */
  export type estacaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter, which estaca to fetch.
     */
    where: estacaWhereUniqueInput
  }

  /**
   * estaca findFirst
   */
  export type estacaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter, which estaca to fetch.
     */
    where?: estacaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estacas to fetch.
     */
    orderBy?: estacaOrderByWithRelationInput | estacaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estacas.
     */
    cursor?: estacaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estacas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estacas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estacas.
     */
    distinct?: EstacaScalarFieldEnum | EstacaScalarFieldEnum[]
  }

  /**
   * estaca findFirstOrThrow
   */
  export type estacaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter, which estaca to fetch.
     */
    where?: estacaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estacas to fetch.
     */
    orderBy?: estacaOrderByWithRelationInput | estacaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estacas.
     */
    cursor?: estacaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estacas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estacas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estacas.
     */
    distinct?: EstacaScalarFieldEnum | EstacaScalarFieldEnum[]
  }

  /**
   * estaca findMany
   */
  export type estacaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter, which estacas to fetch.
     */
    where?: estacaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estacas to fetch.
     */
    orderBy?: estacaOrderByWithRelationInput | estacaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estacas.
     */
    cursor?: estacaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estacas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estacas.
     */
    skip?: number
    distinct?: EstacaScalarFieldEnum | EstacaScalarFieldEnum[]
  }

  /**
   * estaca create
   */
  export type estacaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * The data needed to create a estaca.
     */
    data: XOR<estacaCreateInput, estacaUncheckedCreateInput>
  }

  /**
   * estaca createMany
   */
  export type estacaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estacas.
     */
    data: estacaCreateManyInput | estacaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estaca update
   */
  export type estacaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * The data needed to update a estaca.
     */
    data: XOR<estacaUpdateInput, estacaUncheckedUpdateInput>
    /**
     * Choose, which estaca to update.
     */
    where: estacaWhereUniqueInput
  }

  /**
   * estaca updateMany
   */
  export type estacaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estacas.
     */
    data: XOR<estacaUpdateManyMutationInput, estacaUncheckedUpdateManyInput>
    /**
     * Filter which estacas to update
     */
    where?: estacaWhereInput
    /**
     * Limit how many estacas to update.
     */
    limit?: number
  }

  /**
   * estaca upsert
   */
  export type estacaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * The filter to search for the estaca to update in case it exists.
     */
    where: estacaWhereUniqueInput
    /**
     * In case the estaca found by the `where` argument doesn't exist, create a new estaca with this data.
     */
    create: XOR<estacaCreateInput, estacaUncheckedCreateInput>
    /**
     * In case the estaca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estacaUpdateInput, estacaUncheckedUpdateInput>
  }

  /**
   * estaca delete
   */
  export type estacaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
    /**
     * Filter which estaca to delete.
     */
    where: estacaWhereUniqueInput
  }

  /**
   * estaca deleteMany
   */
  export type estacaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estacas to delete
     */
    where?: estacaWhereInput
    /**
     * Limit how many estacas to delete.
     */
    limit?: number
  }

  /**
   * estaca.barrio
   */
  export type estaca$barrioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barrio
     */
    select?: barrioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barrio
     */
    omit?: barrioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barrioInclude<ExtArgs> | null
    where?: barrioWhereInput
    orderBy?: barrioOrderByWithRelationInput | barrioOrderByWithRelationInput[]
    cursor?: barrioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarrioScalarFieldEnum | BarrioScalarFieldEnum[]
  }

  /**
   * estaca.datos
   */
  export type estaca$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * estaca without action
   */
  export type estacaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estaca
     */
    select?: estacaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estaca
     */
    omit?: estacaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estacaInclude<ExtArgs> | null
  }


  /**
   * Model habitacion
   */

  export type AggregateHabitacion = {
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  export type HabitacionAvgAggregateOutputType = {
    id_habitacion: number | null
  }

  export type HabitacionSumAggregateOutputType = {
    id_habitacion: number | null
  }

  export type HabitacionMinAggregateOutputType = {
    id_habitacion: number | null
    habitacion: string | null
    capacidad: string | null
  }

  export type HabitacionMaxAggregateOutputType = {
    id_habitacion: number | null
    habitacion: string | null
    capacidad: string | null
  }

  export type HabitacionCountAggregateOutputType = {
    id_habitacion: number
    habitacion: number
    capacidad: number
    _all: number
  }


  export type HabitacionAvgAggregateInputType = {
    id_habitacion?: true
  }

  export type HabitacionSumAggregateInputType = {
    id_habitacion?: true
  }

  export type HabitacionMinAggregateInputType = {
    id_habitacion?: true
    habitacion?: true
    capacidad?: true
  }

  export type HabitacionMaxAggregateInputType = {
    id_habitacion?: true
    habitacion?: true
    capacidad?: true
  }

  export type HabitacionCountAggregateInputType = {
    id_habitacion?: true
    habitacion?: true
    capacidad?: true
    _all?: true
  }

  export type HabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habitacion to aggregate.
     */
    where?: habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacions to fetch.
     */
    orderBy?: habitacionOrderByWithRelationInput | habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned habitacions
    **/
    _count?: true | HabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitacionMaxAggregateInputType
  }

  export type GetHabitacionAggregateType<T extends HabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitacion[P]>
      : GetScalarType<T[P], AggregateHabitacion[P]>
  }




  export type habitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: habitacionWhereInput
    orderBy?: habitacionOrderByWithAggregationInput | habitacionOrderByWithAggregationInput[]
    by: HabitacionScalarFieldEnum[] | HabitacionScalarFieldEnum
    having?: habitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitacionCountAggregateInputType | true
    _avg?: HabitacionAvgAggregateInputType
    _sum?: HabitacionSumAggregateInputType
    _min?: HabitacionMinAggregateInputType
    _max?: HabitacionMaxAggregateInputType
  }

  export type HabitacionGroupByOutputType = {
    id_habitacion: number
    habitacion: string
    capacidad: string
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  type GetHabitacionGroupByPayload<T extends habitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
        }
      >
    >


  export type habitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion?: boolean
    habitacion?: boolean
    capacidad?: boolean
    datos?: boolean | habitacion$datosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>



  export type habitacionSelectScalar = {
    id_habitacion?: boolean
    habitacion?: boolean
    capacidad?: boolean
  }

  export type habitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_habitacion" | "habitacion" | "capacidad", ExtArgs["result"]["habitacion"]>
  export type habitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | habitacion$datosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $habitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "habitacion"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_habitacion: number
      habitacion: string
      capacidad: string
    }, ExtArgs["result"]["habitacion"]>
    composites: {}
  }

  type habitacionGetPayload<S extends boolean | null | undefined | habitacionDefaultArgs> = $Result.GetResult<Prisma.$habitacionPayload, S>

  type habitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<habitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitacionCountAggregateInputType | true
    }

  export interface habitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['habitacion'], meta: { name: 'habitacion' } }
    /**
     * Find zero or one Habitacion that matches the filter.
     * @param {habitacionFindUniqueArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends habitacionFindUniqueArgs>(args: SelectSubset<T, habitacionFindUniqueArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {habitacionFindUniqueOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends habitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, habitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionFindFirstArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends habitacionFindFirstArgs>(args?: SelectSubset<T, habitacionFindFirstArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionFindFirstOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends habitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, habitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitacions
     * const habitacions = await prisma.habitacion.findMany()
     * 
     * // Get first 10 Habitacions
     * const habitacions = await prisma.habitacion.findMany({ take: 10 })
     * 
     * // Only select the `id_habitacion`
     * const habitacionWithId_habitacionOnly = await prisma.habitacion.findMany({ select: { id_habitacion: true } })
     * 
     */
    findMany<T extends habitacionFindManyArgs>(args?: SelectSubset<T, habitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habitacion.
     * @param {habitacionCreateArgs} args - Arguments to create a Habitacion.
     * @example
     * // Create one Habitacion
     * const Habitacion = await prisma.habitacion.create({
     *   data: {
     *     // ... data to create a Habitacion
     *   }
     * })
     * 
     */
    create<T extends habitacionCreateArgs>(args: SelectSubset<T, habitacionCreateArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habitacions.
     * @param {habitacionCreateManyArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends habitacionCreateManyArgs>(args?: SelectSubset<T, habitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habitacion.
     * @param {habitacionDeleteArgs} args - Arguments to delete one Habitacion.
     * @example
     * // Delete one Habitacion
     * const Habitacion = await prisma.habitacion.delete({
     *   where: {
     *     // ... filter to delete one Habitacion
     *   }
     * })
     * 
     */
    delete<T extends habitacionDeleteArgs>(args: SelectSubset<T, habitacionDeleteArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habitacion.
     * @param {habitacionUpdateArgs} args - Arguments to update one Habitacion.
     * @example
     * // Update one Habitacion
     * const habitacion = await prisma.habitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends habitacionUpdateArgs>(args: SelectSubset<T, habitacionUpdateArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habitacions.
     * @param {habitacionDeleteManyArgs} args - Arguments to filter Habitacions to delete.
     * @example
     * // Delete a few Habitacions
     * const { count } = await prisma.habitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends habitacionDeleteManyArgs>(args?: SelectSubset<T, habitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends habitacionUpdateManyArgs>(args: SelectSubset<T, habitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habitacion.
     * @param {habitacionUpsertArgs} args - Arguments to update or create a Habitacion.
     * @example
     * // Update or create a Habitacion
     * const habitacion = await prisma.habitacion.upsert({
     *   create: {
     *     // ... data to create a Habitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitacion we want to update
     *   }
     * })
     */
    upsert<T extends habitacionUpsertArgs>(args: SelectSubset<T, habitacionUpsertArgs<ExtArgs>>): Prisma__habitacionClient<$Result.GetResult<Prisma.$habitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionCountArgs} args - Arguments to filter Habitacions to count.
     * @example
     * // Count the number of Habitacions
     * const count = await prisma.habitacion.count({
     *   where: {
     *     // ... the filter for the Habitacions we want to count
     *   }
     * })
    **/
    count<T extends habitacionCountArgs>(
      args?: Subset<T, habitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitacionAggregateArgs>(args: Subset<T, HabitacionAggregateArgs>): Prisma.PrismaPromise<GetHabitacionAggregateType<T>>

    /**
     * Group by Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends habitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: habitacionGroupByArgs['orderBy'] }
        : { orderBy?: habitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, habitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the habitacion model
   */
  readonly fields: habitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for habitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__habitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends habitacion$datosArgs<ExtArgs> = {}>(args?: Subset<T, habitacion$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the habitacion model
   */
  interface habitacionFieldRefs {
    readonly id_habitacion: FieldRef<"habitacion", 'Int'>
    readonly habitacion: FieldRef<"habitacion", 'String'>
    readonly capacidad: FieldRef<"habitacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * habitacion findUnique
   */
  export type habitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter, which habitacion to fetch.
     */
    where: habitacionWhereUniqueInput
  }

  /**
   * habitacion findUniqueOrThrow
   */
  export type habitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter, which habitacion to fetch.
     */
    where: habitacionWhereUniqueInput
  }

  /**
   * habitacion findFirst
   */
  export type habitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter, which habitacion to fetch.
     */
    where?: habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacions to fetch.
     */
    orderBy?: habitacionOrderByWithRelationInput | habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habitacions.
     */
    cursor?: habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * habitacion findFirstOrThrow
   */
  export type habitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter, which habitacion to fetch.
     */
    where?: habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacions to fetch.
     */
    orderBy?: habitacionOrderByWithRelationInput | habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habitacions.
     */
    cursor?: habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * habitacion findMany
   */
  export type habitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter, which habitacions to fetch.
     */
    where?: habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacions to fetch.
     */
    orderBy?: habitacionOrderByWithRelationInput | habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing habitacions.
     */
    cursor?: habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacions.
     */
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * habitacion create
   */
  export type habitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a habitacion.
     */
    data: XOR<habitacionCreateInput, habitacionUncheckedCreateInput>
  }

  /**
   * habitacion createMany
   */
  export type habitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many habitacions.
     */
    data: habitacionCreateManyInput | habitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * habitacion update
   */
  export type habitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a habitacion.
     */
    data: XOR<habitacionUpdateInput, habitacionUncheckedUpdateInput>
    /**
     * Choose, which habitacion to update.
     */
    where: habitacionWhereUniqueInput
  }

  /**
   * habitacion updateMany
   */
  export type habitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update habitacions.
     */
    data: XOR<habitacionUpdateManyMutationInput, habitacionUncheckedUpdateManyInput>
    /**
     * Filter which habitacions to update
     */
    where?: habitacionWhereInput
    /**
     * Limit how many habitacions to update.
     */
    limit?: number
  }

  /**
   * habitacion upsert
   */
  export type habitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the habitacion to update in case it exists.
     */
    where: habitacionWhereUniqueInput
    /**
     * In case the habitacion found by the `where` argument doesn't exist, create a new habitacion with this data.
     */
    create: XOR<habitacionCreateInput, habitacionUncheckedCreateInput>
    /**
     * In case the habitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<habitacionUpdateInput, habitacionUncheckedUpdateInput>
  }

  /**
   * habitacion delete
   */
  export type habitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
    /**
     * Filter which habitacion to delete.
     */
    where: habitacionWhereUniqueInput
  }

  /**
   * habitacion deleteMany
   */
  export type habitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habitacions to delete
     */
    where?: habitacionWhereInput
    /**
     * Limit how many habitacions to delete.
     */
    limit?: number
  }

  /**
   * habitacion.datos
   */
  export type habitacion$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * habitacion without action
   */
  export type habitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion
     */
    select?: habitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the habitacion
     */
    omit?: habitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacionInclude<ExtArgs> | null
  }


  /**
   * Model participacion
   */

  export type AggregateParticipacion = {
    _count: ParticipacionCountAggregateOutputType | null
    _avg: ParticipacionAvgAggregateOutputType | null
    _sum: ParticipacionSumAggregateOutputType | null
    _min: ParticipacionMinAggregateOutputType | null
    _max: ParticipacionMaxAggregateOutputType | null
  }

  export type ParticipacionAvgAggregateOutputType = {
    id_participacion: number | null
  }

  export type ParticipacionSumAggregateOutputType = {
    id_participacion: number | null
  }

  export type ParticipacionMinAggregateOutputType = {
    id_participacion: number | null
    participacion: string | null
  }

  export type ParticipacionMaxAggregateOutputType = {
    id_participacion: number | null
    participacion: string | null
  }

  export type ParticipacionCountAggregateOutputType = {
    id_participacion: number
    participacion: number
    _all: number
  }


  export type ParticipacionAvgAggregateInputType = {
    id_participacion?: true
  }

  export type ParticipacionSumAggregateInputType = {
    id_participacion?: true
  }

  export type ParticipacionMinAggregateInputType = {
    id_participacion?: true
    participacion?: true
  }

  export type ParticipacionMaxAggregateInputType = {
    id_participacion?: true
    participacion?: true
  }

  export type ParticipacionCountAggregateInputType = {
    id_participacion?: true
    participacion?: true
    _all?: true
  }

  export type ParticipacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participacion to aggregate.
     */
    where?: participacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participacions to fetch.
     */
    orderBy?: participacionOrderByWithRelationInput | participacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participacions
    **/
    _count?: true | ParticipacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacionMaxAggregateInputType
  }

  export type GetParticipacionAggregateType<T extends ParticipacionAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacion[P]>
      : GetScalarType<T[P], AggregateParticipacion[P]>
  }




  export type participacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participacionWhereInput
    orderBy?: participacionOrderByWithAggregationInput | participacionOrderByWithAggregationInput[]
    by: ParticipacionScalarFieldEnum[] | ParticipacionScalarFieldEnum
    having?: participacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacionCountAggregateInputType | true
    _avg?: ParticipacionAvgAggregateInputType
    _sum?: ParticipacionSumAggregateInputType
    _min?: ParticipacionMinAggregateInputType
    _max?: ParticipacionMaxAggregateInputType
  }

  export type ParticipacionGroupByOutputType = {
    id_participacion: number
    participacion: string
    _count: ParticipacionCountAggregateOutputType | null
    _avg: ParticipacionAvgAggregateOutputType | null
    _sum: ParticipacionSumAggregateOutputType | null
    _min: ParticipacionMinAggregateOutputType | null
    _max: ParticipacionMaxAggregateOutputType | null
  }

  type GetParticipacionGroupByPayload<T extends participacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacionGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacionGroupByOutputType[P]>
        }
      >
    >


  export type participacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_participacion?: boolean
    participacion?: boolean
    asistencia?: boolean | participacion$asistenciaArgs<ExtArgs>
    _count?: boolean | ParticipacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacion"]>



  export type participacionSelectScalar = {
    id_participacion?: boolean
    participacion?: boolean
  }

  export type participacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_participacion" | "participacion", ExtArgs["result"]["participacion"]>
  export type participacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencia?: boolean | participacion$asistenciaArgs<ExtArgs>
    _count?: boolean | ParticipacionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $participacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participacion"
    objects: {
      asistencia: Prisma.$asistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_participacion: number
      participacion: string
    }, ExtArgs["result"]["participacion"]>
    composites: {}
  }

  type participacionGetPayload<S extends boolean | null | undefined | participacionDefaultArgs> = $Result.GetResult<Prisma.$participacionPayload, S>

  type participacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacionCountAggregateInputType | true
    }

  export interface participacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participacion'], meta: { name: 'participacion' } }
    /**
     * Find zero or one Participacion that matches the filter.
     * @param {participacionFindUniqueArgs} args - Arguments to find a Participacion
     * @example
     * // Get one Participacion
     * const participacion = await prisma.participacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participacionFindUniqueArgs>(args: SelectSubset<T, participacionFindUniqueArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participacionFindUniqueOrThrowArgs} args - Arguments to find a Participacion
     * @example
     * // Get one Participacion
     * const participacion = await prisma.participacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participacionFindUniqueOrThrowArgs>(args: SelectSubset<T, participacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionFindFirstArgs} args - Arguments to find a Participacion
     * @example
     * // Get one Participacion
     * const participacion = await prisma.participacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participacionFindFirstArgs>(args?: SelectSubset<T, participacionFindFirstArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionFindFirstOrThrowArgs} args - Arguments to find a Participacion
     * @example
     * // Get one Participacion
     * const participacion = await prisma.participacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participacionFindFirstOrThrowArgs>(args?: SelectSubset<T, participacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participacions
     * const participacions = await prisma.participacion.findMany()
     * 
     * // Get first 10 Participacions
     * const participacions = await prisma.participacion.findMany({ take: 10 })
     * 
     * // Only select the `id_participacion`
     * const participacionWithId_participacionOnly = await prisma.participacion.findMany({ select: { id_participacion: true } })
     * 
     */
    findMany<T extends participacionFindManyArgs>(args?: SelectSubset<T, participacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participacion.
     * @param {participacionCreateArgs} args - Arguments to create a Participacion.
     * @example
     * // Create one Participacion
     * const Participacion = await prisma.participacion.create({
     *   data: {
     *     // ... data to create a Participacion
     *   }
     * })
     * 
     */
    create<T extends participacionCreateArgs>(args: SelectSubset<T, participacionCreateArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participacions.
     * @param {participacionCreateManyArgs} args - Arguments to create many Participacions.
     * @example
     * // Create many Participacions
     * const participacion = await prisma.participacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participacionCreateManyArgs>(args?: SelectSubset<T, participacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participacion.
     * @param {participacionDeleteArgs} args - Arguments to delete one Participacion.
     * @example
     * // Delete one Participacion
     * const Participacion = await prisma.participacion.delete({
     *   where: {
     *     // ... filter to delete one Participacion
     *   }
     * })
     * 
     */
    delete<T extends participacionDeleteArgs>(args: SelectSubset<T, participacionDeleteArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participacion.
     * @param {participacionUpdateArgs} args - Arguments to update one Participacion.
     * @example
     * // Update one Participacion
     * const participacion = await prisma.participacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participacionUpdateArgs>(args: SelectSubset<T, participacionUpdateArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participacions.
     * @param {participacionDeleteManyArgs} args - Arguments to filter Participacions to delete.
     * @example
     * // Delete a few Participacions
     * const { count } = await prisma.participacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participacionDeleteManyArgs>(args?: SelectSubset<T, participacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participacions
     * const participacion = await prisma.participacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participacionUpdateManyArgs>(args: SelectSubset<T, participacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participacion.
     * @param {participacionUpsertArgs} args - Arguments to update or create a Participacion.
     * @example
     * // Update or create a Participacion
     * const participacion = await prisma.participacion.upsert({
     *   create: {
     *     // ... data to create a Participacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participacion we want to update
     *   }
     * })
     */
    upsert<T extends participacionUpsertArgs>(args: SelectSubset<T, participacionUpsertArgs<ExtArgs>>): Prisma__participacionClient<$Result.GetResult<Prisma.$participacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionCountArgs} args - Arguments to filter Participacions to count.
     * @example
     * // Count the number of Participacions
     * const count = await prisma.participacion.count({
     *   where: {
     *     // ... the filter for the Participacions we want to count
     *   }
     * })
    **/
    count<T extends participacionCountArgs>(
      args?: Subset<T, participacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipacionAggregateArgs>(args: Subset<T, ParticipacionAggregateArgs>): Prisma.PrismaPromise<GetParticipacionAggregateType<T>>

    /**
     * Group by Participacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends participacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participacionGroupByArgs['orderBy'] }
        : { orderBy?: participacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, participacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participacion model
   */
  readonly fields: participacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencia<T extends participacion$asistenciaArgs<ExtArgs> = {}>(args?: Subset<T, participacion$asistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the participacion model
   */
  interface participacionFieldRefs {
    readonly id_participacion: FieldRef<"participacion", 'Int'>
    readonly participacion: FieldRef<"participacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * participacion findUnique
   */
  export type participacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter, which participacion to fetch.
     */
    where: participacionWhereUniqueInput
  }

  /**
   * participacion findUniqueOrThrow
   */
  export type participacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter, which participacion to fetch.
     */
    where: participacionWhereUniqueInput
  }

  /**
   * participacion findFirst
   */
  export type participacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter, which participacion to fetch.
     */
    where?: participacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participacions to fetch.
     */
    orderBy?: participacionOrderByWithRelationInput | participacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participacions.
     */
    cursor?: participacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participacions.
     */
    distinct?: ParticipacionScalarFieldEnum | ParticipacionScalarFieldEnum[]
  }

  /**
   * participacion findFirstOrThrow
   */
  export type participacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter, which participacion to fetch.
     */
    where?: participacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participacions to fetch.
     */
    orderBy?: participacionOrderByWithRelationInput | participacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participacions.
     */
    cursor?: participacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participacions.
     */
    distinct?: ParticipacionScalarFieldEnum | ParticipacionScalarFieldEnum[]
  }

  /**
   * participacion findMany
   */
  export type participacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter, which participacions to fetch.
     */
    where?: participacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participacions to fetch.
     */
    orderBy?: participacionOrderByWithRelationInput | participacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participacions.
     */
    cursor?: participacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participacions.
     */
    skip?: number
    distinct?: ParticipacionScalarFieldEnum | ParticipacionScalarFieldEnum[]
  }

  /**
   * participacion create
   */
  export type participacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * The data needed to create a participacion.
     */
    data: XOR<participacionCreateInput, participacionUncheckedCreateInput>
  }

  /**
   * participacion createMany
   */
  export type participacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participacions.
     */
    data: participacionCreateManyInput | participacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participacion update
   */
  export type participacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * The data needed to update a participacion.
     */
    data: XOR<participacionUpdateInput, participacionUncheckedUpdateInput>
    /**
     * Choose, which participacion to update.
     */
    where: participacionWhereUniqueInput
  }

  /**
   * participacion updateMany
   */
  export type participacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participacions.
     */
    data: XOR<participacionUpdateManyMutationInput, participacionUncheckedUpdateManyInput>
    /**
     * Filter which participacions to update
     */
    where?: participacionWhereInput
    /**
     * Limit how many participacions to update.
     */
    limit?: number
  }

  /**
   * participacion upsert
   */
  export type participacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * The filter to search for the participacion to update in case it exists.
     */
    where: participacionWhereUniqueInput
    /**
     * In case the participacion found by the `where` argument doesn't exist, create a new participacion with this data.
     */
    create: XOR<participacionCreateInput, participacionUncheckedCreateInput>
    /**
     * In case the participacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participacionUpdateInput, participacionUncheckedUpdateInput>
  }

  /**
   * participacion delete
   */
  export type participacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
    /**
     * Filter which participacion to delete.
     */
    where: participacionWhereUniqueInput
  }

  /**
   * participacion deleteMany
   */
  export type participacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participacions to delete
     */
    where?: participacionWhereInput
    /**
     * Limit how many participacions to delete.
     */
    limit?: number
  }

  /**
   * participacion.asistencia
   */
  export type participacion$asistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * participacion without action
   */
  export type participacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participacion
     */
    select?: participacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participacion
     */
    omit?: participacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participacionInclude<ExtArgs> | null
  }


  /**
   * Model salud
   */

  export type AggregateSalud = {
    _count: SaludCountAggregateOutputType | null
    _avg: SaludAvgAggregateOutputType | null
    _sum: SaludSumAggregateOutputType | null
    _min: SaludMinAggregateOutputType | null
    _max: SaludMaxAggregateOutputType | null
  }

  export type SaludAvgAggregateOutputType = {
    id_salud: number | null
    datos_id: number | null
    seguimiento: number | null
  }

  export type SaludSumAggregateOutputType = {
    id_salud: number | null
    datos_id: number | null
    seguimiento: number | null
  }

  export type SaludMinAggregateOutputType = {
    id_salud: number | null
    datos_id: number | null
    fecha_consulta: Date | null
    motivo_consulta: string | null
    tratamiento: string | null
    seguimiento: number | null
    fecha_seguimiento: Date | null
  }

  export type SaludMaxAggregateOutputType = {
    id_salud: number | null
    datos_id: number | null
    fecha_consulta: Date | null
    motivo_consulta: string | null
    tratamiento: string | null
    seguimiento: number | null
    fecha_seguimiento: Date | null
  }

  export type SaludCountAggregateOutputType = {
    id_salud: number
    datos_id: number
    fecha_consulta: number
    motivo_consulta: number
    tratamiento: number
    seguimiento: number
    fecha_seguimiento: number
    _all: number
  }


  export type SaludAvgAggregateInputType = {
    id_salud?: true
    datos_id?: true
    seguimiento?: true
  }

  export type SaludSumAggregateInputType = {
    id_salud?: true
    datos_id?: true
    seguimiento?: true
  }

  export type SaludMinAggregateInputType = {
    id_salud?: true
    datos_id?: true
    fecha_consulta?: true
    motivo_consulta?: true
    tratamiento?: true
    seguimiento?: true
    fecha_seguimiento?: true
  }

  export type SaludMaxAggregateInputType = {
    id_salud?: true
    datos_id?: true
    fecha_consulta?: true
    motivo_consulta?: true
    tratamiento?: true
    seguimiento?: true
    fecha_seguimiento?: true
  }

  export type SaludCountAggregateInputType = {
    id_salud?: true
    datos_id?: true
    fecha_consulta?: true
    motivo_consulta?: true
    tratamiento?: true
    seguimiento?: true
    fecha_seguimiento?: true
    _all?: true
  }

  export type SaludAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salud to aggregate.
     */
    where?: saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saluds to fetch.
     */
    orderBy?: saludOrderByWithRelationInput | saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saluds
    **/
    _count?: true | SaludCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaludAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaludSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaludMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaludMaxAggregateInputType
  }

  export type GetSaludAggregateType<T extends SaludAggregateArgs> = {
        [P in keyof T & keyof AggregateSalud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalud[P]>
      : GetScalarType<T[P], AggregateSalud[P]>
  }




  export type saludGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saludWhereInput
    orderBy?: saludOrderByWithAggregationInput | saludOrderByWithAggregationInput[]
    by: SaludScalarFieldEnum[] | SaludScalarFieldEnum
    having?: saludScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaludCountAggregateInputType | true
    _avg?: SaludAvgAggregateInputType
    _sum?: SaludSumAggregateInputType
    _min?: SaludMinAggregateInputType
    _max?: SaludMaxAggregateInputType
  }

  export type SaludGroupByOutputType = {
    id_salud: number
    datos_id: number
    fecha_consulta: Date | null
    motivo_consulta: string | null
    tratamiento: string | null
    seguimiento: number
    fecha_seguimiento: Date | null
    _count: SaludCountAggregateOutputType | null
    _avg: SaludAvgAggregateOutputType | null
    _sum: SaludSumAggregateOutputType | null
    _min: SaludMinAggregateOutputType | null
    _max: SaludMaxAggregateOutputType | null
  }

  type GetSaludGroupByPayload<T extends saludGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaludGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaludGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaludGroupByOutputType[P]>
            : GetScalarType<T[P], SaludGroupByOutputType[P]>
        }
      >
    >


  export type saludSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_salud?: boolean
    datos_id?: boolean
    fecha_consulta?: boolean
    motivo_consulta?: boolean
    tratamiento?: boolean
    seguimiento?: boolean
    fecha_seguimiento?: boolean
    medicinas_recetadas?: boolean | salud$medicinas_recetadasArgs<ExtArgs>
    datos?: boolean | datosDefaultArgs<ExtArgs>
    _count?: boolean | SaludCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salud"]>



  export type saludSelectScalar = {
    id_salud?: boolean
    datos_id?: boolean
    fecha_consulta?: boolean
    motivo_consulta?: boolean
    tratamiento?: boolean
    seguimiento?: boolean
    fecha_seguimiento?: boolean
  }

  export type saludOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_salud" | "datos_id" | "fecha_consulta" | "motivo_consulta" | "tratamiento" | "seguimiento" | "fecha_seguimiento", ExtArgs["result"]["salud"]>
  export type saludInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicinas_recetadas?: boolean | salud$medicinas_recetadasArgs<ExtArgs>
    datos?: boolean | datosDefaultArgs<ExtArgs>
    _count?: boolean | SaludCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $saludPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "salud"
    objects: {
      medicinas_recetadas: Prisma.$medicinas_recetadasPayload<ExtArgs>[]
      datos: Prisma.$datosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_salud: number
      datos_id: number
      fecha_consulta: Date | null
      motivo_consulta: string | null
      tratamiento: string | null
      seguimiento: number
      fecha_seguimiento: Date | null
    }, ExtArgs["result"]["salud"]>
    composites: {}
  }

  type saludGetPayload<S extends boolean | null | undefined | saludDefaultArgs> = $Result.GetResult<Prisma.$saludPayload, S>

  type saludCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saludFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaludCountAggregateInputType | true
    }

  export interface saludDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['salud'], meta: { name: 'salud' } }
    /**
     * Find zero or one Salud that matches the filter.
     * @param {saludFindUniqueArgs} args - Arguments to find a Salud
     * @example
     * // Get one Salud
     * const salud = await prisma.salud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saludFindUniqueArgs>(args: SelectSubset<T, saludFindUniqueArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saludFindUniqueOrThrowArgs} args - Arguments to find a Salud
     * @example
     * // Get one Salud
     * const salud = await prisma.salud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saludFindUniqueOrThrowArgs>(args: SelectSubset<T, saludFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludFindFirstArgs} args - Arguments to find a Salud
     * @example
     * // Get one Salud
     * const salud = await prisma.salud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saludFindFirstArgs>(args?: SelectSubset<T, saludFindFirstArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludFindFirstOrThrowArgs} args - Arguments to find a Salud
     * @example
     * // Get one Salud
     * const salud = await prisma.salud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saludFindFirstOrThrowArgs>(args?: SelectSubset<T, saludFindFirstOrThrowArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saluds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saluds
     * const saluds = await prisma.salud.findMany()
     * 
     * // Get first 10 Saluds
     * const saluds = await prisma.salud.findMany({ take: 10 })
     * 
     * // Only select the `id_salud`
     * const saludWithId_saludOnly = await prisma.salud.findMany({ select: { id_salud: true } })
     * 
     */
    findMany<T extends saludFindManyArgs>(args?: SelectSubset<T, saludFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salud.
     * @param {saludCreateArgs} args - Arguments to create a Salud.
     * @example
     * // Create one Salud
     * const Salud = await prisma.salud.create({
     *   data: {
     *     // ... data to create a Salud
     *   }
     * })
     * 
     */
    create<T extends saludCreateArgs>(args: SelectSubset<T, saludCreateArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saluds.
     * @param {saludCreateManyArgs} args - Arguments to create many Saluds.
     * @example
     * // Create many Saluds
     * const salud = await prisma.salud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saludCreateManyArgs>(args?: SelectSubset<T, saludCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Salud.
     * @param {saludDeleteArgs} args - Arguments to delete one Salud.
     * @example
     * // Delete one Salud
     * const Salud = await prisma.salud.delete({
     *   where: {
     *     // ... filter to delete one Salud
     *   }
     * })
     * 
     */
    delete<T extends saludDeleteArgs>(args: SelectSubset<T, saludDeleteArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salud.
     * @param {saludUpdateArgs} args - Arguments to update one Salud.
     * @example
     * // Update one Salud
     * const salud = await prisma.salud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saludUpdateArgs>(args: SelectSubset<T, saludUpdateArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saluds.
     * @param {saludDeleteManyArgs} args - Arguments to filter Saluds to delete.
     * @example
     * // Delete a few Saluds
     * const { count } = await prisma.salud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saludDeleteManyArgs>(args?: SelectSubset<T, saludDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saluds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saluds
     * const salud = await prisma.salud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saludUpdateManyArgs>(args: SelectSubset<T, saludUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Salud.
     * @param {saludUpsertArgs} args - Arguments to update or create a Salud.
     * @example
     * // Update or create a Salud
     * const salud = await prisma.salud.upsert({
     *   create: {
     *     // ... data to create a Salud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salud we want to update
     *   }
     * })
     */
    upsert<T extends saludUpsertArgs>(args: SelectSubset<T, saludUpsertArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saluds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludCountArgs} args - Arguments to filter Saluds to count.
     * @example
     * // Count the number of Saluds
     * const count = await prisma.salud.count({
     *   where: {
     *     // ... the filter for the Saluds we want to count
     *   }
     * })
    **/
    count<T extends saludCountArgs>(
      args?: Subset<T, saludCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaludCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaludAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaludAggregateArgs>(args: Subset<T, SaludAggregateArgs>): Prisma.PrismaPromise<GetSaludAggregateType<T>>

    /**
     * Group by Salud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saludGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saludGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saludGroupByArgs['orderBy'] }
        : { orderBy?: saludGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saludGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaludGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the salud model
   */
  readonly fields: saludFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for salud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saludClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicinas_recetadas<T extends salud$medicinas_recetadasArgs<ExtArgs> = {}>(args?: Subset<T, salud$medicinas_recetadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    datos<T extends datosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, datosDefaultArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the salud model
   */
  interface saludFieldRefs {
    readonly id_salud: FieldRef<"salud", 'Int'>
    readonly datos_id: FieldRef<"salud", 'Int'>
    readonly fecha_consulta: FieldRef<"salud", 'DateTime'>
    readonly motivo_consulta: FieldRef<"salud", 'String'>
    readonly tratamiento: FieldRef<"salud", 'String'>
    readonly seguimiento: FieldRef<"salud", 'Int'>
    readonly fecha_seguimiento: FieldRef<"salud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * salud findUnique
   */
  export type saludFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter, which salud to fetch.
     */
    where: saludWhereUniqueInput
  }

  /**
   * salud findUniqueOrThrow
   */
  export type saludFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter, which salud to fetch.
     */
    where: saludWhereUniqueInput
  }

  /**
   * salud findFirst
   */
  export type saludFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter, which salud to fetch.
     */
    where?: saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saluds to fetch.
     */
    orderBy?: saludOrderByWithRelationInput | saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saluds.
     */
    cursor?: saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saluds.
     */
    distinct?: SaludScalarFieldEnum | SaludScalarFieldEnum[]
  }

  /**
   * salud findFirstOrThrow
   */
  export type saludFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter, which salud to fetch.
     */
    where?: saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saluds to fetch.
     */
    orderBy?: saludOrderByWithRelationInput | saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saluds.
     */
    cursor?: saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saluds.
     */
    distinct?: SaludScalarFieldEnum | SaludScalarFieldEnum[]
  }

  /**
   * salud findMany
   */
  export type saludFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter, which saluds to fetch.
     */
    where?: saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saluds to fetch.
     */
    orderBy?: saludOrderByWithRelationInput | saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saluds.
     */
    cursor?: saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saluds.
     */
    skip?: number
    distinct?: SaludScalarFieldEnum | SaludScalarFieldEnum[]
  }

  /**
   * salud create
   */
  export type saludCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * The data needed to create a salud.
     */
    data: XOR<saludCreateInput, saludUncheckedCreateInput>
  }

  /**
   * salud createMany
   */
  export type saludCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saluds.
     */
    data: saludCreateManyInput | saludCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * salud update
   */
  export type saludUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * The data needed to update a salud.
     */
    data: XOR<saludUpdateInput, saludUncheckedUpdateInput>
    /**
     * Choose, which salud to update.
     */
    where: saludWhereUniqueInput
  }

  /**
   * salud updateMany
   */
  export type saludUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saluds.
     */
    data: XOR<saludUpdateManyMutationInput, saludUncheckedUpdateManyInput>
    /**
     * Filter which saluds to update
     */
    where?: saludWhereInput
    /**
     * Limit how many saluds to update.
     */
    limit?: number
  }

  /**
   * salud upsert
   */
  export type saludUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * The filter to search for the salud to update in case it exists.
     */
    where: saludWhereUniqueInput
    /**
     * In case the salud found by the `where` argument doesn't exist, create a new salud with this data.
     */
    create: XOR<saludCreateInput, saludUncheckedCreateInput>
    /**
     * In case the salud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saludUpdateInput, saludUncheckedUpdateInput>
  }

  /**
   * salud delete
   */
  export type saludDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
    /**
     * Filter which salud to delete.
     */
    where: saludWhereUniqueInput
  }

  /**
   * salud deleteMany
   */
  export type saludDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saluds to delete
     */
    where?: saludWhereInput
    /**
     * Limit how many saluds to delete.
     */
    limit?: number
  }

  /**
   * salud.medicinas_recetadas
   */
  export type salud$medicinas_recetadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    where?: medicinas_recetadasWhereInput
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    cursor?: medicinas_recetadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medicinas_recetadasScalarFieldEnum | Medicinas_recetadasScalarFieldEnum[]
  }

  /**
   * salud without action
   */
  export type saludDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salud
     */
    select?: saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salud
     */
    omit?: saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saludInclude<ExtArgs> | null
  }


  /**
   * Model inventario_salud
   */

  export type AggregateInventario_salud = {
    _count: Inventario_saludCountAggregateOutputType | null
    _avg: Inventario_saludAvgAggregateOutputType | null
    _sum: Inventario_saludSumAggregateOutputType | null
    _min: Inventario_saludMinAggregateOutputType | null
    _max: Inventario_saludMaxAggregateOutputType | null
  }

  export type Inventario_saludAvgAggregateOutputType = {
    id_inventario_salud: number | null
    stock: number | null
  }

  export type Inventario_saludSumAggregateOutputType = {
    id_inventario_salud: number | null
    stock: number | null
  }

  export type Inventario_saludMinAggregateOutputType = {
    id_inventario_salud: number | null
    nombre: string | null
    descripcion: string | null
    stock: number | null
    dosis: string | null
  }

  export type Inventario_saludMaxAggregateOutputType = {
    id_inventario_salud: number | null
    nombre: string | null
    descripcion: string | null
    stock: number | null
    dosis: string | null
  }

  export type Inventario_saludCountAggregateOutputType = {
    id_inventario_salud: number
    nombre: number
    descripcion: number
    stock: number
    dosis: number
    _all: number
  }


  export type Inventario_saludAvgAggregateInputType = {
    id_inventario_salud?: true
    stock?: true
  }

  export type Inventario_saludSumAggregateInputType = {
    id_inventario_salud?: true
    stock?: true
  }

  export type Inventario_saludMinAggregateInputType = {
    id_inventario_salud?: true
    nombre?: true
    descripcion?: true
    stock?: true
    dosis?: true
  }

  export type Inventario_saludMaxAggregateInputType = {
    id_inventario_salud?: true
    nombre?: true
    descripcion?: true
    stock?: true
    dosis?: true
  }

  export type Inventario_saludCountAggregateInputType = {
    id_inventario_salud?: true
    nombre?: true
    descripcion?: true
    stock?: true
    dosis?: true
    _all?: true
  }

  export type Inventario_saludAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_salud to aggregate.
     */
    where?: inventario_saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_saluds to fetch.
     */
    orderBy?: inventario_saludOrderByWithRelationInput | inventario_saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventario_saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventario_saluds
    **/
    _count?: true | Inventario_saludCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventario_saludAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventario_saludSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventario_saludMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventario_saludMaxAggregateInputType
  }

  export type GetInventario_saludAggregateType<T extends Inventario_saludAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario_salud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario_salud[P]>
      : GetScalarType<T[P], AggregateInventario_salud[P]>
  }




  export type inventario_saludGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_saludWhereInput
    orderBy?: inventario_saludOrderByWithAggregationInput | inventario_saludOrderByWithAggregationInput[]
    by: Inventario_saludScalarFieldEnum[] | Inventario_saludScalarFieldEnum
    having?: inventario_saludScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventario_saludCountAggregateInputType | true
    _avg?: Inventario_saludAvgAggregateInputType
    _sum?: Inventario_saludSumAggregateInputType
    _min?: Inventario_saludMinAggregateInputType
    _max?: Inventario_saludMaxAggregateInputType
  }

  export type Inventario_saludGroupByOutputType = {
    id_inventario_salud: number
    nombre: string
    descripcion: string | null
    stock: number
    dosis: string | null
    _count: Inventario_saludCountAggregateOutputType | null
    _avg: Inventario_saludAvgAggregateOutputType | null
    _sum: Inventario_saludSumAggregateOutputType | null
    _min: Inventario_saludMinAggregateOutputType | null
    _max: Inventario_saludMaxAggregateOutputType | null
  }

  type GetInventario_saludGroupByPayload<T extends inventario_saludGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventario_saludGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventario_saludGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventario_saludGroupByOutputType[P]>
            : GetScalarType<T[P], Inventario_saludGroupByOutputType[P]>
        }
      >
    >


  export type inventario_saludSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inventario_salud?: boolean
    nombre?: boolean
    descripcion?: boolean
    stock?: boolean
    dosis?: boolean
    medicinas_recetadas?: boolean | inventario_salud$medicinas_recetadasArgs<ExtArgs>
    _count?: boolean | Inventario_saludCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_salud"]>



  export type inventario_saludSelectScalar = {
    id_inventario_salud?: boolean
    nombre?: boolean
    descripcion?: boolean
    stock?: boolean
    dosis?: boolean
  }

  export type inventario_saludOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_inventario_salud" | "nombre" | "descripcion" | "stock" | "dosis", ExtArgs["result"]["inventario_salud"]>
  export type inventario_saludInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicinas_recetadas?: boolean | inventario_salud$medicinas_recetadasArgs<ExtArgs>
    _count?: boolean | Inventario_saludCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $inventario_saludPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventario_salud"
    objects: {
      medicinas_recetadas: Prisma.$medicinas_recetadasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_inventario_salud: number
      nombre: string
      descripcion: string | null
      stock: number
      dosis: string | null
    }, ExtArgs["result"]["inventario_salud"]>
    composites: {}
  }

  type inventario_saludGetPayload<S extends boolean | null | undefined | inventario_saludDefaultArgs> = $Result.GetResult<Prisma.$inventario_saludPayload, S>

  type inventario_saludCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventario_saludFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventario_saludCountAggregateInputType | true
    }

  export interface inventario_saludDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventario_salud'], meta: { name: 'inventario_salud' } }
    /**
     * Find zero or one Inventario_salud that matches the filter.
     * @param {inventario_saludFindUniqueArgs} args - Arguments to find a Inventario_salud
     * @example
     * // Get one Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventario_saludFindUniqueArgs>(args: SelectSubset<T, inventario_saludFindUniqueArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario_salud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventario_saludFindUniqueOrThrowArgs} args - Arguments to find a Inventario_salud
     * @example
     * // Get one Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventario_saludFindUniqueOrThrowArgs>(args: SelectSubset<T, inventario_saludFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario_salud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludFindFirstArgs} args - Arguments to find a Inventario_salud
     * @example
     * // Get one Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventario_saludFindFirstArgs>(args?: SelectSubset<T, inventario_saludFindFirstArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario_salud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludFindFirstOrThrowArgs} args - Arguments to find a Inventario_salud
     * @example
     * // Get one Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventario_saludFindFirstOrThrowArgs>(args?: SelectSubset<T, inventario_saludFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventario_saluds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventario_saluds
     * const inventario_saluds = await prisma.inventario_salud.findMany()
     * 
     * // Get first 10 Inventario_saluds
     * const inventario_saluds = await prisma.inventario_salud.findMany({ take: 10 })
     * 
     * // Only select the `id_inventario_salud`
     * const inventario_saludWithId_inventario_saludOnly = await prisma.inventario_salud.findMany({ select: { id_inventario_salud: true } })
     * 
     */
    findMany<T extends inventario_saludFindManyArgs>(args?: SelectSubset<T, inventario_saludFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario_salud.
     * @param {inventario_saludCreateArgs} args - Arguments to create a Inventario_salud.
     * @example
     * // Create one Inventario_salud
     * const Inventario_salud = await prisma.inventario_salud.create({
     *   data: {
     *     // ... data to create a Inventario_salud
     *   }
     * })
     * 
     */
    create<T extends inventario_saludCreateArgs>(args: SelectSubset<T, inventario_saludCreateArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventario_saluds.
     * @param {inventario_saludCreateManyArgs} args - Arguments to create many Inventario_saluds.
     * @example
     * // Create many Inventario_saluds
     * const inventario_salud = await prisma.inventario_salud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventario_saludCreateManyArgs>(args?: SelectSubset<T, inventario_saludCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventario_salud.
     * @param {inventario_saludDeleteArgs} args - Arguments to delete one Inventario_salud.
     * @example
     * // Delete one Inventario_salud
     * const Inventario_salud = await prisma.inventario_salud.delete({
     *   where: {
     *     // ... filter to delete one Inventario_salud
     *   }
     * })
     * 
     */
    delete<T extends inventario_saludDeleteArgs>(args: SelectSubset<T, inventario_saludDeleteArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario_salud.
     * @param {inventario_saludUpdateArgs} args - Arguments to update one Inventario_salud.
     * @example
     * // Update one Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventario_saludUpdateArgs>(args: SelectSubset<T, inventario_saludUpdateArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventario_saluds.
     * @param {inventario_saludDeleteManyArgs} args - Arguments to filter Inventario_saluds to delete.
     * @example
     * // Delete a few Inventario_saluds
     * const { count } = await prisma.inventario_salud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventario_saludDeleteManyArgs>(args?: SelectSubset<T, inventario_saludDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventario_saluds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventario_saluds
     * const inventario_salud = await prisma.inventario_salud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventario_saludUpdateManyArgs>(args: SelectSubset<T, inventario_saludUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario_salud.
     * @param {inventario_saludUpsertArgs} args - Arguments to update or create a Inventario_salud.
     * @example
     * // Update or create a Inventario_salud
     * const inventario_salud = await prisma.inventario_salud.upsert({
     *   create: {
     *     // ... data to create a Inventario_salud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario_salud we want to update
     *   }
     * })
     */
    upsert<T extends inventario_saludUpsertArgs>(args: SelectSubset<T, inventario_saludUpsertArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventario_saluds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludCountArgs} args - Arguments to filter Inventario_saluds to count.
     * @example
     * // Count the number of Inventario_saluds
     * const count = await prisma.inventario_salud.count({
     *   where: {
     *     // ... the filter for the Inventario_saluds we want to count
     *   }
     * })
    **/
    count<T extends inventario_saludCountArgs>(
      args?: Subset<T, inventario_saludCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventario_saludCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario_salud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventario_saludAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventario_saludAggregateArgs>(args: Subset<T, Inventario_saludAggregateArgs>): Prisma.PrismaPromise<GetInventario_saludAggregateType<T>>

    /**
     * Group by Inventario_salud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_saludGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventario_saludGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventario_saludGroupByArgs['orderBy'] }
        : { orderBy?: inventario_saludGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventario_saludGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventario_saludGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventario_salud model
   */
  readonly fields: inventario_saludFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventario_salud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventario_saludClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicinas_recetadas<T extends inventario_salud$medicinas_recetadasArgs<ExtArgs> = {}>(args?: Subset<T, inventario_salud$medicinas_recetadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventario_salud model
   */
  interface inventario_saludFieldRefs {
    readonly id_inventario_salud: FieldRef<"inventario_salud", 'Int'>
    readonly nombre: FieldRef<"inventario_salud", 'String'>
    readonly descripcion: FieldRef<"inventario_salud", 'String'>
    readonly stock: FieldRef<"inventario_salud", 'Int'>
    readonly dosis: FieldRef<"inventario_salud", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inventario_salud findUnique
   */
  export type inventario_saludFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter, which inventario_salud to fetch.
     */
    where: inventario_saludWhereUniqueInput
  }

  /**
   * inventario_salud findUniqueOrThrow
   */
  export type inventario_saludFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter, which inventario_salud to fetch.
     */
    where: inventario_saludWhereUniqueInput
  }

  /**
   * inventario_salud findFirst
   */
  export type inventario_saludFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter, which inventario_salud to fetch.
     */
    where?: inventario_saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_saluds to fetch.
     */
    orderBy?: inventario_saludOrderByWithRelationInput | inventario_saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_saluds.
     */
    cursor?: inventario_saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_saluds.
     */
    distinct?: Inventario_saludScalarFieldEnum | Inventario_saludScalarFieldEnum[]
  }

  /**
   * inventario_salud findFirstOrThrow
   */
  export type inventario_saludFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter, which inventario_salud to fetch.
     */
    where?: inventario_saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_saluds to fetch.
     */
    orderBy?: inventario_saludOrderByWithRelationInput | inventario_saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_saluds.
     */
    cursor?: inventario_saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_saluds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_saluds.
     */
    distinct?: Inventario_saludScalarFieldEnum | Inventario_saludScalarFieldEnum[]
  }

  /**
   * inventario_salud findMany
   */
  export type inventario_saludFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter, which inventario_saluds to fetch.
     */
    where?: inventario_saludWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_saluds to fetch.
     */
    orderBy?: inventario_saludOrderByWithRelationInput | inventario_saludOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventario_saluds.
     */
    cursor?: inventario_saludWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_saluds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_saluds.
     */
    skip?: number
    distinct?: Inventario_saludScalarFieldEnum | Inventario_saludScalarFieldEnum[]
  }

  /**
   * inventario_salud create
   */
  export type inventario_saludCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * The data needed to create a inventario_salud.
     */
    data: XOR<inventario_saludCreateInput, inventario_saludUncheckedCreateInput>
  }

  /**
   * inventario_salud createMany
   */
  export type inventario_saludCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventario_saluds.
     */
    data: inventario_saludCreateManyInput | inventario_saludCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventario_salud update
   */
  export type inventario_saludUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * The data needed to update a inventario_salud.
     */
    data: XOR<inventario_saludUpdateInput, inventario_saludUncheckedUpdateInput>
    /**
     * Choose, which inventario_salud to update.
     */
    where: inventario_saludWhereUniqueInput
  }

  /**
   * inventario_salud updateMany
   */
  export type inventario_saludUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventario_saluds.
     */
    data: XOR<inventario_saludUpdateManyMutationInput, inventario_saludUncheckedUpdateManyInput>
    /**
     * Filter which inventario_saluds to update
     */
    where?: inventario_saludWhereInput
    /**
     * Limit how many inventario_saluds to update.
     */
    limit?: number
  }

  /**
   * inventario_salud upsert
   */
  export type inventario_saludUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * The filter to search for the inventario_salud to update in case it exists.
     */
    where: inventario_saludWhereUniqueInput
    /**
     * In case the inventario_salud found by the `where` argument doesn't exist, create a new inventario_salud with this data.
     */
    create: XOR<inventario_saludCreateInput, inventario_saludUncheckedCreateInput>
    /**
     * In case the inventario_salud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventario_saludUpdateInput, inventario_saludUncheckedUpdateInput>
  }

  /**
   * inventario_salud delete
   */
  export type inventario_saludDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
    /**
     * Filter which inventario_salud to delete.
     */
    where: inventario_saludWhereUniqueInput
  }

  /**
   * inventario_salud deleteMany
   */
  export type inventario_saludDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_saluds to delete
     */
    where?: inventario_saludWhereInput
    /**
     * Limit how many inventario_saluds to delete.
     */
    limit?: number
  }

  /**
   * inventario_salud.medicinas_recetadas
   */
  export type inventario_salud$medicinas_recetadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    where?: medicinas_recetadasWhereInput
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    cursor?: medicinas_recetadasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medicinas_recetadasScalarFieldEnum | Medicinas_recetadasScalarFieldEnum[]
  }

  /**
   * inventario_salud without action
   */
  export type inventario_saludDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_salud
     */
    select?: inventario_saludSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario_salud
     */
    omit?: inventario_saludOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_saludInclude<ExtArgs> | null
  }


  /**
   * Model medicinas_recetadas
   */

  export type AggregateMedicinas_recetadas = {
    _count: Medicinas_recetadasCountAggregateOutputType | null
    _avg: Medicinas_recetadasAvgAggregateOutputType | null
    _sum: Medicinas_recetadasSumAggregateOutputType | null
    _min: Medicinas_recetadasMinAggregateOutputType | null
    _max: Medicinas_recetadasMaxAggregateOutputType | null
  }

  export type Medicinas_recetadasAvgAggregateOutputType = {
    id_medicinas_recetadas: number | null
    id_salud: number | null
    id_inventario_salud: number | null
  }

  export type Medicinas_recetadasSumAggregateOutputType = {
    id_medicinas_recetadas: number | null
    id_salud: number | null
    id_inventario_salud: number | null
  }

  export type Medicinas_recetadasMinAggregateOutputType = {
    id_medicinas_recetadas: number | null
    id_salud: number | null
    id_inventario_salud: number | null
    frecuencia: string | null
    duracion: string | null
  }

  export type Medicinas_recetadasMaxAggregateOutputType = {
    id_medicinas_recetadas: number | null
    id_salud: number | null
    id_inventario_salud: number | null
    frecuencia: string | null
    duracion: string | null
  }

  export type Medicinas_recetadasCountAggregateOutputType = {
    id_medicinas_recetadas: number
    id_salud: number
    id_inventario_salud: number
    frecuencia: number
    duracion: number
    _all: number
  }


  export type Medicinas_recetadasAvgAggregateInputType = {
    id_medicinas_recetadas?: true
    id_salud?: true
    id_inventario_salud?: true
  }

  export type Medicinas_recetadasSumAggregateInputType = {
    id_medicinas_recetadas?: true
    id_salud?: true
    id_inventario_salud?: true
  }

  export type Medicinas_recetadasMinAggregateInputType = {
    id_medicinas_recetadas?: true
    id_salud?: true
    id_inventario_salud?: true
    frecuencia?: true
    duracion?: true
  }

  export type Medicinas_recetadasMaxAggregateInputType = {
    id_medicinas_recetadas?: true
    id_salud?: true
    id_inventario_salud?: true
    frecuencia?: true
    duracion?: true
  }

  export type Medicinas_recetadasCountAggregateInputType = {
    id_medicinas_recetadas?: true
    id_salud?: true
    id_inventario_salud?: true
    frecuencia?: true
    duracion?: true
    _all?: true
  }

  export type Medicinas_recetadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicinas_recetadas to aggregate.
     */
    where?: medicinas_recetadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicinas_recetadas to fetch.
     */
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicinas_recetadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicinas_recetadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicinas_recetadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicinas_recetadas
    **/
    _count?: true | Medicinas_recetadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medicinas_recetadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medicinas_recetadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medicinas_recetadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medicinas_recetadasMaxAggregateInputType
  }

  export type GetMedicinas_recetadasAggregateType<T extends Medicinas_recetadasAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicinas_recetadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicinas_recetadas[P]>
      : GetScalarType<T[P], AggregateMedicinas_recetadas[P]>
  }




  export type medicinas_recetadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicinas_recetadasWhereInput
    orderBy?: medicinas_recetadasOrderByWithAggregationInput | medicinas_recetadasOrderByWithAggregationInput[]
    by: Medicinas_recetadasScalarFieldEnum[] | Medicinas_recetadasScalarFieldEnum
    having?: medicinas_recetadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medicinas_recetadasCountAggregateInputType | true
    _avg?: Medicinas_recetadasAvgAggregateInputType
    _sum?: Medicinas_recetadasSumAggregateInputType
    _min?: Medicinas_recetadasMinAggregateInputType
    _max?: Medicinas_recetadasMaxAggregateInputType
  }

  export type Medicinas_recetadasGroupByOutputType = {
    id_medicinas_recetadas: number
    id_salud: number
    id_inventario_salud: number
    frecuencia: string | null
    duracion: string | null
    _count: Medicinas_recetadasCountAggregateOutputType | null
    _avg: Medicinas_recetadasAvgAggregateOutputType | null
    _sum: Medicinas_recetadasSumAggregateOutputType | null
    _min: Medicinas_recetadasMinAggregateOutputType | null
    _max: Medicinas_recetadasMaxAggregateOutputType | null
  }

  type GetMedicinas_recetadasGroupByPayload<T extends medicinas_recetadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medicinas_recetadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medicinas_recetadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medicinas_recetadasGroupByOutputType[P]>
            : GetScalarType<T[P], Medicinas_recetadasGroupByOutputType[P]>
        }
      >
    >


  export type medicinas_recetadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_medicinas_recetadas?: boolean
    id_salud?: boolean
    id_inventario_salud?: boolean
    frecuencia?: boolean
    duracion?: boolean
    inventario_salud?: boolean | inventario_saludDefaultArgs<ExtArgs>
    salud?: boolean | saludDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinas_recetadas"]>



  export type medicinas_recetadasSelectScalar = {
    id_medicinas_recetadas?: boolean
    id_salud?: boolean
    id_inventario_salud?: boolean
    frecuencia?: boolean
    duracion?: boolean
  }

  export type medicinas_recetadasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_medicinas_recetadas" | "id_salud" | "id_inventario_salud" | "frecuencia" | "duracion", ExtArgs["result"]["medicinas_recetadas"]>
  export type medicinas_recetadasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario_salud?: boolean | inventario_saludDefaultArgs<ExtArgs>
    salud?: boolean | saludDefaultArgs<ExtArgs>
  }

  export type $medicinas_recetadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicinas_recetadas"
    objects: {
      inventario_salud: Prisma.$inventario_saludPayload<ExtArgs>
      salud: Prisma.$saludPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_medicinas_recetadas: number
      id_salud: number
      id_inventario_salud: number
      frecuencia: string | null
      duracion: string | null
    }, ExtArgs["result"]["medicinas_recetadas"]>
    composites: {}
  }

  type medicinas_recetadasGetPayload<S extends boolean | null | undefined | medicinas_recetadasDefaultArgs> = $Result.GetResult<Prisma.$medicinas_recetadasPayload, S>

  type medicinas_recetadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicinas_recetadasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medicinas_recetadasCountAggregateInputType | true
    }

  export interface medicinas_recetadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicinas_recetadas'], meta: { name: 'medicinas_recetadas' } }
    /**
     * Find zero or one Medicinas_recetadas that matches the filter.
     * @param {medicinas_recetadasFindUniqueArgs} args - Arguments to find a Medicinas_recetadas
     * @example
     * // Get one Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicinas_recetadasFindUniqueArgs>(args: SelectSubset<T, medicinas_recetadasFindUniqueArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicinas_recetadas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicinas_recetadasFindUniqueOrThrowArgs} args - Arguments to find a Medicinas_recetadas
     * @example
     * // Get one Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicinas_recetadasFindUniqueOrThrowArgs>(args: SelectSubset<T, medicinas_recetadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicinas_recetadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasFindFirstArgs} args - Arguments to find a Medicinas_recetadas
     * @example
     * // Get one Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicinas_recetadasFindFirstArgs>(args?: SelectSubset<T, medicinas_recetadasFindFirstArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicinas_recetadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasFindFirstOrThrowArgs} args - Arguments to find a Medicinas_recetadas
     * @example
     * // Get one Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicinas_recetadasFindFirstOrThrowArgs>(args?: SelectSubset<T, medicinas_recetadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicinas_recetadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findMany()
     * 
     * // Get first 10 Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.findMany({ take: 10 })
     * 
     * // Only select the `id_medicinas_recetadas`
     * const medicinas_recetadasWithId_medicinas_recetadasOnly = await prisma.medicinas_recetadas.findMany({ select: { id_medicinas_recetadas: true } })
     * 
     */
    findMany<T extends medicinas_recetadasFindManyArgs>(args?: SelectSubset<T, medicinas_recetadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicinas_recetadas.
     * @param {medicinas_recetadasCreateArgs} args - Arguments to create a Medicinas_recetadas.
     * @example
     * // Create one Medicinas_recetadas
     * const Medicinas_recetadas = await prisma.medicinas_recetadas.create({
     *   data: {
     *     // ... data to create a Medicinas_recetadas
     *   }
     * })
     * 
     */
    create<T extends medicinas_recetadasCreateArgs>(args: SelectSubset<T, medicinas_recetadasCreateArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicinas_recetadas.
     * @param {medicinas_recetadasCreateManyArgs} args - Arguments to create many Medicinas_recetadas.
     * @example
     * // Create many Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicinas_recetadasCreateManyArgs>(args?: SelectSubset<T, medicinas_recetadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicinas_recetadas.
     * @param {medicinas_recetadasDeleteArgs} args - Arguments to delete one Medicinas_recetadas.
     * @example
     * // Delete one Medicinas_recetadas
     * const Medicinas_recetadas = await prisma.medicinas_recetadas.delete({
     *   where: {
     *     // ... filter to delete one Medicinas_recetadas
     *   }
     * })
     * 
     */
    delete<T extends medicinas_recetadasDeleteArgs>(args: SelectSubset<T, medicinas_recetadasDeleteArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicinas_recetadas.
     * @param {medicinas_recetadasUpdateArgs} args - Arguments to update one Medicinas_recetadas.
     * @example
     * // Update one Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicinas_recetadasUpdateArgs>(args: SelectSubset<T, medicinas_recetadasUpdateArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicinas_recetadas.
     * @param {medicinas_recetadasDeleteManyArgs} args - Arguments to filter Medicinas_recetadas to delete.
     * @example
     * // Delete a few Medicinas_recetadas
     * const { count } = await prisma.medicinas_recetadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicinas_recetadasDeleteManyArgs>(args?: SelectSubset<T, medicinas_recetadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicinas_recetadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicinas_recetadasUpdateManyArgs>(args: SelectSubset<T, medicinas_recetadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicinas_recetadas.
     * @param {medicinas_recetadasUpsertArgs} args - Arguments to update or create a Medicinas_recetadas.
     * @example
     * // Update or create a Medicinas_recetadas
     * const medicinas_recetadas = await prisma.medicinas_recetadas.upsert({
     *   create: {
     *     // ... data to create a Medicinas_recetadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicinas_recetadas we want to update
     *   }
     * })
     */
    upsert<T extends medicinas_recetadasUpsertArgs>(args: SelectSubset<T, medicinas_recetadasUpsertArgs<ExtArgs>>): Prisma__medicinas_recetadasClient<$Result.GetResult<Prisma.$medicinas_recetadasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicinas_recetadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasCountArgs} args - Arguments to filter Medicinas_recetadas to count.
     * @example
     * // Count the number of Medicinas_recetadas
     * const count = await prisma.medicinas_recetadas.count({
     *   where: {
     *     // ... the filter for the Medicinas_recetadas we want to count
     *   }
     * })
    **/
    count<T extends medicinas_recetadasCountArgs>(
      args?: Subset<T, medicinas_recetadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medicinas_recetadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicinas_recetadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medicinas_recetadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medicinas_recetadasAggregateArgs>(args: Subset<T, Medicinas_recetadasAggregateArgs>): Prisma.PrismaPromise<GetMedicinas_recetadasAggregateType<T>>

    /**
     * Group by Medicinas_recetadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinas_recetadasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medicinas_recetadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicinas_recetadasGroupByArgs['orderBy'] }
        : { orderBy?: medicinas_recetadasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medicinas_recetadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinas_recetadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicinas_recetadas model
   */
  readonly fields: medicinas_recetadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicinas_recetadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicinas_recetadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventario_salud<T extends inventario_saludDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inventario_saludDefaultArgs<ExtArgs>>): Prisma__inventario_saludClient<$Result.GetResult<Prisma.$inventario_saludPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    salud<T extends saludDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saludDefaultArgs<ExtArgs>>): Prisma__saludClient<$Result.GetResult<Prisma.$saludPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medicinas_recetadas model
   */
  interface medicinas_recetadasFieldRefs {
    readonly id_medicinas_recetadas: FieldRef<"medicinas_recetadas", 'Int'>
    readonly id_salud: FieldRef<"medicinas_recetadas", 'Int'>
    readonly id_inventario_salud: FieldRef<"medicinas_recetadas", 'Int'>
    readonly frecuencia: FieldRef<"medicinas_recetadas", 'String'>
    readonly duracion: FieldRef<"medicinas_recetadas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medicinas_recetadas findUnique
   */
  export type medicinas_recetadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter, which medicinas_recetadas to fetch.
     */
    where: medicinas_recetadasWhereUniqueInput
  }

  /**
   * medicinas_recetadas findUniqueOrThrow
   */
  export type medicinas_recetadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter, which medicinas_recetadas to fetch.
     */
    where: medicinas_recetadasWhereUniqueInput
  }

  /**
   * medicinas_recetadas findFirst
   */
  export type medicinas_recetadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter, which medicinas_recetadas to fetch.
     */
    where?: medicinas_recetadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicinas_recetadas to fetch.
     */
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicinas_recetadas.
     */
    cursor?: medicinas_recetadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicinas_recetadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicinas_recetadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicinas_recetadas.
     */
    distinct?: Medicinas_recetadasScalarFieldEnum | Medicinas_recetadasScalarFieldEnum[]
  }

  /**
   * medicinas_recetadas findFirstOrThrow
   */
  export type medicinas_recetadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter, which medicinas_recetadas to fetch.
     */
    where?: medicinas_recetadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicinas_recetadas to fetch.
     */
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicinas_recetadas.
     */
    cursor?: medicinas_recetadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicinas_recetadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicinas_recetadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicinas_recetadas.
     */
    distinct?: Medicinas_recetadasScalarFieldEnum | Medicinas_recetadasScalarFieldEnum[]
  }

  /**
   * medicinas_recetadas findMany
   */
  export type medicinas_recetadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter, which medicinas_recetadas to fetch.
     */
    where?: medicinas_recetadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicinas_recetadas to fetch.
     */
    orderBy?: medicinas_recetadasOrderByWithRelationInput | medicinas_recetadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicinas_recetadas.
     */
    cursor?: medicinas_recetadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicinas_recetadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicinas_recetadas.
     */
    skip?: number
    distinct?: Medicinas_recetadasScalarFieldEnum | Medicinas_recetadasScalarFieldEnum[]
  }

  /**
   * medicinas_recetadas create
   */
  export type medicinas_recetadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * The data needed to create a medicinas_recetadas.
     */
    data: XOR<medicinas_recetadasCreateInput, medicinas_recetadasUncheckedCreateInput>
  }

  /**
   * medicinas_recetadas createMany
   */
  export type medicinas_recetadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicinas_recetadas.
     */
    data: medicinas_recetadasCreateManyInput | medicinas_recetadasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicinas_recetadas update
   */
  export type medicinas_recetadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * The data needed to update a medicinas_recetadas.
     */
    data: XOR<medicinas_recetadasUpdateInput, medicinas_recetadasUncheckedUpdateInput>
    /**
     * Choose, which medicinas_recetadas to update.
     */
    where: medicinas_recetadasWhereUniqueInput
  }

  /**
   * medicinas_recetadas updateMany
   */
  export type medicinas_recetadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicinas_recetadas.
     */
    data: XOR<medicinas_recetadasUpdateManyMutationInput, medicinas_recetadasUncheckedUpdateManyInput>
    /**
     * Filter which medicinas_recetadas to update
     */
    where?: medicinas_recetadasWhereInput
    /**
     * Limit how many medicinas_recetadas to update.
     */
    limit?: number
  }

  /**
   * medicinas_recetadas upsert
   */
  export type medicinas_recetadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * The filter to search for the medicinas_recetadas to update in case it exists.
     */
    where: medicinas_recetadasWhereUniqueInput
    /**
     * In case the medicinas_recetadas found by the `where` argument doesn't exist, create a new medicinas_recetadas with this data.
     */
    create: XOR<medicinas_recetadasCreateInput, medicinas_recetadasUncheckedCreateInput>
    /**
     * In case the medicinas_recetadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicinas_recetadasUpdateInput, medicinas_recetadasUncheckedUpdateInput>
  }

  /**
   * medicinas_recetadas delete
   */
  export type medicinas_recetadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
    /**
     * Filter which medicinas_recetadas to delete.
     */
    where: medicinas_recetadasWhereUniqueInput
  }

  /**
   * medicinas_recetadas deleteMany
   */
  export type medicinas_recetadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicinas_recetadas to delete
     */
    where?: medicinas_recetadasWhereInput
    /**
     * Limit how many medicinas_recetadas to delete.
     */
    limit?: number
  }

  /**
   * medicinas_recetadas without action
   */
  export type medicinas_recetadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicinas_recetadas
     */
    select?: medicinas_recetadasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicinas_recetadas
     */
    omit?: medicinas_recetadasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinas_recetadasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AsistenciaScalarFieldEnum: {
    id_asistencia: 'id_asistencia',
    datos_id: 'datos_id',
    asistio: 'asistio',
    id_participacion: 'id_participacion'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const BarrioScalarFieldEnum: {
    id_barrio: 'id_barrio',
    id_estaca: 'id_estaca',
    barrio: 'barrio'
  };

  export type BarrioScalarFieldEnum = (typeof BarrioScalarFieldEnum)[keyof typeof BarrioScalarFieldEnum]


  export const CompScalarFieldEnum: {
    id_comp: 'id_comp',
    comp: 'comp'
  };

  export type CompScalarFieldEnum = (typeof CompScalarFieldEnum)[keyof typeof CompScalarFieldEnum]


  export const DatosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    edad: 'edad',
    nacimiento: 'nacimiento',
    id_estaca: 'id_estaca',
    id_barrio: 'id_barrio',
    id_comp: 'id_comp',
    id_habitacion: 'id_habitacion',
    telefono: 'telefono',
    sexo: 'sexo',
    tipo: 'tipo',
    correo: 'correo',
    talla: 'talla',
    nom_c1: 'nom_c1',
    telef_c1: 'telef_c1',
    grupo_sang: 'grupo_sang',
    miembro: 'miembro',
    enf_cronica: 'enf_cronica',
    trat_med: 'trat_med',
    seguro: 'seguro',
    alergia_med: 'alergia_med',
    dieta: 'dieta',
    obs_dieta: 'obs_dieta',
    alergia_alimento: 'alergia_alimento',
    alergia_medicamento: 'alergia_medicamento',
    alergia_polvo_pelos_acaro: 'alergia_polvo_pelos_acaro'
  };

  export type DatosScalarFieldEnum = (typeof DatosScalarFieldEnum)[keyof typeof DatosScalarFieldEnum]


  export const EstacaScalarFieldEnum: {
    id_estaca: 'id_estaca',
    estaca: 'estaca'
  };

  export type EstacaScalarFieldEnum = (typeof EstacaScalarFieldEnum)[keyof typeof EstacaScalarFieldEnum]


  export const HabitacionScalarFieldEnum: {
    id_habitacion: 'id_habitacion',
    habitacion: 'habitacion',
    capacidad: 'capacidad'
  };

  export type HabitacionScalarFieldEnum = (typeof HabitacionScalarFieldEnum)[keyof typeof HabitacionScalarFieldEnum]


  export const ParticipacionScalarFieldEnum: {
    id_participacion: 'id_participacion',
    participacion: 'participacion'
  };

  export type ParticipacionScalarFieldEnum = (typeof ParticipacionScalarFieldEnum)[keyof typeof ParticipacionScalarFieldEnum]


  export const SaludScalarFieldEnum: {
    id_salud: 'id_salud',
    datos_id: 'datos_id',
    fecha_consulta: 'fecha_consulta',
    motivo_consulta: 'motivo_consulta',
    tratamiento: 'tratamiento',
    seguimiento: 'seguimiento',
    fecha_seguimiento: 'fecha_seguimiento'
  };

  export type SaludScalarFieldEnum = (typeof SaludScalarFieldEnum)[keyof typeof SaludScalarFieldEnum]


  export const Inventario_saludScalarFieldEnum: {
    id_inventario_salud: 'id_inventario_salud',
    nombre: 'nombre',
    descripcion: 'descripcion',
    stock: 'stock',
    dosis: 'dosis'
  };

  export type Inventario_saludScalarFieldEnum = (typeof Inventario_saludScalarFieldEnum)[keyof typeof Inventario_saludScalarFieldEnum]


  export const Medicinas_recetadasScalarFieldEnum: {
    id_medicinas_recetadas: 'id_medicinas_recetadas',
    id_salud: 'id_salud',
    id_inventario_salud: 'id_inventario_salud',
    frecuencia: 'frecuencia',
    duracion: 'duracion'
  };

  export type Medicinas_recetadasScalarFieldEnum = (typeof Medicinas_recetadasScalarFieldEnum)[keyof typeof Medicinas_recetadasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const barrioOrderByRelevanceFieldEnum: {
    barrio: 'barrio'
  };

  export type barrioOrderByRelevanceFieldEnum = (typeof barrioOrderByRelevanceFieldEnum)[keyof typeof barrioOrderByRelevanceFieldEnum]


  export const compOrderByRelevanceFieldEnum: {
    comp: 'comp'
  };

  export type compOrderByRelevanceFieldEnum = (typeof compOrderByRelevanceFieldEnum)[keyof typeof compOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const datosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono',
    sexo: 'sexo',
    correo: 'correo',
    talla: 'talla',
    nom_c1: 'nom_c1',
    telef_c1: 'telef_c1',
    grupo_sang: 'grupo_sang',
    enf_cronica: 'enf_cronica',
    trat_med: 'trat_med',
    seguro: 'seguro',
    alergia_med: 'alergia_med',
    obs_dieta: 'obs_dieta'
  };

  export type datosOrderByRelevanceFieldEnum = (typeof datosOrderByRelevanceFieldEnum)[keyof typeof datosOrderByRelevanceFieldEnum]


  export const estacaOrderByRelevanceFieldEnum: {
    estaca: 'estaca'
  };

  export type estacaOrderByRelevanceFieldEnum = (typeof estacaOrderByRelevanceFieldEnum)[keyof typeof estacaOrderByRelevanceFieldEnum]


  export const habitacionOrderByRelevanceFieldEnum: {
    habitacion: 'habitacion',
    capacidad: 'capacidad'
  };

  export type habitacionOrderByRelevanceFieldEnum = (typeof habitacionOrderByRelevanceFieldEnum)[keyof typeof habitacionOrderByRelevanceFieldEnum]


  export const participacionOrderByRelevanceFieldEnum: {
    participacion: 'participacion'
  };

  export type participacionOrderByRelevanceFieldEnum = (typeof participacionOrderByRelevanceFieldEnum)[keyof typeof participacionOrderByRelevanceFieldEnum]


  export const saludOrderByRelevanceFieldEnum: {
    motivo_consulta: 'motivo_consulta',
    tratamiento: 'tratamiento'
  };

  export type saludOrderByRelevanceFieldEnum = (typeof saludOrderByRelevanceFieldEnum)[keyof typeof saludOrderByRelevanceFieldEnum]


  export const inventario_saludOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    dosis: 'dosis'
  };

  export type inventario_saludOrderByRelevanceFieldEnum = (typeof inventario_saludOrderByRelevanceFieldEnum)[keyof typeof inventario_saludOrderByRelevanceFieldEnum]


  export const medicinas_recetadasOrderByRelevanceFieldEnum: {
    frecuencia: 'frecuencia',
    duracion: 'duracion'
  };

  export type medicinas_recetadasOrderByRelevanceFieldEnum = (typeof medicinas_recetadasOrderByRelevanceFieldEnum)[keyof typeof medicinas_recetadasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'asistencia_asistio'
   */
  export type Enumasistencia_asistioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'asistencia_asistio'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'datos_tipo'
   */
  export type Enumdatos_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_tipo'>
    


  /**
   * Reference to a field of type 'datos_miembro'
   */
  export type Enumdatos_miembroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_miembro'>
    


  /**
   * Reference to a field of type 'datos_dieta'
   */
  export type Enumdatos_dietaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_dieta'>
    


  /**
   * Reference to a field of type 'datos_alergia_alimento'
   */
  export type Enumdatos_alergia_alimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_alergia_alimento'>
    


  /**
   * Reference to a field of type 'datos_alergia_medicamento'
   */
  export type Enumdatos_alergia_medicamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_alergia_medicamento'>
    


  /**
   * Reference to a field of type 'datos_alergia_polvo_pelos_acaro'
   */
  export type Enumdatos_alergia_polvo_pelos_acaroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'datos_alergia_polvo_pelos_acaro'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type asistenciaWhereInput = {
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id_asistencia?: IntFilter<"asistencia"> | number
    datos_id?: IntFilter<"asistencia"> | number
    asistio?: Enumasistencia_asistioFilter<"asistencia"> | $Enums.asistencia_asistio
    id_participacion?: IntFilter<"asistencia"> | number
    datos?: XOR<DatosScalarRelationFilter, datosWhereInput>
    participacion?: XOR<ParticipacionScalarRelationFilter, participacionWhereInput>
  }

  export type asistenciaOrderByWithRelationInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    asistio?: SortOrder
    id_participacion?: SortOrder
    datos?: datosOrderByWithRelationInput
    participacion?: participacionOrderByWithRelationInput
  }

  export type asistenciaWhereUniqueInput = Prisma.AtLeast<{
    id_asistencia?: number
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    datos_id?: IntFilter<"asistencia"> | number
    asistio?: Enumasistencia_asistioFilter<"asistencia"> | $Enums.asistencia_asistio
    id_participacion?: IntFilter<"asistencia"> | number
    datos?: XOR<DatosScalarRelationFilter, datosWhereInput>
    participacion?: XOR<ParticipacionScalarRelationFilter, participacionWhereInput>
  }, "id_asistencia">

  export type asistenciaOrderByWithAggregationInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    asistio?: SortOrder
    id_participacion?: SortOrder
    _count?: asistenciaCountOrderByAggregateInput
    _avg?: asistenciaAvgOrderByAggregateInput
    _max?: asistenciaMaxOrderByAggregateInput
    _min?: asistenciaMinOrderByAggregateInput
    _sum?: asistenciaSumOrderByAggregateInput
  }

  export type asistenciaScalarWhereWithAggregatesInput = {
    AND?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    OR?: asistenciaScalarWhereWithAggregatesInput[]
    NOT?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    id_asistencia?: IntWithAggregatesFilter<"asistencia"> | number
    datos_id?: IntWithAggregatesFilter<"asistencia"> | number
    asistio?: Enumasistencia_asistioWithAggregatesFilter<"asistencia"> | $Enums.asistencia_asistio
    id_participacion?: IntWithAggregatesFilter<"asistencia"> | number
  }

  export type barrioWhereInput = {
    AND?: barrioWhereInput | barrioWhereInput[]
    OR?: barrioWhereInput[]
    NOT?: barrioWhereInput | barrioWhereInput[]
    id_barrio?: IntFilter<"barrio"> | number
    id_estaca?: IntFilter<"barrio"> | number
    barrio?: StringFilter<"barrio"> | string
    estaca?: XOR<EstacaScalarRelationFilter, estacaWhereInput>
    datos?: DatosListRelationFilter
  }

  export type barrioOrderByWithRelationInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
    barrio?: SortOrder
    estaca?: estacaOrderByWithRelationInput
    datos?: datosOrderByRelationAggregateInput
    _relevance?: barrioOrderByRelevanceInput
  }

  export type barrioWhereUniqueInput = Prisma.AtLeast<{
    id_barrio?: number
    AND?: barrioWhereInput | barrioWhereInput[]
    OR?: barrioWhereInput[]
    NOT?: barrioWhereInput | barrioWhereInput[]
    id_estaca?: IntFilter<"barrio"> | number
    barrio?: StringFilter<"barrio"> | string
    estaca?: XOR<EstacaScalarRelationFilter, estacaWhereInput>
    datos?: DatosListRelationFilter
  }, "id_barrio">

  export type barrioOrderByWithAggregationInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
    barrio?: SortOrder
    _count?: barrioCountOrderByAggregateInput
    _avg?: barrioAvgOrderByAggregateInput
    _max?: barrioMaxOrderByAggregateInput
    _min?: barrioMinOrderByAggregateInput
    _sum?: barrioSumOrderByAggregateInput
  }

  export type barrioScalarWhereWithAggregatesInput = {
    AND?: barrioScalarWhereWithAggregatesInput | barrioScalarWhereWithAggregatesInput[]
    OR?: barrioScalarWhereWithAggregatesInput[]
    NOT?: barrioScalarWhereWithAggregatesInput | barrioScalarWhereWithAggregatesInput[]
    id_barrio?: IntWithAggregatesFilter<"barrio"> | number
    id_estaca?: IntWithAggregatesFilter<"barrio"> | number
    barrio?: StringWithAggregatesFilter<"barrio"> | string
  }

  export type compWhereInput = {
    AND?: compWhereInput | compWhereInput[]
    OR?: compWhereInput[]
    NOT?: compWhereInput | compWhereInput[]
    id_comp?: IntFilter<"comp"> | number
    comp?: StringFilter<"comp"> | string
    datos?: DatosListRelationFilter
  }

  export type compOrderByWithRelationInput = {
    id_comp?: SortOrder
    comp?: SortOrder
    datos?: datosOrderByRelationAggregateInput
    _relevance?: compOrderByRelevanceInput
  }

  export type compWhereUniqueInput = Prisma.AtLeast<{
    id_comp?: number
    AND?: compWhereInput | compWhereInput[]
    OR?: compWhereInput[]
    NOT?: compWhereInput | compWhereInput[]
    comp?: StringFilter<"comp"> | string
    datos?: DatosListRelationFilter
  }, "id_comp">

  export type compOrderByWithAggregationInput = {
    id_comp?: SortOrder
    comp?: SortOrder
    _count?: compCountOrderByAggregateInput
    _avg?: compAvgOrderByAggregateInput
    _max?: compMaxOrderByAggregateInput
    _min?: compMinOrderByAggregateInput
    _sum?: compSumOrderByAggregateInput
  }

  export type compScalarWhereWithAggregatesInput = {
    AND?: compScalarWhereWithAggregatesInput | compScalarWhereWithAggregatesInput[]
    OR?: compScalarWhereWithAggregatesInput[]
    NOT?: compScalarWhereWithAggregatesInput | compScalarWhereWithAggregatesInput[]
    id_comp?: IntWithAggregatesFilter<"comp"> | number
    comp?: StringWithAggregatesFilter<"comp"> | string
  }

  export type datosWhereInput = {
    AND?: datosWhereInput | datosWhereInput[]
    OR?: datosWhereInput[]
    NOT?: datosWhereInput | datosWhereInput[]
    id?: IntFilter<"datos"> | number
    nombre?: StringFilter<"datos"> | string
    apellido?: StringFilter<"datos"> | string
    edad?: IntFilter<"datos"> | number
    nacimiento?: DateTimeNullableFilter<"datos"> | Date | string | null
    id_estaca?: IntFilter<"datos"> | number
    id_barrio?: IntFilter<"datos"> | number
    id_comp?: IntFilter<"datos"> | number
    id_habitacion?: IntFilter<"datos"> | number
    telefono?: StringNullableFilter<"datos"> | string | null
    sexo?: StringFilter<"datos"> | string
    tipo?: Enumdatos_tipoFilter<"datos"> | $Enums.datos_tipo
    correo?: StringNullableFilter<"datos"> | string | null
    talla?: StringNullableFilter<"datos"> | string | null
    nom_c1?: StringNullableFilter<"datos"> | string | null
    telef_c1?: StringNullableFilter<"datos"> | string | null
    grupo_sang?: StringNullableFilter<"datos"> | string | null
    miembro?: Enumdatos_miembroNullableFilter<"datos"> | $Enums.datos_miembro | null
    enf_cronica?: StringNullableFilter<"datos"> | string | null
    trat_med?: StringNullableFilter<"datos"> | string | null
    seguro?: StringNullableFilter<"datos"> | string | null
    alergia_med?: StringNullableFilter<"datos"> | string | null
    dieta?: Enumdatos_dietaNullableFilter<"datos"> | $Enums.datos_dieta | null
    obs_dieta?: StringNullableFilter<"datos"> | string | null
    alergia_alimento?: Enumdatos_alergia_alimentoNullableFilter<"datos"> | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: Enumdatos_alergia_medicamentoNullableFilter<"datos"> | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: Enumdatos_alergia_polvo_pelos_acaroNullableFilter<"datos"> | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: AsistenciaListRelationFilter
    barrio?: XOR<BarrioScalarRelationFilter, barrioWhereInput>
    comp?: XOR<CompScalarRelationFilter, compWhereInput>
    estaca?: XOR<EstacaScalarRelationFilter, estacaWhereInput>
    habitacion?: XOR<HabitacionScalarRelationFilter, habitacionWhereInput>
    salud?: SaludListRelationFilter
  }

  export type datosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    edad?: SortOrder
    nacimiento?: SortOrderInput | SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
    telefono?: SortOrderInput | SortOrder
    sexo?: SortOrder
    tipo?: SortOrder
    correo?: SortOrderInput | SortOrder
    talla?: SortOrderInput | SortOrder
    nom_c1?: SortOrderInput | SortOrder
    telef_c1?: SortOrderInput | SortOrder
    grupo_sang?: SortOrderInput | SortOrder
    miembro?: SortOrderInput | SortOrder
    enf_cronica?: SortOrderInput | SortOrder
    trat_med?: SortOrderInput | SortOrder
    seguro?: SortOrderInput | SortOrder
    alergia_med?: SortOrderInput | SortOrder
    dieta?: SortOrderInput | SortOrder
    obs_dieta?: SortOrderInput | SortOrder
    alergia_alimento?: SortOrderInput | SortOrder
    alergia_medicamento?: SortOrderInput | SortOrder
    alergia_polvo_pelos_acaro?: SortOrderInput | SortOrder
    asistencia?: asistenciaOrderByRelationAggregateInput
    barrio?: barrioOrderByWithRelationInput
    comp?: compOrderByWithRelationInput
    estaca?: estacaOrderByWithRelationInput
    habitacion?: habitacionOrderByWithRelationInput
    salud?: saludOrderByRelationAggregateInput
    _relevance?: datosOrderByRelevanceInput
  }

  export type datosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: datosWhereInput | datosWhereInput[]
    OR?: datosWhereInput[]
    NOT?: datosWhereInput | datosWhereInput[]
    nombre?: StringFilter<"datos"> | string
    apellido?: StringFilter<"datos"> | string
    edad?: IntFilter<"datos"> | number
    nacimiento?: DateTimeNullableFilter<"datos"> | Date | string | null
    id_estaca?: IntFilter<"datos"> | number
    id_barrio?: IntFilter<"datos"> | number
    id_comp?: IntFilter<"datos"> | number
    id_habitacion?: IntFilter<"datos"> | number
    telefono?: StringNullableFilter<"datos"> | string | null
    sexo?: StringFilter<"datos"> | string
    tipo?: Enumdatos_tipoFilter<"datos"> | $Enums.datos_tipo
    correo?: StringNullableFilter<"datos"> | string | null
    talla?: StringNullableFilter<"datos"> | string | null
    nom_c1?: StringNullableFilter<"datos"> | string | null
    telef_c1?: StringNullableFilter<"datos"> | string | null
    grupo_sang?: StringNullableFilter<"datos"> | string | null
    miembro?: Enumdatos_miembroNullableFilter<"datos"> | $Enums.datos_miembro | null
    enf_cronica?: StringNullableFilter<"datos"> | string | null
    trat_med?: StringNullableFilter<"datos"> | string | null
    seguro?: StringNullableFilter<"datos"> | string | null
    alergia_med?: StringNullableFilter<"datos"> | string | null
    dieta?: Enumdatos_dietaNullableFilter<"datos"> | $Enums.datos_dieta | null
    obs_dieta?: StringNullableFilter<"datos"> | string | null
    alergia_alimento?: Enumdatos_alergia_alimentoNullableFilter<"datos"> | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: Enumdatos_alergia_medicamentoNullableFilter<"datos"> | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: Enumdatos_alergia_polvo_pelos_acaroNullableFilter<"datos"> | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: AsistenciaListRelationFilter
    barrio?: XOR<BarrioScalarRelationFilter, barrioWhereInput>
    comp?: XOR<CompScalarRelationFilter, compWhereInput>
    estaca?: XOR<EstacaScalarRelationFilter, estacaWhereInput>
    habitacion?: XOR<HabitacionScalarRelationFilter, habitacionWhereInput>
    salud?: SaludListRelationFilter
  }, "id">

  export type datosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    edad?: SortOrder
    nacimiento?: SortOrderInput | SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
    telefono?: SortOrderInput | SortOrder
    sexo?: SortOrder
    tipo?: SortOrder
    correo?: SortOrderInput | SortOrder
    talla?: SortOrderInput | SortOrder
    nom_c1?: SortOrderInput | SortOrder
    telef_c1?: SortOrderInput | SortOrder
    grupo_sang?: SortOrderInput | SortOrder
    miembro?: SortOrderInput | SortOrder
    enf_cronica?: SortOrderInput | SortOrder
    trat_med?: SortOrderInput | SortOrder
    seguro?: SortOrderInput | SortOrder
    alergia_med?: SortOrderInput | SortOrder
    dieta?: SortOrderInput | SortOrder
    obs_dieta?: SortOrderInput | SortOrder
    alergia_alimento?: SortOrderInput | SortOrder
    alergia_medicamento?: SortOrderInput | SortOrder
    alergia_polvo_pelos_acaro?: SortOrderInput | SortOrder
    _count?: datosCountOrderByAggregateInput
    _avg?: datosAvgOrderByAggregateInput
    _max?: datosMaxOrderByAggregateInput
    _min?: datosMinOrderByAggregateInput
    _sum?: datosSumOrderByAggregateInput
  }

  export type datosScalarWhereWithAggregatesInput = {
    AND?: datosScalarWhereWithAggregatesInput | datosScalarWhereWithAggregatesInput[]
    OR?: datosScalarWhereWithAggregatesInput[]
    NOT?: datosScalarWhereWithAggregatesInput | datosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"datos"> | number
    nombre?: StringWithAggregatesFilter<"datos"> | string
    apellido?: StringWithAggregatesFilter<"datos"> | string
    edad?: IntWithAggregatesFilter<"datos"> | number
    nacimiento?: DateTimeNullableWithAggregatesFilter<"datos"> | Date | string | null
    id_estaca?: IntWithAggregatesFilter<"datos"> | number
    id_barrio?: IntWithAggregatesFilter<"datos"> | number
    id_comp?: IntWithAggregatesFilter<"datos"> | number
    id_habitacion?: IntWithAggregatesFilter<"datos"> | number
    telefono?: StringNullableWithAggregatesFilter<"datos"> | string | null
    sexo?: StringWithAggregatesFilter<"datos"> | string
    tipo?: Enumdatos_tipoWithAggregatesFilter<"datos"> | $Enums.datos_tipo
    correo?: StringNullableWithAggregatesFilter<"datos"> | string | null
    talla?: StringNullableWithAggregatesFilter<"datos"> | string | null
    nom_c1?: StringNullableWithAggregatesFilter<"datos"> | string | null
    telef_c1?: StringNullableWithAggregatesFilter<"datos"> | string | null
    grupo_sang?: StringNullableWithAggregatesFilter<"datos"> | string | null
    miembro?: Enumdatos_miembroNullableWithAggregatesFilter<"datos"> | $Enums.datos_miembro | null
    enf_cronica?: StringNullableWithAggregatesFilter<"datos"> | string | null
    trat_med?: StringNullableWithAggregatesFilter<"datos"> | string | null
    seguro?: StringNullableWithAggregatesFilter<"datos"> | string | null
    alergia_med?: StringNullableWithAggregatesFilter<"datos"> | string | null
    dieta?: Enumdatos_dietaNullableWithAggregatesFilter<"datos"> | $Enums.datos_dieta | null
    obs_dieta?: StringNullableWithAggregatesFilter<"datos"> | string | null
    alergia_alimento?: Enumdatos_alergia_alimentoNullableWithAggregatesFilter<"datos"> | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: Enumdatos_alergia_medicamentoNullableWithAggregatesFilter<"datos"> | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: Enumdatos_alergia_polvo_pelos_acaroNullableWithAggregatesFilter<"datos"> | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type estacaWhereInput = {
    AND?: estacaWhereInput | estacaWhereInput[]
    OR?: estacaWhereInput[]
    NOT?: estacaWhereInput | estacaWhereInput[]
    id_estaca?: IntFilter<"estaca"> | number
    estaca?: StringFilter<"estaca"> | string
    barrio?: BarrioListRelationFilter
    datos?: DatosListRelationFilter
  }

  export type estacaOrderByWithRelationInput = {
    id_estaca?: SortOrder
    estaca?: SortOrder
    barrio?: barrioOrderByRelationAggregateInput
    datos?: datosOrderByRelationAggregateInput
    _relevance?: estacaOrderByRelevanceInput
  }

  export type estacaWhereUniqueInput = Prisma.AtLeast<{
    id_estaca?: number
    AND?: estacaWhereInput | estacaWhereInput[]
    OR?: estacaWhereInput[]
    NOT?: estacaWhereInput | estacaWhereInput[]
    estaca?: StringFilter<"estaca"> | string
    barrio?: BarrioListRelationFilter
    datos?: DatosListRelationFilter
  }, "id_estaca">

  export type estacaOrderByWithAggregationInput = {
    id_estaca?: SortOrder
    estaca?: SortOrder
    _count?: estacaCountOrderByAggregateInput
    _avg?: estacaAvgOrderByAggregateInput
    _max?: estacaMaxOrderByAggregateInput
    _min?: estacaMinOrderByAggregateInput
    _sum?: estacaSumOrderByAggregateInput
  }

  export type estacaScalarWhereWithAggregatesInput = {
    AND?: estacaScalarWhereWithAggregatesInput | estacaScalarWhereWithAggregatesInput[]
    OR?: estacaScalarWhereWithAggregatesInput[]
    NOT?: estacaScalarWhereWithAggregatesInput | estacaScalarWhereWithAggregatesInput[]
    id_estaca?: IntWithAggregatesFilter<"estaca"> | number
    estaca?: StringWithAggregatesFilter<"estaca"> | string
  }

  export type habitacionWhereInput = {
    AND?: habitacionWhereInput | habitacionWhereInput[]
    OR?: habitacionWhereInput[]
    NOT?: habitacionWhereInput | habitacionWhereInput[]
    id_habitacion?: IntFilter<"habitacion"> | number
    habitacion?: StringFilter<"habitacion"> | string
    capacidad?: StringFilter<"habitacion"> | string
    datos?: DatosListRelationFilter
  }

  export type habitacionOrderByWithRelationInput = {
    id_habitacion?: SortOrder
    habitacion?: SortOrder
    capacidad?: SortOrder
    datos?: datosOrderByRelationAggregateInput
    _relevance?: habitacionOrderByRelevanceInput
  }

  export type habitacionWhereUniqueInput = Prisma.AtLeast<{
    id_habitacion?: number
    AND?: habitacionWhereInput | habitacionWhereInput[]
    OR?: habitacionWhereInput[]
    NOT?: habitacionWhereInput | habitacionWhereInput[]
    habitacion?: StringFilter<"habitacion"> | string
    capacidad?: StringFilter<"habitacion"> | string
    datos?: DatosListRelationFilter
  }, "id_habitacion">

  export type habitacionOrderByWithAggregationInput = {
    id_habitacion?: SortOrder
    habitacion?: SortOrder
    capacidad?: SortOrder
    _count?: habitacionCountOrderByAggregateInput
    _avg?: habitacionAvgOrderByAggregateInput
    _max?: habitacionMaxOrderByAggregateInput
    _min?: habitacionMinOrderByAggregateInput
    _sum?: habitacionSumOrderByAggregateInput
  }

  export type habitacionScalarWhereWithAggregatesInput = {
    AND?: habitacionScalarWhereWithAggregatesInput | habitacionScalarWhereWithAggregatesInput[]
    OR?: habitacionScalarWhereWithAggregatesInput[]
    NOT?: habitacionScalarWhereWithAggregatesInput | habitacionScalarWhereWithAggregatesInput[]
    id_habitacion?: IntWithAggregatesFilter<"habitacion"> | number
    habitacion?: StringWithAggregatesFilter<"habitacion"> | string
    capacidad?: StringWithAggregatesFilter<"habitacion"> | string
  }

  export type participacionWhereInput = {
    AND?: participacionWhereInput | participacionWhereInput[]
    OR?: participacionWhereInput[]
    NOT?: participacionWhereInput | participacionWhereInput[]
    id_participacion?: IntFilter<"participacion"> | number
    participacion?: StringFilter<"participacion"> | string
    asistencia?: AsistenciaListRelationFilter
  }

  export type participacionOrderByWithRelationInput = {
    id_participacion?: SortOrder
    participacion?: SortOrder
    asistencia?: asistenciaOrderByRelationAggregateInput
    _relevance?: participacionOrderByRelevanceInput
  }

  export type participacionWhereUniqueInput = Prisma.AtLeast<{
    id_participacion?: number
    AND?: participacionWhereInput | participacionWhereInput[]
    OR?: participacionWhereInput[]
    NOT?: participacionWhereInput | participacionWhereInput[]
    participacion?: StringFilter<"participacion"> | string
    asistencia?: AsistenciaListRelationFilter
  }, "id_participacion">

  export type participacionOrderByWithAggregationInput = {
    id_participacion?: SortOrder
    participacion?: SortOrder
    _count?: participacionCountOrderByAggregateInput
    _avg?: participacionAvgOrderByAggregateInput
    _max?: participacionMaxOrderByAggregateInput
    _min?: participacionMinOrderByAggregateInput
    _sum?: participacionSumOrderByAggregateInput
  }

  export type participacionScalarWhereWithAggregatesInput = {
    AND?: participacionScalarWhereWithAggregatesInput | participacionScalarWhereWithAggregatesInput[]
    OR?: participacionScalarWhereWithAggregatesInput[]
    NOT?: participacionScalarWhereWithAggregatesInput | participacionScalarWhereWithAggregatesInput[]
    id_participacion?: IntWithAggregatesFilter<"participacion"> | number
    participacion?: StringWithAggregatesFilter<"participacion"> | string
  }

  export type saludWhereInput = {
    AND?: saludWhereInput | saludWhereInput[]
    OR?: saludWhereInput[]
    NOT?: saludWhereInput | saludWhereInput[]
    id_salud?: IntFilter<"salud"> | number
    datos_id?: IntFilter<"salud"> | number
    fecha_consulta?: DateTimeNullableFilter<"salud"> | Date | string | null
    motivo_consulta?: StringNullableFilter<"salud"> | string | null
    tratamiento?: StringNullableFilter<"salud"> | string | null
    seguimiento?: IntFilter<"salud"> | number
    fecha_seguimiento?: DateTimeNullableFilter<"salud"> | Date | string | null
    medicinas_recetadas?: Medicinas_recetadasListRelationFilter
    datos?: XOR<DatosScalarRelationFilter, datosWhereInput>
  }

  export type saludOrderByWithRelationInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    fecha_consulta?: SortOrderInput | SortOrder
    motivo_consulta?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    seguimiento?: SortOrder
    fecha_seguimiento?: SortOrderInput | SortOrder
    medicinas_recetadas?: medicinas_recetadasOrderByRelationAggregateInput
    datos?: datosOrderByWithRelationInput
    _relevance?: saludOrderByRelevanceInput
  }

  export type saludWhereUniqueInput = Prisma.AtLeast<{
    id_salud?: number
    AND?: saludWhereInput | saludWhereInput[]
    OR?: saludWhereInput[]
    NOT?: saludWhereInput | saludWhereInput[]
    datos_id?: IntFilter<"salud"> | number
    fecha_consulta?: DateTimeNullableFilter<"salud"> | Date | string | null
    motivo_consulta?: StringNullableFilter<"salud"> | string | null
    tratamiento?: StringNullableFilter<"salud"> | string | null
    seguimiento?: IntFilter<"salud"> | number
    fecha_seguimiento?: DateTimeNullableFilter<"salud"> | Date | string | null
    medicinas_recetadas?: Medicinas_recetadasListRelationFilter
    datos?: XOR<DatosScalarRelationFilter, datosWhereInput>
  }, "id_salud">

  export type saludOrderByWithAggregationInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    fecha_consulta?: SortOrderInput | SortOrder
    motivo_consulta?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    seguimiento?: SortOrder
    fecha_seguimiento?: SortOrderInput | SortOrder
    _count?: saludCountOrderByAggregateInput
    _avg?: saludAvgOrderByAggregateInput
    _max?: saludMaxOrderByAggregateInput
    _min?: saludMinOrderByAggregateInput
    _sum?: saludSumOrderByAggregateInput
  }

  export type saludScalarWhereWithAggregatesInput = {
    AND?: saludScalarWhereWithAggregatesInput | saludScalarWhereWithAggregatesInput[]
    OR?: saludScalarWhereWithAggregatesInput[]
    NOT?: saludScalarWhereWithAggregatesInput | saludScalarWhereWithAggregatesInput[]
    id_salud?: IntWithAggregatesFilter<"salud"> | number
    datos_id?: IntWithAggregatesFilter<"salud"> | number
    fecha_consulta?: DateTimeNullableWithAggregatesFilter<"salud"> | Date | string | null
    motivo_consulta?: StringNullableWithAggregatesFilter<"salud"> | string | null
    tratamiento?: StringNullableWithAggregatesFilter<"salud"> | string | null
    seguimiento?: IntWithAggregatesFilter<"salud"> | number
    fecha_seguimiento?: DateTimeNullableWithAggregatesFilter<"salud"> | Date | string | null
  }

  export type inventario_saludWhereInput = {
    AND?: inventario_saludWhereInput | inventario_saludWhereInput[]
    OR?: inventario_saludWhereInput[]
    NOT?: inventario_saludWhereInput | inventario_saludWhereInput[]
    id_inventario_salud?: IntFilter<"inventario_salud"> | number
    nombre?: StringFilter<"inventario_salud"> | string
    descripcion?: StringNullableFilter<"inventario_salud"> | string | null
    stock?: IntFilter<"inventario_salud"> | number
    dosis?: StringNullableFilter<"inventario_salud"> | string | null
    medicinas_recetadas?: Medicinas_recetadasListRelationFilter
  }

  export type inventario_saludOrderByWithRelationInput = {
    id_inventario_salud?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrder
    dosis?: SortOrderInput | SortOrder
    medicinas_recetadas?: medicinas_recetadasOrderByRelationAggregateInput
    _relevance?: inventario_saludOrderByRelevanceInput
  }

  export type inventario_saludWhereUniqueInput = Prisma.AtLeast<{
    id_inventario_salud?: number
    AND?: inventario_saludWhereInput | inventario_saludWhereInput[]
    OR?: inventario_saludWhereInput[]
    NOT?: inventario_saludWhereInput | inventario_saludWhereInput[]
    nombre?: StringFilter<"inventario_salud"> | string
    descripcion?: StringNullableFilter<"inventario_salud"> | string | null
    stock?: IntFilter<"inventario_salud"> | number
    dosis?: StringNullableFilter<"inventario_salud"> | string | null
    medicinas_recetadas?: Medicinas_recetadasListRelationFilter
  }, "id_inventario_salud">

  export type inventario_saludOrderByWithAggregationInput = {
    id_inventario_salud?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrder
    dosis?: SortOrderInput | SortOrder
    _count?: inventario_saludCountOrderByAggregateInput
    _avg?: inventario_saludAvgOrderByAggregateInput
    _max?: inventario_saludMaxOrderByAggregateInput
    _min?: inventario_saludMinOrderByAggregateInput
    _sum?: inventario_saludSumOrderByAggregateInput
  }

  export type inventario_saludScalarWhereWithAggregatesInput = {
    AND?: inventario_saludScalarWhereWithAggregatesInput | inventario_saludScalarWhereWithAggregatesInput[]
    OR?: inventario_saludScalarWhereWithAggregatesInput[]
    NOT?: inventario_saludScalarWhereWithAggregatesInput | inventario_saludScalarWhereWithAggregatesInput[]
    id_inventario_salud?: IntWithAggregatesFilter<"inventario_salud"> | number
    nombre?: StringWithAggregatesFilter<"inventario_salud"> | string
    descripcion?: StringNullableWithAggregatesFilter<"inventario_salud"> | string | null
    stock?: IntWithAggregatesFilter<"inventario_salud"> | number
    dosis?: StringNullableWithAggregatesFilter<"inventario_salud"> | string | null
  }

  export type medicinas_recetadasWhereInput = {
    AND?: medicinas_recetadasWhereInput | medicinas_recetadasWhereInput[]
    OR?: medicinas_recetadasWhereInput[]
    NOT?: medicinas_recetadasWhereInput | medicinas_recetadasWhereInput[]
    id_medicinas_recetadas?: IntFilter<"medicinas_recetadas"> | number
    id_salud?: IntFilter<"medicinas_recetadas"> | number
    id_inventario_salud?: IntFilter<"medicinas_recetadas"> | number
    frecuencia?: StringNullableFilter<"medicinas_recetadas"> | string | null
    duracion?: StringNullableFilter<"medicinas_recetadas"> | string | null
    inventario_salud?: XOR<Inventario_saludScalarRelationFilter, inventario_saludWhereInput>
    salud?: XOR<SaludScalarRelationFilter, saludWhereInput>
  }

  export type medicinas_recetadasOrderByWithRelationInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
    frecuencia?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    inventario_salud?: inventario_saludOrderByWithRelationInput
    salud?: saludOrderByWithRelationInput
    _relevance?: medicinas_recetadasOrderByRelevanceInput
  }

  export type medicinas_recetadasWhereUniqueInput = Prisma.AtLeast<{
    id_medicinas_recetadas?: number
    AND?: medicinas_recetadasWhereInput | medicinas_recetadasWhereInput[]
    OR?: medicinas_recetadasWhereInput[]
    NOT?: medicinas_recetadasWhereInput | medicinas_recetadasWhereInput[]
    id_salud?: IntFilter<"medicinas_recetadas"> | number
    id_inventario_salud?: IntFilter<"medicinas_recetadas"> | number
    frecuencia?: StringNullableFilter<"medicinas_recetadas"> | string | null
    duracion?: StringNullableFilter<"medicinas_recetadas"> | string | null
    inventario_salud?: XOR<Inventario_saludScalarRelationFilter, inventario_saludWhereInput>
    salud?: XOR<SaludScalarRelationFilter, saludWhereInput>
  }, "id_medicinas_recetadas">

  export type medicinas_recetadasOrderByWithAggregationInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
    frecuencia?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    _count?: medicinas_recetadasCountOrderByAggregateInput
    _avg?: medicinas_recetadasAvgOrderByAggregateInput
    _max?: medicinas_recetadasMaxOrderByAggregateInput
    _min?: medicinas_recetadasMinOrderByAggregateInput
    _sum?: medicinas_recetadasSumOrderByAggregateInput
  }

  export type medicinas_recetadasScalarWhereWithAggregatesInput = {
    AND?: medicinas_recetadasScalarWhereWithAggregatesInput | medicinas_recetadasScalarWhereWithAggregatesInput[]
    OR?: medicinas_recetadasScalarWhereWithAggregatesInput[]
    NOT?: medicinas_recetadasScalarWhereWithAggregatesInput | medicinas_recetadasScalarWhereWithAggregatesInput[]
    id_medicinas_recetadas?: IntWithAggregatesFilter<"medicinas_recetadas"> | number
    id_salud?: IntWithAggregatesFilter<"medicinas_recetadas"> | number
    id_inventario_salud?: IntWithAggregatesFilter<"medicinas_recetadas"> | number
    frecuencia?: StringNullableWithAggregatesFilter<"medicinas_recetadas"> | string | null
    duracion?: StringNullableWithAggregatesFilter<"medicinas_recetadas"> | string | null
  }

  export type asistenciaCreateInput = {
    asistio: $Enums.asistencia_asistio
    datos: datosCreateNestedOneWithoutAsistenciaInput
    participacion: participacionCreateNestedOneWithoutAsistenciaInput
  }

  export type asistenciaUncheckedCreateInput = {
    id_asistencia?: number
    datos_id: number
    asistio: $Enums.asistencia_asistio
    id_participacion: number
  }

  export type asistenciaUpdateInput = {
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    datos?: datosUpdateOneRequiredWithoutAsistenciaNestedInput
    participacion?: participacionUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type asistenciaUncheckedUpdateInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    id_participacion?: IntFieldUpdateOperationsInput | number
  }

  export type asistenciaCreateManyInput = {
    id_asistencia?: number
    datos_id: number
    asistio: $Enums.asistencia_asistio
    id_participacion: number
  }

  export type asistenciaUpdateManyMutationInput = {
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
  }

  export type asistenciaUncheckedUpdateManyInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    id_participacion?: IntFieldUpdateOperationsInput | number
  }

  export type barrioCreateInput = {
    barrio: string
    estaca: estacaCreateNestedOneWithoutBarrioInput
    datos?: datosCreateNestedManyWithoutBarrioInput
  }

  export type barrioUncheckedCreateInput = {
    id_barrio?: number
    id_estaca: number
    barrio: string
    datos?: datosUncheckedCreateNestedManyWithoutBarrioInput
  }

  export type barrioUpdateInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    estaca?: estacaUpdateOneRequiredWithoutBarrioNestedInput
    datos?: datosUpdateManyWithoutBarrioNestedInput
  }

  export type barrioUncheckedUpdateInput = {
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_estaca?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    datos?: datosUncheckedUpdateManyWithoutBarrioNestedInput
  }

  export type barrioCreateManyInput = {
    id_barrio?: number
    id_estaca: number
    barrio: string
  }

  export type barrioUpdateManyMutationInput = {
    barrio?: StringFieldUpdateOperationsInput | string
  }

  export type barrioUncheckedUpdateManyInput = {
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_estaca?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
  }

  export type compCreateInput = {
    comp: string
    datos?: datosCreateNestedManyWithoutCompInput
  }

  export type compUncheckedCreateInput = {
    id_comp?: number
    comp: string
    datos?: datosUncheckedCreateNestedManyWithoutCompInput
  }

  export type compUpdateInput = {
    comp?: StringFieldUpdateOperationsInput | string
    datos?: datosUpdateManyWithoutCompNestedInput
  }

  export type compUncheckedUpdateInput = {
    id_comp?: IntFieldUpdateOperationsInput | number
    comp?: StringFieldUpdateOperationsInput | string
    datos?: datosUncheckedUpdateManyWithoutCompNestedInput
  }

  export type compCreateManyInput = {
    id_comp?: number
    comp: string
  }

  export type compUpdateManyMutationInput = {
    comp?: StringFieldUpdateOperationsInput | string
  }

  export type compUncheckedUpdateManyInput = {
    id_comp?: IntFieldUpdateOperationsInput | number
    comp?: StringFieldUpdateOperationsInput | string
  }

  export type datosCreateInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    barrio: barrioCreateNestedOneWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type datosCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type estacaCreateInput = {
    estaca: string
    barrio?: barrioCreateNestedManyWithoutEstacaInput
    datos?: datosCreateNestedManyWithoutEstacaInput
  }

  export type estacaUncheckedCreateInput = {
    id_estaca?: number
    estaca: string
    barrio?: barrioUncheckedCreateNestedManyWithoutEstacaInput
    datos?: datosUncheckedCreateNestedManyWithoutEstacaInput
  }

  export type estacaUpdateInput = {
    estaca?: StringFieldUpdateOperationsInput | string
    barrio?: barrioUpdateManyWithoutEstacaNestedInput
    datos?: datosUpdateManyWithoutEstacaNestedInput
  }

  export type estacaUncheckedUpdateInput = {
    id_estaca?: IntFieldUpdateOperationsInput | number
    estaca?: StringFieldUpdateOperationsInput | string
    barrio?: barrioUncheckedUpdateManyWithoutEstacaNestedInput
    datos?: datosUncheckedUpdateManyWithoutEstacaNestedInput
  }

  export type estacaCreateManyInput = {
    id_estaca?: number
    estaca: string
  }

  export type estacaUpdateManyMutationInput = {
    estaca?: StringFieldUpdateOperationsInput | string
  }

  export type estacaUncheckedUpdateManyInput = {
    id_estaca?: IntFieldUpdateOperationsInput | number
    estaca?: StringFieldUpdateOperationsInput | string
  }

  export type habitacionCreateInput = {
    habitacion: string
    capacidad: string
    datos?: datosCreateNestedManyWithoutHabitacionInput
  }

  export type habitacionUncheckedCreateInput = {
    id_habitacion?: number
    habitacion: string
    capacidad: string
    datos?: datosUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type habitacionUpdateInput = {
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
    datos?: datosUpdateManyWithoutHabitacionNestedInput
  }

  export type habitacionUncheckedUpdateInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
    datos?: datosUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type habitacionCreateManyInput = {
    id_habitacion?: number
    habitacion: string
    capacidad: string
  }

  export type habitacionUpdateManyMutationInput = {
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
  }

  export type habitacionUncheckedUpdateManyInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
  }

  export type participacionCreateInput = {
    id_participacion: number
    participacion: string
    asistencia?: asistenciaCreateNestedManyWithoutParticipacionInput
  }

  export type participacionUncheckedCreateInput = {
    id_participacion: number
    participacion: string
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutParticipacionInput
  }

  export type participacionUpdateInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
    asistencia?: asistenciaUpdateManyWithoutParticipacionNestedInput
  }

  export type participacionUncheckedUpdateInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
    asistencia?: asistenciaUncheckedUpdateManyWithoutParticipacionNestedInput
  }

  export type participacionCreateManyInput = {
    id_participacion: number
    participacion: string
  }

  export type participacionUpdateManyMutationInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
  }

  export type participacionUncheckedUpdateManyInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
  }

  export type saludCreateInput = {
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
    medicinas_recetadas?: medicinas_recetadasCreateNestedManyWithoutSaludInput
    datos: datosCreateNestedOneWithoutSaludInput
  }

  export type saludUncheckedCreateInput = {
    id_salud?: number
    datos_id: number
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedCreateNestedManyWithoutSaludInput
  }

  export type saludUpdateInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicinas_recetadas?: medicinas_recetadasUpdateManyWithoutSaludNestedInput
    datos?: datosUpdateOneRequiredWithoutSaludNestedInput
  }

  export type saludUncheckedUpdateInput = {
    id_salud?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedUpdateManyWithoutSaludNestedInput
  }

  export type saludCreateManyInput = {
    id_salud?: number
    datos_id: number
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
  }

  export type saludUpdateManyMutationInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saludUncheckedUpdateManyInput = {
    id_salud?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventario_saludCreateInput = {
    nombre: string
    descripcion?: string | null
    stock: number
    dosis?: string | null
    medicinas_recetadas?: medicinas_recetadasCreateNestedManyWithoutInventario_saludInput
  }

  export type inventario_saludUncheckedCreateInput = {
    id_inventario_salud?: number
    nombre: string
    descripcion?: string | null
    stock: number
    dosis?: string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedCreateNestedManyWithoutInventario_saludInput
  }

  export type inventario_saludUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
    medicinas_recetadas?: medicinas_recetadasUpdateManyWithoutInventario_saludNestedInput
  }

  export type inventario_saludUncheckedUpdateInput = {
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedUpdateManyWithoutInventario_saludNestedInput
  }

  export type inventario_saludCreateManyInput = {
    id_inventario_salud?: number
    nombre: string
    descripcion?: string | null
    stock: number
    dosis?: string | null
  }

  export type inventario_saludUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_saludUncheckedUpdateManyInput = {
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasCreateInput = {
    frecuencia?: string | null
    duracion?: string | null
    inventario_salud: inventario_saludCreateNestedOneWithoutMedicinas_recetadasInput
    salud: saludCreateNestedOneWithoutMedicinas_recetadasInput
  }

  export type medicinas_recetadasUncheckedCreateInput = {
    id_medicinas_recetadas?: number
    id_salud: number
    id_inventario_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasUpdateInput = {
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
    inventario_salud?: inventario_saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput
    salud?: saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput
  }

  export type medicinas_recetadasUncheckedUpdateInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_salud?: IntFieldUpdateOperationsInput | number
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasCreateManyInput = {
    id_medicinas_recetadas?: number
    id_salud: number
    id_inventario_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasUpdateManyMutationInput = {
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasUncheckedUpdateManyInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_salud?: IntFieldUpdateOperationsInput | number
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumasistencia_asistioFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_asistio | Enumasistencia_asistioFieldRefInput<$PrismaModel>
    in?: $Enums.asistencia_asistio[]
    notIn?: $Enums.asistencia_asistio[]
    not?: NestedEnumasistencia_asistioFilter<$PrismaModel> | $Enums.asistencia_asistio
  }

  export type DatosScalarRelationFilter = {
    is?: datosWhereInput
    isNot?: datosWhereInput
  }

  export type ParticipacionScalarRelationFilter = {
    is?: participacionWhereInput
    isNot?: participacionWhereInput
  }

  export type asistenciaCountOrderByAggregateInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    asistio?: SortOrder
    id_participacion?: SortOrder
  }

  export type asistenciaAvgOrderByAggregateInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    id_participacion?: SortOrder
  }

  export type asistenciaMaxOrderByAggregateInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    asistio?: SortOrder
    id_participacion?: SortOrder
  }

  export type asistenciaMinOrderByAggregateInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    asistio?: SortOrder
    id_participacion?: SortOrder
  }

  export type asistenciaSumOrderByAggregateInput = {
    id_asistencia?: SortOrder
    datos_id?: SortOrder
    id_participacion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumasistencia_asistioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_asistio | Enumasistencia_asistioFieldRefInput<$PrismaModel>
    in?: $Enums.asistencia_asistio[]
    notIn?: $Enums.asistencia_asistio[]
    not?: NestedEnumasistencia_asistioWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_asistio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumasistencia_asistioFilter<$PrismaModel>
    _max?: NestedEnumasistencia_asistioFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EstacaScalarRelationFilter = {
    is?: estacaWhereInput
    isNot?: estacaWhereInput
  }

  export type DatosListRelationFilter = {
    every?: datosWhereInput
    some?: datosWhereInput
    none?: datosWhereInput
  }

  export type datosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type barrioOrderByRelevanceInput = {
    fields: barrioOrderByRelevanceFieldEnum | barrioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type barrioCountOrderByAggregateInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
    barrio?: SortOrder
  }

  export type barrioAvgOrderByAggregateInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
  }

  export type barrioMaxOrderByAggregateInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
    barrio?: SortOrder
  }

  export type barrioMinOrderByAggregateInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
    barrio?: SortOrder
  }

  export type barrioSumOrderByAggregateInput = {
    id_barrio?: SortOrder
    id_estaca?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type compOrderByRelevanceInput = {
    fields: compOrderByRelevanceFieldEnum | compOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type compCountOrderByAggregateInput = {
    id_comp?: SortOrder
    comp?: SortOrder
  }

  export type compAvgOrderByAggregateInput = {
    id_comp?: SortOrder
  }

  export type compMaxOrderByAggregateInput = {
    id_comp?: SortOrder
    comp?: SortOrder
  }

  export type compMinOrderByAggregateInput = {
    id_comp?: SortOrder
    comp?: SortOrder
  }

  export type compSumOrderByAggregateInput = {
    id_comp?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumdatos_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_tipo | Enumdatos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.datos_tipo[]
    notIn?: $Enums.datos_tipo[]
    not?: NestedEnumdatos_tipoFilter<$PrismaModel> | $Enums.datos_tipo
  }

  export type Enumdatos_miembroNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_miembro | Enumdatos_miembroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_miembro[] | null
    notIn?: $Enums.datos_miembro[] | null
    not?: NestedEnumdatos_miembroNullableFilter<$PrismaModel> | $Enums.datos_miembro | null
  }

  export type Enumdatos_dietaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_dieta | Enumdatos_dietaFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_dieta[] | null
    notIn?: $Enums.datos_dieta[] | null
    not?: NestedEnumdatos_dietaNullableFilter<$PrismaModel> | $Enums.datos_dieta | null
  }

  export type Enumdatos_alergia_alimentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_alimento | Enumdatos_alergia_alimentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_alimento[] | null
    notIn?: $Enums.datos_alergia_alimento[] | null
    not?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel> | $Enums.datos_alergia_alimento | null
  }

  export type Enumdatos_alergia_medicamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_medicamento | Enumdatos_alergia_medicamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_medicamento[] | null
    notIn?: $Enums.datos_alergia_medicamento[] | null
    not?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel> | $Enums.datos_alergia_medicamento | null
  }

  export type Enumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_polvo_pelos_acaro | Enumdatos_alergia_polvo_pelos_acaroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    notIn?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    not?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel> | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type AsistenciaListRelationFilter = {
    every?: asistenciaWhereInput
    some?: asistenciaWhereInput
    none?: asistenciaWhereInput
  }

  export type BarrioScalarRelationFilter = {
    is?: barrioWhereInput
    isNot?: barrioWhereInput
  }

  export type CompScalarRelationFilter = {
    is?: compWhereInput
    isNot?: compWhereInput
  }

  export type HabitacionScalarRelationFilter = {
    is?: habitacionWhereInput
    isNot?: habitacionWhereInput
  }

  export type SaludListRelationFilter = {
    every?: saludWhereInput
    some?: saludWhereInput
    none?: saludWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type asistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saludOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type datosOrderByRelevanceInput = {
    fields: datosOrderByRelevanceFieldEnum | datosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type datosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    edad?: SortOrder
    nacimiento?: SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
    telefono?: SortOrder
    sexo?: SortOrder
    tipo?: SortOrder
    correo?: SortOrder
    talla?: SortOrder
    nom_c1?: SortOrder
    telef_c1?: SortOrder
    grupo_sang?: SortOrder
    miembro?: SortOrder
    enf_cronica?: SortOrder
    trat_med?: SortOrder
    seguro?: SortOrder
    alergia_med?: SortOrder
    dieta?: SortOrder
    obs_dieta?: SortOrder
    alergia_alimento?: SortOrder
    alergia_medicamento?: SortOrder
    alergia_polvo_pelos_acaro?: SortOrder
  }

  export type datosAvgOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
  }

  export type datosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    edad?: SortOrder
    nacimiento?: SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
    telefono?: SortOrder
    sexo?: SortOrder
    tipo?: SortOrder
    correo?: SortOrder
    talla?: SortOrder
    nom_c1?: SortOrder
    telef_c1?: SortOrder
    grupo_sang?: SortOrder
    miembro?: SortOrder
    enf_cronica?: SortOrder
    trat_med?: SortOrder
    seguro?: SortOrder
    alergia_med?: SortOrder
    dieta?: SortOrder
    obs_dieta?: SortOrder
    alergia_alimento?: SortOrder
    alergia_medicamento?: SortOrder
    alergia_polvo_pelos_acaro?: SortOrder
  }

  export type datosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    edad?: SortOrder
    nacimiento?: SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
    telefono?: SortOrder
    sexo?: SortOrder
    tipo?: SortOrder
    correo?: SortOrder
    talla?: SortOrder
    nom_c1?: SortOrder
    telef_c1?: SortOrder
    grupo_sang?: SortOrder
    miembro?: SortOrder
    enf_cronica?: SortOrder
    trat_med?: SortOrder
    seguro?: SortOrder
    alergia_med?: SortOrder
    dieta?: SortOrder
    obs_dieta?: SortOrder
    alergia_alimento?: SortOrder
    alergia_medicamento?: SortOrder
    alergia_polvo_pelos_acaro?: SortOrder
  }

  export type datosSumOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    id_estaca?: SortOrder
    id_barrio?: SortOrder
    id_comp?: SortOrder
    id_habitacion?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumdatos_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_tipo | Enumdatos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.datos_tipo[]
    notIn?: $Enums.datos_tipo[]
    not?: NestedEnumdatos_tipoWithAggregatesFilter<$PrismaModel> | $Enums.datos_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdatos_tipoFilter<$PrismaModel>
    _max?: NestedEnumdatos_tipoFilter<$PrismaModel>
  }

  export type Enumdatos_miembroNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_miembro | Enumdatos_miembroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_miembro[] | null
    notIn?: $Enums.datos_miembro[] | null
    not?: NestedEnumdatos_miembroNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_miembro | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_miembroNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_miembroNullableFilter<$PrismaModel>
  }

  export type Enumdatos_dietaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_dieta | Enumdatos_dietaFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_dieta[] | null
    notIn?: $Enums.datos_dieta[] | null
    not?: NestedEnumdatos_dietaNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_dieta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_dietaNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_dietaNullableFilter<$PrismaModel>
  }

  export type Enumdatos_alergia_alimentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_alimento | Enumdatos_alergia_alimentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_alimento[] | null
    notIn?: $Enums.datos_alergia_alimento[] | null
    not?: NestedEnumdatos_alergia_alimentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_alimento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel>
  }

  export type Enumdatos_alergia_medicamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_medicamento | Enumdatos_alergia_medicamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_medicamento[] | null
    notIn?: $Enums.datos_alergia_medicamento[] | null
    not?: NestedEnumdatos_alergia_medicamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_medicamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel>
  }

  export type Enumdatos_alergia_polvo_pelos_acaroNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_polvo_pelos_acaro | Enumdatos_alergia_polvo_pelos_acaroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    notIn?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    not?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_polvo_pelos_acaro | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel>
  }

  export type BarrioListRelationFilter = {
    every?: barrioWhereInput
    some?: barrioWhereInput
    none?: barrioWhereInput
  }

  export type barrioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estacaOrderByRelevanceInput = {
    fields: estacaOrderByRelevanceFieldEnum | estacaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type estacaCountOrderByAggregateInput = {
    id_estaca?: SortOrder
    estaca?: SortOrder
  }

  export type estacaAvgOrderByAggregateInput = {
    id_estaca?: SortOrder
  }

  export type estacaMaxOrderByAggregateInput = {
    id_estaca?: SortOrder
    estaca?: SortOrder
  }

  export type estacaMinOrderByAggregateInput = {
    id_estaca?: SortOrder
    estaca?: SortOrder
  }

  export type estacaSumOrderByAggregateInput = {
    id_estaca?: SortOrder
  }

  export type habitacionOrderByRelevanceInput = {
    fields: habitacionOrderByRelevanceFieldEnum | habitacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type habitacionCountOrderByAggregateInput = {
    id_habitacion?: SortOrder
    habitacion?: SortOrder
    capacidad?: SortOrder
  }

  export type habitacionAvgOrderByAggregateInput = {
    id_habitacion?: SortOrder
  }

  export type habitacionMaxOrderByAggregateInput = {
    id_habitacion?: SortOrder
    habitacion?: SortOrder
    capacidad?: SortOrder
  }

  export type habitacionMinOrderByAggregateInput = {
    id_habitacion?: SortOrder
    habitacion?: SortOrder
    capacidad?: SortOrder
  }

  export type habitacionSumOrderByAggregateInput = {
    id_habitacion?: SortOrder
  }

  export type participacionOrderByRelevanceInput = {
    fields: participacionOrderByRelevanceFieldEnum | participacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type participacionCountOrderByAggregateInput = {
    id_participacion?: SortOrder
    participacion?: SortOrder
  }

  export type participacionAvgOrderByAggregateInput = {
    id_participacion?: SortOrder
  }

  export type participacionMaxOrderByAggregateInput = {
    id_participacion?: SortOrder
    participacion?: SortOrder
  }

  export type participacionMinOrderByAggregateInput = {
    id_participacion?: SortOrder
    participacion?: SortOrder
  }

  export type participacionSumOrderByAggregateInput = {
    id_participacion?: SortOrder
  }

  export type Medicinas_recetadasListRelationFilter = {
    every?: medicinas_recetadasWhereInput
    some?: medicinas_recetadasWhereInput
    none?: medicinas_recetadasWhereInput
  }

  export type medicinas_recetadasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saludOrderByRelevanceInput = {
    fields: saludOrderByRelevanceFieldEnum | saludOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type saludCountOrderByAggregateInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    fecha_consulta?: SortOrder
    motivo_consulta?: SortOrder
    tratamiento?: SortOrder
    seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type saludAvgOrderByAggregateInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    seguimiento?: SortOrder
  }

  export type saludMaxOrderByAggregateInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    fecha_consulta?: SortOrder
    motivo_consulta?: SortOrder
    tratamiento?: SortOrder
    seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type saludMinOrderByAggregateInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    fecha_consulta?: SortOrder
    motivo_consulta?: SortOrder
    tratamiento?: SortOrder
    seguimiento?: SortOrder
    fecha_seguimiento?: SortOrder
  }

  export type saludSumOrderByAggregateInput = {
    id_salud?: SortOrder
    datos_id?: SortOrder
    seguimiento?: SortOrder
  }

  export type inventario_saludOrderByRelevanceInput = {
    fields: inventario_saludOrderByRelevanceFieldEnum | inventario_saludOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inventario_saludCountOrderByAggregateInput = {
    id_inventario_salud?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    dosis?: SortOrder
  }

  export type inventario_saludAvgOrderByAggregateInput = {
    id_inventario_salud?: SortOrder
    stock?: SortOrder
  }

  export type inventario_saludMaxOrderByAggregateInput = {
    id_inventario_salud?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    dosis?: SortOrder
  }

  export type inventario_saludMinOrderByAggregateInput = {
    id_inventario_salud?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    dosis?: SortOrder
  }

  export type inventario_saludSumOrderByAggregateInput = {
    id_inventario_salud?: SortOrder
    stock?: SortOrder
  }

  export type Inventario_saludScalarRelationFilter = {
    is?: inventario_saludWhereInput
    isNot?: inventario_saludWhereInput
  }

  export type SaludScalarRelationFilter = {
    is?: saludWhereInput
    isNot?: saludWhereInput
  }

  export type medicinas_recetadasOrderByRelevanceInput = {
    fields: medicinas_recetadasOrderByRelevanceFieldEnum | medicinas_recetadasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type medicinas_recetadasCountOrderByAggregateInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
    frecuencia?: SortOrder
    duracion?: SortOrder
  }

  export type medicinas_recetadasAvgOrderByAggregateInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
  }

  export type medicinas_recetadasMaxOrderByAggregateInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
    frecuencia?: SortOrder
    duracion?: SortOrder
  }

  export type medicinas_recetadasMinOrderByAggregateInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
    frecuencia?: SortOrder
    duracion?: SortOrder
  }

  export type medicinas_recetadasSumOrderByAggregateInput = {
    id_medicinas_recetadas?: SortOrder
    id_salud?: SortOrder
    id_inventario_salud?: SortOrder
  }

  export type datosCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<datosCreateWithoutAsistenciaInput, datosUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: datosCreateOrConnectWithoutAsistenciaInput
    connect?: datosWhereUniqueInput
  }

  export type participacionCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<participacionCreateWithoutAsistenciaInput, participacionUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: participacionCreateOrConnectWithoutAsistenciaInput
    connect?: participacionWhereUniqueInput
  }

  export type Enumasistencia_asistioFieldUpdateOperationsInput = {
    set?: $Enums.asistencia_asistio
  }

  export type datosUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<datosCreateWithoutAsistenciaInput, datosUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: datosCreateOrConnectWithoutAsistenciaInput
    upsert?: datosUpsertWithoutAsistenciaInput
    connect?: datosWhereUniqueInput
    update?: XOR<XOR<datosUpdateToOneWithWhereWithoutAsistenciaInput, datosUpdateWithoutAsistenciaInput>, datosUncheckedUpdateWithoutAsistenciaInput>
  }

  export type participacionUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<participacionCreateWithoutAsistenciaInput, participacionUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: participacionCreateOrConnectWithoutAsistenciaInput
    upsert?: participacionUpsertWithoutAsistenciaInput
    connect?: participacionWhereUniqueInput
    update?: XOR<XOR<participacionUpdateToOneWithWhereWithoutAsistenciaInput, participacionUpdateWithoutAsistenciaInput>, participacionUncheckedUpdateWithoutAsistenciaInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type estacaCreateNestedOneWithoutBarrioInput = {
    create?: XOR<estacaCreateWithoutBarrioInput, estacaUncheckedCreateWithoutBarrioInput>
    connectOrCreate?: estacaCreateOrConnectWithoutBarrioInput
    connect?: estacaWhereUniqueInput
  }

  export type datosCreateNestedManyWithoutBarrioInput = {
    create?: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput> | datosCreateWithoutBarrioInput[] | datosUncheckedCreateWithoutBarrioInput[]
    connectOrCreate?: datosCreateOrConnectWithoutBarrioInput | datosCreateOrConnectWithoutBarrioInput[]
    createMany?: datosCreateManyBarrioInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutBarrioInput = {
    create?: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput> | datosCreateWithoutBarrioInput[] | datosUncheckedCreateWithoutBarrioInput[]
    connectOrCreate?: datosCreateOrConnectWithoutBarrioInput | datosCreateOrConnectWithoutBarrioInput[]
    createMany?: datosCreateManyBarrioInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type estacaUpdateOneRequiredWithoutBarrioNestedInput = {
    create?: XOR<estacaCreateWithoutBarrioInput, estacaUncheckedCreateWithoutBarrioInput>
    connectOrCreate?: estacaCreateOrConnectWithoutBarrioInput
    upsert?: estacaUpsertWithoutBarrioInput
    connect?: estacaWhereUniqueInput
    update?: XOR<XOR<estacaUpdateToOneWithWhereWithoutBarrioInput, estacaUpdateWithoutBarrioInput>, estacaUncheckedUpdateWithoutBarrioInput>
  }

  export type datosUpdateManyWithoutBarrioNestedInput = {
    create?: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput> | datosCreateWithoutBarrioInput[] | datosUncheckedCreateWithoutBarrioInput[]
    connectOrCreate?: datosCreateOrConnectWithoutBarrioInput | datosCreateOrConnectWithoutBarrioInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutBarrioInput | datosUpsertWithWhereUniqueWithoutBarrioInput[]
    createMany?: datosCreateManyBarrioInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutBarrioInput | datosUpdateWithWhereUniqueWithoutBarrioInput[]
    updateMany?: datosUpdateManyWithWhereWithoutBarrioInput | datosUpdateManyWithWhereWithoutBarrioInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutBarrioNestedInput = {
    create?: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput> | datosCreateWithoutBarrioInput[] | datosUncheckedCreateWithoutBarrioInput[]
    connectOrCreate?: datosCreateOrConnectWithoutBarrioInput | datosCreateOrConnectWithoutBarrioInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutBarrioInput | datosUpsertWithWhereUniqueWithoutBarrioInput[]
    createMany?: datosCreateManyBarrioInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutBarrioInput | datosUpdateWithWhereUniqueWithoutBarrioInput[]
    updateMany?: datosUpdateManyWithWhereWithoutBarrioInput | datosUpdateManyWithWhereWithoutBarrioInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosCreateNestedManyWithoutCompInput = {
    create?: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput> | datosCreateWithoutCompInput[] | datosUncheckedCreateWithoutCompInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCompInput | datosCreateOrConnectWithoutCompInput[]
    createMany?: datosCreateManyCompInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutCompInput = {
    create?: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput> | datosCreateWithoutCompInput[] | datosUncheckedCreateWithoutCompInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCompInput | datosCreateOrConnectWithoutCompInput[]
    createMany?: datosCreateManyCompInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUpdateManyWithoutCompNestedInput = {
    create?: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput> | datosCreateWithoutCompInput[] | datosUncheckedCreateWithoutCompInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCompInput | datosCreateOrConnectWithoutCompInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutCompInput | datosUpsertWithWhereUniqueWithoutCompInput[]
    createMany?: datosCreateManyCompInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutCompInput | datosUpdateWithWhereUniqueWithoutCompInput[]
    updateMany?: datosUpdateManyWithWhereWithoutCompInput | datosUpdateManyWithWhereWithoutCompInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutCompNestedInput = {
    create?: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput> | datosCreateWithoutCompInput[] | datosUncheckedCreateWithoutCompInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCompInput | datosCreateOrConnectWithoutCompInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutCompInput | datosUpsertWithWhereUniqueWithoutCompInput[]
    createMany?: datosCreateManyCompInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutCompInput | datosUpdateWithWhereUniqueWithoutCompInput[]
    updateMany?: datosUpdateManyWithWhereWithoutCompInput | datosUpdateManyWithWhereWithoutCompInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type asistenciaCreateNestedManyWithoutDatosInput = {
    create?: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput> | asistenciaCreateWithoutDatosInput[] | asistenciaUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutDatosInput | asistenciaCreateOrConnectWithoutDatosInput[]
    createMany?: asistenciaCreateManyDatosInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type barrioCreateNestedOneWithoutDatosInput = {
    create?: XOR<barrioCreateWithoutDatosInput, barrioUncheckedCreateWithoutDatosInput>
    connectOrCreate?: barrioCreateOrConnectWithoutDatosInput
    connect?: barrioWhereUniqueInput
  }

  export type compCreateNestedOneWithoutDatosInput = {
    create?: XOR<compCreateWithoutDatosInput, compUncheckedCreateWithoutDatosInput>
    connectOrCreate?: compCreateOrConnectWithoutDatosInput
    connect?: compWhereUniqueInput
  }

  export type estacaCreateNestedOneWithoutDatosInput = {
    create?: XOR<estacaCreateWithoutDatosInput, estacaUncheckedCreateWithoutDatosInput>
    connectOrCreate?: estacaCreateOrConnectWithoutDatosInput
    connect?: estacaWhereUniqueInput
  }

  export type habitacionCreateNestedOneWithoutDatosInput = {
    create?: XOR<habitacionCreateWithoutDatosInput, habitacionUncheckedCreateWithoutDatosInput>
    connectOrCreate?: habitacionCreateOrConnectWithoutDatosInput
    connect?: habitacionWhereUniqueInput
  }

  export type saludCreateNestedManyWithoutDatosInput = {
    create?: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput> | saludCreateWithoutDatosInput[] | saludUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: saludCreateOrConnectWithoutDatosInput | saludCreateOrConnectWithoutDatosInput[]
    createMany?: saludCreateManyDatosInputEnvelope
    connect?: saludWhereUniqueInput | saludWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutDatosInput = {
    create?: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput> | asistenciaCreateWithoutDatosInput[] | asistenciaUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutDatosInput | asistenciaCreateOrConnectWithoutDatosInput[]
    createMany?: asistenciaCreateManyDatosInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type saludUncheckedCreateNestedManyWithoutDatosInput = {
    create?: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput> | saludCreateWithoutDatosInput[] | saludUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: saludCreateOrConnectWithoutDatosInput | saludCreateOrConnectWithoutDatosInput[]
    createMany?: saludCreateManyDatosInputEnvelope
    connect?: saludWhereUniqueInput | saludWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumdatos_tipoFieldUpdateOperationsInput = {
    set?: $Enums.datos_tipo
  }

  export type NullableEnumdatos_miembroFieldUpdateOperationsInput = {
    set?: $Enums.datos_miembro | null
  }

  export type NullableEnumdatos_dietaFieldUpdateOperationsInput = {
    set?: $Enums.datos_dieta | null
  }

  export type NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput = {
    set?: $Enums.datos_alergia_alimento | null
  }

  export type NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput = {
    set?: $Enums.datos_alergia_medicamento | null
  }

  export type NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput = {
    set?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type asistenciaUpdateManyWithoutDatosNestedInput = {
    create?: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput> | asistenciaCreateWithoutDatosInput[] | asistenciaUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutDatosInput | asistenciaCreateOrConnectWithoutDatosInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutDatosInput | asistenciaUpsertWithWhereUniqueWithoutDatosInput[]
    createMany?: asistenciaCreateManyDatosInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutDatosInput | asistenciaUpdateWithWhereUniqueWithoutDatosInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutDatosInput | asistenciaUpdateManyWithWhereWithoutDatosInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type barrioUpdateOneRequiredWithoutDatosNestedInput = {
    create?: XOR<barrioCreateWithoutDatosInput, barrioUncheckedCreateWithoutDatosInput>
    connectOrCreate?: barrioCreateOrConnectWithoutDatosInput
    upsert?: barrioUpsertWithoutDatosInput
    connect?: barrioWhereUniqueInput
    update?: XOR<XOR<barrioUpdateToOneWithWhereWithoutDatosInput, barrioUpdateWithoutDatosInput>, barrioUncheckedUpdateWithoutDatosInput>
  }

  export type compUpdateOneRequiredWithoutDatosNestedInput = {
    create?: XOR<compCreateWithoutDatosInput, compUncheckedCreateWithoutDatosInput>
    connectOrCreate?: compCreateOrConnectWithoutDatosInput
    upsert?: compUpsertWithoutDatosInput
    connect?: compWhereUniqueInput
    update?: XOR<XOR<compUpdateToOneWithWhereWithoutDatosInput, compUpdateWithoutDatosInput>, compUncheckedUpdateWithoutDatosInput>
  }

  export type estacaUpdateOneRequiredWithoutDatosNestedInput = {
    create?: XOR<estacaCreateWithoutDatosInput, estacaUncheckedCreateWithoutDatosInput>
    connectOrCreate?: estacaCreateOrConnectWithoutDatosInput
    upsert?: estacaUpsertWithoutDatosInput
    connect?: estacaWhereUniqueInput
    update?: XOR<XOR<estacaUpdateToOneWithWhereWithoutDatosInput, estacaUpdateWithoutDatosInput>, estacaUncheckedUpdateWithoutDatosInput>
  }

  export type habitacionUpdateOneRequiredWithoutDatosNestedInput = {
    create?: XOR<habitacionCreateWithoutDatosInput, habitacionUncheckedCreateWithoutDatosInput>
    connectOrCreate?: habitacionCreateOrConnectWithoutDatosInput
    upsert?: habitacionUpsertWithoutDatosInput
    connect?: habitacionWhereUniqueInput
    update?: XOR<XOR<habitacionUpdateToOneWithWhereWithoutDatosInput, habitacionUpdateWithoutDatosInput>, habitacionUncheckedUpdateWithoutDatosInput>
  }

  export type saludUpdateManyWithoutDatosNestedInput = {
    create?: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput> | saludCreateWithoutDatosInput[] | saludUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: saludCreateOrConnectWithoutDatosInput | saludCreateOrConnectWithoutDatosInput[]
    upsert?: saludUpsertWithWhereUniqueWithoutDatosInput | saludUpsertWithWhereUniqueWithoutDatosInput[]
    createMany?: saludCreateManyDatosInputEnvelope
    set?: saludWhereUniqueInput | saludWhereUniqueInput[]
    disconnect?: saludWhereUniqueInput | saludWhereUniqueInput[]
    delete?: saludWhereUniqueInput | saludWhereUniqueInput[]
    connect?: saludWhereUniqueInput | saludWhereUniqueInput[]
    update?: saludUpdateWithWhereUniqueWithoutDatosInput | saludUpdateWithWhereUniqueWithoutDatosInput[]
    updateMany?: saludUpdateManyWithWhereWithoutDatosInput | saludUpdateManyWithWhereWithoutDatosInput[]
    deleteMany?: saludScalarWhereInput | saludScalarWhereInput[]
  }

  export type asistenciaUncheckedUpdateManyWithoutDatosNestedInput = {
    create?: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput> | asistenciaCreateWithoutDatosInput[] | asistenciaUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutDatosInput | asistenciaCreateOrConnectWithoutDatosInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutDatosInput | asistenciaUpsertWithWhereUniqueWithoutDatosInput[]
    createMany?: asistenciaCreateManyDatosInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutDatosInput | asistenciaUpdateWithWhereUniqueWithoutDatosInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutDatosInput | asistenciaUpdateManyWithWhereWithoutDatosInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type saludUncheckedUpdateManyWithoutDatosNestedInput = {
    create?: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput> | saludCreateWithoutDatosInput[] | saludUncheckedCreateWithoutDatosInput[]
    connectOrCreate?: saludCreateOrConnectWithoutDatosInput | saludCreateOrConnectWithoutDatosInput[]
    upsert?: saludUpsertWithWhereUniqueWithoutDatosInput | saludUpsertWithWhereUniqueWithoutDatosInput[]
    createMany?: saludCreateManyDatosInputEnvelope
    set?: saludWhereUniqueInput | saludWhereUniqueInput[]
    disconnect?: saludWhereUniqueInput | saludWhereUniqueInput[]
    delete?: saludWhereUniqueInput | saludWhereUniqueInput[]
    connect?: saludWhereUniqueInput | saludWhereUniqueInput[]
    update?: saludUpdateWithWhereUniqueWithoutDatosInput | saludUpdateWithWhereUniqueWithoutDatosInput[]
    updateMany?: saludUpdateManyWithWhereWithoutDatosInput | saludUpdateManyWithWhereWithoutDatosInput[]
    deleteMany?: saludScalarWhereInput | saludScalarWhereInput[]
  }

  export type barrioCreateNestedManyWithoutEstacaInput = {
    create?: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput> | barrioCreateWithoutEstacaInput[] | barrioUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: barrioCreateOrConnectWithoutEstacaInput | barrioCreateOrConnectWithoutEstacaInput[]
    createMany?: barrioCreateManyEstacaInputEnvelope
    connect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
  }

  export type datosCreateNestedManyWithoutEstacaInput = {
    create?: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput> | datosCreateWithoutEstacaInput[] | datosUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: datosCreateOrConnectWithoutEstacaInput | datosCreateOrConnectWithoutEstacaInput[]
    createMany?: datosCreateManyEstacaInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type barrioUncheckedCreateNestedManyWithoutEstacaInput = {
    create?: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput> | barrioCreateWithoutEstacaInput[] | barrioUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: barrioCreateOrConnectWithoutEstacaInput | barrioCreateOrConnectWithoutEstacaInput[]
    createMany?: barrioCreateManyEstacaInputEnvelope
    connect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutEstacaInput = {
    create?: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput> | datosCreateWithoutEstacaInput[] | datosUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: datosCreateOrConnectWithoutEstacaInput | datosCreateOrConnectWithoutEstacaInput[]
    createMany?: datosCreateManyEstacaInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type barrioUpdateManyWithoutEstacaNestedInput = {
    create?: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput> | barrioCreateWithoutEstacaInput[] | barrioUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: barrioCreateOrConnectWithoutEstacaInput | barrioCreateOrConnectWithoutEstacaInput[]
    upsert?: barrioUpsertWithWhereUniqueWithoutEstacaInput | barrioUpsertWithWhereUniqueWithoutEstacaInput[]
    createMany?: barrioCreateManyEstacaInputEnvelope
    set?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    disconnect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    delete?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    connect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    update?: barrioUpdateWithWhereUniqueWithoutEstacaInput | barrioUpdateWithWhereUniqueWithoutEstacaInput[]
    updateMany?: barrioUpdateManyWithWhereWithoutEstacaInput | barrioUpdateManyWithWhereWithoutEstacaInput[]
    deleteMany?: barrioScalarWhereInput | barrioScalarWhereInput[]
  }

  export type datosUpdateManyWithoutEstacaNestedInput = {
    create?: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput> | datosCreateWithoutEstacaInput[] | datosUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: datosCreateOrConnectWithoutEstacaInput | datosCreateOrConnectWithoutEstacaInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutEstacaInput | datosUpsertWithWhereUniqueWithoutEstacaInput[]
    createMany?: datosCreateManyEstacaInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutEstacaInput | datosUpdateWithWhereUniqueWithoutEstacaInput[]
    updateMany?: datosUpdateManyWithWhereWithoutEstacaInput | datosUpdateManyWithWhereWithoutEstacaInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type barrioUncheckedUpdateManyWithoutEstacaNestedInput = {
    create?: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput> | barrioCreateWithoutEstacaInput[] | barrioUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: barrioCreateOrConnectWithoutEstacaInput | barrioCreateOrConnectWithoutEstacaInput[]
    upsert?: barrioUpsertWithWhereUniqueWithoutEstacaInput | barrioUpsertWithWhereUniqueWithoutEstacaInput[]
    createMany?: barrioCreateManyEstacaInputEnvelope
    set?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    disconnect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    delete?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    connect?: barrioWhereUniqueInput | barrioWhereUniqueInput[]
    update?: barrioUpdateWithWhereUniqueWithoutEstacaInput | barrioUpdateWithWhereUniqueWithoutEstacaInput[]
    updateMany?: barrioUpdateManyWithWhereWithoutEstacaInput | barrioUpdateManyWithWhereWithoutEstacaInput[]
    deleteMany?: barrioScalarWhereInput | barrioScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutEstacaNestedInput = {
    create?: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput> | datosCreateWithoutEstacaInput[] | datosUncheckedCreateWithoutEstacaInput[]
    connectOrCreate?: datosCreateOrConnectWithoutEstacaInput | datosCreateOrConnectWithoutEstacaInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutEstacaInput | datosUpsertWithWhereUniqueWithoutEstacaInput[]
    createMany?: datosCreateManyEstacaInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutEstacaInput | datosUpdateWithWhereUniqueWithoutEstacaInput[]
    updateMany?: datosUpdateManyWithWhereWithoutEstacaInput | datosUpdateManyWithWhereWithoutEstacaInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput> | datosCreateWithoutHabitacionInput[] | datosUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: datosCreateOrConnectWithoutHabitacionInput | datosCreateOrConnectWithoutHabitacionInput[]
    createMany?: datosCreateManyHabitacionInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput> | datosCreateWithoutHabitacionInput[] | datosUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: datosCreateOrConnectWithoutHabitacionInput | datosCreateOrConnectWithoutHabitacionInput[]
    createMany?: datosCreateManyHabitacionInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput> | datosCreateWithoutHabitacionInput[] | datosUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: datosCreateOrConnectWithoutHabitacionInput | datosCreateOrConnectWithoutHabitacionInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutHabitacionInput | datosUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: datosCreateManyHabitacionInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutHabitacionInput | datosUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: datosUpdateManyWithWhereWithoutHabitacionInput | datosUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput> | datosCreateWithoutHabitacionInput[] | datosUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: datosCreateOrConnectWithoutHabitacionInput | datosCreateOrConnectWithoutHabitacionInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutHabitacionInput | datosUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: datosCreateManyHabitacionInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutHabitacionInput | datosUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: datosUpdateManyWithWhereWithoutHabitacionInput | datosUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type asistenciaCreateNestedManyWithoutParticipacionInput = {
    create?: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput> | asistenciaCreateWithoutParticipacionInput[] | asistenciaUncheckedCreateWithoutParticipacionInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutParticipacionInput | asistenciaCreateOrConnectWithoutParticipacionInput[]
    createMany?: asistenciaCreateManyParticipacionInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutParticipacionInput = {
    create?: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput> | asistenciaCreateWithoutParticipacionInput[] | asistenciaUncheckedCreateWithoutParticipacionInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutParticipacionInput | asistenciaCreateOrConnectWithoutParticipacionInput[]
    createMany?: asistenciaCreateManyParticipacionInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type asistenciaUpdateManyWithoutParticipacionNestedInput = {
    create?: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput> | asistenciaCreateWithoutParticipacionInput[] | asistenciaUncheckedCreateWithoutParticipacionInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutParticipacionInput | asistenciaCreateOrConnectWithoutParticipacionInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutParticipacionInput | asistenciaUpsertWithWhereUniqueWithoutParticipacionInput[]
    createMany?: asistenciaCreateManyParticipacionInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutParticipacionInput | asistenciaUpdateWithWhereUniqueWithoutParticipacionInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutParticipacionInput | asistenciaUpdateManyWithWhereWithoutParticipacionInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type asistenciaUncheckedUpdateManyWithoutParticipacionNestedInput = {
    create?: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput> | asistenciaCreateWithoutParticipacionInput[] | asistenciaUncheckedCreateWithoutParticipacionInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutParticipacionInput | asistenciaCreateOrConnectWithoutParticipacionInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutParticipacionInput | asistenciaUpsertWithWhereUniqueWithoutParticipacionInput[]
    createMany?: asistenciaCreateManyParticipacionInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutParticipacionInput | asistenciaUpdateWithWhereUniqueWithoutParticipacionInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutParticipacionInput | asistenciaUpdateManyWithWhereWithoutParticipacionInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type medicinas_recetadasCreateNestedManyWithoutSaludInput = {
    create?: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput> | medicinas_recetadasCreateWithoutSaludInput[] | medicinas_recetadasUncheckedCreateWithoutSaludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutSaludInput | medicinas_recetadasCreateOrConnectWithoutSaludInput[]
    createMany?: medicinas_recetadasCreateManySaludInputEnvelope
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
  }

  export type datosCreateNestedOneWithoutSaludInput = {
    create?: XOR<datosCreateWithoutSaludInput, datosUncheckedCreateWithoutSaludInput>
    connectOrCreate?: datosCreateOrConnectWithoutSaludInput
    connect?: datosWhereUniqueInput
  }

  export type medicinas_recetadasUncheckedCreateNestedManyWithoutSaludInput = {
    create?: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput> | medicinas_recetadasCreateWithoutSaludInput[] | medicinas_recetadasUncheckedCreateWithoutSaludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutSaludInput | medicinas_recetadasCreateOrConnectWithoutSaludInput[]
    createMany?: medicinas_recetadasCreateManySaludInputEnvelope
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
  }

  export type medicinas_recetadasUpdateManyWithoutSaludNestedInput = {
    create?: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput> | medicinas_recetadasCreateWithoutSaludInput[] | medicinas_recetadasUncheckedCreateWithoutSaludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutSaludInput | medicinas_recetadasCreateOrConnectWithoutSaludInput[]
    upsert?: medicinas_recetadasUpsertWithWhereUniqueWithoutSaludInput | medicinas_recetadasUpsertWithWhereUniqueWithoutSaludInput[]
    createMany?: medicinas_recetadasCreateManySaludInputEnvelope
    set?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    disconnect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    delete?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    update?: medicinas_recetadasUpdateWithWhereUniqueWithoutSaludInput | medicinas_recetadasUpdateWithWhereUniqueWithoutSaludInput[]
    updateMany?: medicinas_recetadasUpdateManyWithWhereWithoutSaludInput | medicinas_recetadasUpdateManyWithWhereWithoutSaludInput[]
    deleteMany?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
  }

  export type datosUpdateOneRequiredWithoutSaludNestedInput = {
    create?: XOR<datosCreateWithoutSaludInput, datosUncheckedCreateWithoutSaludInput>
    connectOrCreate?: datosCreateOrConnectWithoutSaludInput
    upsert?: datosUpsertWithoutSaludInput
    connect?: datosWhereUniqueInput
    update?: XOR<XOR<datosUpdateToOneWithWhereWithoutSaludInput, datosUpdateWithoutSaludInput>, datosUncheckedUpdateWithoutSaludInput>
  }

  export type medicinas_recetadasUncheckedUpdateManyWithoutSaludNestedInput = {
    create?: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput> | medicinas_recetadasCreateWithoutSaludInput[] | medicinas_recetadasUncheckedCreateWithoutSaludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutSaludInput | medicinas_recetadasCreateOrConnectWithoutSaludInput[]
    upsert?: medicinas_recetadasUpsertWithWhereUniqueWithoutSaludInput | medicinas_recetadasUpsertWithWhereUniqueWithoutSaludInput[]
    createMany?: medicinas_recetadasCreateManySaludInputEnvelope
    set?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    disconnect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    delete?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    update?: medicinas_recetadasUpdateWithWhereUniqueWithoutSaludInput | medicinas_recetadasUpdateWithWhereUniqueWithoutSaludInput[]
    updateMany?: medicinas_recetadasUpdateManyWithWhereWithoutSaludInput | medicinas_recetadasUpdateManyWithWhereWithoutSaludInput[]
    deleteMany?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
  }

  export type medicinas_recetadasCreateNestedManyWithoutInventario_saludInput = {
    create?: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput> | medicinas_recetadasCreateWithoutInventario_saludInput[] | medicinas_recetadasUncheckedCreateWithoutInventario_saludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutInventario_saludInput | medicinas_recetadasCreateOrConnectWithoutInventario_saludInput[]
    createMany?: medicinas_recetadasCreateManyInventario_saludInputEnvelope
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
  }

  export type medicinas_recetadasUncheckedCreateNestedManyWithoutInventario_saludInput = {
    create?: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput> | medicinas_recetadasCreateWithoutInventario_saludInput[] | medicinas_recetadasUncheckedCreateWithoutInventario_saludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutInventario_saludInput | medicinas_recetadasCreateOrConnectWithoutInventario_saludInput[]
    createMany?: medicinas_recetadasCreateManyInventario_saludInputEnvelope
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
  }

  export type medicinas_recetadasUpdateManyWithoutInventario_saludNestedInput = {
    create?: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput> | medicinas_recetadasCreateWithoutInventario_saludInput[] | medicinas_recetadasUncheckedCreateWithoutInventario_saludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutInventario_saludInput | medicinas_recetadasCreateOrConnectWithoutInventario_saludInput[]
    upsert?: medicinas_recetadasUpsertWithWhereUniqueWithoutInventario_saludInput | medicinas_recetadasUpsertWithWhereUniqueWithoutInventario_saludInput[]
    createMany?: medicinas_recetadasCreateManyInventario_saludInputEnvelope
    set?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    disconnect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    delete?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    update?: medicinas_recetadasUpdateWithWhereUniqueWithoutInventario_saludInput | medicinas_recetadasUpdateWithWhereUniqueWithoutInventario_saludInput[]
    updateMany?: medicinas_recetadasUpdateManyWithWhereWithoutInventario_saludInput | medicinas_recetadasUpdateManyWithWhereWithoutInventario_saludInput[]
    deleteMany?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
  }

  export type medicinas_recetadasUncheckedUpdateManyWithoutInventario_saludNestedInput = {
    create?: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput> | medicinas_recetadasCreateWithoutInventario_saludInput[] | medicinas_recetadasUncheckedCreateWithoutInventario_saludInput[]
    connectOrCreate?: medicinas_recetadasCreateOrConnectWithoutInventario_saludInput | medicinas_recetadasCreateOrConnectWithoutInventario_saludInput[]
    upsert?: medicinas_recetadasUpsertWithWhereUniqueWithoutInventario_saludInput | medicinas_recetadasUpsertWithWhereUniqueWithoutInventario_saludInput[]
    createMany?: medicinas_recetadasCreateManyInventario_saludInputEnvelope
    set?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    disconnect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    delete?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    connect?: medicinas_recetadasWhereUniqueInput | medicinas_recetadasWhereUniqueInput[]
    update?: medicinas_recetadasUpdateWithWhereUniqueWithoutInventario_saludInput | medicinas_recetadasUpdateWithWhereUniqueWithoutInventario_saludInput[]
    updateMany?: medicinas_recetadasUpdateManyWithWhereWithoutInventario_saludInput | medicinas_recetadasUpdateManyWithWhereWithoutInventario_saludInput[]
    deleteMany?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
  }

  export type inventario_saludCreateNestedOneWithoutMedicinas_recetadasInput = {
    create?: XOR<inventario_saludCreateWithoutMedicinas_recetadasInput, inventario_saludUncheckedCreateWithoutMedicinas_recetadasInput>
    connectOrCreate?: inventario_saludCreateOrConnectWithoutMedicinas_recetadasInput
    connect?: inventario_saludWhereUniqueInput
  }

  export type saludCreateNestedOneWithoutMedicinas_recetadasInput = {
    create?: XOR<saludCreateWithoutMedicinas_recetadasInput, saludUncheckedCreateWithoutMedicinas_recetadasInput>
    connectOrCreate?: saludCreateOrConnectWithoutMedicinas_recetadasInput
    connect?: saludWhereUniqueInput
  }

  export type inventario_saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput = {
    create?: XOR<inventario_saludCreateWithoutMedicinas_recetadasInput, inventario_saludUncheckedCreateWithoutMedicinas_recetadasInput>
    connectOrCreate?: inventario_saludCreateOrConnectWithoutMedicinas_recetadasInput
    upsert?: inventario_saludUpsertWithoutMedicinas_recetadasInput
    connect?: inventario_saludWhereUniqueInput
    update?: XOR<XOR<inventario_saludUpdateToOneWithWhereWithoutMedicinas_recetadasInput, inventario_saludUpdateWithoutMedicinas_recetadasInput>, inventario_saludUncheckedUpdateWithoutMedicinas_recetadasInput>
  }

  export type saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput = {
    create?: XOR<saludCreateWithoutMedicinas_recetadasInput, saludUncheckedCreateWithoutMedicinas_recetadasInput>
    connectOrCreate?: saludCreateOrConnectWithoutMedicinas_recetadasInput
    upsert?: saludUpsertWithoutMedicinas_recetadasInput
    connect?: saludWhereUniqueInput
    update?: XOR<XOR<saludUpdateToOneWithWhereWithoutMedicinas_recetadasInput, saludUpdateWithoutMedicinas_recetadasInput>, saludUncheckedUpdateWithoutMedicinas_recetadasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumasistencia_asistioFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_asistio | Enumasistencia_asistioFieldRefInput<$PrismaModel>
    in?: $Enums.asistencia_asistio[]
    notIn?: $Enums.asistencia_asistio[]
    not?: NestedEnumasistencia_asistioFilter<$PrismaModel> | $Enums.asistencia_asistio
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumasistencia_asistioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_asistio | Enumasistencia_asistioFieldRefInput<$PrismaModel>
    in?: $Enums.asistencia_asistio[]
    notIn?: $Enums.asistencia_asistio[]
    not?: NestedEnumasistencia_asistioWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_asistio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumasistencia_asistioFilter<$PrismaModel>
    _max?: NestedEnumasistencia_asistioFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumdatos_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_tipo | Enumdatos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.datos_tipo[]
    notIn?: $Enums.datos_tipo[]
    not?: NestedEnumdatos_tipoFilter<$PrismaModel> | $Enums.datos_tipo
  }

  export type NestedEnumdatos_miembroNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_miembro | Enumdatos_miembroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_miembro[] | null
    notIn?: $Enums.datos_miembro[] | null
    not?: NestedEnumdatos_miembroNullableFilter<$PrismaModel> | $Enums.datos_miembro | null
  }

  export type NestedEnumdatos_dietaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_dieta | Enumdatos_dietaFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_dieta[] | null
    notIn?: $Enums.datos_dieta[] | null
    not?: NestedEnumdatos_dietaNullableFilter<$PrismaModel> | $Enums.datos_dieta | null
  }

  export type NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_alimento | Enumdatos_alergia_alimentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_alimento[] | null
    notIn?: $Enums.datos_alergia_alimento[] | null
    not?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel> | $Enums.datos_alergia_alimento | null
  }

  export type NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_medicamento | Enumdatos_alergia_medicamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_medicamento[] | null
    notIn?: $Enums.datos_alergia_medicamento[] | null
    not?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel> | $Enums.datos_alergia_medicamento | null
  }

  export type NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_polvo_pelos_acaro | Enumdatos_alergia_polvo_pelos_acaroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    notIn?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    not?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel> | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumdatos_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_tipo | Enumdatos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.datos_tipo[]
    notIn?: $Enums.datos_tipo[]
    not?: NestedEnumdatos_tipoWithAggregatesFilter<$PrismaModel> | $Enums.datos_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdatos_tipoFilter<$PrismaModel>
    _max?: NestedEnumdatos_tipoFilter<$PrismaModel>
  }

  export type NestedEnumdatos_miembroNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_miembro | Enumdatos_miembroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_miembro[] | null
    notIn?: $Enums.datos_miembro[] | null
    not?: NestedEnumdatos_miembroNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_miembro | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_miembroNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_miembroNullableFilter<$PrismaModel>
  }

  export type NestedEnumdatos_dietaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_dieta | Enumdatos_dietaFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_dieta[] | null
    notIn?: $Enums.datos_dieta[] | null
    not?: NestedEnumdatos_dietaNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_dieta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_dietaNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_dietaNullableFilter<$PrismaModel>
  }

  export type NestedEnumdatos_alergia_alimentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_alimento | Enumdatos_alergia_alimentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_alimento[] | null
    notIn?: $Enums.datos_alergia_alimento[] | null
    not?: NestedEnumdatos_alergia_alimentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_alimento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_alimentoNullableFilter<$PrismaModel>
  }

  export type NestedEnumdatos_alergia_medicamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_medicamento | Enumdatos_alergia_medicamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_medicamento[] | null
    notIn?: $Enums.datos_alergia_medicamento[] | null
    not?: NestedEnumdatos_alergia_medicamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_medicamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_medicamentoNullableFilter<$PrismaModel>
  }

  export type NestedEnumdatos_alergia_polvo_pelos_acaroNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.datos_alergia_polvo_pelos_acaro | Enumdatos_alergia_polvo_pelos_acaroFieldRefInput<$PrismaModel> | null
    in?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    notIn?: $Enums.datos_alergia_polvo_pelos_acaro[] | null
    not?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableWithAggregatesFilter<$PrismaModel> | $Enums.datos_alergia_polvo_pelos_acaro | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel>
    _max?: NestedEnumdatos_alergia_polvo_pelos_acaroNullableFilter<$PrismaModel>
  }

  export type datosCreateWithoutAsistenciaInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    barrio: barrioCreateNestedOneWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutAsistenciaInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutAsistenciaInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutAsistenciaInput, datosUncheckedCreateWithoutAsistenciaInput>
  }

  export type participacionCreateWithoutAsistenciaInput = {
    id_participacion: number
    participacion: string
  }

  export type participacionUncheckedCreateWithoutAsistenciaInput = {
    id_participacion: number
    participacion: string
  }

  export type participacionCreateOrConnectWithoutAsistenciaInput = {
    where: participacionWhereUniqueInput
    create: XOR<participacionCreateWithoutAsistenciaInput, participacionUncheckedCreateWithoutAsistenciaInput>
  }

  export type datosUpsertWithoutAsistenciaInput = {
    update: XOR<datosUpdateWithoutAsistenciaInput, datosUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<datosCreateWithoutAsistenciaInput, datosUncheckedCreateWithoutAsistenciaInput>
    where?: datosWhereInput
  }

  export type datosUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: datosWhereInput
    data: XOR<datosUpdateWithoutAsistenciaInput, datosUncheckedUpdateWithoutAsistenciaInput>
  }

  export type datosUpdateWithoutAsistenciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutAsistenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type participacionUpsertWithoutAsistenciaInput = {
    update: XOR<participacionUpdateWithoutAsistenciaInput, participacionUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<participacionCreateWithoutAsistenciaInput, participacionUncheckedCreateWithoutAsistenciaInput>
    where?: participacionWhereInput
  }

  export type participacionUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: participacionWhereInput
    data: XOR<participacionUpdateWithoutAsistenciaInput, participacionUncheckedUpdateWithoutAsistenciaInput>
  }

  export type participacionUpdateWithoutAsistenciaInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
  }

  export type participacionUncheckedUpdateWithoutAsistenciaInput = {
    id_participacion?: IntFieldUpdateOperationsInput | number
    participacion?: StringFieldUpdateOperationsInput | string
  }

  export type estacaCreateWithoutBarrioInput = {
    estaca: string
    datos?: datosCreateNestedManyWithoutEstacaInput
  }

  export type estacaUncheckedCreateWithoutBarrioInput = {
    id_estaca?: number
    estaca: string
    datos?: datosUncheckedCreateNestedManyWithoutEstacaInput
  }

  export type estacaCreateOrConnectWithoutBarrioInput = {
    where: estacaWhereUniqueInput
    create: XOR<estacaCreateWithoutBarrioInput, estacaUncheckedCreateWithoutBarrioInput>
  }

  export type datosCreateWithoutBarrioInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutBarrioInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutBarrioInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput>
  }

  export type datosCreateManyBarrioInputEnvelope = {
    data: datosCreateManyBarrioInput | datosCreateManyBarrioInput[]
    skipDuplicates?: boolean
  }

  export type estacaUpsertWithoutBarrioInput = {
    update: XOR<estacaUpdateWithoutBarrioInput, estacaUncheckedUpdateWithoutBarrioInput>
    create: XOR<estacaCreateWithoutBarrioInput, estacaUncheckedCreateWithoutBarrioInput>
    where?: estacaWhereInput
  }

  export type estacaUpdateToOneWithWhereWithoutBarrioInput = {
    where?: estacaWhereInput
    data: XOR<estacaUpdateWithoutBarrioInput, estacaUncheckedUpdateWithoutBarrioInput>
  }

  export type estacaUpdateWithoutBarrioInput = {
    estaca?: StringFieldUpdateOperationsInput | string
    datos?: datosUpdateManyWithoutEstacaNestedInput
  }

  export type estacaUncheckedUpdateWithoutBarrioInput = {
    id_estaca?: IntFieldUpdateOperationsInput | number
    estaca?: StringFieldUpdateOperationsInput | string
    datos?: datosUncheckedUpdateManyWithoutEstacaNestedInput
  }

  export type datosUpsertWithWhereUniqueWithoutBarrioInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutBarrioInput, datosUncheckedUpdateWithoutBarrioInput>
    create: XOR<datosCreateWithoutBarrioInput, datosUncheckedCreateWithoutBarrioInput>
  }

  export type datosUpdateWithWhereUniqueWithoutBarrioInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutBarrioInput, datosUncheckedUpdateWithoutBarrioInput>
  }

  export type datosUpdateManyWithWhereWithoutBarrioInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutBarrioInput>
  }

  export type datosScalarWhereInput = {
    AND?: datosScalarWhereInput | datosScalarWhereInput[]
    OR?: datosScalarWhereInput[]
    NOT?: datosScalarWhereInput | datosScalarWhereInput[]
    id?: IntFilter<"datos"> | number
    nombre?: StringFilter<"datos"> | string
    apellido?: StringFilter<"datos"> | string
    edad?: IntFilter<"datos"> | number
    nacimiento?: DateTimeNullableFilter<"datos"> | Date | string | null
    id_estaca?: IntFilter<"datos"> | number
    id_barrio?: IntFilter<"datos"> | number
    id_comp?: IntFilter<"datos"> | number
    id_habitacion?: IntFilter<"datos"> | number
    telefono?: StringNullableFilter<"datos"> | string | null
    sexo?: StringFilter<"datos"> | string
    tipo?: Enumdatos_tipoFilter<"datos"> | $Enums.datos_tipo
    correo?: StringNullableFilter<"datos"> | string | null
    talla?: StringNullableFilter<"datos"> | string | null
    nom_c1?: StringNullableFilter<"datos"> | string | null
    telef_c1?: StringNullableFilter<"datos"> | string | null
    grupo_sang?: StringNullableFilter<"datos"> | string | null
    miembro?: Enumdatos_miembroNullableFilter<"datos"> | $Enums.datos_miembro | null
    enf_cronica?: StringNullableFilter<"datos"> | string | null
    trat_med?: StringNullableFilter<"datos"> | string | null
    seguro?: StringNullableFilter<"datos"> | string | null
    alergia_med?: StringNullableFilter<"datos"> | string | null
    dieta?: Enumdatos_dietaNullableFilter<"datos"> | $Enums.datos_dieta | null
    obs_dieta?: StringNullableFilter<"datos"> | string | null
    alergia_alimento?: Enumdatos_alergia_alimentoNullableFilter<"datos"> | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: Enumdatos_alergia_medicamentoNullableFilter<"datos"> | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: Enumdatos_alergia_polvo_pelos_acaroNullableFilter<"datos"> | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosCreateWithoutCompInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    barrio: barrioCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutCompInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutCompInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput>
  }

  export type datosCreateManyCompInputEnvelope = {
    data: datosCreateManyCompInput | datosCreateManyCompInput[]
    skipDuplicates?: boolean
  }

  export type datosUpsertWithWhereUniqueWithoutCompInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutCompInput, datosUncheckedUpdateWithoutCompInput>
    create: XOR<datosCreateWithoutCompInput, datosUncheckedCreateWithoutCompInput>
  }

  export type datosUpdateWithWhereUniqueWithoutCompInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutCompInput, datosUncheckedUpdateWithoutCompInput>
  }

  export type datosUpdateManyWithWhereWithoutCompInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutCompInput>
  }

  export type asistenciaCreateWithoutDatosInput = {
    asistio: $Enums.asistencia_asistio
    participacion: participacionCreateNestedOneWithoutAsistenciaInput
  }

  export type asistenciaUncheckedCreateWithoutDatosInput = {
    id_asistencia?: number
    asistio: $Enums.asistencia_asistio
    id_participacion: number
  }

  export type asistenciaCreateOrConnectWithoutDatosInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput>
  }

  export type asistenciaCreateManyDatosInputEnvelope = {
    data: asistenciaCreateManyDatosInput | asistenciaCreateManyDatosInput[]
    skipDuplicates?: boolean
  }

  export type barrioCreateWithoutDatosInput = {
    barrio: string
    estaca: estacaCreateNestedOneWithoutBarrioInput
  }

  export type barrioUncheckedCreateWithoutDatosInput = {
    id_barrio?: number
    id_estaca: number
    barrio: string
  }

  export type barrioCreateOrConnectWithoutDatosInput = {
    where: barrioWhereUniqueInput
    create: XOR<barrioCreateWithoutDatosInput, barrioUncheckedCreateWithoutDatosInput>
  }

  export type compCreateWithoutDatosInput = {
    comp: string
  }

  export type compUncheckedCreateWithoutDatosInput = {
    id_comp?: number
    comp: string
  }

  export type compCreateOrConnectWithoutDatosInput = {
    where: compWhereUniqueInput
    create: XOR<compCreateWithoutDatosInput, compUncheckedCreateWithoutDatosInput>
  }

  export type estacaCreateWithoutDatosInput = {
    estaca: string
    barrio?: barrioCreateNestedManyWithoutEstacaInput
  }

  export type estacaUncheckedCreateWithoutDatosInput = {
    id_estaca?: number
    estaca: string
    barrio?: barrioUncheckedCreateNestedManyWithoutEstacaInput
  }

  export type estacaCreateOrConnectWithoutDatosInput = {
    where: estacaWhereUniqueInput
    create: XOR<estacaCreateWithoutDatosInput, estacaUncheckedCreateWithoutDatosInput>
  }

  export type habitacionCreateWithoutDatosInput = {
    habitacion: string
    capacidad: string
  }

  export type habitacionUncheckedCreateWithoutDatosInput = {
    id_habitacion?: number
    habitacion: string
    capacidad: string
  }

  export type habitacionCreateOrConnectWithoutDatosInput = {
    where: habitacionWhereUniqueInput
    create: XOR<habitacionCreateWithoutDatosInput, habitacionUncheckedCreateWithoutDatosInput>
  }

  export type saludCreateWithoutDatosInput = {
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
    medicinas_recetadas?: medicinas_recetadasCreateNestedManyWithoutSaludInput
  }

  export type saludUncheckedCreateWithoutDatosInput = {
    id_salud?: number
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedCreateNestedManyWithoutSaludInput
  }

  export type saludCreateOrConnectWithoutDatosInput = {
    where: saludWhereUniqueInput
    create: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput>
  }

  export type saludCreateManyDatosInputEnvelope = {
    data: saludCreateManyDatosInput | saludCreateManyDatosInput[]
    skipDuplicates?: boolean
  }

  export type asistenciaUpsertWithWhereUniqueWithoutDatosInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutDatosInput, asistenciaUncheckedUpdateWithoutDatosInput>
    create: XOR<asistenciaCreateWithoutDatosInput, asistenciaUncheckedCreateWithoutDatosInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutDatosInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutDatosInput, asistenciaUncheckedUpdateWithoutDatosInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutDatosInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutDatosInput>
  }

  export type asistenciaScalarWhereInput = {
    AND?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    OR?: asistenciaScalarWhereInput[]
    NOT?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    id_asistencia?: IntFilter<"asistencia"> | number
    datos_id?: IntFilter<"asistencia"> | number
    asistio?: Enumasistencia_asistioFilter<"asistencia"> | $Enums.asistencia_asistio
    id_participacion?: IntFilter<"asistencia"> | number
  }

  export type barrioUpsertWithoutDatosInput = {
    update: XOR<barrioUpdateWithoutDatosInput, barrioUncheckedUpdateWithoutDatosInput>
    create: XOR<barrioCreateWithoutDatosInput, barrioUncheckedCreateWithoutDatosInput>
    where?: barrioWhereInput
  }

  export type barrioUpdateToOneWithWhereWithoutDatosInput = {
    where?: barrioWhereInput
    data: XOR<barrioUpdateWithoutDatosInput, barrioUncheckedUpdateWithoutDatosInput>
  }

  export type barrioUpdateWithoutDatosInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    estaca?: estacaUpdateOneRequiredWithoutBarrioNestedInput
  }

  export type barrioUncheckedUpdateWithoutDatosInput = {
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_estaca?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
  }

  export type compUpsertWithoutDatosInput = {
    update: XOR<compUpdateWithoutDatosInput, compUncheckedUpdateWithoutDatosInput>
    create: XOR<compCreateWithoutDatosInput, compUncheckedCreateWithoutDatosInput>
    where?: compWhereInput
  }

  export type compUpdateToOneWithWhereWithoutDatosInput = {
    where?: compWhereInput
    data: XOR<compUpdateWithoutDatosInput, compUncheckedUpdateWithoutDatosInput>
  }

  export type compUpdateWithoutDatosInput = {
    comp?: StringFieldUpdateOperationsInput | string
  }

  export type compUncheckedUpdateWithoutDatosInput = {
    id_comp?: IntFieldUpdateOperationsInput | number
    comp?: StringFieldUpdateOperationsInput | string
  }

  export type estacaUpsertWithoutDatosInput = {
    update: XOR<estacaUpdateWithoutDatosInput, estacaUncheckedUpdateWithoutDatosInput>
    create: XOR<estacaCreateWithoutDatosInput, estacaUncheckedCreateWithoutDatosInput>
    where?: estacaWhereInput
  }

  export type estacaUpdateToOneWithWhereWithoutDatosInput = {
    where?: estacaWhereInput
    data: XOR<estacaUpdateWithoutDatosInput, estacaUncheckedUpdateWithoutDatosInput>
  }

  export type estacaUpdateWithoutDatosInput = {
    estaca?: StringFieldUpdateOperationsInput | string
    barrio?: barrioUpdateManyWithoutEstacaNestedInput
  }

  export type estacaUncheckedUpdateWithoutDatosInput = {
    id_estaca?: IntFieldUpdateOperationsInput | number
    estaca?: StringFieldUpdateOperationsInput | string
    barrio?: barrioUncheckedUpdateManyWithoutEstacaNestedInput
  }

  export type habitacionUpsertWithoutDatosInput = {
    update: XOR<habitacionUpdateWithoutDatosInput, habitacionUncheckedUpdateWithoutDatosInput>
    create: XOR<habitacionCreateWithoutDatosInput, habitacionUncheckedCreateWithoutDatosInput>
    where?: habitacionWhereInput
  }

  export type habitacionUpdateToOneWithWhereWithoutDatosInput = {
    where?: habitacionWhereInput
    data: XOR<habitacionUpdateWithoutDatosInput, habitacionUncheckedUpdateWithoutDatosInput>
  }

  export type habitacionUpdateWithoutDatosInput = {
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
  }

  export type habitacionUncheckedUpdateWithoutDatosInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    habitacion?: StringFieldUpdateOperationsInput | string
    capacidad?: StringFieldUpdateOperationsInput | string
  }

  export type saludUpsertWithWhereUniqueWithoutDatosInput = {
    where: saludWhereUniqueInput
    update: XOR<saludUpdateWithoutDatosInput, saludUncheckedUpdateWithoutDatosInput>
    create: XOR<saludCreateWithoutDatosInput, saludUncheckedCreateWithoutDatosInput>
  }

  export type saludUpdateWithWhereUniqueWithoutDatosInput = {
    where: saludWhereUniqueInput
    data: XOR<saludUpdateWithoutDatosInput, saludUncheckedUpdateWithoutDatosInput>
  }

  export type saludUpdateManyWithWhereWithoutDatosInput = {
    where: saludScalarWhereInput
    data: XOR<saludUpdateManyMutationInput, saludUncheckedUpdateManyWithoutDatosInput>
  }

  export type saludScalarWhereInput = {
    AND?: saludScalarWhereInput | saludScalarWhereInput[]
    OR?: saludScalarWhereInput[]
    NOT?: saludScalarWhereInput | saludScalarWhereInput[]
    id_salud?: IntFilter<"salud"> | number
    datos_id?: IntFilter<"salud"> | number
    fecha_consulta?: DateTimeNullableFilter<"salud"> | Date | string | null
    motivo_consulta?: StringNullableFilter<"salud"> | string | null
    tratamiento?: StringNullableFilter<"salud"> | string | null
    seguimiento?: IntFilter<"salud"> | number
    fecha_seguimiento?: DateTimeNullableFilter<"salud"> | Date | string | null
  }

  export type barrioCreateWithoutEstacaInput = {
    barrio: string
    datos?: datosCreateNestedManyWithoutBarrioInput
  }

  export type barrioUncheckedCreateWithoutEstacaInput = {
    id_barrio?: number
    barrio: string
    datos?: datosUncheckedCreateNestedManyWithoutBarrioInput
  }

  export type barrioCreateOrConnectWithoutEstacaInput = {
    where: barrioWhereUniqueInput
    create: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput>
  }

  export type barrioCreateManyEstacaInputEnvelope = {
    data: barrioCreateManyEstacaInput | barrioCreateManyEstacaInput[]
    skipDuplicates?: boolean
  }

  export type datosCreateWithoutEstacaInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    barrio: barrioCreateNestedOneWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutEstacaInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutEstacaInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput>
  }

  export type datosCreateManyEstacaInputEnvelope = {
    data: datosCreateManyEstacaInput | datosCreateManyEstacaInput[]
    skipDuplicates?: boolean
  }

  export type barrioUpsertWithWhereUniqueWithoutEstacaInput = {
    where: barrioWhereUniqueInput
    update: XOR<barrioUpdateWithoutEstacaInput, barrioUncheckedUpdateWithoutEstacaInput>
    create: XOR<barrioCreateWithoutEstacaInput, barrioUncheckedCreateWithoutEstacaInput>
  }

  export type barrioUpdateWithWhereUniqueWithoutEstacaInput = {
    where: barrioWhereUniqueInput
    data: XOR<barrioUpdateWithoutEstacaInput, barrioUncheckedUpdateWithoutEstacaInput>
  }

  export type barrioUpdateManyWithWhereWithoutEstacaInput = {
    where: barrioScalarWhereInput
    data: XOR<barrioUpdateManyMutationInput, barrioUncheckedUpdateManyWithoutEstacaInput>
  }

  export type barrioScalarWhereInput = {
    AND?: barrioScalarWhereInput | barrioScalarWhereInput[]
    OR?: barrioScalarWhereInput[]
    NOT?: barrioScalarWhereInput | barrioScalarWhereInput[]
    id_barrio?: IntFilter<"barrio"> | number
    id_estaca?: IntFilter<"barrio"> | number
    barrio?: StringFilter<"barrio"> | string
  }

  export type datosUpsertWithWhereUniqueWithoutEstacaInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutEstacaInput, datosUncheckedUpdateWithoutEstacaInput>
    create: XOR<datosCreateWithoutEstacaInput, datosUncheckedCreateWithoutEstacaInput>
  }

  export type datosUpdateWithWhereUniqueWithoutEstacaInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutEstacaInput, datosUncheckedUpdateWithoutEstacaInput>
  }

  export type datosUpdateManyWithWhereWithoutEstacaInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutEstacaInput>
  }

  export type datosCreateWithoutHabitacionInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    barrio: barrioCreateNestedOneWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    salud?: saludCreateNestedManyWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutHabitacionInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
    salud?: saludUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutHabitacionInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput>
  }

  export type datosCreateManyHabitacionInputEnvelope = {
    data: datosCreateManyHabitacionInput | datosCreateManyHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type datosUpsertWithWhereUniqueWithoutHabitacionInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutHabitacionInput, datosUncheckedUpdateWithoutHabitacionInput>
    create: XOR<datosCreateWithoutHabitacionInput, datosUncheckedCreateWithoutHabitacionInput>
  }

  export type datosUpdateWithWhereUniqueWithoutHabitacionInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutHabitacionInput, datosUncheckedUpdateWithoutHabitacionInput>
  }

  export type datosUpdateManyWithWhereWithoutHabitacionInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutHabitacionInput>
  }

  export type asistenciaCreateWithoutParticipacionInput = {
    asistio: $Enums.asistencia_asistio
    datos: datosCreateNestedOneWithoutAsistenciaInput
  }

  export type asistenciaUncheckedCreateWithoutParticipacionInput = {
    id_asistencia?: number
    datos_id: number
    asistio: $Enums.asistencia_asistio
  }

  export type asistenciaCreateOrConnectWithoutParticipacionInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput>
  }

  export type asistenciaCreateManyParticipacionInputEnvelope = {
    data: asistenciaCreateManyParticipacionInput | asistenciaCreateManyParticipacionInput[]
    skipDuplicates?: boolean
  }

  export type asistenciaUpsertWithWhereUniqueWithoutParticipacionInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutParticipacionInput, asistenciaUncheckedUpdateWithoutParticipacionInput>
    create: XOR<asistenciaCreateWithoutParticipacionInput, asistenciaUncheckedCreateWithoutParticipacionInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutParticipacionInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutParticipacionInput, asistenciaUncheckedUpdateWithoutParticipacionInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutParticipacionInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutParticipacionInput>
  }

  export type medicinas_recetadasCreateWithoutSaludInput = {
    frecuencia?: string | null
    duracion?: string | null
    inventario_salud: inventario_saludCreateNestedOneWithoutMedicinas_recetadasInput
  }

  export type medicinas_recetadasUncheckedCreateWithoutSaludInput = {
    id_medicinas_recetadas?: number
    id_inventario_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasCreateOrConnectWithoutSaludInput = {
    where: medicinas_recetadasWhereUniqueInput
    create: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput>
  }

  export type medicinas_recetadasCreateManySaludInputEnvelope = {
    data: medicinas_recetadasCreateManySaludInput | medicinas_recetadasCreateManySaludInput[]
    skipDuplicates?: boolean
  }

  export type datosCreateWithoutSaludInput = {
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaCreateNestedManyWithoutDatosInput
    barrio: barrioCreateNestedOneWithoutDatosInput
    comp: compCreateNestedOneWithoutDatosInput
    estaca: estacaCreateNestedOneWithoutDatosInput
    habitacion: habitacionCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutSaludInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutDatosInput
  }

  export type datosCreateOrConnectWithoutSaludInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutSaludInput, datosUncheckedCreateWithoutSaludInput>
  }

  export type medicinas_recetadasUpsertWithWhereUniqueWithoutSaludInput = {
    where: medicinas_recetadasWhereUniqueInput
    update: XOR<medicinas_recetadasUpdateWithoutSaludInput, medicinas_recetadasUncheckedUpdateWithoutSaludInput>
    create: XOR<medicinas_recetadasCreateWithoutSaludInput, medicinas_recetadasUncheckedCreateWithoutSaludInput>
  }

  export type medicinas_recetadasUpdateWithWhereUniqueWithoutSaludInput = {
    where: medicinas_recetadasWhereUniqueInput
    data: XOR<medicinas_recetadasUpdateWithoutSaludInput, medicinas_recetadasUncheckedUpdateWithoutSaludInput>
  }

  export type medicinas_recetadasUpdateManyWithWhereWithoutSaludInput = {
    where: medicinas_recetadasScalarWhereInput
    data: XOR<medicinas_recetadasUpdateManyMutationInput, medicinas_recetadasUncheckedUpdateManyWithoutSaludInput>
  }

  export type medicinas_recetadasScalarWhereInput = {
    AND?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
    OR?: medicinas_recetadasScalarWhereInput[]
    NOT?: medicinas_recetadasScalarWhereInput | medicinas_recetadasScalarWhereInput[]
    id_medicinas_recetadas?: IntFilter<"medicinas_recetadas"> | number
    id_salud?: IntFilter<"medicinas_recetadas"> | number
    id_inventario_salud?: IntFilter<"medicinas_recetadas"> | number
    frecuencia?: StringNullableFilter<"medicinas_recetadas"> | string | null
    duracion?: StringNullableFilter<"medicinas_recetadas"> | string | null
  }

  export type datosUpsertWithoutSaludInput = {
    update: XOR<datosUpdateWithoutSaludInput, datosUncheckedUpdateWithoutSaludInput>
    create: XOR<datosCreateWithoutSaludInput, datosUncheckedCreateWithoutSaludInput>
    where?: datosWhereInput
  }

  export type datosUpdateToOneWithWhereWithoutSaludInput = {
    where?: datosWhereInput
    data: XOR<datosUpdateWithoutSaludInput, datosUncheckedUpdateWithoutSaludInput>
  }

  export type datosUpdateWithoutSaludInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutSaludInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type medicinas_recetadasCreateWithoutInventario_saludInput = {
    frecuencia?: string | null
    duracion?: string | null
    salud: saludCreateNestedOneWithoutMedicinas_recetadasInput
  }

  export type medicinas_recetadasUncheckedCreateWithoutInventario_saludInput = {
    id_medicinas_recetadas?: number
    id_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasCreateOrConnectWithoutInventario_saludInput = {
    where: medicinas_recetadasWhereUniqueInput
    create: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput>
  }

  export type medicinas_recetadasCreateManyInventario_saludInputEnvelope = {
    data: medicinas_recetadasCreateManyInventario_saludInput | medicinas_recetadasCreateManyInventario_saludInput[]
    skipDuplicates?: boolean
  }

  export type medicinas_recetadasUpsertWithWhereUniqueWithoutInventario_saludInput = {
    where: medicinas_recetadasWhereUniqueInput
    update: XOR<medicinas_recetadasUpdateWithoutInventario_saludInput, medicinas_recetadasUncheckedUpdateWithoutInventario_saludInput>
    create: XOR<medicinas_recetadasCreateWithoutInventario_saludInput, medicinas_recetadasUncheckedCreateWithoutInventario_saludInput>
  }

  export type medicinas_recetadasUpdateWithWhereUniqueWithoutInventario_saludInput = {
    where: medicinas_recetadasWhereUniqueInput
    data: XOR<medicinas_recetadasUpdateWithoutInventario_saludInput, medicinas_recetadasUncheckedUpdateWithoutInventario_saludInput>
  }

  export type medicinas_recetadasUpdateManyWithWhereWithoutInventario_saludInput = {
    where: medicinas_recetadasScalarWhereInput
    data: XOR<medicinas_recetadasUpdateManyMutationInput, medicinas_recetadasUncheckedUpdateManyWithoutInventario_saludInput>
  }

  export type inventario_saludCreateWithoutMedicinas_recetadasInput = {
    nombre: string
    descripcion?: string | null
    stock: number
    dosis?: string | null
  }

  export type inventario_saludUncheckedCreateWithoutMedicinas_recetadasInput = {
    id_inventario_salud?: number
    nombre: string
    descripcion?: string | null
    stock: number
    dosis?: string | null
  }

  export type inventario_saludCreateOrConnectWithoutMedicinas_recetadasInput = {
    where: inventario_saludWhereUniqueInput
    create: XOR<inventario_saludCreateWithoutMedicinas_recetadasInput, inventario_saludUncheckedCreateWithoutMedicinas_recetadasInput>
  }

  export type saludCreateWithoutMedicinas_recetadasInput = {
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
    datos: datosCreateNestedOneWithoutSaludInput
  }

  export type saludUncheckedCreateWithoutMedicinas_recetadasInput = {
    id_salud?: number
    datos_id: number
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
  }

  export type saludCreateOrConnectWithoutMedicinas_recetadasInput = {
    where: saludWhereUniqueInput
    create: XOR<saludCreateWithoutMedicinas_recetadasInput, saludUncheckedCreateWithoutMedicinas_recetadasInput>
  }

  export type inventario_saludUpsertWithoutMedicinas_recetadasInput = {
    update: XOR<inventario_saludUpdateWithoutMedicinas_recetadasInput, inventario_saludUncheckedUpdateWithoutMedicinas_recetadasInput>
    create: XOR<inventario_saludCreateWithoutMedicinas_recetadasInput, inventario_saludUncheckedCreateWithoutMedicinas_recetadasInput>
    where?: inventario_saludWhereInput
  }

  export type inventario_saludUpdateToOneWithWhereWithoutMedicinas_recetadasInput = {
    where?: inventario_saludWhereInput
    data: XOR<inventario_saludUpdateWithoutMedicinas_recetadasInput, inventario_saludUncheckedUpdateWithoutMedicinas_recetadasInput>
  }

  export type inventario_saludUpdateWithoutMedicinas_recetadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_saludUncheckedUpdateWithoutMedicinas_recetadasInput = {
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    dosis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saludUpsertWithoutMedicinas_recetadasInput = {
    update: XOR<saludUpdateWithoutMedicinas_recetadasInput, saludUncheckedUpdateWithoutMedicinas_recetadasInput>
    create: XOR<saludCreateWithoutMedicinas_recetadasInput, saludUncheckedCreateWithoutMedicinas_recetadasInput>
    where?: saludWhereInput
  }

  export type saludUpdateToOneWithWhereWithoutMedicinas_recetadasInput = {
    where?: saludWhereInput
    data: XOR<saludUpdateWithoutMedicinas_recetadasInput, saludUncheckedUpdateWithoutMedicinas_recetadasInput>
  }

  export type saludUpdateWithoutMedicinas_recetadasInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datos?: datosUpdateOneRequiredWithoutSaludNestedInput
  }

  export type saludUncheckedUpdateWithoutMedicinas_recetadasInput = {
    id_salud?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type datosCreateManyBarrioInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosUpdateWithoutBarrioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutBarrioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateManyWithoutBarrioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosCreateManyCompInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosUpdateWithoutCompInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutCompInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateManyWithoutCompInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type asistenciaCreateManyDatosInput = {
    id_asistencia?: number
    asistio: $Enums.asistencia_asistio
    id_participacion: number
  }

  export type saludCreateManyDatosInput = {
    id_salud?: number
    fecha_consulta?: Date | string | null
    motivo_consulta?: string | null
    tratamiento?: string | null
    seguimiento: number
    fecha_seguimiento?: Date | string | null
  }

  export type asistenciaUpdateWithoutDatosInput = {
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    participacion?: participacionUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type asistenciaUncheckedUpdateWithoutDatosInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    id_participacion?: IntFieldUpdateOperationsInput | number
  }

  export type asistenciaUncheckedUpdateManyWithoutDatosInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    id_participacion?: IntFieldUpdateOperationsInput | number
  }

  export type saludUpdateWithoutDatosInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicinas_recetadas?: medicinas_recetadasUpdateManyWithoutSaludNestedInput
  }

  export type saludUncheckedUpdateWithoutDatosInput = {
    id_salud?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicinas_recetadas?: medicinas_recetadasUncheckedUpdateManyWithoutSaludNestedInput
  }

  export type saludUncheckedUpdateManyWithoutDatosInput = {
    id_salud?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivo_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    seguimiento?: IntFieldUpdateOperationsInput | number
    fecha_seguimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type barrioCreateManyEstacaInput = {
    id_barrio?: number
    barrio: string
  }

  export type datosCreateManyEstacaInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_barrio: number
    id_comp: number
    id_habitacion: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type barrioUpdateWithoutEstacaInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    datos?: datosUpdateManyWithoutBarrioNestedInput
  }

  export type barrioUncheckedUpdateWithoutEstacaInput = {
    id_barrio?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    datos?: datosUncheckedUpdateManyWithoutBarrioNestedInput
  }

  export type barrioUncheckedUpdateManyWithoutEstacaInput = {
    id_barrio?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
  }

  export type datosUpdateWithoutEstacaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    habitacion?: habitacionUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutEstacaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateManyWithoutEstacaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    id_habitacion?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosCreateManyHabitacionInput = {
    id?: number
    nombre: string
    apellido: string
    edad: number
    nacimiento?: Date | string | null
    id_estaca: number
    id_barrio: number
    id_comp: number
    telefono?: string | null
    sexo: string
    tipo: $Enums.datos_tipo
    correo?: string | null
    talla?: string | null
    nom_c1?: string | null
    telef_c1?: string | null
    grupo_sang?: string | null
    miembro?: $Enums.datos_miembro | null
    enf_cronica?: string | null
    trat_med?: string | null
    seguro?: string | null
    alergia_med?: string | null
    dieta?: $Enums.datos_dieta | null
    obs_dieta?: string | null
    alergia_alimento?: $Enums.datos_alergia_alimento | null
    alergia_medicamento?: $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type datosUpdateWithoutHabitacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUpdateManyWithoutDatosNestedInput
    barrio?: barrioUpdateOneRequiredWithoutDatosNestedInput
    comp?: compUpdateOneRequiredWithoutDatosNestedInput
    estaca?: estacaUpdateOneRequiredWithoutDatosNestedInput
    salud?: saludUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutHabitacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
    asistencia?: asistenciaUncheckedUpdateManyWithoutDatosNestedInput
    salud?: saludUncheckedUpdateManyWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateManyWithoutHabitacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estaca?: IntFieldUpdateOperationsInput | number
    id_barrio?: IntFieldUpdateOperationsInput | number
    id_comp?: IntFieldUpdateOperationsInput | number
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumdatos_tipoFieldUpdateOperationsInput | $Enums.datos_tipo
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    talla?: NullableStringFieldUpdateOperationsInput | string | null
    nom_c1?: NullableStringFieldUpdateOperationsInput | string | null
    telef_c1?: NullableStringFieldUpdateOperationsInput | string | null
    grupo_sang?: NullableStringFieldUpdateOperationsInput | string | null
    miembro?: NullableEnumdatos_miembroFieldUpdateOperationsInput | $Enums.datos_miembro | null
    enf_cronica?: NullableStringFieldUpdateOperationsInput | string | null
    trat_med?: NullableStringFieldUpdateOperationsInput | string | null
    seguro?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_med?: NullableStringFieldUpdateOperationsInput | string | null
    dieta?: NullableEnumdatos_dietaFieldUpdateOperationsInput | $Enums.datos_dieta | null
    obs_dieta?: NullableStringFieldUpdateOperationsInput | string | null
    alergia_alimento?: NullableEnumdatos_alergia_alimentoFieldUpdateOperationsInput | $Enums.datos_alergia_alimento | null
    alergia_medicamento?: NullableEnumdatos_alergia_medicamentoFieldUpdateOperationsInput | $Enums.datos_alergia_medicamento | null
    alergia_polvo_pelos_acaro?: NullableEnumdatos_alergia_polvo_pelos_acaroFieldUpdateOperationsInput | $Enums.datos_alergia_polvo_pelos_acaro | null
  }

  export type asistenciaCreateManyParticipacionInput = {
    id_asistencia?: number
    datos_id: number
    asistio: $Enums.asistencia_asistio
  }

  export type asistenciaUpdateWithoutParticipacionInput = {
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
    datos?: datosUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type asistenciaUncheckedUpdateWithoutParticipacionInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
  }

  export type asistenciaUncheckedUpdateManyWithoutParticipacionInput = {
    id_asistencia?: IntFieldUpdateOperationsInput | number
    datos_id?: IntFieldUpdateOperationsInput | number
    asistio?: Enumasistencia_asistioFieldUpdateOperationsInput | $Enums.asistencia_asistio
  }

  export type medicinas_recetadasCreateManySaludInput = {
    id_medicinas_recetadas?: number
    id_inventario_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasUpdateWithoutSaludInput = {
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
    inventario_salud?: inventario_saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput
  }

  export type medicinas_recetadasUncheckedUpdateWithoutSaludInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasUncheckedUpdateManyWithoutSaludInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_inventario_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasCreateManyInventario_saludInput = {
    id_medicinas_recetadas?: number
    id_salud: number
    frecuencia?: string | null
    duracion?: string | null
  }

  export type medicinas_recetadasUpdateWithoutInventario_saludInput = {
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
    salud?: saludUpdateOneRequiredWithoutMedicinas_recetadasNestedInput
  }

  export type medicinas_recetadasUncheckedUpdateWithoutInventario_saludInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinas_recetadasUncheckedUpdateManyWithoutInventario_saludInput = {
    id_medicinas_recetadas?: IntFieldUpdateOperationsInput | number
    id_salud?: IntFieldUpdateOperationsInput | number
    frecuencia?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}