
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Masseuse
 * 
 */
export type Masseuse = $Result.DefaultSelection<Prisma.$MasseusePayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReviewMasseuse
 * 
 */
export type ReviewMasseuse = $Result.DefaultSelection<Prisma.$ReviewMasseusePayload>
/**
 * Model ReviewShop
 * 
 */
export type ReviewShop = $Result.DefaultSelection<Prisma.$ReviewShopPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masseuse`: Exposes CRUD operations for the **Masseuse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Masseuses
    * const masseuses = await prisma.masseuse.findMany()
    * ```
    */
  get masseuse(): Prisma.MasseuseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewMasseuse`: Exposes CRUD operations for the **ReviewMasseuse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewMasseuses
    * const reviewMasseuses = await prisma.reviewMasseuse.findMany()
    * ```
    */
  get reviewMasseuse(): Prisma.ReviewMasseuseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewShop`: Exposes CRUD operations for the **ReviewShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewShops
    * const reviewShops = await prisma.reviewShop.findMany()
    * ```
    */
  get reviewShop(): Prisma.ReviewShopDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Masseuse: 'Masseuse',
    Shop: 'Shop',
    Reservation: 'Reservation',
    ReviewMasseuse: 'ReviewMasseuse',
    ReviewShop: 'ReviewShop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "masseuse" | "shop" | "reservation" | "reviewMasseuse" | "reviewShop"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Masseuse: {
        payload: Prisma.$MasseusePayload<ExtArgs>
        fields: Prisma.MasseuseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasseuseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasseuseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          findFirst: {
            args: Prisma.MasseuseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasseuseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          findMany: {
            args: Prisma.MasseuseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>[]
          }
          create: {
            args: Prisma.MasseuseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          createMany: {
            args: Prisma.MasseuseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasseuseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>[]
          }
          delete: {
            args: Prisma.MasseuseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          update: {
            args: Prisma.MasseuseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          deleteMany: {
            args: Prisma.MasseuseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasseuseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasseuseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>[]
          }
          upsert: {
            args: Prisma.MasseuseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasseusePayload>
          }
          aggregate: {
            args: Prisma.MasseuseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasseuse>
          }
          groupBy: {
            args: Prisma.MasseuseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasseuseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasseuseCountArgs<ExtArgs>
            result: $Utils.Optional<MasseuseCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReviewMasseuse: {
        payload: Prisma.$ReviewMasseusePayload<ExtArgs>
        fields: Prisma.ReviewMasseuseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewMasseuseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewMasseuseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          findFirst: {
            args: Prisma.ReviewMasseuseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewMasseuseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          findMany: {
            args: Prisma.ReviewMasseuseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>[]
          }
          create: {
            args: Prisma.ReviewMasseuseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          createMany: {
            args: Prisma.ReviewMasseuseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewMasseuseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>[]
          }
          delete: {
            args: Prisma.ReviewMasseuseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          update: {
            args: Prisma.ReviewMasseuseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          deleteMany: {
            args: Prisma.ReviewMasseuseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewMasseuseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewMasseuseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>[]
          }
          upsert: {
            args: Prisma.ReviewMasseuseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMasseusePayload>
          }
          aggregate: {
            args: Prisma.ReviewMasseuseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewMasseuse>
          }
          groupBy: {
            args: Prisma.ReviewMasseuseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewMasseuseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewMasseuseCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewMasseuseCountAggregateOutputType> | number
          }
        }
      }
      ReviewShop: {
        payload: Prisma.$ReviewShopPayload<ExtArgs>
        fields: Prisma.ReviewShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          findFirst: {
            args: Prisma.ReviewShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          findMany: {
            args: Prisma.ReviewShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>[]
          }
          create: {
            args: Prisma.ReviewShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          createMany: {
            args: Prisma.ReviewShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>[]
          }
          delete: {
            args: Prisma.ReviewShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          update: {
            args: Prisma.ReviewShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          deleteMany: {
            args: Prisma.ReviewShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>[]
          }
          upsert: {
            args: Prisma.ReviewShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewShopPayload>
          }
          aggregate: {
            args: Prisma.ReviewShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewShop>
          }
          groupBy: {
            args: Prisma.ReviewShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewShopCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewShopCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    masseuse?: MasseuseOmit
    shop?: ShopOmit
    reservation?: ReservationOmit
    reviewMasseuse?: ReviewMasseuseOmit
    reviewShop?: ReviewShopOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviewsMasseuse: number
    reviewsShop: number
    reservations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewsMasseuse?: boolean | UserCountOutputTypeCountReviewsMasseuseArgs
    reviewsShop?: boolean | UserCountOutputTypeCountReviewsShopArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsMasseuseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewMasseuseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewShopWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type MasseuseCountOutputType
   */

  export type MasseuseCountOutputType = {
    reservations: number
    reviewsMasseuse: number
  }

  export type MasseuseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | MasseuseCountOutputTypeCountReservationsArgs
    reviewsMasseuse?: boolean | MasseuseCountOutputTypeCountReviewsMasseuseArgs
  }

  // Custom InputTypes
  /**
   * MasseuseCountOutputType without action
   */
  export type MasseuseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasseuseCountOutputType
     */
    select?: MasseuseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasseuseCountOutputType without action
   */
  export type MasseuseCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * MasseuseCountOutputType without action
   */
  export type MasseuseCountOutputTypeCountReviewsMasseuseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewMasseuseWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    masseuses: number
    reservations: number
    reviewsShop: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masseuses?: boolean | ShopCountOutputTypeCountMasseusesArgs
    reservations?: boolean | ShopCountOutputTypeCountReservationsArgs
    reviewsShop?: boolean | ShopCountOutputTypeCountReviewsShopArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountMasseusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasseuseWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountReviewsShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewShopWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    tel: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tel: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    tel: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    tel?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    tel?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    tel?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    tel: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
    reviewsMasseuse?: boolean | User$reviewsMasseuseArgs<ExtArgs>
    reviewsShop?: boolean | User$reviewsShopArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tel" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewsMasseuse?: boolean | User$reviewsMasseuseArgs<ExtArgs>
    reviewsShop?: boolean | User$reviewsShopArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviewsMasseuse: Prisma.$ReviewMasseusePayload<ExtArgs>[]
      reviewsShop: Prisma.$ReviewShopPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tel: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewsMasseuse<T extends User$reviewsMasseuseArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsMasseuseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsShop<T extends User$reviewsShopArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsShopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly tel: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviewsMasseuse
   */
  export type User$reviewsMasseuseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    where?: ReviewMasseuseWhereInput
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    cursor?: ReviewMasseuseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewMasseuseScalarFieldEnum | ReviewMasseuseScalarFieldEnum[]
  }

  /**
   * User.reviewsShop
   */
  export type User$reviewsShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    where?: ReviewShopWhereInput
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    cursor?: ReviewShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewShopScalarFieldEnum | ReviewShopScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Masseuse
   */

  export type AggregateMasseuse = {
    _count: MasseuseCountAggregateOutputType | null
    _avg: MasseuseAvgAggregateOutputType | null
    _sum: MasseuseSumAggregateOutputType | null
    _min: MasseuseMinAggregateOutputType | null
    _max: MasseuseMaxAggregateOutputType | null
  }

  export type MasseuseAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type MasseuseSumAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type MasseuseMinAggregateOutputType = {
    id: number | null
    name: string | null
    shopId: number | null
  }

  export type MasseuseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shopId: number | null
  }

  export type MasseuseCountAggregateOutputType = {
    id: number
    name: number
    shopId: number
    _all: number
  }


  export type MasseuseAvgAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type MasseuseSumAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type MasseuseMinAggregateInputType = {
    id?: true
    name?: true
    shopId?: true
  }

  export type MasseuseMaxAggregateInputType = {
    id?: true
    name?: true
    shopId?: true
  }

  export type MasseuseCountAggregateInputType = {
    id?: true
    name?: true
    shopId?: true
    _all?: true
  }

  export type MasseuseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Masseuse to aggregate.
     */
    where?: MasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masseuses to fetch.
     */
    orderBy?: MasseuseOrderByWithRelationInput | MasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Masseuses
    **/
    _count?: true | MasseuseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasseuseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasseuseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasseuseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasseuseMaxAggregateInputType
  }

  export type GetMasseuseAggregateType<T extends MasseuseAggregateArgs> = {
        [P in keyof T & keyof AggregateMasseuse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasseuse[P]>
      : GetScalarType<T[P], AggregateMasseuse[P]>
  }




  export type MasseuseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasseuseWhereInput
    orderBy?: MasseuseOrderByWithAggregationInput | MasseuseOrderByWithAggregationInput[]
    by: MasseuseScalarFieldEnum[] | MasseuseScalarFieldEnum
    having?: MasseuseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasseuseCountAggregateInputType | true
    _avg?: MasseuseAvgAggregateInputType
    _sum?: MasseuseSumAggregateInputType
    _min?: MasseuseMinAggregateInputType
    _max?: MasseuseMaxAggregateInputType
  }

  export type MasseuseGroupByOutputType = {
    id: number
    name: string
    shopId: number
    _count: MasseuseCountAggregateOutputType | null
    _avg: MasseuseAvgAggregateOutputType | null
    _sum: MasseuseSumAggregateOutputType | null
    _min: MasseuseMinAggregateOutputType | null
    _max: MasseuseMaxAggregateOutputType | null
  }

  type GetMasseuseGroupByPayload<T extends MasseuseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasseuseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasseuseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasseuseGroupByOutputType[P]>
            : GetScalarType<T[P], MasseuseGroupByOutputType[P]>
        }
      >
    >


  export type MasseuseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shopId?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    reservations?: boolean | Masseuse$reservationsArgs<ExtArgs>
    reviewsMasseuse?: boolean | Masseuse$reviewsMasseuseArgs<ExtArgs>
    _count?: boolean | MasseuseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masseuse"]>

  export type MasseuseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shopId?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masseuse"]>

  export type MasseuseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shopId?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masseuse"]>

  export type MasseuseSelectScalar = {
    id?: boolean
    name?: boolean
    shopId?: boolean
  }

  export type MasseuseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shopId", ExtArgs["result"]["masseuse"]>
  export type MasseuseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    reservations?: boolean | Masseuse$reservationsArgs<ExtArgs>
    reviewsMasseuse?: boolean | Masseuse$reviewsMasseuseArgs<ExtArgs>
    _count?: boolean | MasseuseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasseuseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type MasseuseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $MasseusePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Masseuse"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      reviewsMasseuse: Prisma.$ReviewMasseusePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shopId: number
    }, ExtArgs["result"]["masseuse"]>
    composites: {}
  }

  type MasseuseGetPayload<S extends boolean | null | undefined | MasseuseDefaultArgs> = $Result.GetResult<Prisma.$MasseusePayload, S>

  type MasseuseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasseuseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasseuseCountAggregateInputType | true
    }

  export interface MasseuseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Masseuse'], meta: { name: 'Masseuse' } }
    /**
     * Find zero or one Masseuse that matches the filter.
     * @param {MasseuseFindUniqueArgs} args - Arguments to find a Masseuse
     * @example
     * // Get one Masseuse
     * const masseuse = await prisma.masseuse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasseuseFindUniqueArgs>(args: SelectSubset<T, MasseuseFindUniqueArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Masseuse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasseuseFindUniqueOrThrowArgs} args - Arguments to find a Masseuse
     * @example
     * // Get one Masseuse
     * const masseuse = await prisma.masseuse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasseuseFindUniqueOrThrowArgs>(args: SelectSubset<T, MasseuseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Masseuse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseFindFirstArgs} args - Arguments to find a Masseuse
     * @example
     * // Get one Masseuse
     * const masseuse = await prisma.masseuse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasseuseFindFirstArgs>(args?: SelectSubset<T, MasseuseFindFirstArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Masseuse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseFindFirstOrThrowArgs} args - Arguments to find a Masseuse
     * @example
     * // Get one Masseuse
     * const masseuse = await prisma.masseuse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasseuseFindFirstOrThrowArgs>(args?: SelectSubset<T, MasseuseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Masseuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Masseuses
     * const masseuses = await prisma.masseuse.findMany()
     * 
     * // Get first 10 Masseuses
     * const masseuses = await prisma.masseuse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masseuseWithIdOnly = await prisma.masseuse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasseuseFindManyArgs>(args?: SelectSubset<T, MasseuseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Masseuse.
     * @param {MasseuseCreateArgs} args - Arguments to create a Masseuse.
     * @example
     * // Create one Masseuse
     * const Masseuse = await prisma.masseuse.create({
     *   data: {
     *     // ... data to create a Masseuse
     *   }
     * })
     * 
     */
    create<T extends MasseuseCreateArgs>(args: SelectSubset<T, MasseuseCreateArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Masseuses.
     * @param {MasseuseCreateManyArgs} args - Arguments to create many Masseuses.
     * @example
     * // Create many Masseuses
     * const masseuse = await prisma.masseuse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasseuseCreateManyArgs>(args?: SelectSubset<T, MasseuseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Masseuses and returns the data saved in the database.
     * @param {MasseuseCreateManyAndReturnArgs} args - Arguments to create many Masseuses.
     * @example
     * // Create many Masseuses
     * const masseuse = await prisma.masseuse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Masseuses and only return the `id`
     * const masseuseWithIdOnly = await prisma.masseuse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasseuseCreateManyAndReturnArgs>(args?: SelectSubset<T, MasseuseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Masseuse.
     * @param {MasseuseDeleteArgs} args - Arguments to delete one Masseuse.
     * @example
     * // Delete one Masseuse
     * const Masseuse = await prisma.masseuse.delete({
     *   where: {
     *     // ... filter to delete one Masseuse
     *   }
     * })
     * 
     */
    delete<T extends MasseuseDeleteArgs>(args: SelectSubset<T, MasseuseDeleteArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Masseuse.
     * @param {MasseuseUpdateArgs} args - Arguments to update one Masseuse.
     * @example
     * // Update one Masseuse
     * const masseuse = await prisma.masseuse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasseuseUpdateArgs>(args: SelectSubset<T, MasseuseUpdateArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Masseuses.
     * @param {MasseuseDeleteManyArgs} args - Arguments to filter Masseuses to delete.
     * @example
     * // Delete a few Masseuses
     * const { count } = await prisma.masseuse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasseuseDeleteManyArgs>(args?: SelectSubset<T, MasseuseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masseuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Masseuses
     * const masseuse = await prisma.masseuse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasseuseUpdateManyArgs>(args: SelectSubset<T, MasseuseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masseuses and returns the data updated in the database.
     * @param {MasseuseUpdateManyAndReturnArgs} args - Arguments to update many Masseuses.
     * @example
     * // Update many Masseuses
     * const masseuse = await prisma.masseuse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Masseuses and only return the `id`
     * const masseuseWithIdOnly = await prisma.masseuse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasseuseUpdateManyAndReturnArgs>(args: SelectSubset<T, MasseuseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Masseuse.
     * @param {MasseuseUpsertArgs} args - Arguments to update or create a Masseuse.
     * @example
     * // Update or create a Masseuse
     * const masseuse = await prisma.masseuse.upsert({
     *   create: {
     *     // ... data to create a Masseuse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Masseuse we want to update
     *   }
     * })
     */
    upsert<T extends MasseuseUpsertArgs>(args: SelectSubset<T, MasseuseUpsertArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Masseuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseCountArgs} args - Arguments to filter Masseuses to count.
     * @example
     * // Count the number of Masseuses
     * const count = await prisma.masseuse.count({
     *   where: {
     *     // ... the filter for the Masseuses we want to count
     *   }
     * })
    **/
    count<T extends MasseuseCountArgs>(
      args?: Subset<T, MasseuseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasseuseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Masseuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasseuseAggregateArgs>(args: Subset<T, MasseuseAggregateArgs>): Prisma.PrismaPromise<GetMasseuseAggregateType<T>>

    /**
     * Group by Masseuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasseuseGroupByArgs} args - Group by arguments.
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
      T extends MasseuseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasseuseGroupByArgs['orderBy'] }
        : { orderBy?: MasseuseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasseuseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasseuseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Masseuse model
   */
  readonly fields: MasseuseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Masseuse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasseuseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Masseuse$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Masseuse$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsMasseuse<T extends Masseuse$reviewsMasseuseArgs<ExtArgs> = {}>(args?: Subset<T, Masseuse$reviewsMasseuseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Masseuse model
   */
  interface MasseuseFieldRefs {
    readonly id: FieldRef<"Masseuse", 'Int'>
    readonly name: FieldRef<"Masseuse", 'String'>
    readonly shopId: FieldRef<"Masseuse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Masseuse findUnique
   */
  export type MasseuseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter, which Masseuse to fetch.
     */
    where: MasseuseWhereUniqueInput
  }

  /**
   * Masseuse findUniqueOrThrow
   */
  export type MasseuseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter, which Masseuse to fetch.
     */
    where: MasseuseWhereUniqueInput
  }

  /**
   * Masseuse findFirst
   */
  export type MasseuseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter, which Masseuse to fetch.
     */
    where?: MasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masseuses to fetch.
     */
    orderBy?: MasseuseOrderByWithRelationInput | MasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masseuses.
     */
    cursor?: MasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masseuses.
     */
    distinct?: MasseuseScalarFieldEnum | MasseuseScalarFieldEnum[]
  }

  /**
   * Masseuse findFirstOrThrow
   */
  export type MasseuseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter, which Masseuse to fetch.
     */
    where?: MasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masseuses to fetch.
     */
    orderBy?: MasseuseOrderByWithRelationInput | MasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masseuses.
     */
    cursor?: MasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masseuses.
     */
    distinct?: MasseuseScalarFieldEnum | MasseuseScalarFieldEnum[]
  }

  /**
   * Masseuse findMany
   */
  export type MasseuseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter, which Masseuses to fetch.
     */
    where?: MasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masseuses to fetch.
     */
    orderBy?: MasseuseOrderByWithRelationInput | MasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Masseuses.
     */
    cursor?: MasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masseuses.
     */
    skip?: number
    distinct?: MasseuseScalarFieldEnum | MasseuseScalarFieldEnum[]
  }

  /**
   * Masseuse create
   */
  export type MasseuseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * The data needed to create a Masseuse.
     */
    data: XOR<MasseuseCreateInput, MasseuseUncheckedCreateInput>
  }

  /**
   * Masseuse createMany
   */
  export type MasseuseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Masseuses.
     */
    data: MasseuseCreateManyInput | MasseuseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Masseuse createManyAndReturn
   */
  export type MasseuseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * The data used to create many Masseuses.
     */
    data: MasseuseCreateManyInput | MasseuseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Masseuse update
   */
  export type MasseuseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * The data needed to update a Masseuse.
     */
    data: XOR<MasseuseUpdateInput, MasseuseUncheckedUpdateInput>
    /**
     * Choose, which Masseuse to update.
     */
    where: MasseuseWhereUniqueInput
  }

  /**
   * Masseuse updateMany
   */
  export type MasseuseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Masseuses.
     */
    data: XOR<MasseuseUpdateManyMutationInput, MasseuseUncheckedUpdateManyInput>
    /**
     * Filter which Masseuses to update
     */
    where?: MasseuseWhereInput
    /**
     * Limit how many Masseuses to update.
     */
    limit?: number
  }

  /**
   * Masseuse updateManyAndReturn
   */
  export type MasseuseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * The data used to update Masseuses.
     */
    data: XOR<MasseuseUpdateManyMutationInput, MasseuseUncheckedUpdateManyInput>
    /**
     * Filter which Masseuses to update
     */
    where?: MasseuseWhereInput
    /**
     * Limit how many Masseuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Masseuse upsert
   */
  export type MasseuseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * The filter to search for the Masseuse to update in case it exists.
     */
    where: MasseuseWhereUniqueInput
    /**
     * In case the Masseuse found by the `where` argument doesn't exist, create a new Masseuse with this data.
     */
    create: XOR<MasseuseCreateInput, MasseuseUncheckedCreateInput>
    /**
     * In case the Masseuse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasseuseUpdateInput, MasseuseUncheckedUpdateInput>
  }

  /**
   * Masseuse delete
   */
  export type MasseuseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    /**
     * Filter which Masseuse to delete.
     */
    where: MasseuseWhereUniqueInput
  }

  /**
   * Masseuse deleteMany
   */
  export type MasseuseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Masseuses to delete
     */
    where?: MasseuseWhereInput
    /**
     * Limit how many Masseuses to delete.
     */
    limit?: number
  }

  /**
   * Masseuse.reservations
   */
  export type Masseuse$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Masseuse.reviewsMasseuse
   */
  export type Masseuse$reviewsMasseuseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    where?: ReviewMasseuseWhereInput
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    cursor?: ReviewMasseuseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewMasseuseScalarFieldEnum | ReviewMasseuseScalarFieldEnum[]
  }

  /**
   * Masseuse without action
   */
  export type MasseuseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    name: string
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    masseuses?: boolean | Shop$masseusesArgs<ExtArgs>
    reservations?: boolean | Shop$reservationsArgs<ExtArgs>
    reviewsShop?: boolean | Shop$reviewsShopArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masseuses?: boolean | Shop$masseusesArgs<ExtArgs>
    reservations?: boolean | Shop$reservationsArgs<ExtArgs>
    reviewsShop?: boolean | Shop$reviewsShopArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      masseuses: Prisma.$MasseusePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      reviewsShop: Prisma.$ReviewShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    masseuses<T extends Shop$masseusesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$masseusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Shop$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsShop<T extends Shop$reviewsShopArgs<ExtArgs> = {}>(args?: Subset<T, Shop$reviewsShopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly name: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.masseuses
   */
  export type Shop$masseusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masseuse
     */
    select?: MasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masseuse
     */
    omit?: MasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasseuseInclude<ExtArgs> | null
    where?: MasseuseWhereInput
    orderBy?: MasseuseOrderByWithRelationInput | MasseuseOrderByWithRelationInput[]
    cursor?: MasseuseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasseuseScalarFieldEnum | MasseuseScalarFieldEnum[]
  }

  /**
   * Shop.reservations
   */
  export type Shop$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Shop.reviewsShop
   */
  export type Shop$reviewsShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    where?: ReviewShopWhereInput
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    cursor?: ReviewShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewShopScalarFieldEnum | ReviewShopScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    masseuseId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    masseuseId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    reservationTime: Date | null
    userId: number | null
    shopId: number | null
    masseuseId: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    reservationTime: Date | null
    userId: number | null
    shopId: number | null
    masseuseId: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    reservationTime: number
    userId: number
    shopId: number
    masseuseId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    masseuseId?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    masseuseId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    reservationTime?: true
    userId?: true
    shopId?: true
    masseuseId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    reservationTime?: true
    userId?: true
    shopId?: true
    masseuseId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    reservationTime?: true
    userId?: true
    shopId?: true
    masseuseId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    reservationTime: Date
    userId: number
    shopId: number
    masseuseId: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationTime?: boolean
    userId?: boolean
    shopId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationTime?: boolean
    userId?: boolean
    shopId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationTime?: boolean
    userId?: boolean
    shopId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    reservationTime?: boolean
    userId?: boolean
    shopId?: boolean
    masseuseId?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationTime" | "userId" | "shopId" | "masseuseId", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      masseuse: Prisma.$MasseusePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservationTime: Date
      userId: number
      shopId: number
      masseuseId: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    masseuse<T extends MasseuseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasseuseDefaultArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly reservationTime: FieldRef<"Reservation", 'DateTime'>
    readonly userId: FieldRef<"Reservation", 'Int'>
    readonly shopId: FieldRef<"Reservation", 'Int'>
    readonly masseuseId: FieldRef<"Reservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ReviewMasseuse
   */

  export type AggregateReviewMasseuse = {
    _count: ReviewMasseuseCountAggregateOutputType | null
    _avg: ReviewMasseuseAvgAggregateOutputType | null
    _sum: ReviewMasseuseSumAggregateOutputType | null
    _min: ReviewMasseuseMinAggregateOutputType | null
    _max: ReviewMasseuseMaxAggregateOutputType | null
  }

  export type ReviewMasseuseAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    masseuseId: number | null
  }

  export type ReviewMasseuseSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    masseuseId: number | null
  }

  export type ReviewMasseuseMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    masseuseId: number | null
  }

  export type ReviewMasseuseMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    masseuseId: number | null
  }

  export type ReviewMasseuseCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    masseuseId: number
    _all: number
  }


  export type ReviewMasseuseAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    masseuseId?: true
  }

  export type ReviewMasseuseSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    masseuseId?: true
  }

  export type ReviewMasseuseMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    masseuseId?: true
  }

  export type ReviewMasseuseMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    masseuseId?: true
  }

  export type ReviewMasseuseCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    masseuseId?: true
    _all?: true
  }

  export type ReviewMasseuseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewMasseuse to aggregate.
     */
    where?: ReviewMasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMasseuses to fetch.
     */
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewMasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMasseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMasseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewMasseuses
    **/
    _count?: true | ReviewMasseuseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewMasseuseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewMasseuseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMasseuseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMasseuseMaxAggregateInputType
  }

  export type GetReviewMasseuseAggregateType<T extends ReviewMasseuseAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewMasseuse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewMasseuse[P]>
      : GetScalarType<T[P], AggregateReviewMasseuse[P]>
  }




  export type ReviewMasseuseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewMasseuseWhereInput
    orderBy?: ReviewMasseuseOrderByWithAggregationInput | ReviewMasseuseOrderByWithAggregationInput[]
    by: ReviewMasseuseScalarFieldEnum[] | ReviewMasseuseScalarFieldEnum
    having?: ReviewMasseuseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewMasseuseCountAggregateInputType | true
    _avg?: ReviewMasseuseAvgAggregateInputType
    _sum?: ReviewMasseuseSumAggregateInputType
    _min?: ReviewMasseuseMinAggregateInputType
    _max?: ReviewMasseuseMaxAggregateInputType
  }

  export type ReviewMasseuseGroupByOutputType = {
    id: number
    rating: number
    comment: string
    userId: number
    masseuseId: number
    _count: ReviewMasseuseCountAggregateOutputType | null
    _avg: ReviewMasseuseAvgAggregateOutputType | null
    _sum: ReviewMasseuseSumAggregateOutputType | null
    _min: ReviewMasseuseMinAggregateOutputType | null
    _max: ReviewMasseuseMaxAggregateOutputType | null
  }

  type GetReviewMasseuseGroupByPayload<T extends ReviewMasseuseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewMasseuseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewMasseuseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewMasseuseGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewMasseuseGroupByOutputType[P]>
        }
      >
    >


  export type ReviewMasseuseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMasseuse"]>

  export type ReviewMasseuseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMasseuse"]>

  export type ReviewMasseuseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    masseuseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMasseuse"]>

  export type ReviewMasseuseSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    masseuseId?: boolean
  }

  export type ReviewMasseuseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "masseuseId", ExtArgs["result"]["reviewMasseuse"]>
  export type ReviewMasseuseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }
  export type ReviewMasseuseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }
  export type ReviewMasseuseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    masseuse?: boolean | MasseuseDefaultArgs<ExtArgs>
  }

  export type $ReviewMasseusePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewMasseuse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      masseuse: Prisma.$MasseusePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      userId: number
      masseuseId: number
    }, ExtArgs["result"]["reviewMasseuse"]>
    composites: {}
  }

  type ReviewMasseuseGetPayload<S extends boolean | null | undefined | ReviewMasseuseDefaultArgs> = $Result.GetResult<Prisma.$ReviewMasseusePayload, S>

  type ReviewMasseuseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewMasseuseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewMasseuseCountAggregateInputType | true
    }

  export interface ReviewMasseuseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewMasseuse'], meta: { name: 'ReviewMasseuse' } }
    /**
     * Find zero or one ReviewMasseuse that matches the filter.
     * @param {ReviewMasseuseFindUniqueArgs} args - Arguments to find a ReviewMasseuse
     * @example
     * // Get one ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewMasseuseFindUniqueArgs>(args: SelectSubset<T, ReviewMasseuseFindUniqueArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewMasseuse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewMasseuseFindUniqueOrThrowArgs} args - Arguments to find a ReviewMasseuse
     * @example
     * // Get one ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewMasseuseFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewMasseuseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewMasseuse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseFindFirstArgs} args - Arguments to find a ReviewMasseuse
     * @example
     * // Get one ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewMasseuseFindFirstArgs>(args?: SelectSubset<T, ReviewMasseuseFindFirstArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewMasseuse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseFindFirstOrThrowArgs} args - Arguments to find a ReviewMasseuse
     * @example
     * // Get one ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewMasseuseFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewMasseuseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewMasseuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewMasseuses
     * const reviewMasseuses = await prisma.reviewMasseuse.findMany()
     * 
     * // Get first 10 ReviewMasseuses
     * const reviewMasseuses = await prisma.reviewMasseuse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewMasseuseWithIdOnly = await prisma.reviewMasseuse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewMasseuseFindManyArgs>(args?: SelectSubset<T, ReviewMasseuseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewMasseuse.
     * @param {ReviewMasseuseCreateArgs} args - Arguments to create a ReviewMasseuse.
     * @example
     * // Create one ReviewMasseuse
     * const ReviewMasseuse = await prisma.reviewMasseuse.create({
     *   data: {
     *     // ... data to create a ReviewMasseuse
     *   }
     * })
     * 
     */
    create<T extends ReviewMasseuseCreateArgs>(args: SelectSubset<T, ReviewMasseuseCreateArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewMasseuses.
     * @param {ReviewMasseuseCreateManyArgs} args - Arguments to create many ReviewMasseuses.
     * @example
     * // Create many ReviewMasseuses
     * const reviewMasseuse = await prisma.reviewMasseuse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewMasseuseCreateManyArgs>(args?: SelectSubset<T, ReviewMasseuseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewMasseuses and returns the data saved in the database.
     * @param {ReviewMasseuseCreateManyAndReturnArgs} args - Arguments to create many ReviewMasseuses.
     * @example
     * // Create many ReviewMasseuses
     * const reviewMasseuse = await prisma.reviewMasseuse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewMasseuses and only return the `id`
     * const reviewMasseuseWithIdOnly = await prisma.reviewMasseuse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewMasseuseCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewMasseuseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewMasseuse.
     * @param {ReviewMasseuseDeleteArgs} args - Arguments to delete one ReviewMasseuse.
     * @example
     * // Delete one ReviewMasseuse
     * const ReviewMasseuse = await prisma.reviewMasseuse.delete({
     *   where: {
     *     // ... filter to delete one ReviewMasseuse
     *   }
     * })
     * 
     */
    delete<T extends ReviewMasseuseDeleteArgs>(args: SelectSubset<T, ReviewMasseuseDeleteArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewMasseuse.
     * @param {ReviewMasseuseUpdateArgs} args - Arguments to update one ReviewMasseuse.
     * @example
     * // Update one ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewMasseuseUpdateArgs>(args: SelectSubset<T, ReviewMasseuseUpdateArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewMasseuses.
     * @param {ReviewMasseuseDeleteManyArgs} args - Arguments to filter ReviewMasseuses to delete.
     * @example
     * // Delete a few ReviewMasseuses
     * const { count } = await prisma.reviewMasseuse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewMasseuseDeleteManyArgs>(args?: SelectSubset<T, ReviewMasseuseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewMasseuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewMasseuses
     * const reviewMasseuse = await prisma.reviewMasseuse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewMasseuseUpdateManyArgs>(args: SelectSubset<T, ReviewMasseuseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewMasseuses and returns the data updated in the database.
     * @param {ReviewMasseuseUpdateManyAndReturnArgs} args - Arguments to update many ReviewMasseuses.
     * @example
     * // Update many ReviewMasseuses
     * const reviewMasseuse = await prisma.reviewMasseuse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewMasseuses and only return the `id`
     * const reviewMasseuseWithIdOnly = await prisma.reviewMasseuse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewMasseuseUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewMasseuseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewMasseuse.
     * @param {ReviewMasseuseUpsertArgs} args - Arguments to update or create a ReviewMasseuse.
     * @example
     * // Update or create a ReviewMasseuse
     * const reviewMasseuse = await prisma.reviewMasseuse.upsert({
     *   create: {
     *     // ... data to create a ReviewMasseuse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewMasseuse we want to update
     *   }
     * })
     */
    upsert<T extends ReviewMasseuseUpsertArgs>(args: SelectSubset<T, ReviewMasseuseUpsertArgs<ExtArgs>>): Prisma__ReviewMasseuseClient<$Result.GetResult<Prisma.$ReviewMasseusePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewMasseuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseCountArgs} args - Arguments to filter ReviewMasseuses to count.
     * @example
     * // Count the number of ReviewMasseuses
     * const count = await prisma.reviewMasseuse.count({
     *   where: {
     *     // ... the filter for the ReviewMasseuses we want to count
     *   }
     * })
    **/
    count<T extends ReviewMasseuseCountArgs>(
      args?: Subset<T, ReviewMasseuseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewMasseuseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewMasseuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewMasseuseAggregateArgs>(args: Subset<T, ReviewMasseuseAggregateArgs>): Prisma.PrismaPromise<GetReviewMasseuseAggregateType<T>>

    /**
     * Group by ReviewMasseuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMasseuseGroupByArgs} args - Group by arguments.
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
      T extends ReviewMasseuseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewMasseuseGroupByArgs['orderBy'] }
        : { orderBy?: ReviewMasseuseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewMasseuseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewMasseuseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewMasseuse model
   */
  readonly fields: ReviewMasseuseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewMasseuse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewMasseuseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    masseuse<T extends MasseuseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasseuseDefaultArgs<ExtArgs>>): Prisma__MasseuseClient<$Result.GetResult<Prisma.$MasseusePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewMasseuse model
   */
  interface ReviewMasseuseFieldRefs {
    readonly id: FieldRef<"ReviewMasseuse", 'Int'>
    readonly rating: FieldRef<"ReviewMasseuse", 'Int'>
    readonly comment: FieldRef<"ReviewMasseuse", 'String'>
    readonly userId: FieldRef<"ReviewMasseuse", 'Int'>
    readonly masseuseId: FieldRef<"ReviewMasseuse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReviewMasseuse findUnique
   */
  export type ReviewMasseuseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMasseuse to fetch.
     */
    where: ReviewMasseuseWhereUniqueInput
  }

  /**
   * ReviewMasseuse findUniqueOrThrow
   */
  export type ReviewMasseuseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMasseuse to fetch.
     */
    where: ReviewMasseuseWhereUniqueInput
  }

  /**
   * ReviewMasseuse findFirst
   */
  export type ReviewMasseuseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMasseuse to fetch.
     */
    where?: ReviewMasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMasseuses to fetch.
     */
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewMasseuses.
     */
    cursor?: ReviewMasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMasseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMasseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewMasseuses.
     */
    distinct?: ReviewMasseuseScalarFieldEnum | ReviewMasseuseScalarFieldEnum[]
  }

  /**
   * ReviewMasseuse findFirstOrThrow
   */
  export type ReviewMasseuseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMasseuse to fetch.
     */
    where?: ReviewMasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMasseuses to fetch.
     */
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewMasseuses.
     */
    cursor?: ReviewMasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMasseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMasseuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewMasseuses.
     */
    distinct?: ReviewMasseuseScalarFieldEnum | ReviewMasseuseScalarFieldEnum[]
  }

  /**
   * ReviewMasseuse findMany
   */
  export type ReviewMasseuseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMasseuses to fetch.
     */
    where?: ReviewMasseuseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMasseuses to fetch.
     */
    orderBy?: ReviewMasseuseOrderByWithRelationInput | ReviewMasseuseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewMasseuses.
     */
    cursor?: ReviewMasseuseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMasseuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMasseuses.
     */
    skip?: number
    distinct?: ReviewMasseuseScalarFieldEnum | ReviewMasseuseScalarFieldEnum[]
  }

  /**
   * ReviewMasseuse create
   */
  export type ReviewMasseuseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewMasseuse.
     */
    data: XOR<ReviewMasseuseCreateInput, ReviewMasseuseUncheckedCreateInput>
  }

  /**
   * ReviewMasseuse createMany
   */
  export type ReviewMasseuseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewMasseuses.
     */
    data: ReviewMasseuseCreateManyInput | ReviewMasseuseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewMasseuse createManyAndReturn
   */
  export type ReviewMasseuseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewMasseuses.
     */
    data: ReviewMasseuseCreateManyInput | ReviewMasseuseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewMasseuse update
   */
  export type ReviewMasseuseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewMasseuse.
     */
    data: XOR<ReviewMasseuseUpdateInput, ReviewMasseuseUncheckedUpdateInput>
    /**
     * Choose, which ReviewMasseuse to update.
     */
    where: ReviewMasseuseWhereUniqueInput
  }

  /**
   * ReviewMasseuse updateMany
   */
  export type ReviewMasseuseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewMasseuses.
     */
    data: XOR<ReviewMasseuseUpdateManyMutationInput, ReviewMasseuseUncheckedUpdateManyInput>
    /**
     * Filter which ReviewMasseuses to update
     */
    where?: ReviewMasseuseWhereInput
    /**
     * Limit how many ReviewMasseuses to update.
     */
    limit?: number
  }

  /**
   * ReviewMasseuse updateManyAndReturn
   */
  export type ReviewMasseuseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * The data used to update ReviewMasseuses.
     */
    data: XOR<ReviewMasseuseUpdateManyMutationInput, ReviewMasseuseUncheckedUpdateManyInput>
    /**
     * Filter which ReviewMasseuses to update
     */
    where?: ReviewMasseuseWhereInput
    /**
     * Limit how many ReviewMasseuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewMasseuse upsert
   */
  export type ReviewMasseuseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewMasseuse to update in case it exists.
     */
    where: ReviewMasseuseWhereUniqueInput
    /**
     * In case the ReviewMasseuse found by the `where` argument doesn't exist, create a new ReviewMasseuse with this data.
     */
    create: XOR<ReviewMasseuseCreateInput, ReviewMasseuseUncheckedCreateInput>
    /**
     * In case the ReviewMasseuse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewMasseuseUpdateInput, ReviewMasseuseUncheckedUpdateInput>
  }

  /**
   * ReviewMasseuse delete
   */
  export type ReviewMasseuseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
    /**
     * Filter which ReviewMasseuse to delete.
     */
    where: ReviewMasseuseWhereUniqueInput
  }

  /**
   * ReviewMasseuse deleteMany
   */
  export type ReviewMasseuseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewMasseuses to delete
     */
    where?: ReviewMasseuseWhereInput
    /**
     * Limit how many ReviewMasseuses to delete.
     */
    limit?: number
  }

  /**
   * ReviewMasseuse without action
   */
  export type ReviewMasseuseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMasseuse
     */
    select?: ReviewMasseuseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMasseuse
     */
    omit?: ReviewMasseuseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMasseuseInclude<ExtArgs> | null
  }


  /**
   * Model ReviewShop
   */

  export type AggregateReviewShop = {
    _count: ReviewShopCountAggregateOutputType | null
    _avg: ReviewShopAvgAggregateOutputType | null
    _sum: ReviewShopSumAggregateOutputType | null
    _min: ReviewShopMinAggregateOutputType | null
    _max: ReviewShopMaxAggregateOutputType | null
  }

  export type ReviewShopAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    shopId: number | null
  }

  export type ReviewShopSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    shopId: number | null
  }

  export type ReviewShopMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    shopId: number | null
  }

  export type ReviewShopMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    userId: number | null
    shopId: number | null
  }

  export type ReviewShopCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    shopId: number
    _all: number
  }


  export type ReviewShopAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    shopId?: true
  }

  export type ReviewShopSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    shopId?: true
  }

  export type ReviewShopMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    shopId?: true
  }

  export type ReviewShopMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    shopId?: true
  }

  export type ReviewShopCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    shopId?: true
    _all?: true
  }

  export type ReviewShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewShop to aggregate.
     */
    where?: ReviewShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewShops to fetch.
     */
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewShops
    **/
    _count?: true | ReviewShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewShopMaxAggregateInputType
  }

  export type GetReviewShopAggregateType<T extends ReviewShopAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewShop[P]>
      : GetScalarType<T[P], AggregateReviewShop[P]>
  }




  export type ReviewShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewShopWhereInput
    orderBy?: ReviewShopOrderByWithAggregationInput | ReviewShopOrderByWithAggregationInput[]
    by: ReviewShopScalarFieldEnum[] | ReviewShopScalarFieldEnum
    having?: ReviewShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewShopCountAggregateInputType | true
    _avg?: ReviewShopAvgAggregateInputType
    _sum?: ReviewShopSumAggregateInputType
    _min?: ReviewShopMinAggregateInputType
    _max?: ReviewShopMaxAggregateInputType
  }

  export type ReviewShopGroupByOutputType = {
    id: number
    rating: number
    comment: string
    userId: number
    shopId: number
    _count: ReviewShopCountAggregateOutputType | null
    _avg: ReviewShopAvgAggregateOutputType | null
    _sum: ReviewShopSumAggregateOutputType | null
    _min: ReviewShopMinAggregateOutputType | null
    _max: ReviewShopMaxAggregateOutputType | null
  }

  type GetReviewShopGroupByPayload<T extends ReviewShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewShopGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewShopGroupByOutputType[P]>
        }
      >
    >


  export type ReviewShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewShop"]>

  export type ReviewShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewShop"]>

  export type ReviewShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewShop"]>

  export type ReviewShopSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    shopId?: boolean
  }

  export type ReviewShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "shopId", ExtArgs["result"]["reviewShop"]>
  export type ReviewShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ReviewShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ReviewShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ReviewShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewShop"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      userId: number
      shopId: number
    }, ExtArgs["result"]["reviewShop"]>
    composites: {}
  }

  type ReviewShopGetPayload<S extends boolean | null | undefined | ReviewShopDefaultArgs> = $Result.GetResult<Prisma.$ReviewShopPayload, S>

  type ReviewShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewShopCountAggregateInputType | true
    }

  export interface ReviewShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewShop'], meta: { name: 'ReviewShop' } }
    /**
     * Find zero or one ReviewShop that matches the filter.
     * @param {ReviewShopFindUniqueArgs} args - Arguments to find a ReviewShop
     * @example
     * // Get one ReviewShop
     * const reviewShop = await prisma.reviewShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewShopFindUniqueArgs>(args: SelectSubset<T, ReviewShopFindUniqueArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewShop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewShopFindUniqueOrThrowArgs} args - Arguments to find a ReviewShop
     * @example
     * // Get one ReviewShop
     * const reviewShop = await prisma.reviewShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopFindFirstArgs} args - Arguments to find a ReviewShop
     * @example
     * // Get one ReviewShop
     * const reviewShop = await prisma.reviewShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewShopFindFirstArgs>(args?: SelectSubset<T, ReviewShopFindFirstArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewShop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopFindFirstOrThrowArgs} args - Arguments to find a ReviewShop
     * @example
     * // Get one ReviewShop
     * const reviewShop = await prisma.reviewShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewShops
     * const reviewShops = await prisma.reviewShop.findMany()
     * 
     * // Get first 10 ReviewShops
     * const reviewShops = await prisma.reviewShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewShopWithIdOnly = await prisma.reviewShop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewShopFindManyArgs>(args?: SelectSubset<T, ReviewShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewShop.
     * @param {ReviewShopCreateArgs} args - Arguments to create a ReviewShop.
     * @example
     * // Create one ReviewShop
     * const ReviewShop = await prisma.reviewShop.create({
     *   data: {
     *     // ... data to create a ReviewShop
     *   }
     * })
     * 
     */
    create<T extends ReviewShopCreateArgs>(args: SelectSubset<T, ReviewShopCreateArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewShops.
     * @param {ReviewShopCreateManyArgs} args - Arguments to create many ReviewShops.
     * @example
     * // Create many ReviewShops
     * const reviewShop = await prisma.reviewShop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewShopCreateManyArgs>(args?: SelectSubset<T, ReviewShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewShops and returns the data saved in the database.
     * @param {ReviewShopCreateManyAndReturnArgs} args - Arguments to create many ReviewShops.
     * @example
     * // Create many ReviewShops
     * const reviewShop = await prisma.reviewShop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewShops and only return the `id`
     * const reviewShopWithIdOnly = await prisma.reviewShop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewShop.
     * @param {ReviewShopDeleteArgs} args - Arguments to delete one ReviewShop.
     * @example
     * // Delete one ReviewShop
     * const ReviewShop = await prisma.reviewShop.delete({
     *   where: {
     *     // ... filter to delete one ReviewShop
     *   }
     * })
     * 
     */
    delete<T extends ReviewShopDeleteArgs>(args: SelectSubset<T, ReviewShopDeleteArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewShop.
     * @param {ReviewShopUpdateArgs} args - Arguments to update one ReviewShop.
     * @example
     * // Update one ReviewShop
     * const reviewShop = await prisma.reviewShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewShopUpdateArgs>(args: SelectSubset<T, ReviewShopUpdateArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewShops.
     * @param {ReviewShopDeleteManyArgs} args - Arguments to filter ReviewShops to delete.
     * @example
     * // Delete a few ReviewShops
     * const { count } = await prisma.reviewShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewShopDeleteManyArgs>(args?: SelectSubset<T, ReviewShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewShops
     * const reviewShop = await prisma.reviewShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewShopUpdateManyArgs>(args: SelectSubset<T, ReviewShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewShops and returns the data updated in the database.
     * @param {ReviewShopUpdateManyAndReturnArgs} args - Arguments to update many ReviewShops.
     * @example
     * // Update many ReviewShops
     * const reviewShop = await prisma.reviewShop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewShops and only return the `id`
     * const reviewShopWithIdOnly = await prisma.reviewShop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewShop.
     * @param {ReviewShopUpsertArgs} args - Arguments to update or create a ReviewShop.
     * @example
     * // Update or create a ReviewShop
     * const reviewShop = await prisma.reviewShop.upsert({
     *   create: {
     *     // ... data to create a ReviewShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewShop we want to update
     *   }
     * })
     */
    upsert<T extends ReviewShopUpsertArgs>(args: SelectSubset<T, ReviewShopUpsertArgs<ExtArgs>>): Prisma__ReviewShopClient<$Result.GetResult<Prisma.$ReviewShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopCountArgs} args - Arguments to filter ReviewShops to count.
     * @example
     * // Count the number of ReviewShops
     * const count = await prisma.reviewShop.count({
     *   where: {
     *     // ... the filter for the ReviewShops we want to count
     *   }
     * })
    **/
    count<T extends ReviewShopCountArgs>(
      args?: Subset<T, ReviewShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewShopAggregateArgs>(args: Subset<T, ReviewShopAggregateArgs>): Prisma.PrismaPromise<GetReviewShopAggregateType<T>>

    /**
     * Group by ReviewShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewShopGroupByArgs} args - Group by arguments.
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
      T extends ReviewShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewShopGroupByArgs['orderBy'] }
        : { orderBy?: ReviewShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewShop model
   */
  readonly fields: ReviewShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewShop model
   */
  interface ReviewShopFieldRefs {
    readonly id: FieldRef<"ReviewShop", 'Int'>
    readonly rating: FieldRef<"ReviewShop", 'Int'>
    readonly comment: FieldRef<"ReviewShop", 'String'>
    readonly userId: FieldRef<"ReviewShop", 'Int'>
    readonly shopId: FieldRef<"ReviewShop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReviewShop findUnique
   */
  export type ReviewShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter, which ReviewShop to fetch.
     */
    where: ReviewShopWhereUniqueInput
  }

  /**
   * ReviewShop findUniqueOrThrow
   */
  export type ReviewShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter, which ReviewShop to fetch.
     */
    where: ReviewShopWhereUniqueInput
  }

  /**
   * ReviewShop findFirst
   */
  export type ReviewShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter, which ReviewShop to fetch.
     */
    where?: ReviewShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewShops to fetch.
     */
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewShops.
     */
    cursor?: ReviewShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewShops.
     */
    distinct?: ReviewShopScalarFieldEnum | ReviewShopScalarFieldEnum[]
  }

  /**
   * ReviewShop findFirstOrThrow
   */
  export type ReviewShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter, which ReviewShop to fetch.
     */
    where?: ReviewShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewShops to fetch.
     */
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewShops.
     */
    cursor?: ReviewShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewShops.
     */
    distinct?: ReviewShopScalarFieldEnum | ReviewShopScalarFieldEnum[]
  }

  /**
   * ReviewShop findMany
   */
  export type ReviewShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter, which ReviewShops to fetch.
     */
    where?: ReviewShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewShops to fetch.
     */
    orderBy?: ReviewShopOrderByWithRelationInput | ReviewShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewShops.
     */
    cursor?: ReviewShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewShops.
     */
    skip?: number
    distinct?: ReviewShopScalarFieldEnum | ReviewShopScalarFieldEnum[]
  }

  /**
   * ReviewShop create
   */
  export type ReviewShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewShop.
     */
    data: XOR<ReviewShopCreateInput, ReviewShopUncheckedCreateInput>
  }

  /**
   * ReviewShop createMany
   */
  export type ReviewShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewShops.
     */
    data: ReviewShopCreateManyInput | ReviewShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewShop createManyAndReturn
   */
  export type ReviewShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewShops.
     */
    data: ReviewShopCreateManyInput | ReviewShopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewShop update
   */
  export type ReviewShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewShop.
     */
    data: XOR<ReviewShopUpdateInput, ReviewShopUncheckedUpdateInput>
    /**
     * Choose, which ReviewShop to update.
     */
    where: ReviewShopWhereUniqueInput
  }

  /**
   * ReviewShop updateMany
   */
  export type ReviewShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewShops.
     */
    data: XOR<ReviewShopUpdateManyMutationInput, ReviewShopUncheckedUpdateManyInput>
    /**
     * Filter which ReviewShops to update
     */
    where?: ReviewShopWhereInput
    /**
     * Limit how many ReviewShops to update.
     */
    limit?: number
  }

  /**
   * ReviewShop updateManyAndReturn
   */
  export type ReviewShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * The data used to update ReviewShops.
     */
    data: XOR<ReviewShopUpdateManyMutationInput, ReviewShopUncheckedUpdateManyInput>
    /**
     * Filter which ReviewShops to update
     */
    where?: ReviewShopWhereInput
    /**
     * Limit how many ReviewShops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewShop upsert
   */
  export type ReviewShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewShop to update in case it exists.
     */
    where: ReviewShopWhereUniqueInput
    /**
     * In case the ReviewShop found by the `where` argument doesn't exist, create a new ReviewShop with this data.
     */
    create: XOR<ReviewShopCreateInput, ReviewShopUncheckedCreateInput>
    /**
     * In case the ReviewShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewShopUpdateInput, ReviewShopUncheckedUpdateInput>
  }

  /**
   * ReviewShop delete
   */
  export type ReviewShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
    /**
     * Filter which ReviewShop to delete.
     */
    where: ReviewShopWhereUniqueInput
  }

  /**
   * ReviewShop deleteMany
   */
  export type ReviewShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewShops to delete
     */
    where?: ReviewShopWhereInput
    /**
     * Limit how many ReviewShops to delete.
     */
    limit?: number
  }

  /**
   * ReviewShop without action
   */
  export type ReviewShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewShop
     */
    select?: ReviewShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewShop
     */
    omit?: ReviewShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewShopInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tel: 'tel',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MasseuseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shopId: 'shopId'
  };

  export type MasseuseScalarFieldEnum = (typeof MasseuseScalarFieldEnum)[keyof typeof MasseuseScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    reservationTime: 'reservationTime',
    userId: 'userId',
    shopId: 'shopId',
    masseuseId: 'masseuseId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReviewMasseuseScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    masseuseId: 'masseuseId'
  };

  export type ReviewMasseuseScalarFieldEnum = (typeof ReviewMasseuseScalarFieldEnum)[keyof typeof ReviewMasseuseScalarFieldEnum]


  export const ReviewShopScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    shopId: 'shopId'
  };

  export type ReviewShopScalarFieldEnum = (typeof ReviewShopScalarFieldEnum)[keyof typeof ReviewShopScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviewsMasseuse?: ReviewMasseuseListRelationFilter
    reviewsShop?: ReviewShopListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reviewsMasseuse?: ReviewMasseuseOrderByRelationAggregateInput
    reviewsShop?: ReviewShopOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    reviewsMasseuse?: ReviewMasseuseListRelationFilter
    reviewsShop?: ReviewShopListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    tel?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type MasseuseWhereInput = {
    AND?: MasseuseWhereInput | MasseuseWhereInput[]
    OR?: MasseuseWhereInput[]
    NOT?: MasseuseWhereInput | MasseuseWhereInput[]
    id?: IntFilter<"Masseuse"> | number
    name?: StringFilter<"Masseuse"> | string
    shopId?: IntFilter<"Masseuse"> | number
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    reservations?: ReservationListRelationFilter
    reviewsMasseuse?: ReviewMasseuseListRelationFilter
  }

  export type MasseuseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shopId?: SortOrder
    shop?: ShopOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    reviewsMasseuse?: ReviewMasseuseOrderByRelationAggregateInput
  }

  export type MasseuseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MasseuseWhereInput | MasseuseWhereInput[]
    OR?: MasseuseWhereInput[]
    NOT?: MasseuseWhereInput | MasseuseWhereInput[]
    name?: StringFilter<"Masseuse"> | string
    shopId?: IntFilter<"Masseuse"> | number
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    reservations?: ReservationListRelationFilter
    reviewsMasseuse?: ReviewMasseuseListRelationFilter
  }, "id">

  export type MasseuseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shopId?: SortOrder
    _count?: MasseuseCountOrderByAggregateInput
    _avg?: MasseuseAvgOrderByAggregateInput
    _max?: MasseuseMaxOrderByAggregateInput
    _min?: MasseuseMinOrderByAggregateInput
    _sum?: MasseuseSumOrderByAggregateInput
  }

  export type MasseuseScalarWhereWithAggregatesInput = {
    AND?: MasseuseScalarWhereWithAggregatesInput | MasseuseScalarWhereWithAggregatesInput[]
    OR?: MasseuseScalarWhereWithAggregatesInput[]
    NOT?: MasseuseScalarWhereWithAggregatesInput | MasseuseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Masseuse"> | number
    name?: StringWithAggregatesFilter<"Masseuse"> | string
    shopId?: IntWithAggregatesFilter<"Masseuse"> | number
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    masseuses?: MasseuseListRelationFilter
    reservations?: ReservationListRelationFilter
    reviewsShop?: ReviewShopListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    masseuses?: MasseuseOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    reviewsShop?: ReviewShopOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    masseuses?: MasseuseListRelationFilter
    reservations?: ReservationListRelationFilter
    reviewsShop?: ReviewShopListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    name?: StringWithAggregatesFilter<"Shop"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    userId?: IntFilter<"Reservation"> | number
    shopId?: IntFilter<"Reservation"> | number
    masseuseId?: IntFilter<"Reservation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    masseuse?: XOR<MasseuseScalarRelationFilter, MasseuseWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    reservationTime?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
    user?: UserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    masseuse?: MasseuseOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    userId?: IntFilter<"Reservation"> | number
    shopId?: IntFilter<"Reservation"> | number
    masseuseId?: IntFilter<"Reservation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    masseuse?: XOR<MasseuseScalarRelationFilter, MasseuseWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    reservationTime?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    reservationTime?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    userId?: IntWithAggregatesFilter<"Reservation"> | number
    shopId?: IntWithAggregatesFilter<"Reservation"> | number
    masseuseId?: IntWithAggregatesFilter<"Reservation"> | number
  }

  export type ReviewMasseuseWhereInput = {
    AND?: ReviewMasseuseWhereInput | ReviewMasseuseWhereInput[]
    OR?: ReviewMasseuseWhereInput[]
    NOT?: ReviewMasseuseWhereInput | ReviewMasseuseWhereInput[]
    id?: IntFilter<"ReviewMasseuse"> | number
    rating?: IntFilter<"ReviewMasseuse"> | number
    comment?: StringFilter<"ReviewMasseuse"> | string
    userId?: IntFilter<"ReviewMasseuse"> | number
    masseuseId?: IntFilter<"ReviewMasseuse"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    masseuse?: XOR<MasseuseScalarRelationFilter, MasseuseWhereInput>
  }

  export type ReviewMasseuseOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
    user?: UserOrderByWithRelationInput
    masseuse?: MasseuseOrderByWithRelationInput
  }

  export type ReviewMasseuseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewMasseuseWhereInput | ReviewMasseuseWhereInput[]
    OR?: ReviewMasseuseWhereInput[]
    NOT?: ReviewMasseuseWhereInput | ReviewMasseuseWhereInput[]
    rating?: IntFilter<"ReviewMasseuse"> | number
    comment?: StringFilter<"ReviewMasseuse"> | string
    userId?: IntFilter<"ReviewMasseuse"> | number
    masseuseId?: IntFilter<"ReviewMasseuse"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    masseuse?: XOR<MasseuseScalarRelationFilter, MasseuseWhereInput>
  }, "id">

  export type ReviewMasseuseOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
    _count?: ReviewMasseuseCountOrderByAggregateInput
    _avg?: ReviewMasseuseAvgOrderByAggregateInput
    _max?: ReviewMasseuseMaxOrderByAggregateInput
    _min?: ReviewMasseuseMinOrderByAggregateInput
    _sum?: ReviewMasseuseSumOrderByAggregateInput
  }

  export type ReviewMasseuseScalarWhereWithAggregatesInput = {
    AND?: ReviewMasseuseScalarWhereWithAggregatesInput | ReviewMasseuseScalarWhereWithAggregatesInput[]
    OR?: ReviewMasseuseScalarWhereWithAggregatesInput[]
    NOT?: ReviewMasseuseScalarWhereWithAggregatesInput | ReviewMasseuseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReviewMasseuse"> | number
    rating?: IntWithAggregatesFilter<"ReviewMasseuse"> | number
    comment?: StringWithAggregatesFilter<"ReviewMasseuse"> | string
    userId?: IntWithAggregatesFilter<"ReviewMasseuse"> | number
    masseuseId?: IntWithAggregatesFilter<"ReviewMasseuse"> | number
  }

  export type ReviewShopWhereInput = {
    AND?: ReviewShopWhereInput | ReviewShopWhereInput[]
    OR?: ReviewShopWhereInput[]
    NOT?: ReviewShopWhereInput | ReviewShopWhereInput[]
    id?: IntFilter<"ReviewShop"> | number
    rating?: IntFilter<"ReviewShop"> | number
    comment?: StringFilter<"ReviewShop"> | string
    userId?: IntFilter<"ReviewShop"> | number
    shopId?: IntFilter<"ReviewShop"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ReviewShopOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    user?: UserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type ReviewShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewShopWhereInput | ReviewShopWhereInput[]
    OR?: ReviewShopWhereInput[]
    NOT?: ReviewShopWhereInput | ReviewShopWhereInput[]
    rating?: IntFilter<"ReviewShop"> | number
    comment?: StringFilter<"ReviewShop"> | string
    userId?: IntFilter<"ReviewShop"> | number
    shopId?: IntFilter<"ReviewShop"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type ReviewShopOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    _count?: ReviewShopCountOrderByAggregateInput
    _avg?: ReviewShopAvgOrderByAggregateInput
    _max?: ReviewShopMaxOrderByAggregateInput
    _min?: ReviewShopMinOrderByAggregateInput
    _sum?: ReviewShopSumOrderByAggregateInput
  }

  export type ReviewShopScalarWhereWithAggregatesInput = {
    AND?: ReviewShopScalarWhereWithAggregatesInput | ReviewShopScalarWhereWithAggregatesInput[]
    OR?: ReviewShopScalarWhereWithAggregatesInput[]
    NOT?: ReviewShopScalarWhereWithAggregatesInput | ReviewShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReviewShop"> | number
    rating?: IntWithAggregatesFilter<"ReviewShop"> | number
    comment?: StringWithAggregatesFilter<"ReviewShop"> | string
    userId?: IntWithAggregatesFilter<"ReviewShop"> | number
    shopId?: IntWithAggregatesFilter<"ReviewShop"> | number
  }

  export type UserCreateInput = {
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutUserInput
    reviewsShop?: ReviewShopCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutUserInput
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutUserNestedInput
    reviewsShop?: ReviewShopUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutUserNestedInput
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    tel: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MasseuseCreateInput = {
    name: string
    shop: ShopCreateNestedOneWithoutMasseusesInput
    reservations?: ReservationCreateNestedManyWithoutMasseuseInput
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseUncheckedCreateInput = {
    id?: number
    name: string
    shopId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutMasseuseInput
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutMasseusesNestedInput
    reservations?: ReservationUpdateManyWithoutMasseuseNestedInput
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutMasseuseNestedInput
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseCreateManyInput = {
    id?: number
    name: string
    shopId: number
  }

  export type MasseuseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasseuseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ShopCreateInput = {
    name: string
    masseuses?: MasseuseCreateNestedManyWithoutShopInput
    reservations?: ReservationCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    name: string
    masseuses?: MasseuseUncheckedCreateNestedManyWithoutShopInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUpdateManyWithoutShopNestedInput
    reservations?: ReservationUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUncheckedUpdateManyWithoutShopNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    name: string
  }

  export type ShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    reservationTime: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    shop: ShopCreateNestedOneWithoutReservationsInput
    masseuse: MasseuseCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    shopId: number
    masseuseId: number
  }

  export type ReservationUpdateInput = {
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    shop?: ShopUpdateOneRequiredWithoutReservationsNestedInput
    masseuse?: MasseuseUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    shopId: number
    masseuseId: number
  }

  export type ReservationUpdateManyMutationInput = {
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMasseuseCreateInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsMasseuseInput
    masseuse: MasseuseCreateNestedOneWithoutReviewsMasseuseInput
  }

  export type ReviewMasseuseUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    masseuseId: number
  }

  export type ReviewMasseuseUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsMasseuseNestedInput
    masseuse?: MasseuseUpdateOneRequiredWithoutReviewsMasseuseNestedInput
  }

  export type ReviewMasseuseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMasseuseCreateManyInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    masseuseId: number
  }

  export type ReviewMasseuseUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewMasseuseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopCreateInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsShopInput
    shop: ShopCreateNestedOneWithoutReviewsShopInput
  }

  export type ReviewShopUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    shopId: number
  }

  export type ReviewShopUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsShopNestedInput
    shop?: ShopUpdateOneRequiredWithoutReviewsShopNestedInput
  }

  export type ReviewShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopCreateManyInput = {
    id?: number
    rating: number
    comment: string
    userId: number
    shopId: number
  }

  export type ReviewShopUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ReviewMasseuseListRelationFilter = {
    every?: ReviewMasseuseWhereInput
    some?: ReviewMasseuseWhereInput
    none?: ReviewMasseuseWhereInput
  }

  export type ReviewShopListRelationFilter = {
    every?: ReviewShopWhereInput
    some?: ReviewShopWhereInput
    none?: ReviewShopWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReviewMasseuseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type MasseuseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopId?: SortOrder
  }

  export type MasseuseAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type MasseuseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopId?: SortOrder
  }

  export type MasseuseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopId?: SortOrder
  }

  export type MasseuseSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type MasseuseListRelationFilter = {
    every?: MasseuseWhereInput
    some?: MasseuseWhereInput
    none?: MasseuseWhereInput
  }

  export type MasseuseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MasseuseScalarRelationFilter = {
    is?: MasseuseWhereInput
    isNot?: MasseuseWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    reservationTime?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationTime?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    reservationTime?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    masseuseId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReviewMasseuseCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReviewMasseuseAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReviewMasseuseMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReviewMasseuseMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReviewMasseuseSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    masseuseId?: SortOrder
  }

  export type ReviewShopCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ReviewShopAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ReviewShopMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ReviewShopMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ReviewShopSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ReviewMasseuseCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput> | ReviewMasseuseCreateWithoutUserInput[] | ReviewMasseuseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutUserInput | ReviewMasseuseCreateOrConnectWithoutUserInput[]
    createMany?: ReviewMasseuseCreateManyUserInputEnvelope
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
  }

  export type ReviewShopCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput> | ReviewShopCreateWithoutUserInput[] | ReviewShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutUserInput | ReviewShopCreateOrConnectWithoutUserInput[]
    createMany?: ReviewShopCreateManyUserInputEnvelope
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewMasseuseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput> | ReviewMasseuseCreateWithoutUserInput[] | ReviewMasseuseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutUserInput | ReviewMasseuseCreateOrConnectWithoutUserInput[]
    createMany?: ReviewMasseuseCreateManyUserInputEnvelope
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
  }

  export type ReviewShopUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput> | ReviewShopCreateWithoutUserInput[] | ReviewShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutUserInput | ReviewShopCreateOrConnectWithoutUserInput[]
    createMany?: ReviewShopCreateManyUserInputEnvelope
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReviewMasseuseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput> | ReviewMasseuseCreateWithoutUserInput[] | ReviewMasseuseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutUserInput | ReviewMasseuseCreateOrConnectWithoutUserInput[]
    upsert?: ReviewMasseuseUpsertWithWhereUniqueWithoutUserInput | ReviewMasseuseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewMasseuseCreateManyUserInputEnvelope
    set?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    disconnect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    delete?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    update?: ReviewMasseuseUpdateWithWhereUniqueWithoutUserInput | ReviewMasseuseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewMasseuseUpdateManyWithWhereWithoutUserInput | ReviewMasseuseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
  }

  export type ReviewShopUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput> | ReviewShopCreateWithoutUserInput[] | ReviewShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutUserInput | ReviewShopCreateOrConnectWithoutUserInput[]
    upsert?: ReviewShopUpsertWithWhereUniqueWithoutUserInput | ReviewShopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewShopCreateManyUserInputEnvelope
    set?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    disconnect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    delete?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    update?: ReviewShopUpdateWithWhereUniqueWithoutUserInput | ReviewShopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewShopUpdateManyWithWhereWithoutUserInput | ReviewShopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewMasseuseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput> | ReviewMasseuseCreateWithoutUserInput[] | ReviewMasseuseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutUserInput | ReviewMasseuseCreateOrConnectWithoutUserInput[]
    upsert?: ReviewMasseuseUpsertWithWhereUniqueWithoutUserInput | ReviewMasseuseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewMasseuseCreateManyUserInputEnvelope
    set?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    disconnect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    delete?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    update?: ReviewMasseuseUpdateWithWhereUniqueWithoutUserInput | ReviewMasseuseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewMasseuseUpdateManyWithWhereWithoutUserInput | ReviewMasseuseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
  }

  export type ReviewShopUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput> | ReviewShopCreateWithoutUserInput[] | ReviewShopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutUserInput | ReviewShopCreateOrConnectWithoutUserInput[]
    upsert?: ReviewShopUpsertWithWhereUniqueWithoutUserInput | ReviewShopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewShopCreateManyUserInputEnvelope
    set?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    disconnect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    delete?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    update?: ReviewShopUpdateWithWhereUniqueWithoutUserInput | ReviewShopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewShopUpdateManyWithWhereWithoutUserInput | ReviewShopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutMasseusesInput = {
    create?: XOR<ShopCreateWithoutMasseusesInput, ShopUncheckedCreateWithoutMasseusesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMasseusesInput
    connect?: ShopWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutMasseuseInput = {
    create?: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput> | ReservationCreateWithoutMasseuseInput[] | ReservationUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMasseuseInput | ReservationCreateOrConnectWithoutMasseuseInput[]
    createMany?: ReservationCreateManyMasseuseInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewMasseuseCreateNestedManyWithoutMasseuseInput = {
    create?: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput> | ReviewMasseuseCreateWithoutMasseuseInput[] | ReviewMasseuseUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutMasseuseInput | ReviewMasseuseCreateOrConnectWithoutMasseuseInput[]
    createMany?: ReviewMasseuseCreateManyMasseuseInputEnvelope
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutMasseuseInput = {
    create?: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput> | ReservationCreateWithoutMasseuseInput[] | ReservationUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMasseuseInput | ReservationCreateOrConnectWithoutMasseuseInput[]
    createMany?: ReservationCreateManyMasseuseInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewMasseuseUncheckedCreateNestedManyWithoutMasseuseInput = {
    create?: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput> | ReviewMasseuseCreateWithoutMasseuseInput[] | ReviewMasseuseUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutMasseuseInput | ReviewMasseuseCreateOrConnectWithoutMasseuseInput[]
    createMany?: ReviewMasseuseCreateManyMasseuseInputEnvelope
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutMasseusesNestedInput = {
    create?: XOR<ShopCreateWithoutMasseusesInput, ShopUncheckedCreateWithoutMasseusesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMasseusesInput
    upsert?: ShopUpsertWithoutMasseusesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutMasseusesInput, ShopUpdateWithoutMasseusesInput>, ShopUncheckedUpdateWithoutMasseusesInput>
  }

  export type ReservationUpdateManyWithoutMasseuseNestedInput = {
    create?: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput> | ReservationCreateWithoutMasseuseInput[] | ReservationUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMasseuseInput | ReservationCreateOrConnectWithoutMasseuseInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMasseuseInput | ReservationUpsertWithWhereUniqueWithoutMasseuseInput[]
    createMany?: ReservationCreateManyMasseuseInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMasseuseInput | ReservationUpdateWithWhereUniqueWithoutMasseuseInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMasseuseInput | ReservationUpdateManyWithWhereWithoutMasseuseInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReviewMasseuseUpdateManyWithoutMasseuseNestedInput = {
    create?: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput> | ReviewMasseuseCreateWithoutMasseuseInput[] | ReviewMasseuseUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutMasseuseInput | ReviewMasseuseCreateOrConnectWithoutMasseuseInput[]
    upsert?: ReviewMasseuseUpsertWithWhereUniqueWithoutMasseuseInput | ReviewMasseuseUpsertWithWhereUniqueWithoutMasseuseInput[]
    createMany?: ReviewMasseuseCreateManyMasseuseInputEnvelope
    set?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    disconnect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    delete?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    update?: ReviewMasseuseUpdateWithWhereUniqueWithoutMasseuseInput | ReviewMasseuseUpdateWithWhereUniqueWithoutMasseuseInput[]
    updateMany?: ReviewMasseuseUpdateManyWithWhereWithoutMasseuseInput | ReviewMasseuseUpdateManyWithWhereWithoutMasseuseInput[]
    deleteMany?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutMasseuseNestedInput = {
    create?: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput> | ReservationCreateWithoutMasseuseInput[] | ReservationUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMasseuseInput | ReservationCreateOrConnectWithoutMasseuseInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMasseuseInput | ReservationUpsertWithWhereUniqueWithoutMasseuseInput[]
    createMany?: ReservationCreateManyMasseuseInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMasseuseInput | ReservationUpdateWithWhereUniqueWithoutMasseuseInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMasseuseInput | ReservationUpdateManyWithWhereWithoutMasseuseInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReviewMasseuseUncheckedUpdateManyWithoutMasseuseNestedInput = {
    create?: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput> | ReviewMasseuseCreateWithoutMasseuseInput[] | ReviewMasseuseUncheckedCreateWithoutMasseuseInput[]
    connectOrCreate?: ReviewMasseuseCreateOrConnectWithoutMasseuseInput | ReviewMasseuseCreateOrConnectWithoutMasseuseInput[]
    upsert?: ReviewMasseuseUpsertWithWhereUniqueWithoutMasseuseInput | ReviewMasseuseUpsertWithWhereUniqueWithoutMasseuseInput[]
    createMany?: ReviewMasseuseCreateManyMasseuseInputEnvelope
    set?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    disconnect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    delete?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    connect?: ReviewMasseuseWhereUniqueInput | ReviewMasseuseWhereUniqueInput[]
    update?: ReviewMasseuseUpdateWithWhereUniqueWithoutMasseuseInput | ReviewMasseuseUpdateWithWhereUniqueWithoutMasseuseInput[]
    updateMany?: ReviewMasseuseUpdateManyWithWhereWithoutMasseuseInput | ReviewMasseuseUpdateManyWithWhereWithoutMasseuseInput[]
    deleteMany?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
  }

  export type MasseuseCreateNestedManyWithoutShopInput = {
    create?: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput> | MasseuseCreateWithoutShopInput[] | MasseuseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MasseuseCreateOrConnectWithoutShopInput | MasseuseCreateOrConnectWithoutShopInput[]
    createMany?: MasseuseCreateManyShopInputEnvelope
    connect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutShopInput = {
    create?: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput> | ReservationCreateWithoutShopInput[] | ReservationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutShopInput | ReservationCreateOrConnectWithoutShopInput[]
    createMany?: ReservationCreateManyShopInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewShopCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput> | ReviewShopCreateWithoutShopInput[] | ReviewShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutShopInput | ReviewShopCreateOrConnectWithoutShopInput[]
    createMany?: ReviewShopCreateManyShopInputEnvelope
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
  }

  export type MasseuseUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput> | MasseuseCreateWithoutShopInput[] | MasseuseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MasseuseCreateOrConnectWithoutShopInput | MasseuseCreateOrConnectWithoutShopInput[]
    createMany?: MasseuseCreateManyShopInputEnvelope
    connect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput> | ReservationCreateWithoutShopInput[] | ReservationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutShopInput | ReservationCreateOrConnectWithoutShopInput[]
    createMany?: ReservationCreateManyShopInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReviewShopUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput> | ReviewShopCreateWithoutShopInput[] | ReviewShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutShopInput | ReviewShopCreateOrConnectWithoutShopInput[]
    createMany?: ReviewShopCreateManyShopInputEnvelope
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
  }

  export type MasseuseUpdateManyWithoutShopNestedInput = {
    create?: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput> | MasseuseCreateWithoutShopInput[] | MasseuseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MasseuseCreateOrConnectWithoutShopInput | MasseuseCreateOrConnectWithoutShopInput[]
    upsert?: MasseuseUpsertWithWhereUniqueWithoutShopInput | MasseuseUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MasseuseCreateManyShopInputEnvelope
    set?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    disconnect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    delete?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    connect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    update?: MasseuseUpdateWithWhereUniqueWithoutShopInput | MasseuseUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MasseuseUpdateManyWithWhereWithoutShopInput | MasseuseUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MasseuseScalarWhereInput | MasseuseScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput> | ReservationCreateWithoutShopInput[] | ReservationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutShopInput | ReservationCreateOrConnectWithoutShopInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutShopInput | ReservationUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReservationCreateManyShopInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutShopInput | ReservationUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutShopInput | ReservationUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReviewShopUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput> | ReviewShopCreateWithoutShopInput[] | ReviewShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutShopInput | ReviewShopCreateOrConnectWithoutShopInput[]
    upsert?: ReviewShopUpsertWithWhereUniqueWithoutShopInput | ReviewShopUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewShopCreateManyShopInputEnvelope
    set?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    disconnect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    delete?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    update?: ReviewShopUpdateWithWhereUniqueWithoutShopInput | ReviewShopUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewShopUpdateManyWithWhereWithoutShopInput | ReviewShopUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
  }

  export type MasseuseUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput> | MasseuseCreateWithoutShopInput[] | MasseuseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MasseuseCreateOrConnectWithoutShopInput | MasseuseCreateOrConnectWithoutShopInput[]
    upsert?: MasseuseUpsertWithWhereUniqueWithoutShopInput | MasseuseUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MasseuseCreateManyShopInputEnvelope
    set?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    disconnect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    delete?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    connect?: MasseuseWhereUniqueInput | MasseuseWhereUniqueInput[]
    update?: MasseuseUpdateWithWhereUniqueWithoutShopInput | MasseuseUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MasseuseUpdateManyWithWhereWithoutShopInput | MasseuseUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MasseuseScalarWhereInput | MasseuseScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput> | ReservationCreateWithoutShopInput[] | ReservationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutShopInput | ReservationCreateOrConnectWithoutShopInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutShopInput | ReservationUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReservationCreateManyShopInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutShopInput | ReservationUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutShopInput | ReservationUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReviewShopUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput> | ReviewShopCreateWithoutShopInput[] | ReviewShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewShopCreateOrConnectWithoutShopInput | ReviewShopCreateOrConnectWithoutShopInput[]
    upsert?: ReviewShopUpsertWithWhereUniqueWithoutShopInput | ReviewShopUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewShopCreateManyShopInputEnvelope
    set?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    disconnect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    delete?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    connect?: ReviewShopWhereUniqueInput | ReviewShopWhereUniqueInput[]
    update?: ReviewShopUpdateWithWhereUniqueWithoutShopInput | ReviewShopUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewShopUpdateManyWithWhereWithoutShopInput | ReviewShopUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ShopCreateWithoutReservationsInput, ShopUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReservationsInput
    connect?: ShopWhereUniqueInput
  }

  export type MasseuseCreateNestedOneWithoutReservationsInput = {
    create?: XOR<MasseuseCreateWithoutReservationsInput, MasseuseUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: MasseuseCreateOrConnectWithoutReservationsInput
    connect?: MasseuseWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type ShopUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ShopCreateWithoutReservationsInput, ShopUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReservationsInput
    upsert?: ShopUpsertWithoutReservationsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutReservationsInput, ShopUpdateWithoutReservationsInput>, ShopUncheckedUpdateWithoutReservationsInput>
  }

  export type MasseuseUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<MasseuseCreateWithoutReservationsInput, MasseuseUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: MasseuseCreateOrConnectWithoutReservationsInput
    upsert?: MasseuseUpsertWithoutReservationsInput
    connect?: MasseuseWhereUniqueInput
    update?: XOR<XOR<MasseuseUpdateToOneWithWhereWithoutReservationsInput, MasseuseUpdateWithoutReservationsInput>, MasseuseUncheckedUpdateWithoutReservationsInput>
  }

  export type UserCreateNestedOneWithoutReviewsMasseuseInput = {
    create?: XOR<UserCreateWithoutReviewsMasseuseInput, UserUncheckedCreateWithoutReviewsMasseuseInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsMasseuseInput
    connect?: UserWhereUniqueInput
  }

  export type MasseuseCreateNestedOneWithoutReviewsMasseuseInput = {
    create?: XOR<MasseuseCreateWithoutReviewsMasseuseInput, MasseuseUncheckedCreateWithoutReviewsMasseuseInput>
    connectOrCreate?: MasseuseCreateOrConnectWithoutReviewsMasseuseInput
    connect?: MasseuseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsMasseuseNestedInput = {
    create?: XOR<UserCreateWithoutReviewsMasseuseInput, UserUncheckedCreateWithoutReviewsMasseuseInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsMasseuseInput
    upsert?: UserUpsertWithoutReviewsMasseuseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsMasseuseInput, UserUpdateWithoutReviewsMasseuseInput>, UserUncheckedUpdateWithoutReviewsMasseuseInput>
  }

  export type MasseuseUpdateOneRequiredWithoutReviewsMasseuseNestedInput = {
    create?: XOR<MasseuseCreateWithoutReviewsMasseuseInput, MasseuseUncheckedCreateWithoutReviewsMasseuseInput>
    connectOrCreate?: MasseuseCreateOrConnectWithoutReviewsMasseuseInput
    upsert?: MasseuseUpsertWithoutReviewsMasseuseInput
    connect?: MasseuseWhereUniqueInput
    update?: XOR<XOR<MasseuseUpdateToOneWithWhereWithoutReviewsMasseuseInput, MasseuseUpdateWithoutReviewsMasseuseInput>, MasseuseUncheckedUpdateWithoutReviewsMasseuseInput>
  }

  export type UserCreateNestedOneWithoutReviewsShopInput = {
    create?: XOR<UserCreateWithoutReviewsShopInput, UserUncheckedCreateWithoutReviewsShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsShopInput
    connect?: UserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutReviewsShopInput = {
    create?: XOR<ShopCreateWithoutReviewsShopInput, ShopUncheckedCreateWithoutReviewsShopInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewsShopInput
    connect?: ShopWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsShopNestedInput = {
    create?: XOR<UserCreateWithoutReviewsShopInput, UserUncheckedCreateWithoutReviewsShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsShopInput
    upsert?: UserUpsertWithoutReviewsShopInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsShopInput, UserUpdateWithoutReviewsShopInput>, UserUncheckedUpdateWithoutReviewsShopInput>
  }

  export type ShopUpdateOneRequiredWithoutReviewsShopNestedInput = {
    create?: XOR<ShopCreateWithoutReviewsShopInput, ShopUncheckedCreateWithoutReviewsShopInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewsShopInput
    upsert?: ShopUpsertWithoutReviewsShopInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutReviewsShopInput, ShopUpdateWithoutReviewsShopInput>, ShopUncheckedUpdateWithoutReviewsShopInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReviewMasseuseCreateWithoutUserInput = {
    rating: number
    comment: string
    masseuse: MasseuseCreateNestedOneWithoutReviewsMasseuseInput
  }

  export type ReviewMasseuseUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment: string
    masseuseId: number
  }

  export type ReviewMasseuseCreateOrConnectWithoutUserInput = {
    where: ReviewMasseuseWhereUniqueInput
    create: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput>
  }

  export type ReviewMasseuseCreateManyUserInputEnvelope = {
    data: ReviewMasseuseCreateManyUserInput | ReviewMasseuseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewShopCreateWithoutUserInput = {
    rating: number
    comment: string
    shop: ShopCreateNestedOneWithoutReviewsShopInput
  }

  export type ReviewShopUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment: string
    shopId: number
  }

  export type ReviewShopCreateOrConnectWithoutUserInput = {
    where: ReviewShopWhereUniqueInput
    create: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput>
  }

  export type ReviewShopCreateManyUserInputEnvelope = {
    data: ReviewShopCreateManyUserInput | ReviewShopCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUserInput = {
    reservationTime: Date | string
    shop: ShopCreateNestedOneWithoutReservationsInput
    masseuse: MasseuseCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: number
    reservationTime: Date | string
    shopId: number
    masseuseId: number
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewMasseuseUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewMasseuseWhereUniqueInput
    update: XOR<ReviewMasseuseUpdateWithoutUserInput, ReviewMasseuseUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewMasseuseCreateWithoutUserInput, ReviewMasseuseUncheckedCreateWithoutUserInput>
  }

  export type ReviewMasseuseUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewMasseuseWhereUniqueInput
    data: XOR<ReviewMasseuseUpdateWithoutUserInput, ReviewMasseuseUncheckedUpdateWithoutUserInput>
  }

  export type ReviewMasseuseUpdateManyWithWhereWithoutUserInput = {
    where: ReviewMasseuseScalarWhereInput
    data: XOR<ReviewMasseuseUpdateManyMutationInput, ReviewMasseuseUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewMasseuseScalarWhereInput = {
    AND?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
    OR?: ReviewMasseuseScalarWhereInput[]
    NOT?: ReviewMasseuseScalarWhereInput | ReviewMasseuseScalarWhereInput[]
    id?: IntFilter<"ReviewMasseuse"> | number
    rating?: IntFilter<"ReviewMasseuse"> | number
    comment?: StringFilter<"ReviewMasseuse"> | string
    userId?: IntFilter<"ReviewMasseuse"> | number
    masseuseId?: IntFilter<"ReviewMasseuse"> | number
  }

  export type ReviewShopUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewShopWhereUniqueInput
    update: XOR<ReviewShopUpdateWithoutUserInput, ReviewShopUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewShopCreateWithoutUserInput, ReviewShopUncheckedCreateWithoutUserInput>
  }

  export type ReviewShopUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewShopWhereUniqueInput
    data: XOR<ReviewShopUpdateWithoutUserInput, ReviewShopUncheckedUpdateWithoutUserInput>
  }

  export type ReviewShopUpdateManyWithWhereWithoutUserInput = {
    where: ReviewShopScalarWhereInput
    data: XOR<ReviewShopUpdateManyMutationInput, ReviewShopUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewShopScalarWhereInput = {
    AND?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
    OR?: ReviewShopScalarWhereInput[]
    NOT?: ReviewShopScalarWhereInput | ReviewShopScalarWhereInput[]
    id?: IntFilter<"ReviewShop"> | number
    rating?: IntFilter<"ReviewShop"> | number
    comment?: StringFilter<"ReviewShop"> | string
    userId?: IntFilter<"ReviewShop"> | number
    shopId?: IntFilter<"ReviewShop"> | number
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    userId?: IntFilter<"Reservation"> | number
    shopId?: IntFilter<"Reservation"> | number
    masseuseId?: IntFilter<"Reservation"> | number
  }

  export type ShopCreateWithoutMasseusesInput = {
    name: string
    reservations?: ReservationCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutMasseusesInput = {
    id?: number
    name: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutMasseusesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutMasseusesInput, ShopUncheckedCreateWithoutMasseusesInput>
  }

  export type ReservationCreateWithoutMasseuseInput = {
    reservationTime: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    shop: ShopCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutMasseuseInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    shopId: number
  }

  export type ReservationCreateOrConnectWithoutMasseuseInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput>
  }

  export type ReservationCreateManyMasseuseInputEnvelope = {
    data: ReservationCreateManyMasseuseInput | ReservationCreateManyMasseuseInput[]
    skipDuplicates?: boolean
  }

  export type ReviewMasseuseCreateWithoutMasseuseInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsMasseuseInput
  }

  export type ReviewMasseuseUncheckedCreateWithoutMasseuseInput = {
    id?: number
    rating: number
    comment: string
    userId: number
  }

  export type ReviewMasseuseCreateOrConnectWithoutMasseuseInput = {
    where: ReviewMasseuseWhereUniqueInput
    create: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput>
  }

  export type ReviewMasseuseCreateManyMasseuseInputEnvelope = {
    data: ReviewMasseuseCreateManyMasseuseInput | ReviewMasseuseCreateManyMasseuseInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutMasseusesInput = {
    update: XOR<ShopUpdateWithoutMasseusesInput, ShopUncheckedUpdateWithoutMasseusesInput>
    create: XOR<ShopCreateWithoutMasseusesInput, ShopUncheckedCreateWithoutMasseusesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutMasseusesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutMasseusesInput, ShopUncheckedUpdateWithoutMasseusesInput>
  }

  export type ShopUpdateWithoutMasseusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutMasseusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutMasseuseInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutMasseuseInput, ReservationUncheckedUpdateWithoutMasseuseInput>
    create: XOR<ReservationCreateWithoutMasseuseInput, ReservationUncheckedCreateWithoutMasseuseInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutMasseuseInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutMasseuseInput, ReservationUncheckedUpdateWithoutMasseuseInput>
  }

  export type ReservationUpdateManyWithWhereWithoutMasseuseInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutMasseuseInput>
  }

  export type ReviewMasseuseUpsertWithWhereUniqueWithoutMasseuseInput = {
    where: ReviewMasseuseWhereUniqueInput
    update: XOR<ReviewMasseuseUpdateWithoutMasseuseInput, ReviewMasseuseUncheckedUpdateWithoutMasseuseInput>
    create: XOR<ReviewMasseuseCreateWithoutMasseuseInput, ReviewMasseuseUncheckedCreateWithoutMasseuseInput>
  }

  export type ReviewMasseuseUpdateWithWhereUniqueWithoutMasseuseInput = {
    where: ReviewMasseuseWhereUniqueInput
    data: XOR<ReviewMasseuseUpdateWithoutMasseuseInput, ReviewMasseuseUncheckedUpdateWithoutMasseuseInput>
  }

  export type ReviewMasseuseUpdateManyWithWhereWithoutMasseuseInput = {
    where: ReviewMasseuseScalarWhereInput
    data: XOR<ReviewMasseuseUpdateManyMutationInput, ReviewMasseuseUncheckedUpdateManyWithoutMasseuseInput>
  }

  export type MasseuseCreateWithoutShopInput = {
    name: string
    reservations?: ReservationCreateNestedManyWithoutMasseuseInput
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutMasseuseInput
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseCreateOrConnectWithoutShopInput = {
    where: MasseuseWhereUniqueInput
    create: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput>
  }

  export type MasseuseCreateManyShopInputEnvelope = {
    data: MasseuseCreateManyShopInput | MasseuseCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutShopInput = {
    reservationTime: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    masseuse: MasseuseCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutShopInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    masseuseId: number
  }

  export type ReservationCreateOrConnectWithoutShopInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput>
  }

  export type ReservationCreateManyShopInputEnvelope = {
    data: ReservationCreateManyShopInput | ReservationCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ReviewShopCreateWithoutShopInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsShopInput
  }

  export type ReviewShopUncheckedCreateWithoutShopInput = {
    id?: number
    rating: number
    comment: string
    userId: number
  }

  export type ReviewShopCreateOrConnectWithoutShopInput = {
    where: ReviewShopWhereUniqueInput
    create: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput>
  }

  export type ReviewShopCreateManyShopInputEnvelope = {
    data: ReviewShopCreateManyShopInput | ReviewShopCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type MasseuseUpsertWithWhereUniqueWithoutShopInput = {
    where: MasseuseWhereUniqueInput
    update: XOR<MasseuseUpdateWithoutShopInput, MasseuseUncheckedUpdateWithoutShopInput>
    create: XOR<MasseuseCreateWithoutShopInput, MasseuseUncheckedCreateWithoutShopInput>
  }

  export type MasseuseUpdateWithWhereUniqueWithoutShopInput = {
    where: MasseuseWhereUniqueInput
    data: XOR<MasseuseUpdateWithoutShopInput, MasseuseUncheckedUpdateWithoutShopInput>
  }

  export type MasseuseUpdateManyWithWhereWithoutShopInput = {
    where: MasseuseScalarWhereInput
    data: XOR<MasseuseUpdateManyMutationInput, MasseuseUncheckedUpdateManyWithoutShopInput>
  }

  export type MasseuseScalarWhereInput = {
    AND?: MasseuseScalarWhereInput | MasseuseScalarWhereInput[]
    OR?: MasseuseScalarWhereInput[]
    NOT?: MasseuseScalarWhereInput | MasseuseScalarWhereInput[]
    id?: IntFilter<"Masseuse"> | number
    name?: StringFilter<"Masseuse"> | string
    shopId?: IntFilter<"Masseuse"> | number
  }

  export type ReservationUpsertWithWhereUniqueWithoutShopInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutShopInput, ReservationUncheckedUpdateWithoutShopInput>
    create: XOR<ReservationCreateWithoutShopInput, ReservationUncheckedCreateWithoutShopInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutShopInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutShopInput, ReservationUncheckedUpdateWithoutShopInput>
  }

  export type ReservationUpdateManyWithWhereWithoutShopInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutShopInput>
  }

  export type ReviewShopUpsertWithWhereUniqueWithoutShopInput = {
    where: ReviewShopWhereUniqueInput
    update: XOR<ReviewShopUpdateWithoutShopInput, ReviewShopUncheckedUpdateWithoutShopInput>
    create: XOR<ReviewShopCreateWithoutShopInput, ReviewShopUncheckedCreateWithoutShopInput>
  }

  export type ReviewShopUpdateWithWhereUniqueWithoutShopInput = {
    where: ReviewShopWhereUniqueInput
    data: XOR<ReviewShopUpdateWithoutShopInput, ReviewShopUncheckedUpdateWithoutShopInput>
  }

  export type ReviewShopUpdateManyWithWhereWithoutShopInput = {
    where: ReviewShopScalarWhereInput
    data: XOR<ReviewShopUpdateManyMutationInput, ReviewShopUncheckedUpdateManyWithoutShopInput>
  }

  export type UserCreateWithoutReservationsInput = {
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutUserInput
    reviewsShop?: ReviewShopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutUserInput
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type ShopCreateWithoutReservationsInput = {
    name: string
    masseuses?: MasseuseCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    masseuses?: MasseuseUncheckedCreateNestedManyWithoutShopInput
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutReservationsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutReservationsInput, ShopUncheckedCreateWithoutReservationsInput>
  }

  export type MasseuseCreateWithoutReservationsInput = {
    name: string
    shop: ShopCreateNestedOneWithoutMasseusesInput
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    shopId: number
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseCreateOrConnectWithoutReservationsInput = {
    where: MasseuseWhereUniqueInput
    create: XOR<MasseuseCreateWithoutReservationsInput, MasseuseUncheckedCreateWithoutReservationsInput>
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutUserNestedInput
    reviewsShop?: ReviewShopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutUserNestedInput
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopUpsertWithoutReservationsInput = {
    update: XOR<ShopUpdateWithoutReservationsInput, ShopUncheckedUpdateWithoutReservationsInput>
    create: XOR<ShopCreateWithoutReservationsInput, ShopUncheckedCreateWithoutReservationsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutReservationsInput, ShopUncheckedUpdateWithoutReservationsInput>
  }

  export type ShopUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUncheckedUpdateManyWithoutShopNestedInput
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type MasseuseUpsertWithoutReservationsInput = {
    update: XOR<MasseuseUpdateWithoutReservationsInput, MasseuseUncheckedUpdateWithoutReservationsInput>
    create: XOR<MasseuseCreateWithoutReservationsInput, MasseuseUncheckedCreateWithoutReservationsInput>
    where?: MasseuseWhereInput
  }

  export type MasseuseUpdateToOneWithWhereWithoutReservationsInput = {
    where?: MasseuseWhereInput
    data: XOR<MasseuseUpdateWithoutReservationsInput, MasseuseUncheckedUpdateWithoutReservationsInput>
  }

  export type MasseuseUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutMasseusesNestedInput
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutMasseuseNestedInput
  }

  export type UserCreateWithoutReviewsMasseuseInput = {
    name: string
    tel: string
    email: string
    password: string
    reviewsShop?: ReviewShopCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsMasseuseInput = {
    id?: number
    name: string
    tel: string
    email: string
    password: string
    reviewsShop?: ReviewShopUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsMasseuseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsMasseuseInput, UserUncheckedCreateWithoutReviewsMasseuseInput>
  }

  export type MasseuseCreateWithoutReviewsMasseuseInput = {
    name: string
    shop: ShopCreateNestedOneWithoutMasseusesInput
    reservations?: ReservationCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseUncheckedCreateWithoutReviewsMasseuseInput = {
    id?: number
    name: string
    shopId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutMasseuseInput
  }

  export type MasseuseCreateOrConnectWithoutReviewsMasseuseInput = {
    where: MasseuseWhereUniqueInput
    create: XOR<MasseuseCreateWithoutReviewsMasseuseInput, MasseuseUncheckedCreateWithoutReviewsMasseuseInput>
  }

  export type UserUpsertWithoutReviewsMasseuseInput = {
    update: XOR<UserUpdateWithoutReviewsMasseuseInput, UserUncheckedUpdateWithoutReviewsMasseuseInput>
    create: XOR<UserCreateWithoutReviewsMasseuseInput, UserUncheckedCreateWithoutReviewsMasseuseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsMasseuseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsMasseuseInput, UserUncheckedUpdateWithoutReviewsMasseuseInput>
  }

  export type UserUpdateWithoutReviewsMasseuseInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsShop?: ReviewShopUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsShop?: ReviewShopUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MasseuseUpsertWithoutReviewsMasseuseInput = {
    update: XOR<MasseuseUpdateWithoutReviewsMasseuseInput, MasseuseUncheckedUpdateWithoutReviewsMasseuseInput>
    create: XOR<MasseuseCreateWithoutReviewsMasseuseInput, MasseuseUncheckedCreateWithoutReviewsMasseuseInput>
    where?: MasseuseWhereInput
  }

  export type MasseuseUpdateToOneWithWhereWithoutReviewsMasseuseInput = {
    where?: MasseuseWhereInput
    data: XOR<MasseuseUpdateWithoutReviewsMasseuseInput, MasseuseUncheckedUpdateWithoutReviewsMasseuseInput>
  }

  export type MasseuseUpdateWithoutReviewsMasseuseInput = {
    name?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutMasseusesNestedInput
    reservations?: ReservationUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseUncheckedUpdateWithoutReviewsMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutMasseuseNestedInput
  }

  export type UserCreateWithoutReviewsShopInput = {
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsShopInput = {
    id?: number
    name: string
    tel: string
    email: string
    password: string
    reviewsMasseuse?: ReviewMasseuseUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsShopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsShopInput, UserUncheckedCreateWithoutReviewsShopInput>
  }

  export type ShopCreateWithoutReviewsShopInput = {
    name: string
    masseuses?: MasseuseCreateNestedManyWithoutShopInput
    reservations?: ReservationCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutReviewsShopInput = {
    id?: number
    name: string
    masseuses?: MasseuseUncheckedCreateNestedManyWithoutShopInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutReviewsShopInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutReviewsShopInput, ShopUncheckedCreateWithoutReviewsShopInput>
  }

  export type UserUpsertWithoutReviewsShopInput = {
    update: XOR<UserUpdateWithoutReviewsShopInput, UserUncheckedUpdateWithoutReviewsShopInput>
    create: XOR<UserCreateWithoutReviewsShopInput, UserUncheckedCreateWithoutReviewsShopInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsShopInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsShopInput, UserUncheckedUpdateWithoutReviewsShopInput>
  }

  export type UserUpdateWithoutReviewsShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopUpsertWithoutReviewsShopInput = {
    update: XOR<ShopUpdateWithoutReviewsShopInput, ShopUncheckedUpdateWithoutReviewsShopInput>
    create: XOR<ShopCreateWithoutReviewsShopInput, ShopUncheckedCreateWithoutReviewsShopInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutReviewsShopInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutReviewsShopInput, ShopUncheckedUpdateWithoutReviewsShopInput>
  }

  export type ShopUpdateWithoutReviewsShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUpdateManyWithoutShopNestedInput
    reservations?: ReservationUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutReviewsShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    masseuses?: MasseuseUncheckedUpdateManyWithoutShopNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ReviewMasseuseCreateManyUserInput = {
    id?: number
    rating: number
    comment: string
    masseuseId: number
  }

  export type ReviewShopCreateManyUserInput = {
    id?: number
    rating: number
    comment: string
    shopId: number
  }

  export type ReservationCreateManyUserInput = {
    id?: number
    reservationTime: Date | string
    shopId: number
    masseuseId: number
  }

  export type ReviewMasseuseUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    masseuse?: MasseuseUpdateOneRequiredWithoutReviewsMasseuseNestedInput
  }

  export type ReviewMasseuseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMasseuseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutReviewsShopNestedInput
  }

  export type ReviewShopUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUpdateWithoutUserInput = {
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutReservationsNestedInput
    masseuse?: MasseuseUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyMasseuseInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    shopId: number
  }

  export type ReviewMasseuseCreateManyMasseuseInput = {
    id?: number
    rating: number
    comment: string
    userId: number
  }

  export type ReservationUpdateWithoutMasseuseInput = {
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    shop?: ShopUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMasseuseUpdateWithoutMasseuseInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsMasseuseNestedInput
  }

  export type ReviewMasseuseUncheckedUpdateWithoutMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMasseuseUncheckedUpdateManyWithoutMasseuseInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MasseuseCreateManyShopInput = {
    id?: number
    name: string
  }

  export type ReservationCreateManyShopInput = {
    id?: number
    reservationTime: Date | string
    userId: number
    masseuseId: number
  }

  export type ReviewShopCreateManyShopInput = {
    id?: number
    rating: number
    comment: string
    userId: number
  }

  export type MasseuseUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutMasseuseNestedInput
    reviewsMasseuse?: ReviewMasseuseUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutMasseuseNestedInput
    reviewsMasseuse?: ReviewMasseuseUncheckedUpdateManyWithoutMasseuseNestedInput
  }

  export type MasseuseUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUpdateWithoutShopInput = {
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    masseuse?: MasseuseUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    masseuseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopUpdateWithoutShopInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsShopNestedInput
  }

  export type ReviewShopUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewShopUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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