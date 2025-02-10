
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
 * Model form_response
 * 
 */
export type form_response = $Result.DefaultSelection<Prisma.$form_responsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Form_responses
 * const form_responses = await prisma.form_response.findMany()
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
   * // Fetch zero or more Form_responses
   * const form_responses = await prisma.form_response.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.form_response`: Exposes CRUD operations for the **form_response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Form_responses
    * const form_responses = await prisma.form_response.findMany()
    * ```
    */
  get form_response(): Prisma.form_responseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    form_response: 'form_response'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "form_response"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      form_response: {
        payload: Prisma.$form_responsePayload<ExtArgs>
        fields: Prisma.form_responseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.form_responseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.form_responseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          findFirst: {
            args: Prisma.form_responseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.form_responseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          findMany: {
            args: Prisma.form_responseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>[]
          }
          create: {
            args: Prisma.form_responseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          createMany: {
            args: Prisma.form_responseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.form_responseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>[]
          }
          delete: {
            args: Prisma.form_responseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          update: {
            args: Prisma.form_responseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          deleteMany: {
            args: Prisma.form_responseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.form_responseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.form_responseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>[]
          }
          upsert: {
            args: Prisma.form_responseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_responsePayload>
          }
          aggregate: {
            args: Prisma.Form_responseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm_response>
          }
          groupBy: {
            args: Prisma.form_responseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Form_responseGroupByOutputType>[]
          }
          count: {
            args: Prisma.form_responseCountArgs<ExtArgs>
            result: $Utils.Optional<Form_responseCountAggregateOutputType> | number
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
    form_response?: form_responseOmit
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
   * Models
   */

  /**
   * Model form_response
   */

  export type AggregateForm_response = {
    _count: Form_responseCountAggregateOutputType | null
    _min: Form_responseMinAggregateOutputType | null
    _max: Form_responseMaxAggregateOutputType | null
  }

  export type Form_responseMinAggregateOutputType = {
    user_id: string | null
    question_id: string | null
    response: string | null
  }

  export type Form_responseMaxAggregateOutputType = {
    user_id: string | null
    question_id: string | null
    response: string | null
  }

  export type Form_responseCountAggregateOutputType = {
    user_id: number
    question_id: number
    response: number
    _all: number
  }


  export type Form_responseMinAggregateInputType = {
    user_id?: true
    question_id?: true
    response?: true
  }

  export type Form_responseMaxAggregateInputType = {
    user_id?: true
    question_id?: true
    response?: true
  }

  export type Form_responseCountAggregateInputType = {
    user_id?: true
    question_id?: true
    response?: true
    _all?: true
  }

  export type Form_responseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which form_response to aggregate.
     */
    where?: form_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_responses to fetch.
     */
    orderBy?: form_responseOrderByWithRelationInput | form_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: form_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned form_responses
    **/
    _count?: true | Form_responseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Form_responseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Form_responseMaxAggregateInputType
  }

  export type GetForm_responseAggregateType<T extends Form_responseAggregateArgs> = {
        [P in keyof T & keyof AggregateForm_response]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm_response[P]>
      : GetScalarType<T[P], AggregateForm_response[P]>
  }




  export type form_responseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: form_responseWhereInput
    orderBy?: form_responseOrderByWithAggregationInput | form_responseOrderByWithAggregationInput[]
    by: Form_responseScalarFieldEnum[] | Form_responseScalarFieldEnum
    having?: form_responseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Form_responseCountAggregateInputType | true
    _min?: Form_responseMinAggregateInputType
    _max?: Form_responseMaxAggregateInputType
  }

  export type Form_responseGroupByOutputType = {
    user_id: string
    question_id: string
    response: string
    _count: Form_responseCountAggregateOutputType | null
    _min: Form_responseMinAggregateOutputType | null
    _max: Form_responseMaxAggregateOutputType | null
  }

  type GetForm_responseGroupByPayload<T extends form_responseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Form_responseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Form_responseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Form_responseGroupByOutputType[P]>
            : GetScalarType<T[P], Form_responseGroupByOutputType[P]>
        }
      >
    >


  export type form_responseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    question_id?: boolean
    response?: boolean
  }, ExtArgs["result"]["form_response"]>

  export type form_responseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    question_id?: boolean
    response?: boolean
  }, ExtArgs["result"]["form_response"]>

  export type form_responseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    question_id?: boolean
    response?: boolean
  }, ExtArgs["result"]["form_response"]>

  export type form_responseSelectScalar = {
    user_id?: boolean
    question_id?: boolean
    response?: boolean
  }

  export type form_responseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "question_id" | "response", ExtArgs["result"]["form_response"]>

  export type $form_responsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "form_response"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      question_id: string
      response: string
    }, ExtArgs["result"]["form_response"]>
    composites: {}
  }

  type form_responseGetPayload<S extends boolean | null | undefined | form_responseDefaultArgs> = $Result.GetResult<Prisma.$form_responsePayload, S>

  type form_responseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<form_responseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Form_responseCountAggregateInputType | true
    }

  export interface form_responseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['form_response'], meta: { name: 'form_response' } }
    /**
     * Find zero or one Form_response that matches the filter.
     * @param {form_responseFindUniqueArgs} args - Arguments to find a Form_response
     * @example
     * // Get one Form_response
     * const form_response = await prisma.form_response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends form_responseFindUniqueArgs>(args: SelectSubset<T, form_responseFindUniqueArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Form_response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {form_responseFindUniqueOrThrowArgs} args - Arguments to find a Form_response
     * @example
     * // Get one Form_response
     * const form_response = await prisma.form_response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends form_responseFindUniqueOrThrowArgs>(args: SelectSubset<T, form_responseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Form_response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseFindFirstArgs} args - Arguments to find a Form_response
     * @example
     * // Get one Form_response
     * const form_response = await prisma.form_response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends form_responseFindFirstArgs>(args?: SelectSubset<T, form_responseFindFirstArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Form_response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseFindFirstOrThrowArgs} args - Arguments to find a Form_response
     * @example
     * // Get one Form_response
     * const form_response = await prisma.form_response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends form_responseFindFirstOrThrowArgs>(args?: SelectSubset<T, form_responseFindFirstOrThrowArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Form_responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Form_responses
     * const form_responses = await prisma.form_response.findMany()
     * 
     * // Get first 10 Form_responses
     * const form_responses = await prisma.form_response.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const form_responseWithUser_idOnly = await prisma.form_response.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends form_responseFindManyArgs>(args?: SelectSubset<T, form_responseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Form_response.
     * @param {form_responseCreateArgs} args - Arguments to create a Form_response.
     * @example
     * // Create one Form_response
     * const Form_response = await prisma.form_response.create({
     *   data: {
     *     // ... data to create a Form_response
     *   }
     * })
     * 
     */
    create<T extends form_responseCreateArgs>(args: SelectSubset<T, form_responseCreateArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Form_responses.
     * @param {form_responseCreateManyArgs} args - Arguments to create many Form_responses.
     * @example
     * // Create many Form_responses
     * const form_response = await prisma.form_response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends form_responseCreateManyArgs>(args?: SelectSubset<T, form_responseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Form_responses and returns the data saved in the database.
     * @param {form_responseCreateManyAndReturnArgs} args - Arguments to create many Form_responses.
     * @example
     * // Create many Form_responses
     * const form_response = await prisma.form_response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Form_responses and only return the `user_id`
     * const form_responseWithUser_idOnly = await prisma.form_response.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends form_responseCreateManyAndReturnArgs>(args?: SelectSubset<T, form_responseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Form_response.
     * @param {form_responseDeleteArgs} args - Arguments to delete one Form_response.
     * @example
     * // Delete one Form_response
     * const Form_response = await prisma.form_response.delete({
     *   where: {
     *     // ... filter to delete one Form_response
     *   }
     * })
     * 
     */
    delete<T extends form_responseDeleteArgs>(args: SelectSubset<T, form_responseDeleteArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Form_response.
     * @param {form_responseUpdateArgs} args - Arguments to update one Form_response.
     * @example
     * // Update one Form_response
     * const form_response = await prisma.form_response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends form_responseUpdateArgs>(args: SelectSubset<T, form_responseUpdateArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Form_responses.
     * @param {form_responseDeleteManyArgs} args - Arguments to filter Form_responses to delete.
     * @example
     * // Delete a few Form_responses
     * const { count } = await prisma.form_response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends form_responseDeleteManyArgs>(args?: SelectSubset<T, form_responseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Form_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Form_responses
     * const form_response = await prisma.form_response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends form_responseUpdateManyArgs>(args: SelectSubset<T, form_responseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Form_responses and returns the data updated in the database.
     * @param {form_responseUpdateManyAndReturnArgs} args - Arguments to update many Form_responses.
     * @example
     * // Update many Form_responses
     * const form_response = await prisma.form_response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Form_responses and only return the `user_id`
     * const form_responseWithUser_idOnly = await prisma.form_response.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends form_responseUpdateManyAndReturnArgs>(args: SelectSubset<T, form_responseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Form_response.
     * @param {form_responseUpsertArgs} args - Arguments to update or create a Form_response.
     * @example
     * // Update or create a Form_response
     * const form_response = await prisma.form_response.upsert({
     *   create: {
     *     // ... data to create a Form_response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form_response we want to update
     *   }
     * })
     */
    upsert<T extends form_responseUpsertArgs>(args: SelectSubset<T, form_responseUpsertArgs<ExtArgs>>): Prisma__form_responseClient<$Result.GetResult<Prisma.$form_responsePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Form_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseCountArgs} args - Arguments to filter Form_responses to count.
     * @example
     * // Count the number of Form_responses
     * const count = await prisma.form_response.count({
     *   where: {
     *     // ... the filter for the Form_responses we want to count
     *   }
     * })
    **/
    count<T extends form_responseCountArgs>(
      args?: Subset<T, form_responseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Form_responseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form_response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Form_responseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Form_responseAggregateArgs>(args: Subset<T, Form_responseAggregateArgs>): Prisma.PrismaPromise<GetForm_responseAggregateType<T>>

    /**
     * Group by Form_response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_responseGroupByArgs} args - Group by arguments.
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
      T extends form_responseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: form_responseGroupByArgs['orderBy'] }
        : { orderBy?: form_responseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, form_responseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForm_responseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the form_response model
   */
  readonly fields: form_responseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for form_response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__form_responseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the form_response model
   */ 
  interface form_responseFieldRefs {
    readonly user_id: FieldRef<"form_response", 'String'>
    readonly question_id: FieldRef<"form_response", 'String'>
    readonly response: FieldRef<"form_response", 'String'>
  }
    

  // Custom InputTypes
  /**
   * form_response findUnique
   */
  export type form_responseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter, which form_response to fetch.
     */
    where: form_responseWhereUniqueInput
  }

  /**
   * form_response findUniqueOrThrow
   */
  export type form_responseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter, which form_response to fetch.
     */
    where: form_responseWhereUniqueInput
  }

  /**
   * form_response findFirst
   */
  export type form_responseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter, which form_response to fetch.
     */
    where?: form_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_responses to fetch.
     */
    orderBy?: form_responseOrderByWithRelationInput | form_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for form_responses.
     */
    cursor?: form_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of form_responses.
     */
    distinct?: Form_responseScalarFieldEnum | Form_responseScalarFieldEnum[]
  }

  /**
   * form_response findFirstOrThrow
   */
  export type form_responseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter, which form_response to fetch.
     */
    where?: form_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_responses to fetch.
     */
    orderBy?: form_responseOrderByWithRelationInput | form_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for form_responses.
     */
    cursor?: form_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of form_responses.
     */
    distinct?: Form_responseScalarFieldEnum | Form_responseScalarFieldEnum[]
  }

  /**
   * form_response findMany
   */
  export type form_responseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter, which form_responses to fetch.
     */
    where?: form_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_responses to fetch.
     */
    orderBy?: form_responseOrderByWithRelationInput | form_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing form_responses.
     */
    cursor?: form_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_responses.
     */
    skip?: number
    distinct?: Form_responseScalarFieldEnum | Form_responseScalarFieldEnum[]
  }

  /**
   * form_response create
   */
  export type form_responseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * The data needed to create a form_response.
     */
    data: XOR<form_responseCreateInput, form_responseUncheckedCreateInput>
  }

  /**
   * form_response createMany
   */
  export type form_responseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many form_responses.
     */
    data: form_responseCreateManyInput | form_responseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * form_response createManyAndReturn
   */
  export type form_responseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * The data used to create many form_responses.
     */
    data: form_responseCreateManyInput | form_responseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * form_response update
   */
  export type form_responseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * The data needed to update a form_response.
     */
    data: XOR<form_responseUpdateInput, form_responseUncheckedUpdateInput>
    /**
     * Choose, which form_response to update.
     */
    where: form_responseWhereUniqueInput
  }

  /**
   * form_response updateMany
   */
  export type form_responseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update form_responses.
     */
    data: XOR<form_responseUpdateManyMutationInput, form_responseUncheckedUpdateManyInput>
    /**
     * Filter which form_responses to update
     */
    where?: form_responseWhereInput
    /**
     * Limit how many form_responses to update.
     */
    limit?: number
  }

  /**
   * form_response updateManyAndReturn
   */
  export type form_responseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * The data used to update form_responses.
     */
    data: XOR<form_responseUpdateManyMutationInput, form_responseUncheckedUpdateManyInput>
    /**
     * Filter which form_responses to update
     */
    where?: form_responseWhereInput
    /**
     * Limit how many form_responses to update.
     */
    limit?: number
  }

  /**
   * form_response upsert
   */
  export type form_responseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * The filter to search for the form_response to update in case it exists.
     */
    where: form_responseWhereUniqueInput
    /**
     * In case the form_response found by the `where` argument doesn't exist, create a new form_response with this data.
     */
    create: XOR<form_responseCreateInput, form_responseUncheckedCreateInput>
    /**
     * In case the form_response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<form_responseUpdateInput, form_responseUncheckedUpdateInput>
  }

  /**
   * form_response delete
   */
  export type form_responseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
    /**
     * Filter which form_response to delete.
     */
    where: form_responseWhereUniqueInput
  }

  /**
   * form_response deleteMany
   */
  export type form_responseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which form_responses to delete
     */
    where?: form_responseWhereInput
    /**
     * Limit how many form_responses to delete.
     */
    limit?: number
  }

  /**
   * form_response without action
   */
  export type form_responseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_response
     */
    select?: form_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_response
     */
    omit?: form_responseOmit<ExtArgs> | null
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


  export const Form_responseScalarFieldEnum: {
    user_id: 'user_id',
    question_id: 'question_id',
    response: 'response'
  };

  export type Form_responseScalarFieldEnum = (typeof Form_responseScalarFieldEnum)[keyof typeof Form_responseScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type form_responseWhereInput = {
    AND?: form_responseWhereInput | form_responseWhereInput[]
    OR?: form_responseWhereInput[]
    NOT?: form_responseWhereInput | form_responseWhereInput[]
    user_id?: StringFilter<"form_response"> | string
    question_id?: StringFilter<"form_response"> | string
    response?: StringFilter<"form_response"> | string
  }

  export type form_responseOrderByWithRelationInput = {
    user_id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
  }

  export type form_responseWhereUniqueInput = Prisma.AtLeast<{
    user_id_question_id?: form_responseUser_idQuestion_idCompoundUniqueInput
    AND?: form_responseWhereInput | form_responseWhereInput[]
    OR?: form_responseWhereInput[]
    NOT?: form_responseWhereInput | form_responseWhereInput[]
    user_id?: StringFilter<"form_response"> | string
    question_id?: StringFilter<"form_response"> | string
    response?: StringFilter<"form_response"> | string
  }, "user_id_question_id">

  export type form_responseOrderByWithAggregationInput = {
    user_id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    _count?: form_responseCountOrderByAggregateInput
    _max?: form_responseMaxOrderByAggregateInput
    _min?: form_responseMinOrderByAggregateInput
  }

  export type form_responseScalarWhereWithAggregatesInput = {
    AND?: form_responseScalarWhereWithAggregatesInput | form_responseScalarWhereWithAggregatesInput[]
    OR?: form_responseScalarWhereWithAggregatesInput[]
    NOT?: form_responseScalarWhereWithAggregatesInput | form_responseScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"form_response"> | string
    question_id?: StringWithAggregatesFilter<"form_response"> | string
    response?: StringWithAggregatesFilter<"form_response"> | string
  }

  export type form_responseCreateInput = {
    user_id: string
    question_id: string
    response: string
  }

  export type form_responseUncheckedCreateInput = {
    user_id: string
    question_id: string
    response: string
  }

  export type form_responseUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type form_responseUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type form_responseCreateManyInput = {
    user_id: string
    question_id: string
    response: string
  }

  export type form_responseUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type form_responseUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
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

  export type form_responseUser_idQuestion_idCompoundUniqueInput = {
    user_id: string
    question_id: string
  }

  export type form_responseCountOrderByAggregateInput = {
    user_id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
  }

  export type form_responseMaxOrderByAggregateInput = {
    user_id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
  }

  export type form_responseMinOrderByAggregateInput = {
    user_id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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