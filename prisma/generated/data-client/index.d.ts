
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Podcast
 * 
 */
export type Podcast = {
  id: number
  title: string
  createdAt: Date
  updatedAt: Date
  description: string
  url: string
  slug: string
  cover: string
  host: string
  podcastHostId: string | null
  backgroundCoverImage: string | null
  tags: string | null
  genre: string | null
  rating: number | null
  lastUpdate: number | null
  isItExplicit: boolean | null
  isItBlocked: boolean | null
  hasNotBeenUpdating: boolean | null
  outsideImageUrl: string | null
  language: string | null
  amountOfEpisodes: number | null
  popularity: number | null
  priority: number | null
  podcastCreatedOn: Date | null
  frequencyOfUpdates: number | null
}

/**
 * Model Person
 * 
 */
export type Person = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
  slug: string | null
  otherNames: string | null
}

/**
 * Model Episode
 * 
 */
export type Episode = {
  id: number
  title: string | null
  description: string | null
  publishedAt: Date | null
  url: string | null
  podcastId: number | null
  episodeNumber: number | null
  bestEpisode: boolean | null
  featuredEpisode: boolean | null
  mostStreamedEpisode: boolean | null
  episodeCoverImage: string | null
}

/**
 * Model StreamingSites
 * 
 */
export type StreamingSites = {
  id: number
  title: string | null
  description: string | null
  publishedAt: Date | null
  url: string | null
  hits: string | null
}

/**
 * Model Review
 * 
 */
