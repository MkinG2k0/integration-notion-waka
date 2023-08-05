
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    notion: NotionPayload<ExtArgs> | null
    wakaTime: WakaTimePayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    providerAccountId: string
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type NotionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Notion"
  objects: {
    units: NotionUnitPayload<ExtArgs>[]
    User: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    accessToken: string
    workspaceId: string
    userId: string
  }, ExtArgs["result"]["notion"]>
  composites: {}
}

/**
 * Model Notion
 * 
 */
export type Notion = runtime.Types.DefaultSelection<NotionPayload>
export type WakaTimePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "WakaTime"
  objects: {
    User: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    wakaApiKey: string
    userId: string
  }, ExtArgs["result"]["wakaTime"]>
  composites: {}
}

/**
 * Model WakaTime
 * 
 */
export type WakaTime = runtime.Types.DefaultSelection<WakaTimePayload>
export type NotionUnitPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "NotionUnit"
  objects: {
    Notion: NotionPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
    dataId: string
    type: string
    isEnable: boolean
    title: string
    notionId: string | null
  }, ExtArgs["result"]["notionUnit"]>
  composites: {}
}

/**
 * Model NotionUnit
 * 
 */
export type NotionUnit = runtime.Types.DefaultSelection<NotionUnitPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.notion`: Exposes CRUD operations for the **Notion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notions
    * const notions = await prisma.notion.findMany()
    * ```
    */
  get notion(): Prisma.NotionDelegate<ExtArgs>;

  /**
   * `prisma.wakaTime`: Exposes CRUD operations for the **WakaTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WakaTimes
    * const wakaTimes = await prisma.wakaTime.findMany()
    * ```
    */
  get wakaTime(): Prisma.WakaTimeDelegate<ExtArgs>;

  /**
   * `prisma.notionUnit`: Exposes CRUD operations for the **NotionUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotionUnits
    * const notionUnits = await prisma.notionUnit.findMany()
    * ```
    */
  get notionUnit(): Prisma.NotionUnitDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
    User: 'User',
    Notion: 'Notion',
    WakaTime: 'WakaTime',
    NotionUnit: 'NotionUnit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'notion' | 'wakaTime' | 'notionUnit'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notion: {
        payload: NotionPayload<ExtArgs>
        fields: Prisma.NotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          findFirst: {
            args: Prisma.NotionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          findMany: {
            args: Prisma.NotionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>[]
          }
          create: {
            args: Prisma.NotionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          createMany: {
            args: Prisma.NotionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          update: {
            args: Prisma.NotionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          deleteMany: {
            args: Prisma.NotionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionPayload>
          }
          aggregate: {
            args: Prisma.NotionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotion>
          }
          groupBy: {
            args: Prisma.NotionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotionCountArgs<ExtArgs>,
            result: $Utils.Optional<NotionCountAggregateOutputType> | number
          }
        }
      }
      WakaTime: {
        payload: WakaTimePayload<ExtArgs>
        fields: Prisma.WakaTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WakaTimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WakaTimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          findFirst: {
            args: Prisma.WakaTimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WakaTimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          findMany: {
            args: Prisma.WakaTimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>[]
          }
          create: {
            args: Prisma.WakaTimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          createMany: {
            args: Prisma.WakaTimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WakaTimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          update: {
            args: Prisma.WakaTimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          deleteMany: {
            args: Prisma.WakaTimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WakaTimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WakaTimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WakaTimePayload>
          }
          aggregate: {
            args: Prisma.WakaTimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWakaTime>
          }
          groupBy: {
            args: Prisma.WakaTimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WakaTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WakaTimeCountArgs<ExtArgs>,
            result: $Utils.Optional<WakaTimeCountAggregateOutputType> | number
          }
        }
      }
      NotionUnit: {
        payload: NotionUnitPayload<ExtArgs>
        fields: Prisma.NotionUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotionUnitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotionUnitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          findFirst: {
            args: Prisma.NotionUnitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotionUnitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          findMany: {
            args: Prisma.NotionUnitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>[]
          }
          create: {
            args: Prisma.NotionUnitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          createMany: {
            args: Prisma.NotionUnitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotionUnitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          update: {
            args: Prisma.NotionUnitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          deleteMany: {
            args: Prisma.NotionUnitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotionUnitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotionUnitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotionUnitPayload>
          }
          aggregate: {
            args: Prisma.NotionUnitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotionUnit>
          }
          groupBy: {
            args: Prisma.NotionUnitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotionUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotionUnitCountArgs<ExtArgs>,
            result: $Utils.Optional<NotionUnitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type NotionCountOutputType
   */


  export type NotionCountOutputType = {
    units: number
  }

  export type NotionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    units?: boolean | NotionCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes

  /**
   * NotionCountOutputType without action
   */
  export type NotionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionCountOutputType
     */
    select?: NotionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * NotionCountOutputType without action
   */
  export type NotionCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NotionUnitWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    providerAccountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    providerAccountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    providerAccountId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    providerAccountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    providerAccountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    providerAccountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    providerAccountId: string
    _count: UserCountAggregateOutputType | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerAccountId?: boolean
    notion?: boolean | User$notionArgs<ExtArgs>
    wakaTime?: boolean | User$wakaTimeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    providerAccountId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    notion?: boolean | User$notionArgs<ExtArgs>
    wakaTime?: boolean | User$wakaTimeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    notion<T extends User$notionArgs<ExtArgs> = {}>(args?: Subset<T, User$notionArgs<ExtArgs>>): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    wakaTime<T extends User$wakaTimeArgs<ExtArgs> = {}>(args?: Subset<T, User$wakaTimeArgs<ExtArgs>>): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly providerAccountId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.notion
   */
  export type User$notionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    where?: NotionWhereInput
  }


  /**
   * User.wakaTime
   */
  export type User$wakaTimeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    where?: WakaTimeWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Notion
   */


  export type AggregateNotion = {
    _count: NotionCountAggregateOutputType | null
    _min: NotionMinAggregateOutputType | null
    _max: NotionMaxAggregateOutputType | null
  }

  export type NotionMinAggregateOutputType = {
    id: string | null
    accessToken: string | null
    workspaceId: string | null
    userId: string | null
  }

  export type NotionMaxAggregateOutputType = {
    id: string | null
    accessToken: string | null
    workspaceId: string | null
    userId: string | null
  }

  export type NotionCountAggregateOutputType = {
    id: number
    accessToken: number
    workspaceId: number
    userId: number
    _all: number
  }


  export type NotionMinAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    userId?: true
  }

  export type NotionMaxAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    userId?: true
  }

  export type NotionCountAggregateInputType = {
    id?: true
    accessToken?: true
    workspaceId?: true
    userId?: true
    _all?: true
  }

  export type NotionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notion to aggregate.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notions
    **/
    _count?: true | NotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotionMaxAggregateInputType
  }

  export type GetNotionAggregateType<T extends NotionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotion[P]>
      : GetScalarType<T[P], AggregateNotion[P]>
  }




  export type NotionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NotionWhereInput
    orderBy?: NotionOrderByWithAggregationInput | NotionOrderByWithAggregationInput[]
    by: NotionScalarFieldEnum[] | NotionScalarFieldEnum
    having?: NotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotionCountAggregateInputType | true
    _min?: NotionMinAggregateInputType
    _max?: NotionMaxAggregateInputType
  }


  export type NotionGroupByOutputType = {
    id: string
    accessToken: string
    workspaceId: string
    userId: string
    _count: NotionCountAggregateOutputType | null
    _min: NotionMinAggregateOutputType | null
    _max: NotionMaxAggregateOutputType | null
  }

  type GetNotionGroupByPayload<T extends NotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotionGroupByOutputType[P]>
            : GetScalarType<T[P], NotionGroupByOutputType[P]>
        }
      >
    >


  export type NotionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    userId?: boolean
    units?: boolean | Notion$unitsArgs<ExtArgs>
    User?: boolean | UserArgs<ExtArgs>
    _count?: boolean | NotionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["notion"]>

  export type NotionSelectScalar = {
    id?: boolean
    accessToken?: boolean
    workspaceId?: boolean
    userId?: boolean
  }

  export type NotionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    units?: boolean | Notion$unitsArgs<ExtArgs>
    User?: boolean | UserArgs<ExtArgs>
    _count?: boolean | NotionCountOutputTypeArgs<ExtArgs>
  }


  type NotionGetPayload<S extends boolean | null | undefined | NotionArgs> = $Types.GetResult<NotionPayload, S>

  type NotionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NotionFindManyArgs, 'select' | 'include'> & {
      select?: NotionCountAggregateInputType | true
    }

  export interface NotionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notion'], meta: { name: 'Notion' } }
    /**
     * Find zero or one Notion that matches the filter.
     * @param {NotionFindUniqueArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotionFindUniqueArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotionFindUniqueOrThrowArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindFirstArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionFindFirstArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindFirstOrThrowArgs} args - Arguments to find a Notion
     * @example
     * // Get one Notion
     * const notion = await prisma.notion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notions
     * const notions = await prisma.notion.findMany()
     * 
     * // Get first 10 Notions
     * const notions = await prisma.notion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notionWithIdOnly = await prisma.notion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notion.
     * @param {NotionCreateArgs} args - Arguments to create a Notion.
     * @example
     * // Create one Notion
     * const Notion = await prisma.notion.create({
     *   data: {
     *     // ... data to create a Notion
     *   }
     * })
     * 
    **/
    create<T extends NotionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotionCreateArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notions.
     *     @param {NotionCreateManyArgs} args - Arguments to create many Notions.
     *     @example
     *     // Create many Notions
     *     const notion = await prisma.notion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notion.
     * @param {NotionDeleteArgs} args - Arguments to delete one Notion.
     * @example
     * // Delete one Notion
     * const Notion = await prisma.notion.delete({
     *   where: {
     *     // ... filter to delete one Notion
     *   }
     * })
     * 
    **/
    delete<T extends NotionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotionDeleteArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notion.
     * @param {NotionUpdateArgs} args - Arguments to update one Notion.
     * @example
     * // Update one Notion
     * const notion = await prisma.notion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUpdateArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notions.
     * @param {NotionDeleteManyArgs} args - Arguments to filter Notions to delete.
     * @example
     * // Delete a few Notions
     * const { count } = await prisma.notion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notions
     * const notion = await prisma.notion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notion.
     * @param {NotionUpsertArgs} args - Arguments to update or create a Notion.
     * @example
     * // Update or create a Notion
     * const notion = await prisma.notion.upsert({
     *   create: {
     *     // ... data to create a Notion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notion we want to update
     *   }
     * })
    **/
    upsert<T extends NotionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUpsertArgs<ExtArgs>>
    ): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionCountArgs} args - Arguments to filter Notions to count.
     * @example
     * // Count the number of Notions
     * const count = await prisma.notion.count({
     *   where: {
     *     // ... the filter for the Notions we want to count
     *   }
     * })
    **/
    count<T extends NotionCountArgs>(
      args?: Subset<T, NotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotionAggregateArgs>(args: Subset<T, NotionAggregateArgs>): Prisma.PrismaPromise<GetNotionAggregateType<T>>

    /**
     * Group by Notion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionGroupByArgs} args - Group by arguments.
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
      T extends NotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotionGroupByArgs['orderBy'] }
        : { orderBy?: NotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notion model
   */
  readonly fields: NotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    units<T extends Notion$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Notion$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findMany'>| Null>;

    User<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Notion model
   */ 
  interface NotionFieldRefs {
    readonly id: FieldRef<"Notion", 'String'>
    readonly accessToken: FieldRef<"Notion", 'String'>
    readonly workspaceId: FieldRef<"Notion", 'String'>
    readonly userId: FieldRef<"Notion", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Notion findUnique
   */
  export type NotionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where: NotionWhereUniqueInput
  }


  /**
   * Notion findUniqueOrThrow
   */
  export type NotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where: NotionWhereUniqueInput
  }


  /**
   * Notion findFirst
   */
  export type NotionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notions.
     */
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }


  /**
   * Notion findFirstOrThrow
   */
  export type NotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notion to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notions.
     */
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }


  /**
   * Notion findMany
   */
  export type NotionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter, which Notions to fetch.
     */
    where?: NotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notions to fetch.
     */
    orderBy?: NotionOrderByWithRelationInput | NotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notions.
     */
    cursor?: NotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notions.
     */
    skip?: number
    distinct?: NotionScalarFieldEnum | NotionScalarFieldEnum[]
  }


  /**
   * Notion create
   */
  export type NotionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Notion.
     */
    data: XOR<NotionCreateInput, NotionUncheckedCreateInput>
  }


  /**
   * Notion createMany
   */
  export type NotionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notions.
     */
    data: NotionCreateManyInput | NotionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notion update
   */
  export type NotionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Notion.
     */
    data: XOR<NotionUpdateInput, NotionUncheckedUpdateInput>
    /**
     * Choose, which Notion to update.
     */
    where: NotionWhereUniqueInput
  }


  /**
   * Notion updateMany
   */
  export type NotionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notions.
     */
    data: XOR<NotionUpdateManyMutationInput, NotionUncheckedUpdateManyInput>
    /**
     * Filter which Notions to update
     */
    where?: NotionWhereInput
  }


  /**
   * Notion upsert
   */
  export type NotionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Notion to update in case it exists.
     */
    where: NotionWhereUniqueInput
    /**
     * In case the Notion found by the `where` argument doesn't exist, create a new Notion with this data.
     */
    create: XOR<NotionCreateInput, NotionUncheckedCreateInput>
    /**
     * In case the Notion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotionUpdateInput, NotionUncheckedUpdateInput>
  }


  /**
   * Notion delete
   */
  export type NotionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    /**
     * Filter which Notion to delete.
     */
    where: NotionWhereUniqueInput
  }


  /**
   * Notion deleteMany
   */
  export type NotionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notions to delete
     */
    where?: NotionWhereInput
  }


  /**
   * Notion.units
   */
  export type Notion$unitsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    where?: NotionUnitWhereInput
    orderBy?: NotionUnitOrderByWithRelationInput | NotionUnitOrderByWithRelationInput[]
    cursor?: NotionUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotionUnitScalarFieldEnum | NotionUnitScalarFieldEnum[]
  }


  /**
   * Notion without action
   */
  export type NotionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
  }



  /**
   * Model WakaTime
   */


  export type AggregateWakaTime = {
    _count: WakaTimeCountAggregateOutputType | null
    _min: WakaTimeMinAggregateOutputType | null
    _max: WakaTimeMaxAggregateOutputType | null
  }

  export type WakaTimeMinAggregateOutputType = {
    id: string | null
    wakaApiKey: string | null
    userId: string | null
  }

  export type WakaTimeMaxAggregateOutputType = {
    id: string | null
    wakaApiKey: string | null
    userId: string | null
  }

  export type WakaTimeCountAggregateOutputType = {
    id: number
    wakaApiKey: number
    userId: number
    _all: number
  }


  export type WakaTimeMinAggregateInputType = {
    id?: true
    wakaApiKey?: true
    userId?: true
  }

  export type WakaTimeMaxAggregateInputType = {
    id?: true
    wakaApiKey?: true
    userId?: true
  }

  export type WakaTimeCountAggregateInputType = {
    id?: true
    wakaApiKey?: true
    userId?: true
    _all?: true
  }

  export type WakaTimeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WakaTime to aggregate.
     */
    where?: WakaTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WakaTimes to fetch.
     */
    orderBy?: WakaTimeOrderByWithRelationInput | WakaTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WakaTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WakaTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WakaTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WakaTimes
    **/
    _count?: true | WakaTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WakaTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WakaTimeMaxAggregateInputType
  }

  export type GetWakaTimeAggregateType<T extends WakaTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateWakaTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWakaTime[P]>
      : GetScalarType<T[P], AggregateWakaTime[P]>
  }




  export type WakaTimeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WakaTimeWhereInput
    orderBy?: WakaTimeOrderByWithAggregationInput | WakaTimeOrderByWithAggregationInput[]
    by: WakaTimeScalarFieldEnum[] | WakaTimeScalarFieldEnum
    having?: WakaTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WakaTimeCountAggregateInputType | true
    _min?: WakaTimeMinAggregateInputType
    _max?: WakaTimeMaxAggregateInputType
  }


  export type WakaTimeGroupByOutputType = {
    id: string
    wakaApiKey: string
    userId: string
    _count: WakaTimeCountAggregateOutputType | null
    _min: WakaTimeMinAggregateOutputType | null
    _max: WakaTimeMaxAggregateOutputType | null
  }

  type GetWakaTimeGroupByPayload<T extends WakaTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WakaTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WakaTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WakaTimeGroupByOutputType[P]>
            : GetScalarType<T[P], WakaTimeGroupByOutputType[P]>
        }
      >
    >


  export type WakaTimeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wakaApiKey?: boolean
    userId?: boolean
    User?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["wakaTime"]>

  export type WakaTimeSelectScalar = {
    id?: boolean
    wakaApiKey?: boolean
    userId?: boolean
  }

  export type WakaTimeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserArgs<ExtArgs>
  }


  type WakaTimeGetPayload<S extends boolean | null | undefined | WakaTimeArgs> = $Types.GetResult<WakaTimePayload, S>

  type WakaTimeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WakaTimeFindManyArgs, 'select' | 'include'> & {
      select?: WakaTimeCountAggregateInputType | true
    }

  export interface WakaTimeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WakaTime'], meta: { name: 'WakaTime' } }
    /**
     * Find zero or one WakaTime that matches the filter.
     * @param {WakaTimeFindUniqueArgs} args - Arguments to find a WakaTime
     * @example
     * // Get one WakaTime
     * const wakaTime = await prisma.wakaTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WakaTimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeFindUniqueArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WakaTime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WakaTimeFindUniqueOrThrowArgs} args - Arguments to find a WakaTime
     * @example
     * // Get one WakaTime
     * const wakaTime = await prisma.wakaTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WakaTimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WakaTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeFindFirstArgs} args - Arguments to find a WakaTime
     * @example
     * // Get one WakaTime
     * const wakaTime = await prisma.wakaTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WakaTimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeFindFirstArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WakaTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeFindFirstOrThrowArgs} args - Arguments to find a WakaTime
     * @example
     * // Get one WakaTime
     * const wakaTime = await prisma.wakaTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WakaTimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WakaTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WakaTimes
     * const wakaTimes = await prisma.wakaTime.findMany()
     * 
     * // Get first 10 WakaTimes
     * const wakaTimes = await prisma.wakaTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wakaTimeWithIdOnly = await prisma.wakaTime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WakaTimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WakaTime.
     * @param {WakaTimeCreateArgs} args - Arguments to create a WakaTime.
     * @example
     * // Create one WakaTime
     * const WakaTime = await prisma.wakaTime.create({
     *   data: {
     *     // ... data to create a WakaTime
     *   }
     * })
     * 
    **/
    create<T extends WakaTimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeCreateArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WakaTimes.
     *     @param {WakaTimeCreateManyArgs} args - Arguments to create many WakaTimes.
     *     @example
     *     // Create many WakaTimes
     *     const wakaTime = await prisma.wakaTime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WakaTimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WakaTime.
     * @param {WakaTimeDeleteArgs} args - Arguments to delete one WakaTime.
     * @example
     * // Delete one WakaTime
     * const WakaTime = await prisma.wakaTime.delete({
     *   where: {
     *     // ... filter to delete one WakaTime
     *   }
     * })
     * 
    **/
    delete<T extends WakaTimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeDeleteArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WakaTime.
     * @param {WakaTimeUpdateArgs} args - Arguments to update one WakaTime.
     * @example
     * // Update one WakaTime
     * const wakaTime = await prisma.wakaTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WakaTimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeUpdateArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WakaTimes.
     * @param {WakaTimeDeleteManyArgs} args - Arguments to filter WakaTimes to delete.
     * @example
     * // Delete a few WakaTimes
     * const { count } = await prisma.wakaTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WakaTimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WakaTimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WakaTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WakaTimes
     * const wakaTime = await prisma.wakaTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WakaTimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WakaTime.
     * @param {WakaTimeUpsertArgs} args - Arguments to update or create a WakaTime.
     * @example
     * // Update or create a WakaTime
     * const wakaTime = await prisma.wakaTime.upsert({
     *   create: {
     *     // ... data to create a WakaTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WakaTime we want to update
     *   }
     * })
    **/
    upsert<T extends WakaTimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WakaTimeUpsertArgs<ExtArgs>>
    ): Prisma__WakaTimeClient<$Types.GetResult<WakaTimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WakaTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeCountArgs} args - Arguments to filter WakaTimes to count.
     * @example
     * // Count the number of WakaTimes
     * const count = await prisma.wakaTime.count({
     *   where: {
     *     // ... the filter for the WakaTimes we want to count
     *   }
     * })
    **/
    count<T extends WakaTimeCountArgs>(
      args?: Subset<T, WakaTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WakaTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WakaTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WakaTimeAggregateArgs>(args: Subset<T, WakaTimeAggregateArgs>): Prisma.PrismaPromise<GetWakaTimeAggregateType<T>>

    /**
     * Group by WakaTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WakaTimeGroupByArgs} args - Group by arguments.
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
      T extends WakaTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WakaTimeGroupByArgs['orderBy'] }
        : { orderBy?: WakaTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WakaTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWakaTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WakaTime model
   */
  readonly fields: WakaTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WakaTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WakaTimeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    User<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the WakaTime model
   */ 
  interface WakaTimeFieldRefs {
    readonly id: FieldRef<"WakaTime", 'String'>
    readonly wakaApiKey: FieldRef<"WakaTime", 'String'>
    readonly userId: FieldRef<"WakaTime", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WakaTime findUnique
   */
  export type WakaTimeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter, which WakaTime to fetch.
     */
    where: WakaTimeWhereUniqueInput
  }


  /**
   * WakaTime findUniqueOrThrow
   */
  export type WakaTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter, which WakaTime to fetch.
     */
    where: WakaTimeWhereUniqueInput
  }


  /**
   * WakaTime findFirst
   */
  export type WakaTimeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter, which WakaTime to fetch.
     */
    where?: WakaTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WakaTimes to fetch.
     */
    orderBy?: WakaTimeOrderByWithRelationInput | WakaTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WakaTimes.
     */
    cursor?: WakaTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WakaTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WakaTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WakaTimes.
     */
    distinct?: WakaTimeScalarFieldEnum | WakaTimeScalarFieldEnum[]
  }


  /**
   * WakaTime findFirstOrThrow
   */
  export type WakaTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter, which WakaTime to fetch.
     */
    where?: WakaTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WakaTimes to fetch.
     */
    orderBy?: WakaTimeOrderByWithRelationInput | WakaTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WakaTimes.
     */
    cursor?: WakaTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WakaTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WakaTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WakaTimes.
     */
    distinct?: WakaTimeScalarFieldEnum | WakaTimeScalarFieldEnum[]
  }


  /**
   * WakaTime findMany
   */
  export type WakaTimeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter, which WakaTimes to fetch.
     */
    where?: WakaTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WakaTimes to fetch.
     */
    orderBy?: WakaTimeOrderByWithRelationInput | WakaTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WakaTimes.
     */
    cursor?: WakaTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WakaTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WakaTimes.
     */
    skip?: number
    distinct?: WakaTimeScalarFieldEnum | WakaTimeScalarFieldEnum[]
  }


  /**
   * WakaTime create
   */
  export type WakaTimeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a WakaTime.
     */
    data: XOR<WakaTimeCreateInput, WakaTimeUncheckedCreateInput>
  }


  /**
   * WakaTime createMany
   */
  export type WakaTimeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WakaTimes.
     */
    data: WakaTimeCreateManyInput | WakaTimeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WakaTime update
   */
  export type WakaTimeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a WakaTime.
     */
    data: XOR<WakaTimeUpdateInput, WakaTimeUncheckedUpdateInput>
    /**
     * Choose, which WakaTime to update.
     */
    where: WakaTimeWhereUniqueInput
  }


  /**
   * WakaTime updateMany
   */
  export type WakaTimeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WakaTimes.
     */
    data: XOR<WakaTimeUpdateManyMutationInput, WakaTimeUncheckedUpdateManyInput>
    /**
     * Filter which WakaTimes to update
     */
    where?: WakaTimeWhereInput
  }


  /**
   * WakaTime upsert
   */
  export type WakaTimeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the WakaTime to update in case it exists.
     */
    where: WakaTimeWhereUniqueInput
    /**
     * In case the WakaTime found by the `where` argument doesn't exist, create a new WakaTime with this data.
     */
    create: XOR<WakaTimeCreateInput, WakaTimeUncheckedCreateInput>
    /**
     * In case the WakaTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WakaTimeUpdateInput, WakaTimeUncheckedUpdateInput>
  }


  /**
   * WakaTime delete
   */
  export type WakaTimeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
    /**
     * Filter which WakaTime to delete.
     */
    where: WakaTimeWhereUniqueInput
  }


  /**
   * WakaTime deleteMany
   */
  export type WakaTimeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WakaTimes to delete
     */
    where?: WakaTimeWhereInput
  }


  /**
   * WakaTime without action
   */
  export type WakaTimeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WakaTime
     */
    select?: WakaTimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WakaTimeInclude<ExtArgs> | null
  }



  /**
   * Model NotionUnit
   */


  export type AggregateNotionUnit = {
    _count: NotionUnitCountAggregateOutputType | null
    _min: NotionUnitMinAggregateOutputType | null
    _max: NotionUnitMaxAggregateOutputType | null
  }

  export type NotionUnitMinAggregateOutputType = {
    id: string | null
    dataId: string | null
    type: string | null
    isEnable: boolean | null
    title: string | null
    notionId: string | null
  }

  export type NotionUnitMaxAggregateOutputType = {
    id: string | null
    dataId: string | null
    type: string | null
    isEnable: boolean | null
    title: string | null
    notionId: string | null
  }

  export type NotionUnitCountAggregateOutputType = {
    id: number
    dataId: number
    type: number
    isEnable: number
    title: number
    notionId: number
    _all: number
  }


  export type NotionUnitMinAggregateInputType = {
    id?: true
    dataId?: true
    type?: true
    isEnable?: true
    title?: true
    notionId?: true
  }

  export type NotionUnitMaxAggregateInputType = {
    id?: true
    dataId?: true
    type?: true
    isEnable?: true
    title?: true
    notionId?: true
  }

  export type NotionUnitCountAggregateInputType = {
    id?: true
    dataId?: true
    type?: true
    isEnable?: true
    title?: true
    notionId?: true
    _all?: true
  }

  export type NotionUnitAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotionUnit to aggregate.
     */
    where?: NotionUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotionUnits to fetch.
     */
    orderBy?: NotionUnitOrderByWithRelationInput | NotionUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotionUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotionUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotionUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotionUnits
    **/
    _count?: true | NotionUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotionUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotionUnitMaxAggregateInputType
  }

  export type GetNotionUnitAggregateType<T extends NotionUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateNotionUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotionUnit[P]>
      : GetScalarType<T[P], AggregateNotionUnit[P]>
  }




  export type NotionUnitGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NotionUnitWhereInput
    orderBy?: NotionUnitOrderByWithAggregationInput | NotionUnitOrderByWithAggregationInput[]
    by: NotionUnitScalarFieldEnum[] | NotionUnitScalarFieldEnum
    having?: NotionUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotionUnitCountAggregateInputType | true
    _min?: NotionUnitMinAggregateInputType
    _max?: NotionUnitMaxAggregateInputType
  }


  export type NotionUnitGroupByOutputType = {
    id: string
    dataId: string
    type: string
    isEnable: boolean
    title: string
    notionId: string | null
    _count: NotionUnitCountAggregateOutputType | null
    _min: NotionUnitMinAggregateOutputType | null
    _max: NotionUnitMaxAggregateOutputType | null
  }

  type GetNotionUnitGroupByPayload<T extends NotionUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotionUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotionUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotionUnitGroupByOutputType[P]>
            : GetScalarType<T[P], NotionUnitGroupByOutputType[P]>
        }
      >
    >


  export type NotionUnitSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataId?: boolean
    type?: boolean
    isEnable?: boolean
    title?: boolean
    notionId?: boolean
    Notion?: boolean | NotionUnit$NotionArgs<ExtArgs>
  }, ExtArgs["result"]["notionUnit"]>

  export type NotionUnitSelectScalar = {
    id?: boolean
    dataId?: boolean
    type?: boolean
    isEnable?: boolean
    title?: boolean
    notionId?: boolean
  }

  export type NotionUnitInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Notion?: boolean | NotionUnit$NotionArgs<ExtArgs>
  }


  type NotionUnitGetPayload<S extends boolean | null | undefined | NotionUnitArgs> = $Types.GetResult<NotionUnitPayload, S>

  type NotionUnitCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NotionUnitFindManyArgs, 'select' | 'include'> & {
      select?: NotionUnitCountAggregateInputType | true
    }

  export interface NotionUnitDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotionUnit'], meta: { name: 'NotionUnit' } }
    /**
     * Find zero or one NotionUnit that matches the filter.
     * @param {NotionUnitFindUniqueArgs} args - Arguments to find a NotionUnit
     * @example
     * // Get one NotionUnit
     * const notionUnit = await prisma.notionUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotionUnitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitFindUniqueArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NotionUnit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotionUnitFindUniqueOrThrowArgs} args - Arguments to find a NotionUnit
     * @example
     * // Get one NotionUnit
     * const notionUnit = await prisma.notionUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotionUnitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NotionUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitFindFirstArgs} args - Arguments to find a NotionUnit
     * @example
     * // Get one NotionUnit
     * const notionUnit = await prisma.notionUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotionUnitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitFindFirstArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NotionUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitFindFirstOrThrowArgs} args - Arguments to find a NotionUnit
     * @example
     * // Get one NotionUnit
     * const notionUnit = await prisma.notionUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotionUnitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NotionUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotionUnits
     * const notionUnits = await prisma.notionUnit.findMany()
     * 
     * // Get first 10 NotionUnits
     * const notionUnits = await prisma.notionUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notionUnitWithIdOnly = await prisma.notionUnit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotionUnitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NotionUnit.
     * @param {NotionUnitCreateArgs} args - Arguments to create a NotionUnit.
     * @example
     * // Create one NotionUnit
     * const NotionUnit = await prisma.notionUnit.create({
     *   data: {
     *     // ... data to create a NotionUnit
     *   }
     * })
     * 
    **/
    create<T extends NotionUnitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitCreateArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NotionUnits.
     *     @param {NotionUnitCreateManyArgs} args - Arguments to create many NotionUnits.
     *     @example
     *     // Create many NotionUnits
     *     const notionUnit = await prisma.notionUnit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotionUnitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotionUnit.
     * @param {NotionUnitDeleteArgs} args - Arguments to delete one NotionUnit.
     * @example
     * // Delete one NotionUnit
     * const NotionUnit = await prisma.notionUnit.delete({
     *   where: {
     *     // ... filter to delete one NotionUnit
     *   }
     * })
     * 
    **/
    delete<T extends NotionUnitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitDeleteArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NotionUnit.
     * @param {NotionUnitUpdateArgs} args - Arguments to update one NotionUnit.
     * @example
     * // Update one NotionUnit
     * const notionUnit = await prisma.notionUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotionUnitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitUpdateArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NotionUnits.
     * @param {NotionUnitDeleteManyArgs} args - Arguments to filter NotionUnits to delete.
     * @example
     * // Delete a few NotionUnits
     * const { count } = await prisma.notionUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotionUnitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotionUnitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotionUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotionUnits
     * const notionUnit = await prisma.notionUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotionUnitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotionUnit.
     * @param {NotionUnitUpsertArgs} args - Arguments to update or create a NotionUnit.
     * @example
     * // Update or create a NotionUnit
     * const notionUnit = await prisma.notionUnit.upsert({
     *   create: {
     *     // ... data to create a NotionUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotionUnit we want to update
     *   }
     * })
    **/
    upsert<T extends NotionUnitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotionUnitUpsertArgs<ExtArgs>>
    ): Prisma__NotionUnitClient<$Types.GetResult<NotionUnitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NotionUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitCountArgs} args - Arguments to filter NotionUnits to count.
     * @example
     * // Count the number of NotionUnits
     * const count = await prisma.notionUnit.count({
     *   where: {
     *     // ... the filter for the NotionUnits we want to count
     *   }
     * })
    **/
    count<T extends NotionUnitCountArgs>(
      args?: Subset<T, NotionUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotionUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotionUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotionUnitAggregateArgs>(args: Subset<T, NotionUnitAggregateArgs>): Prisma.PrismaPromise<GetNotionUnitAggregateType<T>>

    /**
     * Group by NotionUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotionUnitGroupByArgs} args - Group by arguments.
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
      T extends NotionUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotionUnitGroupByArgs['orderBy'] }
        : { orderBy?: NotionUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotionUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotionUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotionUnit model
   */
  readonly fields: NotionUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotionUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotionUnitClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Notion<T extends NotionUnit$NotionArgs<ExtArgs> = {}>(args?: Subset<T, NotionUnit$NotionArgs<ExtArgs>>): Prisma__NotionClient<$Types.GetResult<NotionPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the NotionUnit model
   */ 
  interface NotionUnitFieldRefs {
    readonly id: FieldRef<"NotionUnit", 'String'>
    readonly dataId: FieldRef<"NotionUnit", 'String'>
    readonly type: FieldRef<"NotionUnit", 'String'>
    readonly isEnable: FieldRef<"NotionUnit", 'Boolean'>
    readonly title: FieldRef<"NotionUnit", 'String'>
    readonly notionId: FieldRef<"NotionUnit", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NotionUnit findUnique
   */
  export type NotionUnitFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter, which NotionUnit to fetch.
     */
    where: NotionUnitWhereUniqueInput
  }


  /**
   * NotionUnit findUniqueOrThrow
   */
  export type NotionUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter, which NotionUnit to fetch.
     */
    where: NotionUnitWhereUniqueInput
  }


  /**
   * NotionUnit findFirst
   */
  export type NotionUnitFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter, which NotionUnit to fetch.
     */
    where?: NotionUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotionUnits to fetch.
     */
    orderBy?: NotionUnitOrderByWithRelationInput | NotionUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotionUnits.
     */
    cursor?: NotionUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotionUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotionUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotionUnits.
     */
    distinct?: NotionUnitScalarFieldEnum | NotionUnitScalarFieldEnum[]
  }


  /**
   * NotionUnit findFirstOrThrow
   */
  export type NotionUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter, which NotionUnit to fetch.
     */
    where?: NotionUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotionUnits to fetch.
     */
    orderBy?: NotionUnitOrderByWithRelationInput | NotionUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotionUnits.
     */
    cursor?: NotionUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotionUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotionUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotionUnits.
     */
    distinct?: NotionUnitScalarFieldEnum | NotionUnitScalarFieldEnum[]
  }


  /**
   * NotionUnit findMany
   */
  export type NotionUnitFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter, which NotionUnits to fetch.
     */
    where?: NotionUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotionUnits to fetch.
     */
    orderBy?: NotionUnitOrderByWithRelationInput | NotionUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotionUnits.
     */
    cursor?: NotionUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotionUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotionUnits.
     */
    skip?: number
    distinct?: NotionUnitScalarFieldEnum | NotionUnitScalarFieldEnum[]
  }


  /**
   * NotionUnit create
   */
  export type NotionUnitCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a NotionUnit.
     */
    data: XOR<NotionUnitCreateInput, NotionUnitUncheckedCreateInput>
  }


  /**
   * NotionUnit createMany
   */
  export type NotionUnitCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotionUnits.
     */
    data: NotionUnitCreateManyInput | NotionUnitCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NotionUnit update
   */
  export type NotionUnitUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a NotionUnit.
     */
    data: XOR<NotionUnitUpdateInput, NotionUnitUncheckedUpdateInput>
    /**
     * Choose, which NotionUnit to update.
     */
    where: NotionUnitWhereUniqueInput
  }


  /**
   * NotionUnit updateMany
   */
  export type NotionUnitUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotionUnits.
     */
    data: XOR<NotionUnitUpdateManyMutationInput, NotionUnitUncheckedUpdateManyInput>
    /**
     * Filter which NotionUnits to update
     */
    where?: NotionUnitWhereInput
  }


  /**
   * NotionUnit upsert
   */
  export type NotionUnitUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the NotionUnit to update in case it exists.
     */
    where: NotionUnitWhereUniqueInput
    /**
     * In case the NotionUnit found by the `where` argument doesn't exist, create a new NotionUnit with this data.
     */
    create: XOR<NotionUnitCreateInput, NotionUnitUncheckedCreateInput>
    /**
     * In case the NotionUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotionUnitUpdateInput, NotionUnitUncheckedUpdateInput>
  }


  /**
   * NotionUnit delete
   */
  export type NotionUnitDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
    /**
     * Filter which NotionUnit to delete.
     */
    where: NotionUnitWhereUniqueInput
  }


  /**
   * NotionUnit deleteMany
   */
  export type NotionUnitDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotionUnits to delete
     */
    where?: NotionUnitWhereInput
  }


  /**
   * NotionUnit.Notion
   */
  export type NotionUnit$NotionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notion
     */
    select?: NotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionInclude<ExtArgs> | null
    where?: NotionWhereInput
  }


  /**
   * NotionUnit without action
   */
  export type NotionUnitArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotionUnit
     */
    select?: NotionUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotionUnitInclude<ExtArgs> | null
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
    providerAccountId: 'providerAccountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotionScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    workspaceId: 'workspaceId',
    userId: 'userId'
  };

  export type NotionScalarFieldEnum = (typeof NotionScalarFieldEnum)[keyof typeof NotionScalarFieldEnum]


  export const WakaTimeScalarFieldEnum: {
    id: 'id',
    wakaApiKey: 'wakaApiKey',
    userId: 'userId'
  };

  export type WakaTimeScalarFieldEnum = (typeof WakaTimeScalarFieldEnum)[keyof typeof WakaTimeScalarFieldEnum]


  export const NotionUnitScalarFieldEnum: {
    id: 'id',
    dataId: 'dataId',
    type: 'type',
    isEnable: 'isEnable',
    title: 'title',
    notionId: 'notionId'
  };

  export type NotionUnitScalarFieldEnum = (typeof NotionUnitScalarFieldEnum)[keyof typeof NotionUnitScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    providerAccountId?: StringFilter<"User"> | string
    notion?: XOR<NotionNullableRelationFilter, NotionWhereInput> | null
    wakaTime?: XOR<WakaTimeNullableRelationFilter, WakaTimeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    providerAccountId?: SortOrder
    notion?: NotionOrderByWithRelationInput
    wakaTime?: WakaTimeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerAccountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    notion?: XOR<NotionNullableRelationFilter, NotionWhereInput> | null
    wakaTime?: XOR<WakaTimeNullableRelationFilter, WakaTimeWhereInput> | null
  }, "id" | "providerAccountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    providerAccountId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    providerAccountId?: StringWithAggregatesFilter<"User"> | string
  }

  export type NotionWhereInput = {
    AND?: NotionWhereInput | NotionWhereInput[]
    OR?: NotionWhereInput[]
    NOT?: NotionWhereInput | NotionWhereInput[]
    id?: StringFilter<"Notion"> | string
    accessToken?: StringFilter<"Notion"> | string
    workspaceId?: StringFilter<"Notion"> | string
    userId?: StringFilter<"Notion"> | string
    units?: NotionUnitListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotionOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    units?: NotionUnitOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type NotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId?: string
    userId?: string
    AND?: NotionWhereInput | NotionWhereInput[]
    OR?: NotionWhereInput[]
    NOT?: NotionWhereInput | NotionWhereInput[]
    accessToken?: StringFilter<"Notion"> | string
    units?: NotionUnitListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id" | "workspaceId" | "userId">

  export type NotionOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    _count?: NotionCountOrderByAggregateInput
    _max?: NotionMaxOrderByAggregateInput
    _min?: NotionMinOrderByAggregateInput
  }

  export type NotionScalarWhereWithAggregatesInput = {
    AND?: NotionScalarWhereWithAggregatesInput | NotionScalarWhereWithAggregatesInput[]
    OR?: NotionScalarWhereWithAggregatesInput[]
    NOT?: NotionScalarWhereWithAggregatesInput | NotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notion"> | string
    accessToken?: StringWithAggregatesFilter<"Notion"> | string
    workspaceId?: StringWithAggregatesFilter<"Notion"> | string
    userId?: StringWithAggregatesFilter<"Notion"> | string
  }

  export type WakaTimeWhereInput = {
    AND?: WakaTimeWhereInput | WakaTimeWhereInput[]
    OR?: WakaTimeWhereInput[]
    NOT?: WakaTimeWhereInput | WakaTimeWhereInput[]
    id?: StringFilter<"WakaTime"> | string
    wakaApiKey?: StringFilter<"WakaTime"> | string
    userId?: StringFilter<"WakaTime"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WakaTimeOrderByWithRelationInput = {
    id?: SortOrder
    wakaApiKey?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type WakaTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WakaTimeWhereInput | WakaTimeWhereInput[]
    OR?: WakaTimeWhereInput[]
    NOT?: WakaTimeWhereInput | WakaTimeWhereInput[]
    wakaApiKey?: StringFilter<"WakaTime"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WakaTimeOrderByWithAggregationInput = {
    id?: SortOrder
    wakaApiKey?: SortOrder
    userId?: SortOrder
    _count?: WakaTimeCountOrderByAggregateInput
    _max?: WakaTimeMaxOrderByAggregateInput
    _min?: WakaTimeMinOrderByAggregateInput
  }

  export type WakaTimeScalarWhereWithAggregatesInput = {
    AND?: WakaTimeScalarWhereWithAggregatesInput | WakaTimeScalarWhereWithAggregatesInput[]
    OR?: WakaTimeScalarWhereWithAggregatesInput[]
    NOT?: WakaTimeScalarWhereWithAggregatesInput | WakaTimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WakaTime"> | string
    wakaApiKey?: StringWithAggregatesFilter<"WakaTime"> | string
    userId?: StringWithAggregatesFilter<"WakaTime"> | string
  }

  export type NotionUnitWhereInput = {
    AND?: NotionUnitWhereInput | NotionUnitWhereInput[]
    OR?: NotionUnitWhereInput[]
    NOT?: NotionUnitWhereInput | NotionUnitWhereInput[]
    id?: StringFilter<"NotionUnit"> | string
    dataId?: StringFilter<"NotionUnit"> | string
    type?: StringFilter<"NotionUnit"> | string
    isEnable?: BoolFilter<"NotionUnit"> | boolean
    title?: StringFilter<"NotionUnit"> | string
    notionId?: StringNullableFilter<"NotionUnit"> | string | null
    Notion?: XOR<NotionNullableRelationFilter, NotionWhereInput> | null
  }

  export type NotionUnitOrderByWithRelationInput = {
    id?: SortOrder
    dataId?: SortOrder
    type?: SortOrder
    isEnable?: SortOrder
    title?: SortOrder
    notionId?: SortOrderInput | SortOrder
    Notion?: NotionOrderByWithRelationInput
  }

  export type NotionUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dataId?: string
    AND?: NotionUnitWhereInput | NotionUnitWhereInput[]
    OR?: NotionUnitWhereInput[]
    NOT?: NotionUnitWhereInput | NotionUnitWhereInput[]
    type?: StringFilter<"NotionUnit"> | string
    isEnable?: BoolFilter<"NotionUnit"> | boolean
    title?: StringFilter<"NotionUnit"> | string
    notionId?: StringNullableFilter<"NotionUnit"> | string | null
    Notion?: XOR<NotionNullableRelationFilter, NotionWhereInput> | null
  }, "id" | "dataId">

  export type NotionUnitOrderByWithAggregationInput = {
    id?: SortOrder
    dataId?: SortOrder
    type?: SortOrder
    isEnable?: SortOrder
    title?: SortOrder
    notionId?: SortOrderInput | SortOrder
    _count?: NotionUnitCountOrderByAggregateInput
    _max?: NotionUnitMaxOrderByAggregateInput
    _min?: NotionUnitMinOrderByAggregateInput
  }

  export type NotionUnitScalarWhereWithAggregatesInput = {
    AND?: NotionUnitScalarWhereWithAggregatesInput | NotionUnitScalarWhereWithAggregatesInput[]
    OR?: NotionUnitScalarWhereWithAggregatesInput[]
    NOT?: NotionUnitScalarWhereWithAggregatesInput | NotionUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotionUnit"> | string
    dataId?: StringWithAggregatesFilter<"NotionUnit"> | string
    type?: StringWithAggregatesFilter<"NotionUnit"> | string
    isEnable?: BoolWithAggregatesFilter<"NotionUnit"> | boolean
    title?: StringWithAggregatesFilter<"NotionUnit"> | string
    notionId?: StringNullableWithAggregatesFilter<"NotionUnit"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    providerAccountId: string
    notion?: NotionCreateNestedOneWithoutUserInput
    wakaTime?: WakaTimeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    providerAccountId: string
    notion?: NotionUncheckedCreateNestedOneWithoutUserInput
    wakaTime?: WakaTimeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    notion?: NotionUpdateOneWithoutUserNestedInput
    wakaTime?: WakaTimeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    notion?: NotionUncheckedUpdateOneWithoutUserNestedInput
    wakaTime?: WakaTimeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    providerAccountId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionCreateInput = {
    id: string
    accessToken: string
    workspaceId: string
    units?: NotionUnitCreateNestedManyWithoutNotionInput
    User: UserCreateNestedOneWithoutNotionInput
  }

  export type NotionUncheckedCreateInput = {
    id: string
    accessToken: string
    workspaceId: string
    userId: string
    units?: NotionUnitUncheckedCreateNestedManyWithoutNotionInput
  }

  export type NotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    units?: NotionUnitUpdateManyWithoutNotionNestedInput
    User?: UserUpdateOneRequiredWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    units?: NotionUnitUncheckedUpdateManyWithoutNotionNestedInput
  }

  export type NotionCreateManyInput = {
    id: string
    accessToken: string
    workspaceId: string
    userId: string
  }

  export type NotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WakaTimeCreateInput = {
    id?: string
    wakaApiKey: string
    User: UserCreateNestedOneWithoutWakaTimeInput
  }

  export type WakaTimeUncheckedCreateInput = {
    id?: string
    wakaApiKey: string
    userId: string
  }

  export type WakaTimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutWakaTimeNestedInput
  }

  export type WakaTimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WakaTimeCreateManyInput = {
    id?: string
    wakaApiKey: string
    userId: string
  }

  export type WakaTimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
  }

  export type WakaTimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitCreateInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
    Notion?: NotionCreateNestedOneWithoutUnitsInput
  }

  export type NotionUnitUncheckedCreateInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
    notionId?: string | null
  }

  export type NotionUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    Notion?: NotionUpdateOneWithoutUnitsNestedInput
  }

  export type NotionUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotionUnitCreateManyInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
    notionId?: string | null
  }

  export type NotionUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    notionId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type NotionNullableRelationFilter = {
    is?: NotionWhereInput | null
    isNot?: NotionWhereInput | null
  }

  export type WakaTimeNullableRelationFilter = {
    is?: WakaTimeWhereInput | null
    isNot?: WakaTimeWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerAccountId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerAccountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerAccountId?: SortOrder
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

  export type NotionUnitListRelationFilter = {
    every?: NotionUnitWhereInput
    some?: NotionUnitWhereInput
    none?: NotionUnitWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotionUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotionCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type NotionMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type NotionMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type WakaTimeCountOrderByAggregateInput = {
    id?: SortOrder
    wakaApiKey?: SortOrder
    userId?: SortOrder
  }

  export type WakaTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    wakaApiKey?: SortOrder
    userId?: SortOrder
  }

  export type WakaTimeMinOrderByAggregateInput = {
    id?: SortOrder
    wakaApiKey?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotionUnitCountOrderByAggregateInput = {
    id?: SortOrder
    dataId?: SortOrder
    type?: SortOrder
    isEnable?: SortOrder
    title?: SortOrder
    notionId?: SortOrder
  }

  export type NotionUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    dataId?: SortOrder
    type?: SortOrder
    isEnable?: SortOrder
    title?: SortOrder
    notionId?: SortOrder
  }

  export type NotionUnitMinOrderByAggregateInput = {
    id?: SortOrder
    dataId?: SortOrder
    type?: SortOrder
    isEnable?: SortOrder
    title?: SortOrder
    notionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NotionCreateNestedOneWithoutUserInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput
    connect?: NotionWhereUniqueInput
  }

  export type WakaTimeCreateNestedOneWithoutUserInput = {
    create?: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
    connectOrCreate?: WakaTimeCreateOrConnectWithoutUserInput
    connect?: WakaTimeWhereUniqueInput
  }

  export type NotionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput
    connect?: NotionWhereUniqueInput
  }

  export type WakaTimeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
    connectOrCreate?: WakaTimeCreateOrConnectWithoutUserInput
    connect?: WakaTimeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NotionUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput
    upsert?: NotionUpsertWithoutUserInput
    disconnect?: NotionWhereInput | boolean
    delete?: NotionWhereInput | boolean
    connect?: NotionWhereUniqueInput
    update?: XOR<XOR<NotionUpdateToOneWithWhereWithoutUserInput, NotionUpdateWithoutUserInput>, NotionUncheckedUpdateWithoutUserInput>
  }

  export type WakaTimeUpdateOneWithoutUserNestedInput = {
    create?: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
    connectOrCreate?: WakaTimeCreateOrConnectWithoutUserInput
    upsert?: WakaTimeUpsertWithoutUserInput
    disconnect?: WakaTimeWhereInput | boolean
    delete?: WakaTimeWhereInput | boolean
    connect?: WakaTimeWhereUniqueInput
    update?: XOR<XOR<WakaTimeUpdateToOneWithWhereWithoutUserInput, WakaTimeUpdateWithoutUserInput>, WakaTimeUncheckedUpdateWithoutUserInput>
  }

  export type NotionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUserInput
    upsert?: NotionUpsertWithoutUserInput
    disconnect?: NotionWhereInput | boolean
    delete?: NotionWhereInput | boolean
    connect?: NotionWhereUniqueInput
    update?: XOR<XOR<NotionUpdateToOneWithWhereWithoutUserInput, NotionUpdateWithoutUserInput>, NotionUncheckedUpdateWithoutUserInput>
  }

  export type WakaTimeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
    connectOrCreate?: WakaTimeCreateOrConnectWithoutUserInput
    upsert?: WakaTimeUpsertWithoutUserInput
    disconnect?: WakaTimeWhereInput | boolean
    delete?: WakaTimeWhereInput | boolean
    connect?: WakaTimeWhereUniqueInput
    update?: XOR<XOR<WakaTimeUpdateToOneWithWhereWithoutUserInput, WakaTimeUpdateWithoutUserInput>, WakaTimeUncheckedUpdateWithoutUserInput>
  }

  export type NotionUnitCreateNestedManyWithoutNotionInput = {
    create?: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput> | NotionUnitCreateWithoutNotionInput[] | NotionUnitUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: NotionUnitCreateOrConnectWithoutNotionInput | NotionUnitCreateOrConnectWithoutNotionInput[]
    createMany?: NotionUnitCreateManyNotionInputEnvelope
    connect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutNotionInput = {
    create?: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotionInput
    connect?: UserWhereUniqueInput
  }

  export type NotionUnitUncheckedCreateNestedManyWithoutNotionInput = {
    create?: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput> | NotionUnitCreateWithoutNotionInput[] | NotionUnitUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: NotionUnitCreateOrConnectWithoutNotionInput | NotionUnitCreateOrConnectWithoutNotionInput[]
    createMany?: NotionUnitCreateManyNotionInputEnvelope
    connect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
  }

  export type NotionUnitUpdateManyWithoutNotionNestedInput = {
    create?: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput> | NotionUnitCreateWithoutNotionInput[] | NotionUnitUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: NotionUnitCreateOrConnectWithoutNotionInput | NotionUnitCreateOrConnectWithoutNotionInput[]
    upsert?: NotionUnitUpsertWithWhereUniqueWithoutNotionInput | NotionUnitUpsertWithWhereUniqueWithoutNotionInput[]
    createMany?: NotionUnitCreateManyNotionInputEnvelope
    set?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    disconnect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    delete?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    connect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    update?: NotionUnitUpdateWithWhereUniqueWithoutNotionInput | NotionUnitUpdateWithWhereUniqueWithoutNotionInput[]
    updateMany?: NotionUnitUpdateManyWithWhereWithoutNotionInput | NotionUnitUpdateManyWithWhereWithoutNotionInput[]
    deleteMany?: NotionUnitScalarWhereInput | NotionUnitScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutNotionNestedInput = {
    create?: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotionInput
    upsert?: UserUpsertWithoutNotionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotionInput, UserUpdateWithoutNotionInput>, UserUncheckedUpdateWithoutNotionInput>
  }

  export type NotionUnitUncheckedUpdateManyWithoutNotionNestedInput = {
    create?: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput> | NotionUnitCreateWithoutNotionInput[] | NotionUnitUncheckedCreateWithoutNotionInput[]
    connectOrCreate?: NotionUnitCreateOrConnectWithoutNotionInput | NotionUnitCreateOrConnectWithoutNotionInput[]
    upsert?: NotionUnitUpsertWithWhereUniqueWithoutNotionInput | NotionUnitUpsertWithWhereUniqueWithoutNotionInput[]
    createMany?: NotionUnitCreateManyNotionInputEnvelope
    set?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    disconnect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    delete?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    connect?: NotionUnitWhereUniqueInput | NotionUnitWhereUniqueInput[]
    update?: NotionUnitUpdateWithWhereUniqueWithoutNotionInput | NotionUnitUpdateWithWhereUniqueWithoutNotionInput[]
    updateMany?: NotionUnitUpdateManyWithWhereWithoutNotionInput | NotionUnitUpdateManyWithWhereWithoutNotionInput[]
    deleteMany?: NotionUnitScalarWhereInput | NotionUnitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWakaTimeInput = {
    create?: XOR<UserCreateWithoutWakaTimeInput, UserUncheckedCreateWithoutWakaTimeInput>
    connectOrCreate?: UserCreateOrConnectWithoutWakaTimeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWakaTimeNestedInput = {
    create?: XOR<UserCreateWithoutWakaTimeInput, UserUncheckedCreateWithoutWakaTimeInput>
    connectOrCreate?: UserCreateOrConnectWithoutWakaTimeInput
    upsert?: UserUpsertWithoutWakaTimeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWakaTimeInput, UserUpdateWithoutWakaTimeInput>, UserUncheckedUpdateWithoutWakaTimeInput>
  }

  export type NotionCreateNestedOneWithoutUnitsInput = {
    create?: XOR<NotionCreateWithoutUnitsInput, NotionUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUnitsInput
    connect?: NotionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NotionUpdateOneWithoutUnitsNestedInput = {
    create?: XOR<NotionCreateWithoutUnitsInput, NotionUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: NotionCreateOrConnectWithoutUnitsInput
    upsert?: NotionUpsertWithoutUnitsInput
    disconnect?: NotionWhereInput | boolean
    delete?: NotionWhereInput | boolean
    connect?: NotionWhereUniqueInput
    update?: XOR<XOR<NotionUpdateToOneWithWhereWithoutUnitsInput, NotionUpdateWithoutUnitsInput>, NotionUncheckedUpdateWithoutUnitsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NotionCreateWithoutUserInput = {
    id: string
    accessToken: string
    workspaceId: string
    units?: NotionUnitCreateNestedManyWithoutNotionInput
  }

  export type NotionUncheckedCreateWithoutUserInput = {
    id: string
    accessToken: string
    workspaceId: string
    units?: NotionUnitUncheckedCreateNestedManyWithoutNotionInput
  }

  export type NotionCreateOrConnectWithoutUserInput = {
    where: NotionWhereUniqueInput
    create: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
  }

  export type WakaTimeCreateWithoutUserInput = {
    id?: string
    wakaApiKey: string
  }

  export type WakaTimeUncheckedCreateWithoutUserInput = {
    id?: string
    wakaApiKey: string
  }

  export type WakaTimeCreateOrConnectWithoutUserInput = {
    where: WakaTimeWhereUniqueInput
    create: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
  }

  export type NotionUpsertWithoutUserInput = {
    update: XOR<NotionUpdateWithoutUserInput, NotionUncheckedUpdateWithoutUserInput>
    create: XOR<NotionCreateWithoutUserInput, NotionUncheckedCreateWithoutUserInput>
    where?: NotionWhereInput
  }

  export type NotionUpdateToOneWithWhereWithoutUserInput = {
    where?: NotionWhereInput
    data: XOR<NotionUpdateWithoutUserInput, NotionUncheckedUpdateWithoutUserInput>
  }

  export type NotionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    units?: NotionUnitUpdateManyWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    units?: NotionUnitUncheckedUpdateManyWithoutNotionNestedInput
  }

  export type WakaTimeUpsertWithoutUserInput = {
    update: XOR<WakaTimeUpdateWithoutUserInput, WakaTimeUncheckedUpdateWithoutUserInput>
    create: XOR<WakaTimeCreateWithoutUserInput, WakaTimeUncheckedCreateWithoutUserInput>
    where?: WakaTimeWhereInput
  }

  export type WakaTimeUpdateToOneWithWhereWithoutUserInput = {
    where?: WakaTimeWhereInput
    data: XOR<WakaTimeUpdateWithoutUserInput, WakaTimeUncheckedUpdateWithoutUserInput>
  }

  export type WakaTimeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
  }

  export type WakaTimeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wakaApiKey?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitCreateWithoutNotionInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
  }

  export type NotionUnitUncheckedCreateWithoutNotionInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
  }

  export type NotionUnitCreateOrConnectWithoutNotionInput = {
    where: NotionUnitWhereUniqueInput
    create: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput>
  }

  export type NotionUnitCreateManyNotionInputEnvelope = {
    data: NotionUnitCreateManyNotionInput | NotionUnitCreateManyNotionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutNotionInput = {
    id?: string
    name: string
    providerAccountId: string
    wakaTime?: WakaTimeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotionInput = {
    id?: string
    name: string
    providerAccountId: string
    wakaTime?: WakaTimeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
  }

  export type NotionUnitUpsertWithWhereUniqueWithoutNotionInput = {
    where: NotionUnitWhereUniqueInput
    update: XOR<NotionUnitUpdateWithoutNotionInput, NotionUnitUncheckedUpdateWithoutNotionInput>
    create: XOR<NotionUnitCreateWithoutNotionInput, NotionUnitUncheckedCreateWithoutNotionInput>
  }

  export type NotionUnitUpdateWithWhereUniqueWithoutNotionInput = {
    where: NotionUnitWhereUniqueInput
    data: XOR<NotionUnitUpdateWithoutNotionInput, NotionUnitUncheckedUpdateWithoutNotionInput>
  }

  export type NotionUnitUpdateManyWithWhereWithoutNotionInput = {
    where: NotionUnitScalarWhereInput
    data: XOR<NotionUnitUpdateManyMutationInput, NotionUnitUncheckedUpdateManyWithoutNotionInput>
  }

  export type NotionUnitScalarWhereInput = {
    AND?: NotionUnitScalarWhereInput | NotionUnitScalarWhereInput[]
    OR?: NotionUnitScalarWhereInput[]
    NOT?: NotionUnitScalarWhereInput | NotionUnitScalarWhereInput[]
    id?: StringFilter<"NotionUnit"> | string
    dataId?: StringFilter<"NotionUnit"> | string
    type?: StringFilter<"NotionUnit"> | string
    isEnable?: BoolFilter<"NotionUnit"> | boolean
    title?: StringFilter<"NotionUnit"> | string
    notionId?: StringNullableFilter<"NotionUnit"> | string | null
  }

  export type UserUpsertWithoutNotionInput = {
    update: XOR<UserUpdateWithoutNotionInput, UserUncheckedUpdateWithoutNotionInput>
    create: XOR<UserCreateWithoutNotionInput, UserUncheckedCreateWithoutNotionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotionInput, UserUncheckedUpdateWithoutNotionInput>
  }

  export type UserUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    wakaTime?: WakaTimeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    wakaTime?: WakaTimeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutWakaTimeInput = {
    id?: string
    name: string
    providerAccountId: string
    notion?: NotionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWakaTimeInput = {
    id?: string
    name: string
    providerAccountId: string
    notion?: NotionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWakaTimeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWakaTimeInput, UserUncheckedCreateWithoutWakaTimeInput>
  }

  export type UserUpsertWithoutWakaTimeInput = {
    update: XOR<UserUpdateWithoutWakaTimeInput, UserUncheckedUpdateWithoutWakaTimeInput>
    create: XOR<UserCreateWithoutWakaTimeInput, UserUncheckedCreateWithoutWakaTimeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWakaTimeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWakaTimeInput, UserUncheckedUpdateWithoutWakaTimeInput>
  }

  export type UserUpdateWithoutWakaTimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    notion?: NotionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWakaTimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    notion?: NotionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NotionCreateWithoutUnitsInput = {
    id: string
    accessToken: string
    workspaceId: string
    User: UserCreateNestedOneWithoutNotionInput
  }

  export type NotionUncheckedCreateWithoutUnitsInput = {
    id: string
    accessToken: string
    workspaceId: string
    userId: string
  }

  export type NotionCreateOrConnectWithoutUnitsInput = {
    where: NotionWhereUniqueInput
    create: XOR<NotionCreateWithoutUnitsInput, NotionUncheckedCreateWithoutUnitsInput>
  }

  export type NotionUpsertWithoutUnitsInput = {
    update: XOR<NotionUpdateWithoutUnitsInput, NotionUncheckedUpdateWithoutUnitsInput>
    create: XOR<NotionCreateWithoutUnitsInput, NotionUncheckedCreateWithoutUnitsInput>
    where?: NotionWhereInput
  }

  export type NotionUpdateToOneWithWhereWithoutUnitsInput = {
    where?: NotionWhereInput
    data: XOR<NotionUpdateWithoutUnitsInput, NotionUncheckedUpdateWithoutUnitsInput>
  }

  export type NotionUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutNotionNestedInput
  }

  export type NotionUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitCreateManyNotionInput = {
    id?: string
    dataId: string
    type: string
    isEnable?: boolean
    title: string
  }

  export type NotionUnitUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitUncheckedUpdateWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotionUnitUncheckedUpdateManyWithoutNotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isEnable?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
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