export type Review = {
  id: number
  review: string | null
  createdAt: Date
  updatedAt: Date
  podcastId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Podcasts
 * const podcasts = await prisma.podcast.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Podcasts
   * const podcasts = await prisma.podcast.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.podcast`: Exposes CRUD operations for the **Podcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Podcasts
    * const podcasts = await prisma.podcast.findMany()
    * ```
    */
  get podcast(): Prisma.PodcastDelegate<GlobalReject>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<GlobalReject>;

  /**
   * `prisma.streamingSites`: Exposes CRUD operations for the **StreamingSites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamingSites
    * const streamingSites = await prisma.streamingSites.findMany()
    * ```
    */
  get streamingSites(): Prisma.StreamingSitesDelegate<GlobalReject>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Podcast: 'Podcast',
    Person: 'Person',
    Episode: 'Episode',
    StreamingSites: 'StreamingSites',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
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
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PodcastCountOutputType
   */


  export type PodcastCountOutputType = {
    episodes: number
    similarPodcasts: number
    similarPodcastsRelation: number
    reviews: number
    streamingAt: number
  }

  export type PodcastCountOutputTypeSelect = {
    episodes?: boolean
    similarPodcasts?: boolean
    similarPodcastsRelation?: boolean
    reviews?: boolean
    streamingAt?: boolean
  }

  export type PodcastCountOutputTypeGetPayload<S extends boolean | null | undefined | PodcastCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PodcastCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PodcastCountOutputTypeArgs)
    ? PodcastCountOutputType 
    : S extends { select: any } & (PodcastCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PodcastCountOutputType ? PodcastCountOutputType[P] : never
  } 
      : PodcastCountOutputType




  // Custom InputTypes

  /**
   * PodcastCountOutputType without action
   */
  export type PodcastCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PodcastCountOutputType
     */
    select?: PodcastCountOutputTypeSelect | null
  }



  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    podcast: number
    guestAt: number
  }

  export type PersonCountOutputTypeSelect = {
    podcast?: boolean
    guestAt?: boolean
  }

  export type PersonCountOutputTypeGetPayload<S extends boolean | null | undefined | PersonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PersonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PersonCountOutputTypeArgs)
    ? PersonCountOutputType 
    : S extends { select: any } & (PersonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PersonCountOutputType ? PersonCountOutputType[P] : never
  } 
      : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type EpisodeCountOutputType
   */


  export type EpisodeCountOutputType = {
    episodeGuests: number
  }

  export type EpisodeCountOutputTypeSelect = {
    episodeGuests?: boolean
  }

  export type EpisodeCountOutputTypeGetPayload<S extends boolean | null | undefined | EpisodeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EpisodeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EpisodeCountOutputTypeArgs)
    ? EpisodeCountOutputType 
    : S extends { select: any } & (EpisodeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EpisodeCountOutputType ? EpisodeCountOutputType[P] : never
  } 
      : EpisodeCountOutputType




  // Custom InputTypes

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect | null
  }



  /**
   * Count Type StreamingSitesCountOutputType
   */


  export type StreamingSitesCountOutputType = {
    podcasts: number
  }

  export type StreamingSitesCountOutputTypeSelect = {
    podcasts?: boolean
  }

  export type StreamingSitesCountOutputTypeGetPayload<S extends boolean | null | undefined | StreamingSitesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StreamingSitesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StreamingSitesCountOutputTypeArgs)
    ? StreamingSitesCountOutputType 
    : S extends { select: any } & (StreamingSitesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StreamingSitesCountOutputType ? StreamingSitesCountOutputType[P] : never
  } 
      : StreamingSitesCountOutputType




  // Custom InputTypes

  /**
   * StreamingSitesCountOutputType without action
   */
  export type StreamingSitesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StreamingSitesCountOutputType
     */
    select?: StreamingSitesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Podcast
   */


  export type AggregatePodcast = {
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  export type PodcastAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    lastUpdate: number | null
    amountOfEpisodes: number | null
    popularity: number | null
    priority: number | null
    frequencyOfUpdates: number | null
  }

  export type PodcastSumAggregateOutputType = {
    id: number | null
    rating: number | null
    lastUpdate: number | null
    amountOfEpisodes: number | null
    popularity: number | null
    priority: number | null
    frequencyOfUpdates: number | null
  }

  export type PodcastMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    url: string | null
    slug: string | null
    cover: string | null
    host: string | null
    podcastHostId: string | null
    backgroundCoverImage: string | null
    tags: string | null
    genre: string | null
    rating: number | null
    lastUpdate: number | null
    isItExplicit: boolean | null
    isItBlocked: boolean | null
    hasNotBeenUpdating: boolean | null
    outsideImageUrl: string | null
    language: string | null
    amountOfEpisodes: number | null
    popularity: number | null
    priority: number | null
    podcastCreatedOn: Date | null
    frequencyOfUpdates: number | null
  }

  export type PodcastMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    url: string | null
    slug: string | null
    cover: string | null
    host: string | null
    podcastHostId: string | null
    backgroundCoverImage: string | null
    tags: string | null
    genre: string | null
    rating: number | null
    lastUpdate: number | null
    isItExplicit: boolean | null
    isItBlocked: boolean | null
    hasNotBeenUpdating: boolean | null
    outsideImageUrl: string | null
    language: string | null
    amountOfEpisodes: number | null
    popularity: number | null
    priority: number | null
    podcastCreatedOn: Date | null
    frequencyOfUpdates: number | null
  }

  export type PodcastCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    description: number
    url: number
    slug: number
    cover: number
    host: number
    podcastHostId: number
    backgroundCoverImage: number
    tags: number
    genre: number
    rating: number
    lastUpdate: number
    isItExplicit: number
    isItBlocked: number
    hasNotBeenUpdating: number
    outsideImageUrl: number
    language: number
    amountOfEpisodes: number
    popularity: number
    priority: number
    podcastCreatedOn: number
    frequencyOfUpdates: number
    _all: number
  }


  export type PodcastAvgAggregateInputType = {
    id?: true
    rating?: true
    lastUpdate?: true
    amountOfEpisodes?: true
    popularity?: true
    priority?: true
    frequencyOfUpdates?: true
  }

  export type PodcastSumAggregateInputType = {
    id?: true
    rating?: true
    lastUpdate?: true
    amountOfEpisodes?: true
    popularity?: true
    priority?: true
    frequencyOfUpdates?: true
  }

  export type PodcastMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    url?: true
    slug?: true
    cover?: true
    host?: true
    podcastHostId?: true
    backgroundCoverImage?: true
    tags?: true
    genre?: true
    rating?: true
    lastUpdate?: true
    isItExplicit?: true
    isItBlocked?: true
    hasNotBeenUpdating?: true
    outsideImageUrl?: true
    language?: true
    amountOfEpisodes?: true
    popularity?: true
    priority?: true
    podcastCreatedOn?: true
    frequencyOfUpdates?: true
  }

  export type PodcastMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    url?: true
    slug?: true
    cover?: true
    host?: true
    podcastHostId?: true
    backgroundCoverImage?: true
    tags?: true
    genre?: true
    rating?: true
    lastUpdate?: true
    isItExplicit?: true
    isItBlocked?: true
    hasNotBeenUpdating?: true
    outsideImageUrl?: true
    language?: true
    amountOfEpisodes?: true
    popularity?: true
    priority?: true
    podcastCreatedOn?: true
    frequencyOfUpdates?: true
  }

  export type PodcastCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    url?: true
    slug?: true
    cover?: true
    host?: true
    podcastHostId?: true
    backgroundCoverImage?: true
    tags?: true
    genre?: true
    rating?: true
    lastUpdate?: true
    isItExplicit?: true
    isItBlocked?: true
    hasNotBeenUpdating?: true
    outsideImageUrl?: true
    language?: true
    amountOfEpisodes?: true
    popularity?: true
    priority?: true
    podcastCreatedOn?: true
    frequencyOfUpdates?: true
    _all?: true
  }

  export type PodcastAggregateArgs = {
    /**
     * Filter which Podcast to aggregate.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Podcasts
    **/
    _count?: true | PodcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PodcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PodcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodcastMaxAggregateInputType
  }

  export type GetPodcastAggregateType<T extends PodcastAggregateArgs> = {
        [P in keyof T & keyof AggregatePodcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePodcast[P]>
      : GetScalarType<T[P], AggregatePodcast[P]>
  }




  export type PodcastGroupByArgs = {
    where?: PodcastWhereInput
    orderBy?: Enumerable<PodcastOrderByWithAggregationInput>
    by: PodcastScalarFieldEnum[]
    having?: PodcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodcastCountAggregateInputType | true
    _avg?: PodcastAvgAggregateInputType
    _sum?: PodcastSumAggregateInputType
    _min?: PodcastMinAggregateInputType
    _max?: PodcastMaxAggregateInputType
  }


  export type PodcastGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    description: string
    url: string
    slug: string
    cover: string
    host: string
    podcastHostId: string | null
    backgroundCoverImage: string | null
    tags: string | null
    genre: string | null
    rating: number | null
    lastUpdate: number | null
    isItExplicit: boolean | null
    isItBlocked: boolean | null
    hasNotBeenUpdating: boolean | null
    outsideImageUrl: string | null
    language: string | null
    amountOfEpisodes: number | null
    popularity: number | null
    priority: number | null
    podcastCreatedOn: Date | null
    frequencyOfUpdates: number | null
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  type GetPodcastGroupByPayload<T extends PodcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PodcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodcastGroupByOutputType[P]>
            : GetScalarType<T[P], PodcastGroupByOutputType[P]>
        }
      >
    >


  export type PodcastSelect = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    url?: boolean
    slug?: boolean
    cover?: boolean
    host?: boolean
    podcastHostId?: boolean
    backgroundCoverImage?: boolean
    tags?: boolean
    genre?: boolean
    rating?: boolean
    lastUpdate?: boolean
    isItExplicit?: boolean
    isItBlocked?: boolean
    hasNotBeenUpdating?: boolean
    outsideImageUrl?: boolean
    language?: boolean
    amountOfEpisodes?: boolean
    popularity?: boolean
    priority?: boolean
    podcastCreatedOn?: boolean
    frequencyOfUpdates?: boolean
    podcastHost?: boolean | PersonArgs
    episodes?: boolean | Podcast$episodesArgs
    similarPodcasts?: boolean | Podcast$similarPodcastsArgs
    similarPodcastsRelation?: boolean | Podcast$similarPodcastsRelationArgs
    reviews?: boolean | Podcast$reviewsArgs
    streamingAt?: boolean | Podcast$streamingAtArgs
    _count?: boolean | PodcastCountOutputTypeArgs
  }


  export type PodcastInclude = {
    podcastHost?: boolean | PersonArgs
    episodes?: boolean | Podcast$episodesArgs
    similarPodcasts?: boolean | Podcast$similarPodcastsArgs
    similarPodcastsRelation?: boolean | Podcast$similarPodcastsRelationArgs
    reviews?: boolean | Podcast$reviewsArgs
    streamingAt?: boolean | Podcast$streamingAtArgs
    _count?: boolean | PodcastCountOutputTypeArgs
  }

  export type PodcastGetPayload<S extends boolean | null | undefined | PodcastArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Podcast :
    S extends undefined ? never :
    S extends { include: any } & (PodcastArgs | PodcastFindManyArgs)
    ? Podcast  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'podcastHost' ? PersonGetPayload<S['include'][P]> | null :
        P extends 'episodes' ? Array < EpisodeGetPayload<S['include'][P]>>  :
        P extends 'similarPodcasts' ? Array < PodcastGetPayload<S['include'][P]>>  :
        P extends 'similarPodcastsRelation' ? Array < PodcastGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['include'][P]>>  :
        P extends 'streamingAt' ? Array < StreamingSitesGetPayload<S['include'][P]>>  :
        P extends '_count' ? PodcastCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PodcastArgs | PodcastFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'podcastHost' ? PersonGetPayload<S['select'][P]> | null :
        P extends 'episodes' ? Array < EpisodeGetPayload<S['select'][P]>>  :
        P extends 'similarPodcasts' ? Array < PodcastGetPayload<S['select'][P]>>  :
        P extends 'similarPodcastsRelation' ? Array < PodcastGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['select'][P]>>  :
        P extends 'streamingAt' ? Array < StreamingSitesGetPayload<S['select'][P]>>  :
        P extends '_count' ? PodcastCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Podcast ? Podcast[P] : never
  } 
      : Podcast


  type PodcastCountArgs = 
    Omit<PodcastFindManyArgs, 'select' | 'include'> & {
      select?: PodcastCountAggregateInputType | true
    }

  export interface PodcastDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Podcast that matches the filter.
     * @param {PodcastFindUniqueArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PodcastFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PodcastFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Podcast'> extends True ? Prisma__PodcastClient<PodcastGetPayload<T>> : Prisma__PodcastClient<PodcastGetPayload<T> | null, null>

    /**
     * Find one Podcast that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PodcastFindUniqueOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PodcastFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PodcastFindUniqueOrThrowArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Find the first Podcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PodcastFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PodcastFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Podcast'> extends True ? Prisma__PodcastClient<PodcastGetPayload<T>> : Prisma__PodcastClient<PodcastGetPayload<T> | null, null>

    /**
     * Find the first Podcast that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PodcastFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PodcastFindFirstOrThrowArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Find zero or more Podcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Podcasts
     * const podcasts = await prisma.podcast.findMany()
     * 
     * // Get first 10 Podcasts
     * const podcasts = await prisma.podcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podcastWithIdOnly = await prisma.podcast.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PodcastFindManyArgs>(
      args?: SelectSubset<T, PodcastFindManyArgs>
    ): Prisma.PrismaPromise<Array<PodcastGetPayload<T>>>

    /**
     * Create a Podcast.
     * @param {PodcastCreateArgs} args - Arguments to create a Podcast.
     * @example
     * // Create one Podcast
     * const Podcast = await prisma.podcast.create({
     *   data: {
     *     // ... data to create a Podcast
     *   }
     * })
     * 
    **/
    create<T extends PodcastCreateArgs>(
      args: SelectSubset<T, PodcastCreateArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Delete a Podcast.
     * @param {PodcastDeleteArgs} args - Arguments to delete one Podcast.
     * @example
     * // Delete one Podcast
     * const Podcast = await prisma.podcast.delete({
     *   where: {
     *     // ... filter to delete one Podcast
     *   }
     * })
     * 
    **/
    delete<T extends PodcastDeleteArgs>(
      args: SelectSubset<T, PodcastDeleteArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Update one Podcast.
     * @param {PodcastUpdateArgs} args - Arguments to update one Podcast.
     * @example
     * // Update one Podcast
     * const podcast = await prisma.podcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PodcastUpdateArgs>(
      args: SelectSubset<T, PodcastUpdateArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Delete zero or more Podcasts.
     * @param {PodcastDeleteManyArgs} args - Arguments to filter Podcasts to delete.
     * @example
     * // Delete a few Podcasts
     * const { count } = await prisma.podcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PodcastDeleteManyArgs>(
      args?: SelectSubset<T, PodcastDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Podcasts
     * const podcast = await prisma.podcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PodcastUpdateManyArgs>(
      args: SelectSubset<T, PodcastUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Podcast.
     * @param {PodcastUpsertArgs} args - Arguments to update or create a Podcast.
     * @example
     * // Update or create a Podcast
     * const podcast = await prisma.podcast.upsert({
     *   create: {
     *     // ... data to create a Podcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Podcast we want to update
     *   }
     * })
    **/
    upsert<T extends PodcastUpsertArgs>(
      args: SelectSubset<T, PodcastUpsertArgs>
    ): Prisma__PodcastClient<PodcastGetPayload<T>>

    /**
     * Count the number of Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastCountArgs} args - Arguments to filter Podcasts to count.
     * @example
     * // Count the number of Podcasts
     * const count = await prisma.podcast.count({
     *   where: {
     *     // ... the filter for the Podcasts we want to count
     *   }
     * })
    **/
    count<T extends PodcastCountArgs>(
      args?: Subset<T, PodcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PodcastAggregateArgs>(args: Subset<T, PodcastAggregateArgs>): Prisma.PrismaPromise<GetPodcastAggregateType<T>>

    /**
     * Group by Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastGroupByArgs} args - Group by arguments.
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
      T extends PodcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PodcastGroupByArgs['orderBy'] }
        : { orderBy?: PodcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PodcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Podcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PodcastClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    podcastHost<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    episodes<T extends Podcast$episodesArgs= {}>(args?: Subset<T, Podcast$episodesArgs>): Prisma.PrismaPromise<Array<EpisodeGetPayload<T>>| Null>;

    similarPodcasts<T extends Podcast$similarPodcastsArgs= {}>(args?: Subset<T, Podcast$similarPodcastsArgs>): Prisma.PrismaPromise<Array<PodcastGetPayload<T>>| Null>;

    similarPodcastsRelation<T extends Podcast$similarPodcastsRelationArgs= {}>(args?: Subset<T, Podcast$similarPodcastsRelationArgs>): Prisma.PrismaPromise<Array<PodcastGetPayload<T>>| Null>;

    reviews<T extends Podcast$reviewsArgs= {}>(args?: Subset<T, Podcast$reviewsArgs>): Prisma.PrismaPromise<Array<ReviewGetPayload<T>>| Null>;

    streamingAt<T extends Podcast$streamingAtArgs= {}>(args?: Subset<T, Podcast$streamingAtArgs>): Prisma.PrismaPromise<Array<StreamingSitesGetPayload<T>>| Null>;

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



  // Custom InputTypes

  /**
   * Podcast base type for findUnique actions
   */
  export type PodcastFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast findUnique
   */
  export interface PodcastFindUniqueArgs extends PodcastFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Podcast findUniqueOrThrow
   */
  export type PodcastFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }


  /**
   * Podcast base type for findFirst actions
   */
  export type PodcastFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }

  /**
   * Podcast findFirst
   */
  export interface PodcastFindFirstArgs extends PodcastFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Podcast findFirstOrThrow
   */
  export type PodcastFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * Podcast findMany
   */
  export type PodcastFindManyArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter, which Podcasts to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * Podcast create
   */
  export type PodcastCreateArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * The data needed to create a Podcast.
     */
    data: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
  }


  /**
   * Podcast update
   */
  export type PodcastUpdateArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * The data needed to update a Podcast.
     */
    data: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
    /**
     * Choose, which Podcast to update.
     */
    where: PodcastWhereUniqueInput
  }


  /**
   * Podcast updateMany
   */
  export type PodcastUpdateManyArgs = {
    /**
     * The data used to update Podcasts.
     */
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyInput>
    /**
     * Filter which Podcasts to update
     */
    where?: PodcastWhereInput
  }


  /**
   * Podcast upsert
   */
  export type PodcastUpsertArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * The filter to search for the Podcast to update in case it exists.
     */
    where: PodcastWhereUniqueInput
    /**
     * In case the Podcast found by the `where` argument doesn't exist, create a new Podcast with this data.
     */
    create: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
    /**
     * In case the Podcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
  }


  /**
   * Podcast delete
   */
  export type PodcastDeleteArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    /**
     * Filter which Podcast to delete.
     */
    where: PodcastWhereUniqueInput
  }


  /**
   * Podcast deleteMany
   */
  export type PodcastDeleteManyArgs = {
    /**
     * Filter which Podcasts to delete
     */
    where?: PodcastWhereInput
  }


  /**
   * Podcast.episodes
   */
  export type Podcast$episodesArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    where?: EpisodeWhereInput
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }


  /**
   * Podcast.similarPodcasts
   */
  export type Podcast$similarPodcastsArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    where?: PodcastWhereInput
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * Podcast.similarPodcastsRelation
   */
  export type Podcast$similarPodcastsRelationArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    where?: PodcastWhereInput
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * Podcast.reviews
   */
  export type Podcast$reviewsArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Podcast.streamingAt
   */
  export type Podcast$streamingAtArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    where?: StreamingSitesWhereInput
    orderBy?: Enumerable<StreamingSitesOrderByWithRelationInput>
    cursor?: StreamingSitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StreamingSitesScalarFieldEnum>
  }


  /**
   * Podcast without action
   */
  export type PodcastArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
  }



  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    otherNames: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    otherNames: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    slug: number
    otherNames: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    otherNames?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    otherNames?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    otherNames?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: PersonScalarFieldEnum[]
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    slug: string | null
    otherNames: string | null
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    otherNames?: boolean
    podcast?: boolean | Person$podcastArgs
    guestAt?: boolean | Person$guestAtArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }


  export type PersonInclude = {
    podcast?: boolean | Person$podcastArgs
    guestAt?: boolean | Person$guestAtArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Person :
    S extends undefined ? never :
    S extends { include: any } & (PersonArgs | PersonFindManyArgs)
    ? Person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'podcast' ? Array < PodcastGetPayload<S['include'][P]>>  :
        P extends 'guestAt' ? Array < EpisodeGetPayload<S['include'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PersonArgs | PersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'podcast' ? Array < PodcastGetPayload<S['select'][P]>>  :
        P extends 'guestAt' ? Array < EpisodeGetPayload<S['select'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Person ? Person[P] : never
  } 
      : Person


  type PersonCountArgs = 
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): Prisma.PrismaPromise<Array<PersonGetPayload<T>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    podcast<T extends Person$podcastArgs= {}>(args?: Subset<T, Person$podcastArgs>): Prisma.PrismaPromise<Array<PodcastGetPayload<T>>| Null>;

    guestAt<T extends Person$guestAtArgs= {}>(args?: Subset<T, Person$guestAtArgs>): Prisma.PrismaPromise<Array<EpisodeGetPayload<T>>| Null>;

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



  // Custom InputTypes

  /**
   * Person base type for findUnique actions
   */
  export type PersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUnique
   */
  export interface PersonFindUniqueArgs extends PersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person base type for findFirst actions
   */
  export type PersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * Person findFirst
   */
  export interface PersonFindFirstArgs extends PersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }


  /**
   * Person.podcast
   */
  export type Person$podcastArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    where?: PodcastWhereInput
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * Person.guestAt
   */
  export type Person$guestAtArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    where?: EpisodeWhereInput
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }


  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
  }



  /**
   * Model Episode
   */


  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    podcastId: number | null
    episodeNumber: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    podcastId: number | null
    episodeNumber: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    podcastId: number | null
    episodeNumber: number | null
    bestEpisode: boolean | null
    featuredEpisode: boolean | null
    mostStreamedEpisode: boolean | null
    episodeCoverImage: string | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    podcastId: number | null
    episodeNumber: number | null
    bestEpisode: boolean | null
    featuredEpisode: boolean | null
    mostStreamedEpisode: boolean | null
    episodeCoverImage: string | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    publishedAt: number
    url: number
    podcastId: number
    episodeNumber: number
    bestEpisode: number
    featuredEpisode: number
    mostStreamedEpisode: number
    episodeCoverImage: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    podcastId?: true
    episodeNumber?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    podcastId?: true
    episodeNumber?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    podcastId?: true
    episodeNumber?: true
    bestEpisode?: true
    featuredEpisode?: true
    mostStreamedEpisode?: true
    episodeCoverImage?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    podcastId?: true
    episodeNumber?: true
    bestEpisode?: true
    featuredEpisode?: true
    mostStreamedEpisode?: true
    episodeCoverImage?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    podcastId?: true
    episodeNumber?: true
    bestEpisode?: true
    featuredEpisode?: true
    mostStreamedEpisode?: true
    episodeCoverImage?: true
    _all?: true
  }

  export type EpisodeAggregateArgs = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs = {
    where?: EpisodeWhereInput
    orderBy?: Enumerable<EpisodeOrderByWithAggregationInput>
    by: EpisodeScalarFieldEnum[]
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }


  export type EpisodeGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    podcastId: number | null
    episodeNumber: number | null
    bestEpisode: boolean | null
    featuredEpisode: boolean | null
    mostStreamedEpisode: boolean | null
    episodeCoverImage: string | null
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    publishedAt?: boolean
    url?: boolean
    podcastId?: boolean
    episodeNumber?: boolean
    bestEpisode?: boolean
    featuredEpisode?: boolean
    mostStreamedEpisode?: boolean
    episodeCoverImage?: boolean
    podcast?: boolean | PodcastArgs
    episodeGuests?: boolean | Episode$episodeGuestsArgs
    _count?: boolean | EpisodeCountOutputTypeArgs
  }


  export type EpisodeInclude = {
    podcast?: boolean | PodcastArgs
    episodeGuests?: boolean | Episode$episodeGuestsArgs
    _count?: boolean | EpisodeCountOutputTypeArgs
  }

  export type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Episode :
    S extends undefined ? never :
    S extends { include: any } & (EpisodeArgs | EpisodeFindManyArgs)
    ? Episode  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'podcast' ? PodcastGetPayload<S['include'][P]> | null :
        P extends 'episodeGuests' ? Array < PersonGetPayload<S['include'][P]>>  :
        P extends '_count' ? EpisodeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EpisodeArgs | EpisodeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'podcast' ? PodcastGetPayload<S['select'][P]> | null :
        P extends 'episodeGuests' ? Array < PersonGetPayload<S['select'][P]>>  :
        P extends '_count' ? EpisodeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Episode ? Episode[P] : never
  } 
      : Episode


  type EpisodeCountArgs = 
    Omit<EpisodeFindManyArgs, 'select' | 'include'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EpisodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Episode'> extends True ? Prisma__EpisodeClient<EpisodeGetPayload<T>> : Prisma__EpisodeClient<EpisodeGetPayload<T> | null, null>

    /**
     * Find one Episode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EpisodeFindUniqueOrThrowArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EpisodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Episode'> extends True ? Prisma__EpisodeClient<EpisodeGetPayload<T>> : Prisma__EpisodeClient<EpisodeGetPayload<T> | null, null>

    /**
     * Find the first Episode that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EpisodeFindManyArgs>(
      args?: SelectSubset<T, EpisodeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EpisodeGetPayload<T>>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
    **/
    create<T extends EpisodeCreateArgs>(
      args: SelectSubset<T, EpisodeCreateArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
    **/
    delete<T extends EpisodeDeleteArgs>(
      args: SelectSubset<T, EpisodeDeleteArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodeUpdateArgs>(
      args: SelectSubset<T, EpisodeUpdateArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodeDeleteManyArgs>(
      args?: SelectSubset<T, EpisodeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodeUpdateManyArgs>(
      args: SelectSubset<T, EpisodeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodeUpsertArgs>(
      args: SelectSubset<T, EpisodeUpsertArgs>
    ): Prisma__EpisodeClient<EpisodeGetPayload<T>>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EpisodeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    podcast<T extends PodcastArgs= {}>(args?: Subset<T, PodcastArgs>): Prisma__PodcastClient<PodcastGetPayload<T> | Null>;

    episodeGuests<T extends Episode$episodeGuestsArgs= {}>(args?: Subset<T, Episode$episodeGuestsArgs>): Prisma.PrismaPromise<Array<PersonGetPayload<T>>| Null>;

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



  // Custom InputTypes

  /**
   * Episode base type for findUnique actions
   */
  export type EpisodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUnique
   */
  export interface EpisodeFindUniqueArgs extends EpisodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode base type for findFirst actions
   */
  export type EpisodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }

  /**
   * Episode findFirst
   */
  export interface EpisodeFindFirstArgs extends EpisodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }


  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }


  /**
   * Episode create
   */
  export type EpisodeCreateArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }


  /**
   * Episode update
   */
  export type EpisodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }


  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode.episodeGuests
   */
  export type Episode$episodeGuestsArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Episode without action
   */
  export type EpisodeArgs = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude | null
  }



  /**
   * Model StreamingSites
   */


  export type AggregateStreamingSites = {
    _count: StreamingSitesCountAggregateOutputType | null
    _avg: StreamingSitesAvgAggregateOutputType | null
    _sum: StreamingSitesSumAggregateOutputType | null
    _min: StreamingSitesMinAggregateOutputType | null
    _max: StreamingSitesMaxAggregateOutputType | null
  }

  export type StreamingSitesAvgAggregateOutputType = {
    id: number | null
  }

  export type StreamingSitesSumAggregateOutputType = {
    id: number | null
  }

  export type StreamingSitesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    hits: string | null
  }

  export type StreamingSitesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    hits: string | null
  }

  export type StreamingSitesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    publishedAt: number
    url: number
    hits: number
    _all: number
  }


  export type StreamingSitesAvgAggregateInputType = {
    id?: true
  }

  export type StreamingSitesSumAggregateInputType = {
    id?: true
  }

  export type StreamingSitesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    hits?: true
  }

  export type StreamingSitesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    hits?: true
  }

  export type StreamingSitesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishedAt?: true
    url?: true
    hits?: true
    _all?: true
  }

  export type StreamingSitesAggregateArgs = {
    /**
     * Filter which StreamingSites to aggregate.
     */
    where?: StreamingSitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingSites to fetch.
     */
    orderBy?: Enumerable<StreamingSitesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamingSitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamingSites
    **/
    _count?: true | StreamingSitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamingSitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamingSitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamingSitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamingSitesMaxAggregateInputType
  }

  export type GetStreamingSitesAggregateType<T extends StreamingSitesAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamingSites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamingSites[P]>
      : GetScalarType<T[P], AggregateStreamingSites[P]>
  }




  export type StreamingSitesGroupByArgs = {
    where?: StreamingSitesWhereInput
    orderBy?: Enumerable<StreamingSitesOrderByWithAggregationInput>
    by: StreamingSitesScalarFieldEnum[]
    having?: StreamingSitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamingSitesCountAggregateInputType | true
    _avg?: StreamingSitesAvgAggregateInputType
    _sum?: StreamingSitesSumAggregateInputType
    _min?: StreamingSitesMinAggregateInputType
    _max?: StreamingSitesMaxAggregateInputType
  }


  export type StreamingSitesGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    publishedAt: Date | null
    url: string | null
    hits: string | null
    _count: StreamingSitesCountAggregateOutputType | null
    _avg: StreamingSitesAvgAggregateOutputType | null
    _sum: StreamingSitesSumAggregateOutputType | null
    _min: StreamingSitesMinAggregateOutputType | null
    _max: StreamingSitesMaxAggregateOutputType | null
  }

  type GetStreamingSitesGroupByPayload<T extends StreamingSitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StreamingSitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamingSitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamingSitesGroupByOutputType[P]>
            : GetScalarType<T[P], StreamingSitesGroupByOutputType[P]>
        }
      >
    >


  export type StreamingSitesSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    publishedAt?: boolean
    url?: boolean
    hits?: boolean
    podcasts?: boolean | StreamingSites$podcastsArgs
    _count?: boolean | StreamingSitesCountOutputTypeArgs
  }


  export type StreamingSitesInclude = {
    podcasts?: boolean | StreamingSites$podcastsArgs
    _count?: boolean | StreamingSitesCountOutputTypeArgs
  }

  export type StreamingSitesGetPayload<S extends boolean | null | undefined | StreamingSitesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StreamingSites :
    S extends undefined ? never :
    S extends { include: any } & (StreamingSitesArgs | StreamingSitesFindManyArgs)
    ? StreamingSites  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'podcasts' ? Array < PodcastGetPayload<S['include'][P]>>  :
        P extends '_count' ? StreamingSitesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StreamingSitesArgs | StreamingSitesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'podcasts' ? Array < PodcastGetPayload<S['select'][P]>>  :
        P extends '_count' ? StreamingSitesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof StreamingSites ? StreamingSites[P] : never
  } 
      : StreamingSites


  type StreamingSitesCountArgs = 
    Omit<StreamingSitesFindManyArgs, 'select' | 'include'> & {
      select?: StreamingSitesCountAggregateInputType | true
    }

  export interface StreamingSitesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one StreamingSites that matches the filter.
     * @param {StreamingSitesFindUniqueArgs} args - Arguments to find a StreamingSites
     * @example
     * // Get one StreamingSites
     * const streamingSites = await prisma.streamingSites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StreamingSitesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StreamingSitesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StreamingSites'> extends True ? Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>> : Prisma__StreamingSitesClient<StreamingSitesGetPayload<T> | null, null>

    /**
     * Find one StreamingSites that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StreamingSitesFindUniqueOrThrowArgs} args - Arguments to find a StreamingSites
     * @example
     * // Get one StreamingSites
     * const streamingSites = await prisma.streamingSites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StreamingSitesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StreamingSitesFindUniqueOrThrowArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Find the first StreamingSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesFindFirstArgs} args - Arguments to find a StreamingSites
     * @example
     * // Get one StreamingSites
     * const streamingSites = await prisma.streamingSites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StreamingSitesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StreamingSitesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StreamingSites'> extends True ? Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>> : Prisma__StreamingSitesClient<StreamingSitesGetPayload<T> | null, null>

    /**
     * Find the first StreamingSites that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesFindFirstOrThrowArgs} args - Arguments to find a StreamingSites
     * @example
     * // Get one StreamingSites
     * const streamingSites = await prisma.streamingSites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StreamingSitesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StreamingSitesFindFirstOrThrowArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Find zero or more StreamingSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamingSites
     * const streamingSites = await prisma.streamingSites.findMany()
     * 
     * // Get first 10 StreamingSites
     * const streamingSites = await prisma.streamingSites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamingSitesWithIdOnly = await prisma.streamingSites.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StreamingSitesFindManyArgs>(
      args?: SelectSubset<T, StreamingSitesFindManyArgs>
    ): Prisma.PrismaPromise<Array<StreamingSitesGetPayload<T>>>

    /**
     * Create a StreamingSites.
     * @param {StreamingSitesCreateArgs} args - Arguments to create a StreamingSites.
     * @example
     * // Create one StreamingSites
     * const StreamingSites = await prisma.streamingSites.create({
     *   data: {
     *     // ... data to create a StreamingSites
     *   }
     * })
     * 
    **/
    create<T extends StreamingSitesCreateArgs>(
      args: SelectSubset<T, StreamingSitesCreateArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Delete a StreamingSites.
     * @param {StreamingSitesDeleteArgs} args - Arguments to delete one StreamingSites.
     * @example
     * // Delete one StreamingSites
     * const StreamingSites = await prisma.streamingSites.delete({
     *   where: {
     *     // ... filter to delete one StreamingSites
     *   }
     * })
     * 
    **/
    delete<T extends StreamingSitesDeleteArgs>(
      args: SelectSubset<T, StreamingSitesDeleteArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Update one StreamingSites.
     * @param {StreamingSitesUpdateArgs} args - Arguments to update one StreamingSites.
     * @example
     * // Update one StreamingSites
     * const streamingSites = await prisma.streamingSites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StreamingSitesUpdateArgs>(
      args: SelectSubset<T, StreamingSitesUpdateArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Delete zero or more StreamingSites.
     * @param {StreamingSitesDeleteManyArgs} args - Arguments to filter StreamingSites to delete.
     * @example
     * // Delete a few StreamingSites
     * const { count } = await prisma.streamingSites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StreamingSitesDeleteManyArgs>(
      args?: SelectSubset<T, StreamingSitesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamingSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamingSites
     * const streamingSites = await prisma.streamingSites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StreamingSitesUpdateManyArgs>(
      args: SelectSubset<T, StreamingSitesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StreamingSites.
     * @param {StreamingSitesUpsertArgs} args - Arguments to update or create a StreamingSites.
     * @example
     * // Update or create a StreamingSites
     * const streamingSites = await prisma.streamingSites.upsert({
     *   create: {
     *     // ... data to create a StreamingSites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamingSites we want to update
     *   }
     * })
    **/
    upsert<T extends StreamingSitesUpsertArgs>(
      args: SelectSubset<T, StreamingSitesUpsertArgs>
    ): Prisma__StreamingSitesClient<StreamingSitesGetPayload<T>>

    /**
     * Count the number of StreamingSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesCountArgs} args - Arguments to filter StreamingSites to count.
     * @example
     * // Count the number of StreamingSites
     * const count = await prisma.streamingSites.count({
     *   where: {
     *     // ... the filter for the StreamingSites we want to count
     *   }
     * })
    **/
    count<T extends StreamingSitesCountArgs>(
      args?: Subset<T, StreamingSitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamingSitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamingSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamingSitesAggregateArgs>(args: Subset<T, StreamingSitesAggregateArgs>): Prisma.PrismaPromise<GetStreamingSitesAggregateType<T>>

    /**
     * Group by StreamingSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingSitesGroupByArgs} args - Group by arguments.
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
      T extends StreamingSitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamingSitesGroupByArgs['orderBy'] }
        : { orderBy?: StreamingSitesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StreamingSitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamingSitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamingSites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StreamingSitesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    podcasts<T extends StreamingSites$podcastsArgs= {}>(args?: Subset<T, StreamingSites$podcastsArgs>): Prisma.PrismaPromise<Array<PodcastGetPayload<T>>| Null>;

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



  // Custom InputTypes

  /**
   * StreamingSites base type for findUnique actions
   */
  export type StreamingSitesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter, which StreamingSites to fetch.
     */
    where: StreamingSitesWhereUniqueInput
  }

  /**
   * StreamingSites findUnique
   */
  export interface StreamingSitesFindUniqueArgs extends StreamingSitesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StreamingSites findUniqueOrThrow
   */
  export type StreamingSitesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter, which StreamingSites to fetch.
     */
    where: StreamingSitesWhereUniqueInput
  }


  /**
   * StreamingSites base type for findFirst actions
   */
  export type StreamingSitesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter, which StreamingSites to fetch.
     */
    where?: StreamingSitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingSites to fetch.
     */
    orderBy?: Enumerable<StreamingSitesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingSites.
     */
    cursor?: StreamingSitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingSites.
     */
    distinct?: Enumerable<StreamingSitesScalarFieldEnum>
  }

  /**
   * StreamingSites findFirst
   */
  export interface StreamingSitesFindFirstArgs extends StreamingSitesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StreamingSites findFirstOrThrow
   */
  export type StreamingSitesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter, which StreamingSites to fetch.
     */
    where?: StreamingSitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingSites to fetch.
     */
    orderBy?: Enumerable<StreamingSitesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingSites.
     */
    cursor?: StreamingSitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingSites.
     */
    distinct?: Enumerable<StreamingSitesScalarFieldEnum>
  }


  /**
   * StreamingSites findMany
   */
  export type StreamingSitesFindManyArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter, which StreamingSites to fetch.
     */
    where?: StreamingSitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingSites to fetch.
     */
    orderBy?: Enumerable<StreamingSitesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamingSites.
     */
    cursor?: StreamingSitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingSites.
     */
    skip?: number
    distinct?: Enumerable<StreamingSitesScalarFieldEnum>
  }


  /**
   * StreamingSites create
   */
  export type StreamingSitesCreateArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * The data needed to create a StreamingSites.
     */
    data: XOR<StreamingSitesCreateInput, StreamingSitesUncheckedCreateInput>
  }


  /**
   * StreamingSites update
   */
  export type StreamingSitesUpdateArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * The data needed to update a StreamingSites.
     */
    data: XOR<StreamingSitesUpdateInput, StreamingSitesUncheckedUpdateInput>
    /**
     * Choose, which StreamingSites to update.
     */
    where: StreamingSitesWhereUniqueInput
  }


  /**
   * StreamingSites updateMany
   */
  export type StreamingSitesUpdateManyArgs = {
    /**
     * The data used to update StreamingSites.
     */
    data: XOR<StreamingSitesUpdateManyMutationInput, StreamingSitesUncheckedUpdateManyInput>
    /**
     * Filter which StreamingSites to update
     */
    where?: StreamingSitesWhereInput
  }


  /**
   * StreamingSites upsert
   */
  export type StreamingSitesUpsertArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * The filter to search for the StreamingSites to update in case it exists.
     */
    where: StreamingSitesWhereUniqueInput
    /**
     * In case the StreamingSites found by the `where` argument doesn't exist, create a new StreamingSites with this data.
     */
    create: XOR<StreamingSitesCreateInput, StreamingSitesUncheckedCreateInput>
    /**
     * In case the StreamingSites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamingSitesUpdateInput, StreamingSitesUncheckedUpdateInput>
  }


  /**
   * StreamingSites delete
   */
  export type StreamingSitesDeleteArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
    /**
     * Filter which StreamingSites to delete.
     */
    where: StreamingSitesWhereUniqueInput
  }


  /**
   * StreamingSites deleteMany
   */
  export type StreamingSitesDeleteManyArgs = {
    /**
     * Filter which StreamingSites to delete
     */
    where?: StreamingSitesWhereInput
  }


  /**
   * StreamingSites.podcasts
   */
  export type StreamingSites$podcastsArgs = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PodcastInclude | null
    where?: PodcastWhereInput
    orderBy?: Enumerable<PodcastOrderByWithRelationInput>
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PodcastScalarFieldEnum>
  }


  /**
   * StreamingSites without action
   */
  export type StreamingSitesArgs = {
    /**
     * Select specific fields to fetch from the StreamingSites
     */
    select?: StreamingSitesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamingSitesInclude | null
  }



  /**
   * Model Review
   */


  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    podcastId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    podcastId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
    podcastId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
    podcastId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    review: number
    createdAt: number
    updatedAt: number
    podcastId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    podcastId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    podcastId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    podcastId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    podcastId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    podcastId?: true
    _all?: true
  }

  export type ReviewAggregateArgs = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs = {
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithAggregationInput>
    by: ReviewScalarFieldEnum[]
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }


  export type ReviewGroupByOutputType = {
    id: number
    review: string | null
    createdAt: Date
    updatedAt: Date
    podcastId: number | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect = {
    id?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podcastId?: boolean
    podcast?: boolean | PodcastArgs
  }


  export type ReviewInclude = {
    podcast?: boolean | PodcastArgs
  }

  export type ReviewGetPayload<S extends boolean | null | undefined | ReviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Review :
    S extends undefined ? never :
    S extends { include: any } & (ReviewArgs | ReviewFindManyArgs)
    ? Review  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'podcast' ? PodcastGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ReviewArgs | ReviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'podcast' ? PodcastGetPayload<S['select'][P]> | null :  P extends keyof Review ? Review[P] : never
  } 
      : Review


  type ReviewCountArgs = 
    Omit<ReviewFindManyArgs, 'select' | 'include'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find the first Review that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs>
    ): Prisma.PrismaPromise<Array<ReviewGetPayload<T>>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReviewClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    podcast<T extends PodcastArgs= {}>(args?: Subset<T, PodcastArgs>): Prisma__PodcastClient<PodcastGetPayload<T> | Null>;

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



  // Custom InputTypes

  /**
   * Review base type for findUnique actions
   */
  export type ReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUnique
   */
  export interface ReviewFindUniqueArgs extends ReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review base type for findFirst actions
   */
  export type ReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }

  /**
   * Review findFirst
   */
  export interface ReviewFindFirstArgs extends ReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review findMany
   */
  export type ReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }


  /**
   * Review without action
   */
  export type ReviewArgs = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const EpisodeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    publishedAt: 'publishedAt',
    url: 'url',
    podcastId: 'podcastId',
    episodeNumber: 'episodeNumber',
    bestEpisode: 'bestEpisode',
    featuredEpisode: 'featuredEpisode',
    mostStreamedEpisode: 'mostStreamedEpisode',
    episodeCoverImage: 'episodeCoverImage'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug',
    otherNames: 'otherNames'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PodcastScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description',
    url: 'url',
    slug: 'slug',
    cover: 'cover',
    host: 'host',
    podcastHostId: 'podcastHostId',
    backgroundCoverImage: 'backgroundCoverImage',
    tags: 'tags',
    genre: 'genre',
    rating: 'rating',
    lastUpdate: 'lastUpdate',
    isItExplicit: 'isItExplicit',
    isItBlocked: 'isItBlocked',
    hasNotBeenUpdating: 'hasNotBeenUpdating',
    outsideImageUrl: 'outsideImageUrl',
    language: 'language',
    amountOfEpisodes: 'amountOfEpisodes',
    popularity: 'popularity',
    priority: 'priority',
    podcastCreatedOn: 'podcastCreatedOn',
    frequencyOfUpdates: 'frequencyOfUpdates'
  };

  export type PodcastScalarFieldEnum = (typeof PodcastScalarFieldEnum)[keyof typeof PodcastScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    podcastId: 'podcastId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StreamingSitesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    publishedAt: 'publishedAt',
    url: 'url',
    hits: 'hits'
  };

  export type StreamingSitesScalarFieldEnum = (typeof StreamingSitesScalarFieldEnum)[keyof typeof StreamingSitesScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PodcastWhereInput = {
    AND?: Enumerable<PodcastWhereInput>
    OR?: Enumerable<PodcastWhereInput>
    NOT?: Enumerable<PodcastWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    description?: StringFilter | string
    url?: StringFilter | string
    slug?: StringFilter | string
    cover?: StringFilter | string
    host?: StringFilter | string
    podcastHostId?: StringNullableFilter | string | null
    backgroundCoverImage?: StringNullableFilter | string | null
    tags?: StringNullableFilter | string | null
    genre?: StringNullableFilter | string | null
    rating?: IntNullableFilter | number | null
    lastUpdate?: IntNullableFilter | number | null
    isItExplicit?: BoolNullableFilter | boolean | null
    isItBlocked?: BoolNullableFilter | boolean | null
    hasNotBeenUpdating?: BoolNullableFilter | boolean | null
    outsideImageUrl?: StringNullableFilter | string | null
    language?: StringNullableFilter | string | null
    amountOfEpisodes?: IntNullableFilter | number | null
    popularity?: IntNullableFilter | number | null
    priority?: IntNullableFilter | number | null
    podcastCreatedOn?: DateTimeNullableFilter | Date | string | null
    frequencyOfUpdates?: IntNullableFilter | number | null
    podcastHost?: XOR<PersonRelationFilter, PersonWhereInput> | null
    episodes?: EpisodeListRelationFilter
    similarPodcasts?: PodcastListRelationFilter
    similarPodcastsRelation?: PodcastListRelationFilter
    reviews?: ReviewListRelationFilter
    streamingAt?: StreamingSitesListRelationFilter
  }

  export type PodcastOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    cover?: SortOrder
    host?: SortOrder
    podcastHostId?: SortOrder
    backgroundCoverImage?: SortOrder
    tags?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    isItExplicit?: SortOrder
    isItBlocked?: SortOrder
    hasNotBeenUpdating?: SortOrder
    outsideImageUrl?: SortOrder
    language?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    podcastCreatedOn?: SortOrder
    frequencyOfUpdates?: SortOrder
    podcastHost?: PersonOrderByWithRelationInput
    episodes?: EpisodeOrderByRelationAggregateInput
    similarPodcasts?: PodcastOrderByRelationAggregateInput
    similarPodcastsRelation?: PodcastOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    streamingAt?: StreamingSitesOrderByRelationAggregateInput
  }

  export type PodcastWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type PodcastOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    cover?: SortOrder
    host?: SortOrder
    podcastHostId?: SortOrder
    backgroundCoverImage?: SortOrder
    tags?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    isItExplicit?: SortOrder
    isItBlocked?: SortOrder
    hasNotBeenUpdating?: SortOrder
    outsideImageUrl?: SortOrder
    language?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    podcastCreatedOn?: SortOrder
    frequencyOfUpdates?: SortOrder
    _count?: PodcastCountOrderByAggregateInput
    _avg?: PodcastAvgOrderByAggregateInput
    _max?: PodcastMaxOrderByAggregateInput
    _min?: PodcastMinOrderByAggregateInput
    _sum?: PodcastSumOrderByAggregateInput
  }

  export type PodcastScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PodcastScalarWhereWithAggregatesInput>
    OR?: Enumerable<PodcastScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PodcastScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    description?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    cover?: StringWithAggregatesFilter | string
    host?: StringWithAggregatesFilter | string
    podcastHostId?: StringNullableWithAggregatesFilter | string | null
    backgroundCoverImage?: StringNullableWithAggregatesFilter | string | null
    tags?: StringNullableWithAggregatesFilter | string | null
    genre?: StringNullableWithAggregatesFilter | string | null
    rating?: IntNullableWithAggregatesFilter | number | null
    lastUpdate?: IntNullableWithAggregatesFilter | number | null
    isItExplicit?: BoolNullableWithAggregatesFilter | boolean | null
    isItBlocked?: BoolNullableWithAggregatesFilter | boolean | null
    hasNotBeenUpdating?: BoolNullableWithAggregatesFilter | boolean | null
    outsideImageUrl?: StringNullableWithAggregatesFilter | string | null
    language?: StringNullableWithAggregatesFilter | string | null
    amountOfEpisodes?: IntNullableWithAggregatesFilter | number | null
    popularity?: IntNullableWithAggregatesFilter | number | null
    priority?: IntNullableWithAggregatesFilter | number | null
    podcastCreatedOn?: DateTimeNullableWithAggregatesFilter | Date | string | null
    frequencyOfUpdates?: IntNullableWithAggregatesFilter | number | null
  }

  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    slug?: StringNullableFilter | string | null
    otherNames?: StringNullableFilter | string | null
    podcast?: PodcastListRelationFilter
    guestAt?: EpisodeListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    otherNames?: SortOrder
    podcast?: PodcastOrderByRelationAggregateInput
    guestAt?: EpisodeOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    otherNames?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    slug?: StringNullableWithAggregatesFilter | string | null
    otherNames?: StringNullableWithAggregatesFilter | string | null
  }

  export type EpisodeWhereInput = {
    AND?: Enumerable<EpisodeWhereInput>
    OR?: Enumerable<EpisodeWhereInput>
    NOT?: Enumerable<EpisodeWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    url?: StringNullableFilter | string | null
    podcastId?: IntNullableFilter | number | null
    episodeNumber?: IntNullableFilter | number | null
    bestEpisode?: BoolNullableFilter | boolean | null
    featuredEpisode?: BoolNullableFilter | boolean | null
    mostStreamedEpisode?: BoolNullableFilter | boolean | null
    episodeCoverImage?: StringNullableFilter | string | null
    podcast?: XOR<PodcastRelationFilter, PodcastWhereInput> | null
    episodeGuests?: PersonListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
    bestEpisode?: SortOrder
    featuredEpisode?: SortOrder
    mostStreamedEpisode?: SortOrder
    episodeCoverImage?: SortOrder
    podcast?: PodcastOrderByWithRelationInput
    episodeGuests?: PersonOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = {
    id?: number
  }

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
    bestEpisode?: SortOrder
    featuredEpisode?: SortOrder
    mostStreamedEpisode?: SortOrder
    episodeCoverImage?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    url?: StringNullableWithAggregatesFilter | string | null
    podcastId?: IntNullableWithAggregatesFilter | number | null
    episodeNumber?: IntNullableWithAggregatesFilter | number | null
    bestEpisode?: BoolNullableWithAggregatesFilter | boolean | null
    featuredEpisode?: BoolNullableWithAggregatesFilter | boolean | null
    mostStreamedEpisode?: BoolNullableWithAggregatesFilter | boolean | null
    episodeCoverImage?: StringNullableWithAggregatesFilter | string | null
  }

  export type StreamingSitesWhereInput = {
    AND?: Enumerable<StreamingSitesWhereInput>
    OR?: Enumerable<StreamingSitesWhereInput>
    NOT?: Enumerable<StreamingSitesWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    url?: StringNullableFilter | string | null
    hits?: StringNullableFilter | string | null
    podcasts?: PodcastListRelationFilter
  }

  export type StreamingSitesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    hits?: SortOrder
    podcasts?: PodcastOrderByRelationAggregateInput
  }

  export type StreamingSitesWhereUniqueInput = {
    id?: number
  }

  export type StreamingSitesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    hits?: SortOrder
    _count?: StreamingSitesCountOrderByAggregateInput
    _avg?: StreamingSitesAvgOrderByAggregateInput
    _max?: StreamingSitesMaxOrderByAggregateInput
    _min?: StreamingSitesMinOrderByAggregateInput
    _sum?: StreamingSitesSumOrderByAggregateInput
  }

  export type StreamingSitesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StreamingSitesScalarWhereWithAggregatesInput>
    OR?: Enumerable<StreamingSitesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StreamingSitesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    url?: StringNullableWithAggregatesFilter | string | null
    hits?: StringNullableWithAggregatesFilter | string | null
  }

  export type ReviewWhereInput = {
    AND?: Enumerable<ReviewWhereInput>
    OR?: Enumerable<ReviewWhereInput>
    NOT?: Enumerable<ReviewWhereInput>
    id?: IntFilter | number
    review?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    podcastId?: IntNullableFilter | number | null
    podcast?: XOR<PodcastRelationFilter, PodcastWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcastId?: SortOrder
    podcast?: PodcastOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = {
    id?: number
  }

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcastId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    review?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    podcastId?: IntNullableWithAggregatesFilter | number | null
  }

  export type PodcastCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PodcastUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PersonCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    podcast?: PodcastCreateNestedManyWithoutPodcastHostInput
    guestAt?: EpisodeCreateNestedManyWithoutEpisodeGuestsInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    podcast?: PodcastUncheckedCreateNestedManyWithoutPodcastHostInput
    guestAt?: EpisodeUncheckedCreateNestedManyWithoutEpisodeGuestsInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUpdateManyWithoutPodcastHostNestedInput
    guestAt?: EpisodeUpdateManyWithoutEpisodeGuestsNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUncheckedUpdateManyWithoutPodcastHostNestedInput
    guestAt?: EpisodeUncheckedUpdateManyWithoutEpisodeGuestsNestedInput
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeCreateInput = {
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
    podcast?: PodcastCreateNestedOneWithoutEpisodesInput
    episodeGuests?: PersonCreateNestedManyWithoutGuestAtInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    podcastId?: number | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
    episodeGuests?: PersonUncheckedCreateNestedManyWithoutGuestAtInput
  }

  export type EpisodeUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUpdateOneWithoutEpisodesNestedInput
    episodeGuests?: PersonUpdateManyWithoutGuestAtNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeGuests?: PersonUncheckedUpdateManyWithoutGuestAtNestedInput
  }

  export type EpisodeUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamingSitesCreateInput = {
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    hits?: string | null
    podcasts?: PodcastCreateNestedManyWithoutStreamingAtInput
  }

  export type StreamingSitesUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    hits?: string | null
    podcasts?: PodcastUncheckedCreateNestedManyWithoutStreamingAtInput
  }

  export type StreamingSitesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
    podcasts?: PodcastUpdateManyWithoutStreamingAtNestedInput
  }

  export type StreamingSitesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
    podcasts?: PodcastUncheckedUpdateManyWithoutStreamingAtNestedInput
  }

  export type StreamingSitesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamingSitesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    review?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    podcast?: PodcastCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    review?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    podcastId?: number | null
  }

  export type ReviewUpdateInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcast?: PodcastUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUpdateManyMutationInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type PodcastListRelationFilter = {
    every?: PodcastWhereInput
    some?: PodcastWhereInput
    none?: PodcastWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type StreamingSitesListRelationFilter = {
    every?: StreamingSitesWhereInput
    some?: StreamingSitesWhereInput
    none?: StreamingSitesWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PodcastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamingSitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PodcastCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    cover?: SortOrder
    host?: SortOrder
    podcastHostId?: SortOrder
    backgroundCoverImage?: SortOrder
    tags?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    isItExplicit?: SortOrder
    isItBlocked?: SortOrder
    hasNotBeenUpdating?: SortOrder
    outsideImageUrl?: SortOrder
    language?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    podcastCreatedOn?: SortOrder
    frequencyOfUpdates?: SortOrder
  }

  export type PodcastAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    frequencyOfUpdates?: SortOrder
  }

  export type PodcastMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    cover?: SortOrder
    host?: SortOrder
    podcastHostId?: SortOrder
    backgroundCoverImage?: SortOrder
    tags?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    isItExplicit?: SortOrder
    isItBlocked?: SortOrder
    hasNotBeenUpdating?: SortOrder
    outsideImageUrl?: SortOrder
    language?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    podcastCreatedOn?: SortOrder
    frequencyOfUpdates?: SortOrder
  }

  export type PodcastMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    cover?: SortOrder
    host?: SortOrder
    podcastHostId?: SortOrder
    backgroundCoverImage?: SortOrder
    tags?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    isItExplicit?: SortOrder
    isItBlocked?: SortOrder
    hasNotBeenUpdating?: SortOrder
    outsideImageUrl?: SortOrder
    language?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    podcastCreatedOn?: SortOrder
    frequencyOfUpdates?: SortOrder
  }

  export type PodcastSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    lastUpdate?: SortOrder
    amountOfEpisodes?: SortOrder
    popularity?: SortOrder
    priority?: SortOrder
    frequencyOfUpdates?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    otherNames?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    otherNames?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    otherNames?: SortOrder
  }

  export type PodcastRelationFilter = {
    is?: PodcastWhereInput | null
    isNot?: PodcastWhereInput | null
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
    bestEpisode?: SortOrder
    featuredEpisode?: SortOrder
    mostStreamedEpisode?: SortOrder
    episodeCoverImage?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
    bestEpisode?: SortOrder
    featuredEpisode?: SortOrder
    mostStreamedEpisode?: SortOrder
    episodeCoverImage?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
    bestEpisode?: SortOrder
    featuredEpisode?: SortOrder
    mostStreamedEpisode?: SortOrder
    episodeCoverImage?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    podcastId?: SortOrder
    episodeNumber?: SortOrder
  }

  export type StreamingSitesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    hits?: SortOrder
  }

  export type StreamingSitesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StreamingSitesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    hits?: SortOrder
  }

  export type StreamingSitesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    hits?: SortOrder
  }

  export type StreamingSitesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcastId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    podcastId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcastId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcastId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    podcastId?: SortOrder
  }

  export type PersonCreateNestedOneWithoutPodcastInput = {
    create?: XOR<PersonCreateWithoutPodcastInput, PersonUncheckedCreateWithoutPodcastInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPodcastInput
    connect?: PersonWhereUniqueInput
  }

  export type EpisodeCreateNestedManyWithoutPodcastInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutPodcastInput>, Enumerable<EpisodeUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutPodcastInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsRelationInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsRelationInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type PodcastCreateNestedManyWithoutSimilarPodcastsInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type ReviewCreateNestedManyWithoutPodcastInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutPodcastInput>, Enumerable<ReviewUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutPodcastInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type StreamingSitesCreateNestedManyWithoutPodcastsInput = {
    create?: XOR<Enumerable<StreamingSitesCreateWithoutPodcastsInput>, Enumerable<StreamingSitesUncheckedCreateWithoutPodcastsInput>>
    connectOrCreate?: Enumerable<StreamingSitesCreateOrConnectWithoutPodcastsInput>
    connect?: Enumerable<StreamingSitesWhereUniqueInput>
  }

  export type EpisodeUncheckedCreateNestedManyWithoutPodcastInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutPodcastInput>, Enumerable<EpisodeUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutPodcastInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsRelationInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsRelationInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutPodcastInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutPodcastInput>, Enumerable<ReviewUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutPodcastInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput = {
    create?: XOR<Enumerable<StreamingSitesCreateWithoutPodcastsInput>, Enumerable<StreamingSitesUncheckedCreateWithoutPodcastsInput>>
    connectOrCreate?: Enumerable<StreamingSitesCreateOrConnectWithoutPodcastsInput>
    connect?: Enumerable<StreamingSitesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PersonUpdateOneWithoutPodcastNestedInput = {
    create?: XOR<PersonCreateWithoutPodcastInput, PersonUncheckedCreateWithoutPodcastInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPodcastInput
    upsert?: PersonUpsertWithoutPodcastInput
    disconnect?: boolean
    delete?: boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutPodcastInput, PersonUncheckedUpdateWithoutPodcastInput>
  }

  export type EpisodeUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutPodcastInput>, Enumerable<EpisodeUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutPodcastInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutPodcastInput>
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutPodcastInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutPodcastInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsRelationInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsRelationInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsRelationInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsRelationInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutSimilarPodcastsRelationInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type PodcastUpdateManyWithoutSimilarPodcastsNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutSimilarPodcastsInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type ReviewUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutPodcastInput>, Enumerable<ReviewUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutPodcastInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutPodcastInput>
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutPodcastInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutPodcastInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type StreamingSitesUpdateManyWithoutPodcastsNestedInput = {
    create?: XOR<Enumerable<StreamingSitesCreateWithoutPodcastsInput>, Enumerable<StreamingSitesUncheckedCreateWithoutPodcastsInput>>
    connectOrCreate?: Enumerable<StreamingSitesCreateOrConnectWithoutPodcastsInput>
    upsert?: Enumerable<StreamingSitesUpsertWithWhereUniqueWithoutPodcastsInput>
    set?: Enumerable<StreamingSitesWhereUniqueInput>
    disconnect?: Enumerable<StreamingSitesWhereUniqueInput>
    delete?: Enumerable<StreamingSitesWhereUniqueInput>
    connect?: Enumerable<StreamingSitesWhereUniqueInput>
    update?: Enumerable<StreamingSitesUpdateWithWhereUniqueWithoutPodcastsInput>
    updateMany?: Enumerable<StreamingSitesUpdateManyWithWhereWithoutPodcastsInput>
    deleteMany?: Enumerable<StreamingSitesScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeUncheckedUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutPodcastInput>, Enumerable<EpisodeUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutPodcastInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutPodcastInput>
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutPodcastInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutPodcastInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsRelationInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsRelationInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsRelationInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsRelationInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutSimilarPodcastsRelationInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutSimilarPodcastsInput>, Enumerable<PodcastUncheckedCreateWithoutSimilarPodcastsInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutSimilarPodcastsInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutSimilarPodcastsInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type ReviewUncheckedUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutPodcastInput>, Enumerable<ReviewUncheckedCreateWithoutPodcastInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutPodcastInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutPodcastInput>
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutPodcastInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutPodcastInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput = {
    create?: XOR<Enumerable<StreamingSitesCreateWithoutPodcastsInput>, Enumerable<StreamingSitesUncheckedCreateWithoutPodcastsInput>>
    connectOrCreate?: Enumerable<StreamingSitesCreateOrConnectWithoutPodcastsInput>
    upsert?: Enumerable<StreamingSitesUpsertWithWhereUniqueWithoutPodcastsInput>
    set?: Enumerable<StreamingSitesWhereUniqueInput>
    disconnect?: Enumerable<StreamingSitesWhereUniqueInput>
    delete?: Enumerable<StreamingSitesWhereUniqueInput>
    connect?: Enumerable<StreamingSitesWhereUniqueInput>
    update?: Enumerable<StreamingSitesUpdateWithWhereUniqueWithoutPodcastsInput>
    updateMany?: Enumerable<StreamingSitesUpdateManyWithWhereWithoutPodcastsInput>
    deleteMany?: Enumerable<StreamingSitesScalarWhereInput>
  }

  export type PodcastCreateNestedManyWithoutPodcastHostInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutPodcastHostInput>, Enumerable<PodcastUncheckedCreateWithoutPodcastHostInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutPodcastHostInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type EpisodeCreateNestedManyWithoutEpisodeGuestsInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutEpisodeGuestsInput>, Enumerable<EpisodeUncheckedCreateWithoutEpisodeGuestsInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutEpisodeGuestsInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type PodcastUncheckedCreateNestedManyWithoutPodcastHostInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutPodcastHostInput>, Enumerable<PodcastUncheckedCreateWithoutPodcastHostInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutPodcastHostInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type EpisodeUncheckedCreateNestedManyWithoutEpisodeGuestsInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutEpisodeGuestsInput>, Enumerable<EpisodeUncheckedCreateWithoutEpisodeGuestsInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutEpisodeGuestsInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type PodcastUpdateManyWithoutPodcastHostNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutPodcastHostInput>, Enumerable<PodcastUncheckedCreateWithoutPodcastHostInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutPodcastHostInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutPodcastHostInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutPodcastHostInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutPodcastHostInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type EpisodeUpdateManyWithoutEpisodeGuestsNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutEpisodeGuestsInput>, Enumerable<EpisodeUncheckedCreateWithoutEpisodeGuestsInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutEpisodeGuestsInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutEpisodeGuestsInput>
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutEpisodeGuestsInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutEpisodeGuestsInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type PodcastUncheckedUpdateManyWithoutPodcastHostNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutPodcastHostInput>, Enumerable<PodcastUncheckedCreateWithoutPodcastHostInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutPodcastHostInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutPodcastHostInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutPodcastHostInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutPodcastHostInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutEpisodeGuestsNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutEpisodeGuestsInput>, Enumerable<EpisodeUncheckedCreateWithoutEpisodeGuestsInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutEpisodeGuestsInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutEpisodeGuestsInput>
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutEpisodeGuestsInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutEpisodeGuestsInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type PodcastCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutEpisodesInput
    connect?: PodcastWhereUniqueInput
  }

  export type PersonCreateNestedManyWithoutGuestAtInput = {
    create?: XOR<Enumerable<PersonCreateWithoutGuestAtInput>, Enumerable<PersonUncheckedCreateWithoutGuestAtInput>>
    connectOrCreate?: Enumerable<PersonCreateOrConnectWithoutGuestAtInput>
    connect?: Enumerable<PersonWhereUniqueInput>
  }

  export type PersonUncheckedCreateNestedManyWithoutGuestAtInput = {
    create?: XOR<Enumerable<PersonCreateWithoutGuestAtInput>, Enumerable<PersonUncheckedCreateWithoutGuestAtInput>>
    connectOrCreate?: Enumerable<PersonCreateOrConnectWithoutGuestAtInput>
    connect?: Enumerable<PersonWhereUniqueInput>
  }

  export type PodcastUpdateOneWithoutEpisodesNestedInput = {
    create?: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutEpisodesInput
    upsert?: PodcastUpsertWithoutEpisodesInput
    disconnect?: boolean
    delete?: boolean
    connect?: PodcastWhereUniqueInput
    update?: XOR<PodcastUpdateWithoutEpisodesInput, PodcastUncheckedUpdateWithoutEpisodesInput>
  }

  export type PersonUpdateManyWithoutGuestAtNestedInput = {
    create?: XOR<Enumerable<PersonCreateWithoutGuestAtInput>, Enumerable<PersonUncheckedCreateWithoutGuestAtInput>>
    connectOrCreate?: Enumerable<PersonCreateOrConnectWithoutGuestAtInput>
    upsert?: Enumerable<PersonUpsertWithWhereUniqueWithoutGuestAtInput>
    set?: Enumerable<PersonWhereUniqueInput>
    disconnect?: Enumerable<PersonWhereUniqueInput>
    delete?: Enumerable<PersonWhereUniqueInput>
    connect?: Enumerable<PersonWhereUniqueInput>
    update?: Enumerable<PersonUpdateWithWhereUniqueWithoutGuestAtInput>
    updateMany?: Enumerable<PersonUpdateManyWithWhereWithoutGuestAtInput>
    deleteMany?: Enumerable<PersonScalarWhereInput>
  }

  export type PersonUncheckedUpdateManyWithoutGuestAtNestedInput = {
    create?: XOR<Enumerable<PersonCreateWithoutGuestAtInput>, Enumerable<PersonUncheckedCreateWithoutGuestAtInput>>
    connectOrCreate?: Enumerable<PersonCreateOrConnectWithoutGuestAtInput>
    upsert?: Enumerable<PersonUpsertWithWhereUniqueWithoutGuestAtInput>
    set?: Enumerable<PersonWhereUniqueInput>
    disconnect?: Enumerable<PersonWhereUniqueInput>
    delete?: Enumerable<PersonWhereUniqueInput>
    connect?: Enumerable<PersonWhereUniqueInput>
    update?: Enumerable<PersonUpdateWithWhereUniqueWithoutGuestAtInput>
    updateMany?: Enumerable<PersonUpdateManyWithWhereWithoutGuestAtInput>
    deleteMany?: Enumerable<PersonScalarWhereInput>
  }

  export type PodcastCreateNestedManyWithoutStreamingAtInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutStreamingAtInput>, Enumerable<PodcastUncheckedCreateWithoutStreamingAtInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutStreamingAtInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type PodcastUncheckedCreateNestedManyWithoutStreamingAtInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutStreamingAtInput>, Enumerable<PodcastUncheckedCreateWithoutStreamingAtInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutStreamingAtInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
  }

  export type PodcastUpdateManyWithoutStreamingAtNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutStreamingAtInput>, Enumerable<PodcastUncheckedCreateWithoutStreamingAtInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutStreamingAtInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutStreamingAtInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutStreamingAtInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutStreamingAtInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type PodcastUncheckedUpdateManyWithoutStreamingAtNestedInput = {
    create?: XOR<Enumerable<PodcastCreateWithoutStreamingAtInput>, Enumerable<PodcastUncheckedCreateWithoutStreamingAtInput>>
    connectOrCreate?: Enumerable<PodcastCreateOrConnectWithoutStreamingAtInput>
    upsert?: Enumerable<PodcastUpsertWithWhereUniqueWithoutStreamingAtInput>
    set?: Enumerable<PodcastWhereUniqueInput>
    disconnect?: Enumerable<PodcastWhereUniqueInput>
    delete?: Enumerable<PodcastWhereUniqueInput>
    connect?: Enumerable<PodcastWhereUniqueInput>
    update?: Enumerable<PodcastUpdateWithWhereUniqueWithoutStreamingAtInput>
    updateMany?: Enumerable<PodcastUpdateManyWithWhereWithoutStreamingAtInput>
    deleteMany?: Enumerable<PodcastScalarWhereInput>
  }

  export type PodcastCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PodcastCreateWithoutReviewsInput, PodcastUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutReviewsInput
    connect?: PodcastWhereUniqueInput
  }

  export type PodcastUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<PodcastCreateWithoutReviewsInput, PodcastUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutReviewsInput
    upsert?: PodcastUpsertWithoutReviewsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PodcastWhereUniqueInput
    update?: XOR<PodcastUpdateWithoutReviewsInput, PodcastUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type PersonCreateWithoutPodcastInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    guestAt?: EpisodeCreateNestedManyWithoutEpisodeGuestsInput
  }

  export type PersonUncheckedCreateWithoutPodcastInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    guestAt?: EpisodeUncheckedCreateNestedManyWithoutEpisodeGuestsInput
  }

  export type PersonCreateOrConnectWithoutPodcastInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPodcastInput, PersonUncheckedCreateWithoutPodcastInput>
  }

  export type EpisodeCreateWithoutPodcastInput = {
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
    episodeGuests?: PersonCreateNestedManyWithoutGuestAtInput
  }

  export type EpisodeUncheckedCreateWithoutPodcastInput = {
    id?: number
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
    episodeGuests?: PersonUncheckedCreateNestedManyWithoutGuestAtInput
  }

  export type EpisodeCreateOrConnectWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput>
  }

  export type PodcastCreateWithoutSimilarPodcastsRelationInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutSimilarPodcastsRelationInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutSimilarPodcastsRelationInput, PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>
  }

  export type PodcastCreateWithoutSimilarPodcastsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutSimilarPodcastsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutSimilarPodcastsInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutSimilarPodcastsInput, PodcastUncheckedCreateWithoutSimilarPodcastsInput>
  }

  export type ReviewCreateWithoutPodcastInput = {
    review?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutPodcastInput = {
    id?: number
    review?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPodcastInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPodcastInput, ReviewUncheckedCreateWithoutPodcastInput>
  }

  export type StreamingSitesCreateWithoutPodcastsInput = {
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    hits?: string | null
  }

  export type StreamingSitesUncheckedCreateWithoutPodcastsInput = {
    id?: number
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    hits?: string | null
  }

  export type StreamingSitesCreateOrConnectWithoutPodcastsInput = {
    where: StreamingSitesWhereUniqueInput
    create: XOR<StreamingSitesCreateWithoutPodcastsInput, StreamingSitesUncheckedCreateWithoutPodcastsInput>
  }

  export type PersonUpsertWithoutPodcastInput = {
    update: XOR<PersonUpdateWithoutPodcastInput, PersonUncheckedUpdateWithoutPodcastInput>
    create: XOR<PersonCreateWithoutPodcastInput, PersonUncheckedCreateWithoutPodcastInput>
  }

  export type PersonUpdateWithoutPodcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    guestAt?: EpisodeUpdateManyWithoutEpisodeGuestsNestedInput
  }

  export type PersonUncheckedUpdateWithoutPodcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    guestAt?: EpisodeUncheckedUpdateManyWithoutEpisodeGuestsNestedInput
  }

  export type EpisodeUpsertWithWhereUniqueWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutPodcastInput, EpisodeUncheckedUpdateWithoutPodcastInput>
    create: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutPodcastInput, EpisodeUncheckedUpdateWithoutPodcastInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutPodcastInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutEpisodesInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: Enumerable<EpisodeScalarWhereInput>
    OR?: Enumerable<EpisodeScalarWhereInput>
    NOT?: Enumerable<EpisodeScalarWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    url?: StringNullableFilter | string | null
    podcastId?: IntNullableFilter | number | null
    episodeNumber?: IntNullableFilter | number | null
    bestEpisode?: BoolNullableFilter | boolean | null
    featuredEpisode?: BoolNullableFilter | boolean | null
    mostStreamedEpisode?: BoolNullableFilter | boolean | null
    episodeCoverImage?: StringNullableFilter | string | null
  }

  export type PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsRelationInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutSimilarPodcastsRelationInput, PodcastUncheckedUpdateWithoutSimilarPodcastsRelationInput>
    create: XOR<PodcastCreateWithoutSimilarPodcastsRelationInput, PodcastUncheckedCreateWithoutSimilarPodcastsRelationInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsRelationInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutSimilarPodcastsRelationInput, PodcastUncheckedUpdateWithoutSimilarPodcastsRelationInput>
  }

  export type PodcastUpdateManyWithWhereWithoutSimilarPodcastsRelationInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutSimilarPodcastsInput>
  }

  export type PodcastScalarWhereInput = {
    AND?: Enumerable<PodcastScalarWhereInput>
    OR?: Enumerable<PodcastScalarWhereInput>
    NOT?: Enumerable<PodcastScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    description?: StringFilter | string
    url?: StringFilter | string
    slug?: StringFilter | string
    cover?: StringFilter | string
    host?: StringFilter | string
    podcastHostId?: StringNullableFilter | string | null
    backgroundCoverImage?: StringNullableFilter | string | null
    tags?: StringNullableFilter | string | null
    genre?: StringNullableFilter | string | null
    rating?: IntNullableFilter | number | null
    lastUpdate?: IntNullableFilter | number | null
    isItExplicit?: BoolNullableFilter | boolean | null
    isItBlocked?: BoolNullableFilter | boolean | null
    hasNotBeenUpdating?: BoolNullableFilter | boolean | null
    outsideImageUrl?: StringNullableFilter | string | null
    language?: StringNullableFilter | string | null
    amountOfEpisodes?: IntNullableFilter | number | null
    popularity?: IntNullableFilter | number | null
    priority?: IntNullableFilter | number | null
    podcastCreatedOn?: DateTimeNullableFilter | Date | string | null
    frequencyOfUpdates?: IntNullableFilter | number | null
  }

  export type PodcastUpsertWithWhereUniqueWithoutSimilarPodcastsInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutSimilarPodcastsInput, PodcastUncheckedUpdateWithoutSimilarPodcastsInput>
    create: XOR<PodcastCreateWithoutSimilarPodcastsInput, PodcastUncheckedCreateWithoutSimilarPodcastsInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutSimilarPodcastsInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutSimilarPodcastsInput, PodcastUncheckedUpdateWithoutSimilarPodcastsInput>
  }

  export type PodcastUpdateManyWithWhereWithoutSimilarPodcastsInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPodcastInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPodcastInput, ReviewUncheckedUpdateWithoutPodcastInput>
    create: XOR<ReviewCreateWithoutPodcastInput, ReviewUncheckedCreateWithoutPodcastInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPodcastInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPodcastInput, ReviewUncheckedUpdateWithoutPodcastInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPodcastInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: Enumerable<ReviewScalarWhereInput>
    OR?: Enumerable<ReviewScalarWhereInput>
    NOT?: Enumerable<ReviewScalarWhereInput>
    id?: IntFilter | number
    review?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    podcastId?: IntNullableFilter | number | null
  }

  export type StreamingSitesUpsertWithWhereUniqueWithoutPodcastsInput = {
    where: StreamingSitesWhereUniqueInput
    update: XOR<StreamingSitesUpdateWithoutPodcastsInput, StreamingSitesUncheckedUpdateWithoutPodcastsInput>
    create: XOR<StreamingSitesCreateWithoutPodcastsInput, StreamingSitesUncheckedCreateWithoutPodcastsInput>
  }

  export type StreamingSitesUpdateWithWhereUniqueWithoutPodcastsInput = {
    where: StreamingSitesWhereUniqueInput
    data: XOR<StreamingSitesUpdateWithoutPodcastsInput, StreamingSitesUncheckedUpdateWithoutPodcastsInput>
  }

  export type StreamingSitesUpdateManyWithWhereWithoutPodcastsInput = {
    where: StreamingSitesScalarWhereInput
    data: XOR<StreamingSitesUpdateManyMutationInput, StreamingSitesUncheckedUpdateManyWithoutStreamingAtInput>
  }

  export type StreamingSitesScalarWhereInput = {
    AND?: Enumerable<StreamingSitesScalarWhereInput>
    OR?: Enumerable<StreamingSitesScalarWhereInput>
    NOT?: Enumerable<StreamingSitesScalarWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    url?: StringNullableFilter | string | null
    hits?: StringNullableFilter | string | null
  }

  export type PodcastCreateWithoutPodcastHostInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutPodcastHostInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutPodcastHostInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutPodcastHostInput, PodcastUncheckedCreateWithoutPodcastHostInput>
  }

  export type EpisodeCreateWithoutEpisodeGuestsInput = {
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
    podcast?: PodcastCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutEpisodeGuestsInput = {
    id?: number
    title?: string | null
    description?: string | null
    publishedAt?: Date | string | null
    url?: string | null
    podcastId?: number | null
    episodeNumber?: number | null
    bestEpisode?: boolean | null
    featuredEpisode?: boolean | null
    mostStreamedEpisode?: boolean | null
    episodeCoverImage?: string | null
  }

  export type EpisodeCreateOrConnectWithoutEpisodeGuestsInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutEpisodeGuestsInput, EpisodeUncheckedCreateWithoutEpisodeGuestsInput>
  }

  export type PodcastUpsertWithWhereUniqueWithoutPodcastHostInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutPodcastHostInput, PodcastUncheckedUpdateWithoutPodcastHostInput>
    create: XOR<PodcastCreateWithoutPodcastHostInput, PodcastUncheckedCreateWithoutPodcastHostInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutPodcastHostInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutPodcastHostInput, PodcastUncheckedUpdateWithoutPodcastHostInput>
  }

  export type PodcastUpdateManyWithWhereWithoutPodcastHostInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutPodcastInput>
  }

  export type EpisodeUpsertWithWhereUniqueWithoutEpisodeGuestsInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutEpisodeGuestsInput, EpisodeUncheckedUpdateWithoutEpisodeGuestsInput>
    create: XOR<EpisodeCreateWithoutEpisodeGuestsInput, EpisodeUncheckedCreateWithoutEpisodeGuestsInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutEpisodeGuestsInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutEpisodeGuestsInput, EpisodeUncheckedUpdateWithoutEpisodeGuestsInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutEpisodeGuestsInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutGuestAtInput>
  }

  export type PodcastCreateWithoutEpisodesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutEpisodesInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
  }

  export type PersonCreateWithoutGuestAtInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    podcast?: PodcastCreateNestedManyWithoutPodcastHostInput
  }

  export type PersonUncheckedCreateWithoutGuestAtInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slug?: string | null
    otherNames?: string | null
    podcast?: PodcastUncheckedCreateNestedManyWithoutPodcastHostInput
  }

  export type PersonCreateOrConnectWithoutGuestAtInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutGuestAtInput, PersonUncheckedCreateWithoutGuestAtInput>
  }

  export type PodcastUpsertWithoutEpisodesInput = {
    update: XOR<PodcastUpdateWithoutEpisodesInput, PodcastUncheckedUpdateWithoutEpisodesInput>
    create: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
  }

  export type PodcastUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PersonUpsertWithWhereUniqueWithoutGuestAtInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutGuestAtInput, PersonUncheckedUpdateWithoutGuestAtInput>
    create: XOR<PersonCreateWithoutGuestAtInput, PersonUncheckedCreateWithoutGuestAtInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutGuestAtInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutGuestAtInput, PersonUncheckedUpdateWithoutGuestAtInput>
  }

  export type PersonUpdateManyWithWhereWithoutGuestAtInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutEpisodeGuestsInput>
  }

  export type PersonScalarWhereInput = {
    AND?: Enumerable<PersonScalarWhereInput>
    OR?: Enumerable<PersonScalarWhereInput>
    NOT?: Enumerable<PersonScalarWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    slug?: StringNullableFilter | string | null
    otherNames?: StringNullableFilter | string | null
  }

  export type PodcastCreateWithoutStreamingAtInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewCreateNestedManyWithoutPodcastInput
  }

  export type PodcastUncheckedCreateWithoutStreamingAtInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPodcastInput
  }

  export type PodcastCreateOrConnectWithoutStreamingAtInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutStreamingAtInput, PodcastUncheckedCreateWithoutStreamingAtInput>
  }

  export type PodcastUpsertWithWhereUniqueWithoutStreamingAtInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutStreamingAtInput, PodcastUncheckedUpdateWithoutStreamingAtInput>
    create: XOR<PodcastCreateWithoutStreamingAtInput, PodcastUncheckedCreateWithoutStreamingAtInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutStreamingAtInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutStreamingAtInput, PodcastUncheckedUpdateWithoutStreamingAtInput>
  }

  export type PodcastUpdateManyWithWhereWithoutStreamingAtInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutPodcastsInput>
  }

  export type PodcastCreateWithoutReviewsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    podcastHost?: PersonCreateNestedOneWithoutPodcastInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastCreateNestedManyWithoutSimilarPodcastsInput
    streamingAt?: StreamingSitesCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    url: string
    slug: string
    cover?: string
    host?: string
    podcastHostId?: string | null
    backgroundCoverImage?: string | null
    tags?: string | null
    genre?: string | null
    rating?: number | null
    lastUpdate?: number | null
    isItExplicit?: boolean | null
    isItBlocked?: boolean | null
    hasNotBeenUpdating?: boolean | null
    outsideImageUrl?: string | null
    language?: string | null
    amountOfEpisodes?: number | null
    popularity?: number | null
    priority?: number | null
    podcastCreatedOn?: Date | string | null
    frequencyOfUpdates?: number | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
    similarPodcasts?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsRelationInput
    similarPodcastsRelation?: PodcastUncheckedCreateNestedManyWithoutSimilarPodcastsInput
    streamingAt?: StreamingSitesUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutReviewsInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutReviewsInput, PodcastUncheckedCreateWithoutReviewsInput>
  }

  export type PodcastUpsertWithoutReviewsInput = {
    update: XOR<PodcastUpdateWithoutReviewsInput, PodcastUncheckedUpdateWithoutReviewsInput>
    create: XOR<PodcastCreateWithoutReviewsInput, PodcastUncheckedCreateWithoutReviewsInput>
  }

  export type PodcastUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type EpisodeUpdateWithoutPodcastInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeGuests?: PersonUpdateManyWithoutGuestAtNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutPodcastInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    episodeGuests?: PersonUncheckedUpdateManyWithoutGuestAtNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastUpdateWithoutSimilarPodcastsRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutSimilarPodcastsRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutSimilarPodcastsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PodcastUpdateWithoutSimilarPodcastsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutSimilarPodcastsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUpdateWithoutPodcastInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutPodcastInput = {
    id?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingSitesUpdateWithoutPodcastsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamingSitesUncheckedUpdateWithoutPodcastsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamingSitesUncheckedUpdateManyWithoutStreamingAtInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hits?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastUpdateWithoutPodcastHostInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutPodcastHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
    streamingAt?: StreamingSitesUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutPodcastInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUpdateWithoutEpisodeGuestsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUpdateOneWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutEpisodeGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeUncheckedUpdateManyWithoutGuestAtInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: NullableIntFieldUpdateOperationsInput | number | null
    episodeNumber?: NullableIntFieldUpdateOperationsInput | number | null
    bestEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featuredEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mostStreamedEpisode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    episodeCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUpdateWithoutGuestAtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUpdateManyWithoutPodcastHostNestedInput
  }

  export type PersonUncheckedUpdateWithoutGuestAtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUncheckedUpdateManyWithoutPodcastHostNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutEpisodeGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastUpdateWithoutStreamingAtInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    podcastHost?: PersonUpdateOneWithoutPodcastNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateWithoutStreamingAtInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
    similarPodcasts?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsRelationNestedInput
    similarPodcastsRelation?: PodcastUncheckedUpdateManyWithoutSimilarPodcastsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutPodcastsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    podcastHostId?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundCoverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    isItExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isItBlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasNotBeenUpdating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    outsideImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    podcastCreatedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequencyOfUpdates?: NullableIntFieldUpdateOperationsInput | number | null
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