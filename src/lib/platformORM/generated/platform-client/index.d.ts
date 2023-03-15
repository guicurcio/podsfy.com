
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model migrations
 * 
 */
export type migrations = {
  id: number
  name: string
  hash: string
  executed_at: Date | null
}

/**
 * Model provider_requests
 * 
 */
export type provider_requests = {
  id: string
  options: Prisma.JsonValue | null
}

/**
 * Model providers
 * 
 */
export type providers = {
  id: string
}

/**
 * Model refresh_tokens
 * 
 */
export type refresh_tokens = {
  refresh_token: string
  created_at: Date
  expires_at: Date
  user_id: string
  refresh_token_hash: string | null
}

/**
 * Model roles
 * 
 */
export type roles = {
  role: string
}

/**
 * Model user_providers
 * 
 */
export type user_providers = {
  id: string
  created_at: Date
  updated_at: Date
  user_id: string
  access_token: string
  refresh_token: string | null
  provider_id: string
  provider_user_id: string
}

/**
 * Model user_roles
 * 
 */
export type user_roles = {
  id: string
  created_at: Date
  user_id: string
  role: string
}

/**
 * Model user_security_keys
 * 
 */
export type user_security_keys = {
  id: string
  user_id: string
  credential_id: string
  credential_public_key: Buffer | null
  counter: bigint
  transports: string
  nickname: string | null
}

/**
 * Model users
 * 
 */
export type users = {
  id: string
  created_at: Date
  updated_at: Date
  last_seen: Date | null
  disabled: boolean
  display_name: string
  avatar_url: string
  locale: string
  email: string | null
  phone_number: string | null
  password_hash: string | null
  email_verified: boolean
  phone_number_verified: boolean
  new_email: string | null
  otp_method_last_used: string | null
  otp_hash: string | null
  otp_hash_expires_at: Date
  default_role: string
  is_anonymous: boolean
  totp_secret: string | null
  active_mfa_type: string | null
  ticket: string | null
  ticket_expires_at: Date
  metadata: Prisma.JsonValue | null
  webauthn_current_challenge: string | null
}

/**
 * Model favorites
 * 
 */
export type favorites = {
  id: string
  profile_id: string
  podcast_id: string
}

/**
 * Model profile
 * 
 */
export type profile = {
  id: string
  profile_num: number
  created_at: Date
  updated_at: Date
  username: string
  creator_user_id: string
  name: string | null
  bio: string | null
  avatar: string | null
  location: string | null
  website: string | null
  karma: string | null
}

/**
 * Model profiles
 * 
 */
export type profiles = {
  id: string
  profile_num: number
  created_at: Date
  updated_at: Date
  username: string
  creator_user_id: string
  name: string | null
  bio: string | null
  avatar: string | null
  location: string | null
  website: string | null
  karma: string | null
}

/**
 * Model ratings
 * 
 */
export type ratings = {
  id: string
  profile_id: string
  podcast_id: string
  rating: number
}

/**
 * Model watchlist
 * 
 */
export type watchlist = {
  id: string
  profile_id: string
  podcast_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Migrations
 * const migrations = await prisma.migrations.findMany()
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
   * // Fetch zero or more Migrations
   * const migrations = await prisma.migrations.findMany()
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
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<GlobalReject>;

  /**
   * `prisma.provider_requests`: Exposes CRUD operations for the **provider_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provider_requests
    * const provider_requests = await prisma.provider_requests.findMany()
    * ```
    */
  get provider_requests(): Prisma.provider_requestsDelegate<GlobalReject>;

  /**
   * `prisma.providers`: Exposes CRUD operations for the **providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.providers.findMany()
    * ```
    */
  get providers(): Prisma.providersDelegate<GlobalReject>;

  /**
   * `prisma.refresh_tokens`: Exposes CRUD operations for the **refresh_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_tokens.findMany()
    * ```
    */
  get refresh_tokens(): Prisma.refresh_tokensDelegate<GlobalReject>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<GlobalReject>;

  /**
   * `prisma.user_providers`: Exposes CRUD operations for the **user_providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_providers
    * const user_providers = await prisma.user_providers.findMany()
    * ```
    */
  get user_providers(): Prisma.user_providersDelegate<GlobalReject>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_roles.findMany()
    * ```
    */
  get user_roles(): Prisma.user_rolesDelegate<GlobalReject>;

  /**
   * `prisma.user_security_keys`: Exposes CRUD operations for the **user_security_keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_security_keys
    * const user_security_keys = await prisma.user_security_keys.findMany()
    * ```
    */
  get user_security_keys(): Prisma.user_security_keysDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.favoritesDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<GlobalReject>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<GlobalReject>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.ratingsDelegate<GlobalReject>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.watchlistDelegate<GlobalReject>;
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
    migrations: 'migrations',
    provider_requests: 'provider_requests',
    providers: 'providers',
    refresh_tokens: 'refresh_tokens',
    roles: 'roles',
    user_providers: 'user_providers',
    user_roles: 'user_roles',
    user_security_keys: 'user_security_keys',
    users: 'users',
    favorites: 'favorites',
    profile: 'profile',
    profiles: 'profiles',
    ratings: 'ratings',
    watchlist: 'watchlist'
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
   * Count Type ProvidersCountOutputType
   */


  export type ProvidersCountOutputType = {
    user_providers: number
  }

  export type ProvidersCountOutputTypeSelect = {
    user_providers?: boolean
  }

  export type ProvidersCountOutputTypeGetPayload<S extends boolean | null | undefined | ProvidersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProvidersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProvidersCountOutputTypeArgs)
    ? ProvidersCountOutputType 
    : S extends { select: any } & (ProvidersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProvidersCountOutputType ? ProvidersCountOutputType[P] : never
  } 
      : ProvidersCountOutputType




  // Custom InputTypes

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProvidersCountOutputType
     */
    select?: ProvidersCountOutputTypeSelect | null
  }



  /**
   * Count Type RolesCountOutputType
   */


  export type RolesCountOutputType = {
    user_roles: number
    users: number
  }

  export type RolesCountOutputTypeSelect = {
    user_roles?: boolean
    users?: boolean
  }

  export type RolesCountOutputTypeGetPayload<S extends boolean | null | undefined | RolesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RolesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RolesCountOutputTypeArgs)
    ? RolesCountOutputType 
    : S extends { select: any } & (RolesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RolesCountOutputType ? RolesCountOutputType[P] : never
  } 
      : RolesCountOutputType




  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    refresh_tokens: number
    user_providers: number
    user_roles: number
    user_security_keys: number
  }

  export type UsersCountOutputTypeSelect = {
    refresh_tokens?: boolean
    user_providers?: boolean
    user_roles?: boolean
    user_security_keys?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Count Type ProfilesCountOutputType
   */


  export type ProfilesCountOutputType = {
    favorites: number
    watchlist: number
  }

  export type ProfilesCountOutputTypeSelect = {
    favorites?: boolean
    watchlist?: boolean
  }

  export type ProfilesCountOutputTypeGetPayload<S extends boolean | null | undefined | ProfilesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProfilesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProfilesCountOutputTypeArgs)
    ? ProfilesCountOutputType 
    : S extends { select: any } & (ProfilesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProfilesCountOutputType ? ProfilesCountOutputType[P] : never
  } 
      : ProfilesCountOutputType




  // Custom InputTypes

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model migrations
   */


  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    hash: string | null
    executed_at: Date | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    hash: string | null
    executed_at: Date | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    name: number
    hash: number
    executed_at: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    name?: true
    hash?: true
    executed_at?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    name?: true
    hash?: true
    executed_at?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    name?: true
    hash?: true
    executed_at?: true
    _all?: true
  }

  export type MigrationsAggregateArgs = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type MigrationsGroupByArgs = {
    where?: migrationsWhereInput
    orderBy?: Enumerable<migrationsOrderByWithAggregationInput>
    by: MigrationsScalarFieldEnum[]
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }


  export type MigrationsGroupByOutputType = {
    id: number
    name: string
    hash: string
    executed_at: Date | null
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends MigrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect = {
    id?: boolean
    name?: boolean
    hash?: boolean
    executed_at?: boolean
  }


  export type migrationsGetPayload<S extends boolean | null | undefined | migrationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? migrations :
    S extends undefined ? never :
    S extends { include: any } & (migrationsArgs | migrationsFindManyArgs)
    ? migrations 
    : S extends { select: any } & (migrationsArgs | migrationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof migrations ? migrations[P] : never
  } 
      : migrations


  type migrationsCountArgs = 
    Omit<migrationsFindManyArgs, 'select' | 'include'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'migrations'> extends True ? Prisma__migrationsClient<migrationsGetPayload<T>> : Prisma__migrationsClient<migrationsGetPayload<T> | null, null>

    /**
     * Find one Migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, migrationsFindUniqueOrThrowArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'migrations'> extends True ? Prisma__migrationsClient<migrationsGetPayload<T>> : Prisma__migrationsClient<migrationsGetPayload<T> | null, null>

    /**
     * Find the first Migrations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, migrationsFindFirstOrThrowArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends migrationsFindManyArgs>(
      args?: SelectSubset<T, migrationsFindManyArgs>
    ): Prisma.PrismaPromise<Array<migrationsGetPayload<T>>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
    **/
    create<T extends migrationsCreateArgs>(
      args: SelectSubset<T, migrationsCreateArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends migrationsCreateManyArgs>(
      args?: SelectSubset<T, migrationsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
    **/
    delete<T extends migrationsDeleteArgs>(
      args: SelectSubset<T, migrationsDeleteArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends migrationsUpdateArgs>(
      args: SelectSubset<T, migrationsUpdateArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends migrationsDeleteManyArgs>(
      args?: SelectSubset<T, migrationsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends migrationsUpdateManyArgs>(
      args: SelectSubset<T, migrationsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
    **/
    upsert<T extends migrationsUpsertArgs>(
      args: SelectSubset<T, migrationsUpsertArgs>
    ): Prisma__migrationsClient<migrationsGetPayload<T>>

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsGroupByArgs} args - Group by arguments.
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
      T extends MigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationsGroupByArgs['orderBy'] }
        : { orderBy?: MigrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__migrationsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * migrations base type for findUnique actions
   */
  export type migrationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUnique
   */
  export interface migrationsFindUniqueArgs extends migrationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations base type for findFirst actions
   */
  export type migrationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }

  /**
   * migrations findFirst
   */
  export interface migrationsFindFirstArgs extends migrationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations create
   */
  export type migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }


  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs = {
    /**
     * The data used to create many migrations.
     */
    data: Enumerable<migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * migrations update
   */
  export type migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }


  /**
   * migrations delete
   */
  export type migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations without action
   */
  export type migrationsArgs = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect | null
  }



  /**
   * Model provider_requests
   */


  export type AggregateProvider_requests = {
    _count: Provider_requestsCountAggregateOutputType | null
    _min: Provider_requestsMinAggregateOutputType | null
    _max: Provider_requestsMaxAggregateOutputType | null
  }

  export type Provider_requestsMinAggregateOutputType = {
    id: string | null
  }

  export type Provider_requestsMaxAggregateOutputType = {
    id: string | null
  }

  export type Provider_requestsCountAggregateOutputType = {
    id: number
    options: number
    _all: number
  }


  export type Provider_requestsMinAggregateInputType = {
    id?: true
  }

  export type Provider_requestsMaxAggregateInputType = {
    id?: true
  }

  export type Provider_requestsCountAggregateInputType = {
    id?: true
    options?: true
    _all?: true
  }

  export type Provider_requestsAggregateArgs = {
    /**
     * Filter which provider_requests to aggregate.
     */
    where?: provider_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provider_requests to fetch.
     */
    orderBy?: Enumerable<provider_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provider_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provider_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provider_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provider_requests
    **/
    _count?: true | Provider_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Provider_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Provider_requestsMaxAggregateInputType
  }

  export type GetProvider_requestsAggregateType<T extends Provider_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider_requests[P]>
      : GetScalarType<T[P], AggregateProvider_requests[P]>
  }




  export type Provider_requestsGroupByArgs = {
    where?: provider_requestsWhereInput
    orderBy?: Enumerable<provider_requestsOrderByWithAggregationInput>
    by: Provider_requestsScalarFieldEnum[]
    having?: provider_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Provider_requestsCountAggregateInputType | true
    _min?: Provider_requestsMinAggregateInputType
    _max?: Provider_requestsMaxAggregateInputType
  }


  export type Provider_requestsGroupByOutputType = {
    id: string
    options: JsonValue | null
    _count: Provider_requestsCountAggregateOutputType | null
    _min: Provider_requestsMinAggregateOutputType | null
    _max: Provider_requestsMaxAggregateOutputType | null
  }

  type GetProvider_requestsGroupByPayload<T extends Provider_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Provider_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Provider_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Provider_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Provider_requestsGroupByOutputType[P]>
        }
      >
    >


  export type provider_requestsSelect = {
    id?: boolean
    options?: boolean
  }


  export type provider_requestsGetPayload<S extends boolean | null | undefined | provider_requestsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? provider_requests :
    S extends undefined ? never :
    S extends { include: any } & (provider_requestsArgs | provider_requestsFindManyArgs)
    ? provider_requests 
    : S extends { select: any } & (provider_requestsArgs | provider_requestsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof provider_requests ? provider_requests[P] : never
  } 
      : provider_requests


  type provider_requestsCountArgs = 
    Omit<provider_requestsFindManyArgs, 'select' | 'include'> & {
      select?: Provider_requestsCountAggregateInputType | true
    }

  export interface provider_requestsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Provider_requests that matches the filter.
     * @param {provider_requestsFindUniqueArgs} args - Arguments to find a Provider_requests
     * @example
     * // Get one Provider_requests
     * const provider_requests = await prisma.provider_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends provider_requestsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, provider_requestsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'provider_requests'> extends True ? Prisma__provider_requestsClient<provider_requestsGetPayload<T>> : Prisma__provider_requestsClient<provider_requestsGetPayload<T> | null, null>

    /**
     * Find one Provider_requests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {provider_requestsFindUniqueOrThrowArgs} args - Arguments to find a Provider_requests
     * @example
     * // Get one Provider_requests
     * const provider_requests = await prisma.provider_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends provider_requestsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, provider_requestsFindUniqueOrThrowArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Find the first Provider_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provider_requestsFindFirstArgs} args - Arguments to find a Provider_requests
     * @example
     * // Get one Provider_requests
     * const provider_requests = await prisma.provider_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends provider_requestsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, provider_requestsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'provider_requests'> extends True ? Prisma__provider_requestsClient<provider_requestsGetPayload<T>> : Prisma__provider_requestsClient<provider_requestsGetPayload<T> | null, null>

    /**
     * Find the first Provider_requests that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provider_requestsFindFirstOrThrowArgs} args - Arguments to find a Provider_requests
     * @example
     * // Get one Provider_requests
     * const provider_requests = await prisma.provider_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends provider_requestsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, provider_requestsFindFirstOrThrowArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Find zero or more Provider_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provider_requestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provider_requests
     * const provider_requests = await prisma.provider_requests.findMany()
     * 
     * // Get first 10 Provider_requests
     * const provider_requests = await prisma.provider_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provider_requestsWithIdOnly = await prisma.provider_requests.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends provider_requestsFindManyArgs>(
      args?: SelectSubset<T, provider_requestsFindManyArgs>
    ): Prisma.PrismaPromise<Array<provider_requestsGetPayload<T>>>

    /**
     * Create a Provider_requests.
     * @param {provider_requestsCreateArgs} args - Arguments to create a Provider_requests.
     * @example
     * // Create one Provider_requests
     * const Provider_requests = await prisma.provider_requests.create({
     *   data: {
     *     // ... data to create a Provider_requests
     *   }
     * })
     * 
    **/
    create<T extends provider_requestsCreateArgs>(
      args: SelectSubset<T, provider_requestsCreateArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Create many Provider_requests.
     *     @param {provider_requestsCreateManyArgs} args - Arguments to create many Provider_requests.
     *     @example
     *     // Create many Provider_requests
     *     const provider_requests = await prisma.provider_requests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends provider_requestsCreateManyArgs>(
      args?: SelectSubset<T, provider_requestsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Provider_requests.
     * @param {provider_requestsDeleteArgs} args - Arguments to delete one Provider_requests.
     * @example
     * // Delete one Provider_requests
     * const Provider_requests = await prisma.provider_requests.delete({
     *   where: {
     *     // ... filter to delete one Provider_requests
     *   }
     * })
     * 
    **/
    delete<T extends provider_requestsDeleteArgs>(
      args: SelectSubset<T, provider_requestsDeleteArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Update one Provider_requests.
     * @param {provider_requestsUpdateArgs} args - Arguments to update one Provider_requests.
     * @example
     * // Update one Provider_requests
     * const provider_requests = await prisma.provider_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends provider_requestsUpdateArgs>(
      args: SelectSubset<T, provider_requestsUpdateArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Delete zero or more Provider_requests.
     * @param {provider_requestsDeleteManyArgs} args - Arguments to filter Provider_requests to delete.
     * @example
     * // Delete a few Provider_requests
     * const { count } = await prisma.provider_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends provider_requestsDeleteManyArgs>(
      args?: SelectSubset<T, provider_requestsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provider_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provider_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provider_requests
     * const provider_requests = await prisma.provider_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends provider_requestsUpdateManyArgs>(
      args: SelectSubset<T, provider_requestsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Provider_requests.
     * @param {provider_requestsUpsertArgs} args - Arguments to update or create a Provider_requests.
     * @example
     * // Update or create a Provider_requests
     * const provider_requests = await prisma.provider_requests.upsert({
     *   create: {
     *     // ... data to create a Provider_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider_requests we want to update
     *   }
     * })
    **/
    upsert<T extends provider_requestsUpsertArgs>(
      args: SelectSubset<T, provider_requestsUpsertArgs>
    ): Prisma__provider_requestsClient<provider_requestsGetPayload<T>>

    /**
     * Count the number of Provider_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provider_requestsCountArgs} args - Arguments to filter Provider_requests to count.
     * @example
     * // Count the number of Provider_requests
     * const count = await prisma.provider_requests.count({
     *   where: {
     *     // ... the filter for the Provider_requests we want to count
     *   }
     * })
    **/
    count<T extends provider_requestsCountArgs>(
      args?: Subset<T, provider_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Provider_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Provider_requestsAggregateArgs>(args: Subset<T, Provider_requestsAggregateArgs>): Prisma.PrismaPromise<GetProvider_requestsAggregateType<T>>

    /**
     * Group by Provider_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Provider_requestsGroupByArgs} args - Group by arguments.
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
      T extends Provider_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Provider_requestsGroupByArgs['orderBy'] }
        : { orderBy?: Provider_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Provider_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvider_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for provider_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__provider_requestsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * provider_requests base type for findUnique actions
   */
  export type provider_requestsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter, which provider_requests to fetch.
     */
    where: provider_requestsWhereUniqueInput
  }

  /**
   * provider_requests findUnique
   */
  export interface provider_requestsFindUniqueArgs extends provider_requestsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * provider_requests findUniqueOrThrow
   */
  export type provider_requestsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter, which provider_requests to fetch.
     */
    where: provider_requestsWhereUniqueInput
  }


  /**
   * provider_requests base type for findFirst actions
   */
  export type provider_requestsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter, which provider_requests to fetch.
     */
    where?: provider_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provider_requests to fetch.
     */
    orderBy?: Enumerable<provider_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provider_requests.
     */
    cursor?: provider_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provider_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provider_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provider_requests.
     */
    distinct?: Enumerable<Provider_requestsScalarFieldEnum>
  }

  /**
   * provider_requests findFirst
   */
  export interface provider_requestsFindFirstArgs extends provider_requestsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * provider_requests findFirstOrThrow
   */
  export type provider_requestsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter, which provider_requests to fetch.
     */
    where?: provider_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provider_requests to fetch.
     */
    orderBy?: Enumerable<provider_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provider_requests.
     */
    cursor?: provider_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provider_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provider_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provider_requests.
     */
    distinct?: Enumerable<Provider_requestsScalarFieldEnum>
  }


  /**
   * provider_requests findMany
   */
  export type provider_requestsFindManyArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter, which provider_requests to fetch.
     */
    where?: provider_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provider_requests to fetch.
     */
    orderBy?: Enumerable<provider_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provider_requests.
     */
    cursor?: provider_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provider_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provider_requests.
     */
    skip?: number
    distinct?: Enumerable<Provider_requestsScalarFieldEnum>
  }


  /**
   * provider_requests create
   */
  export type provider_requestsCreateArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * The data needed to create a provider_requests.
     */
    data: XOR<provider_requestsCreateInput, provider_requestsUncheckedCreateInput>
  }


  /**
   * provider_requests createMany
   */
  export type provider_requestsCreateManyArgs = {
    /**
     * The data used to create many provider_requests.
     */
    data: Enumerable<provider_requestsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * provider_requests update
   */
  export type provider_requestsUpdateArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * The data needed to update a provider_requests.
     */
    data: XOR<provider_requestsUpdateInput, provider_requestsUncheckedUpdateInput>
    /**
     * Choose, which provider_requests to update.
     */
    where: provider_requestsWhereUniqueInput
  }


  /**
   * provider_requests updateMany
   */
  export type provider_requestsUpdateManyArgs = {
    /**
     * The data used to update provider_requests.
     */
    data: XOR<provider_requestsUpdateManyMutationInput, provider_requestsUncheckedUpdateManyInput>
    /**
     * Filter which provider_requests to update
     */
    where?: provider_requestsWhereInput
  }


  /**
   * provider_requests upsert
   */
  export type provider_requestsUpsertArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * The filter to search for the provider_requests to update in case it exists.
     */
    where: provider_requestsWhereUniqueInput
    /**
     * In case the provider_requests found by the `where` argument doesn't exist, create a new provider_requests with this data.
     */
    create: XOR<provider_requestsCreateInput, provider_requestsUncheckedCreateInput>
    /**
     * In case the provider_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provider_requestsUpdateInput, provider_requestsUncheckedUpdateInput>
  }


  /**
   * provider_requests delete
   */
  export type provider_requestsDeleteArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
    /**
     * Filter which provider_requests to delete.
     */
    where: provider_requestsWhereUniqueInput
  }


  /**
   * provider_requests deleteMany
   */
  export type provider_requestsDeleteManyArgs = {
    /**
     * Filter which provider_requests to delete
     */
    where?: provider_requestsWhereInput
  }


  /**
   * provider_requests without action
   */
  export type provider_requestsArgs = {
    /**
     * Select specific fields to fetch from the provider_requests
     */
    select?: provider_requestsSelect | null
  }



  /**
   * Model providers
   */


  export type AggregateProviders = {
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  export type ProvidersMinAggregateOutputType = {
    id: string | null
  }

  export type ProvidersMaxAggregateOutputType = {
    id: string | null
  }

  export type ProvidersCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ProvidersMinAggregateInputType = {
    id?: true
  }

  export type ProvidersMaxAggregateInputType = {
    id?: true
  }

  export type ProvidersCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ProvidersAggregateArgs = {
    /**
     * Filter which providers to aggregate.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providers
    **/
    _count?: true | ProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidersMaxAggregateInputType
  }

  export type GetProvidersAggregateType<T extends ProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviders[P]>
      : GetScalarType<T[P], AggregateProviders[P]>
  }




  export type ProvidersGroupByArgs = {
    where?: providersWhereInput
    orderBy?: Enumerable<providersOrderByWithAggregationInput>
    by: ProvidersScalarFieldEnum[]
    having?: providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidersCountAggregateInputType | true
    _min?: ProvidersMinAggregateInputType
    _max?: ProvidersMaxAggregateInputType
  }


  export type ProvidersGroupByOutputType = {
    id: string
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  type GetProvidersGroupByPayload<T extends ProvidersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
        }
      >
    >


  export type providersSelect = {
    id?: boolean
    user_providers?: boolean | providers$user_providersArgs
    _count?: boolean | ProvidersCountOutputTypeArgs
  }


  export type providersInclude = {
    user_providers?: boolean | providers$user_providersArgs
    _count?: boolean | ProvidersCountOutputTypeArgs
  }

  export type providersGetPayload<S extends boolean | null | undefined | providersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? providers :
    S extends undefined ? never :
    S extends { include: any } & (providersArgs | providersFindManyArgs)
    ? providers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_providers' ? Array < user_providersGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProvidersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (providersArgs | providersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_providers' ? Array < user_providersGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProvidersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof providers ? providers[P] : never
  } 
      : providers


  type providersCountArgs = 
    Omit<providersFindManyArgs, 'select' | 'include'> & {
      select?: ProvidersCountAggregateInputType | true
    }

  export interface providersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Providers that matches the filter.
     * @param {providersFindUniqueArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends providersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, providersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'providers'> extends True ? Prisma__providersClient<providersGetPayload<T>> : Prisma__providersClient<providersGetPayload<T> | null, null>

    /**
     * Find one Providers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {providersFindUniqueOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends providersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, providersFindUniqueOrThrowArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Find the first Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends providersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, providersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'providers'> extends True ? Prisma__providersClient<providersGetPayload<T>> : Prisma__providersClient<providersGetPayload<T> | null, null>

    /**
     * Find the first Providers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends providersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, providersFindFirstOrThrowArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.providers.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.providers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providersWithIdOnly = await prisma.providers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends providersFindManyArgs>(
      args?: SelectSubset<T, providersFindManyArgs>
    ): Prisma.PrismaPromise<Array<providersGetPayload<T>>>

    /**
     * Create a Providers.
     * @param {providersCreateArgs} args - Arguments to create a Providers.
     * @example
     * // Create one Providers
     * const Providers = await prisma.providers.create({
     *   data: {
     *     // ... data to create a Providers
     *   }
     * })
     * 
    **/
    create<T extends providersCreateArgs>(
      args: SelectSubset<T, providersCreateArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Create many Providers.
     *     @param {providersCreateManyArgs} args - Arguments to create many Providers.
     *     @example
     *     // Create many Providers
     *     const providers = await prisma.providers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends providersCreateManyArgs>(
      args?: SelectSubset<T, providersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Providers.
     * @param {providersDeleteArgs} args - Arguments to delete one Providers.
     * @example
     * // Delete one Providers
     * const Providers = await prisma.providers.delete({
     *   where: {
     *     // ... filter to delete one Providers
     *   }
     * })
     * 
    **/
    delete<T extends providersDeleteArgs>(
      args: SelectSubset<T, providersDeleteArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Update one Providers.
     * @param {providersUpdateArgs} args - Arguments to update one Providers.
     * @example
     * // Update one Providers
     * const providers = await prisma.providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends providersUpdateArgs>(
      args: SelectSubset<T, providersUpdateArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Delete zero or more Providers.
     * @param {providersDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends providersDeleteManyArgs>(
      args?: SelectSubset<T, providersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends providersUpdateManyArgs>(
      args: SelectSubset<T, providersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Providers.
     * @param {providersUpsertArgs} args - Arguments to update or create a Providers.
     * @example
     * // Update or create a Providers
     * const providers = await prisma.providers.upsert({
     *   create: {
     *     // ... data to create a Providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providers we want to update
     *   }
     * })
    **/
    upsert<T extends providersUpsertArgs>(
      args: SelectSubset<T, providersUpsertArgs>
    ): Prisma__providersClient<providersGetPayload<T>>

    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.providers.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends providersCountArgs>(
      args?: Subset<T, providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvidersAggregateArgs>(args: Subset<T, ProvidersAggregateArgs>): Prisma.PrismaPromise<GetProvidersAggregateType<T>>

    /**
     * Group by Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersGroupByArgs} args - Group by arguments.
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
      T extends ProvidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvidersGroupByArgs['orderBy'] }
        : { orderBy?: ProvidersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProvidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__providersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user_providers<T extends providers$user_providersArgs= {}>(args?: Subset<T, providers$user_providersArgs>): Prisma.PrismaPromise<Array<user_providersGetPayload<T>>| Null>;

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
   * providers base type for findUnique actions
   */
  export type providersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findUnique
   */
  export interface providersFindUniqueArgs extends providersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * providers findUniqueOrThrow
   */
  export type providersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers base type for findFirst actions
   */
  export type providersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }

  /**
   * providers findFirst
   */
  export interface providersFindFirstArgs extends providersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * providers findFirstOrThrow
   */
  export type providersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }


  /**
   * providers findMany
   */
  export type providersFindManyArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }


  /**
   * providers create
   */
  export type providersCreateArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * The data needed to create a providers.
     */
    data: XOR<providersCreateInput, providersUncheckedCreateInput>
  }


  /**
   * providers createMany
   */
  export type providersCreateManyArgs = {
    /**
     * The data used to create many providers.
     */
    data: Enumerable<providersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * providers update
   */
  export type providersUpdateArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * The data needed to update a providers.
     */
    data: XOR<providersUpdateInput, providersUncheckedUpdateInput>
    /**
     * Choose, which providers to update.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers updateMany
   */
  export type providersUpdateManyArgs = {
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
  }


  /**
   * providers upsert
   */
  export type providersUpsertArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * The filter to search for the providers to update in case it exists.
     */
    where: providersWhereUniqueInput
    /**
     * In case the providers found by the `where` argument doesn't exist, create a new providers with this data.
     */
    create: XOR<providersCreateInput, providersUncheckedCreateInput>
    /**
     * In case the providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providersUpdateInput, providersUncheckedUpdateInput>
  }


  /**
   * providers delete
   */
  export type providersDeleteArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
    /**
     * Filter which providers to delete.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers deleteMany
   */
  export type providersDeleteManyArgs = {
    /**
     * Filter which providers to delete
     */
    where?: providersWhereInput
  }


  /**
   * providers.user_providers
   */
  export type providers$user_providersArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    where?: user_providersWhereInput
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    cursor?: user_providersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_providersScalarFieldEnum>
  }


  /**
   * providers without action
   */
  export type providersArgs = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude | null
  }



  /**
   * Model refresh_tokens
   */


  export type AggregateRefresh_tokens = {
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  export type Refresh_tokensMinAggregateOutputType = {
    refresh_token: string | null
    created_at: Date | null
    expires_at: Date | null
    user_id: string | null
    refresh_token_hash: string | null
  }

  export type Refresh_tokensMaxAggregateOutputType = {
    refresh_token: string | null
    created_at: Date | null
    expires_at: Date | null
    user_id: string | null
    refresh_token_hash: string | null
  }

  export type Refresh_tokensCountAggregateOutputType = {
    refresh_token: number
    created_at: number
    expires_at: number
    user_id: number
    refresh_token_hash: number
    _all: number
  }


  export type Refresh_tokensMinAggregateInputType = {
    refresh_token?: true
    created_at?: true
    expires_at?: true
    user_id?: true
    refresh_token_hash?: true
  }

  export type Refresh_tokensMaxAggregateInputType = {
    refresh_token?: true
    created_at?: true
    expires_at?: true
    user_id?: true
    refresh_token_hash?: true
  }

  export type Refresh_tokensCountAggregateInputType = {
    refresh_token?: true
    created_at?: true
    expires_at?: true
    user_id?: true
    refresh_token_hash?: true
    _all?: true
  }

  export type Refresh_tokensAggregateArgs = {
    /**
     * Filter which refresh_tokens to aggregate.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: Enumerable<refresh_tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type GetRefresh_tokensAggregateType<T extends Refresh_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_tokens[P]>
      : GetScalarType<T[P], AggregateRefresh_tokens[P]>
  }




  export type Refresh_tokensGroupByArgs = {
    where?: refresh_tokensWhereInput
    orderBy?: Enumerable<refresh_tokensOrderByWithAggregationInput>
    by: Refresh_tokensScalarFieldEnum[]
    having?: refresh_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokensCountAggregateInputType | true
    _min?: Refresh_tokensMinAggregateInputType
    _max?: Refresh_tokensMaxAggregateInputType
  }


  export type Refresh_tokensGroupByOutputType = {
    refresh_token: string
    created_at: Date
    expires_at: Date
    user_id: string
    refresh_token_hash: string | null
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  type GetRefresh_tokensGroupByPayload<T extends Refresh_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Refresh_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokensSelect = {
    refresh_token?: boolean
    created_at?: boolean
    expires_at?: boolean
    user_id?: boolean
    refresh_token_hash?: boolean
    users?: boolean | usersArgs
  }


  export type refresh_tokensInclude = {
    users?: boolean | usersArgs
  }

  export type refresh_tokensGetPayload<S extends boolean | null | undefined | refresh_tokensArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? refresh_tokens :
    S extends undefined ? never :
    S extends { include: any } & (refresh_tokensArgs | refresh_tokensFindManyArgs)
    ? refresh_tokens  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (refresh_tokensArgs | refresh_tokensFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<S['select'][P]> :  P extends keyof refresh_tokens ? refresh_tokens[P] : never
  } 
      : refresh_tokens


  type refresh_tokensCountArgs = 
    Omit<refresh_tokensFindManyArgs, 'select' | 'include'> & {
      select?: Refresh_tokensCountAggregateInputType | true
    }

  export interface refresh_tokensDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Refresh_tokens that matches the filter.
     * @param {refresh_tokensFindUniqueArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends refresh_tokensFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, refresh_tokensFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'refresh_tokens'> extends True ? Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>> : Prisma__refresh_tokensClient<refresh_tokensGetPayload<T> | null, null>

    /**
     * Find one Refresh_tokens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {refresh_tokensFindUniqueOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends refresh_tokensFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, refresh_tokensFindUniqueOrThrowArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Find the first Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends refresh_tokensFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, refresh_tokensFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'refresh_tokens'> extends True ? Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>> : Prisma__refresh_tokensClient<refresh_tokensGetPayload<T> | null, null>

    /**
     * Find the first Refresh_tokens that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends refresh_tokensFindFirstOrThrowArgs>(
      args?: SelectSubset<T, refresh_tokensFindFirstOrThrowArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany({ take: 10 })
     * 
     * // Only select the `refresh_token`
     * const refresh_tokensWithRefresh_tokenOnly = await prisma.refresh_tokens.findMany({ select: { refresh_token: true } })
     * 
    **/
    findMany<T extends refresh_tokensFindManyArgs>(
      args?: SelectSubset<T, refresh_tokensFindManyArgs>
    ): Prisma.PrismaPromise<Array<refresh_tokensGetPayload<T>>>

    /**
     * Create a Refresh_tokens.
     * @param {refresh_tokensCreateArgs} args - Arguments to create a Refresh_tokens.
     * @example
     * // Create one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.create({
     *   data: {
     *     // ... data to create a Refresh_tokens
     *   }
     * })
     * 
    **/
    create<T extends refresh_tokensCreateArgs>(
      args: SelectSubset<T, refresh_tokensCreateArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Create many Refresh_tokens.
     *     @param {refresh_tokensCreateManyArgs} args - Arguments to create many Refresh_tokens.
     *     @example
     *     // Create many Refresh_tokens
     *     const refresh_tokens = await prisma.refresh_tokens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends refresh_tokensCreateManyArgs>(
      args?: SelectSubset<T, refresh_tokensCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh_tokens.
     * @param {refresh_tokensDeleteArgs} args - Arguments to delete one Refresh_tokens.
     * @example
     * // Delete one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.delete({
     *   where: {
     *     // ... filter to delete one Refresh_tokens
     *   }
     * })
     * 
    **/
    delete<T extends refresh_tokensDeleteArgs>(
      args: SelectSubset<T, refresh_tokensDeleteArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Update one Refresh_tokens.
     * @param {refresh_tokensUpdateArgs} args - Arguments to update one Refresh_tokens.
     * @example
     * // Update one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends refresh_tokensUpdateArgs>(
      args: SelectSubset<T, refresh_tokensUpdateArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokensDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends refresh_tokensDeleteManyArgs>(
      args?: SelectSubset<T, refresh_tokensDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends refresh_tokensUpdateManyArgs>(
      args: SelectSubset<T, refresh_tokensUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_tokens.
     * @param {refresh_tokensUpsertArgs} args - Arguments to update or create a Refresh_tokens.
     * @example
     * // Update or create a Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.upsert({
     *   create: {
     *     // ... data to create a Refresh_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to update
     *   }
     * })
    **/
    upsert<T extends refresh_tokensUpsertArgs>(
      args: SelectSubset<T, refresh_tokensUpsertArgs>
    ): Prisma__refresh_tokensClient<refresh_tokensGetPayload<T>>

    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_tokens.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokensCountArgs>(
      args?: Subset<T, refresh_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Refresh_tokensAggregateArgs>(args: Subset<T, Refresh_tokensAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokensAggregateType<T>>

    /**
     * Group by Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokensGroupByArgs} args - Group by arguments.
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
      T extends Refresh_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Refresh_tokensGroupByArgs['orderBy'] }
        : { orderBy?: Refresh_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Refresh_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__refresh_tokensClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

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
   * refresh_tokens base type for findUnique actions
   */
  export type refresh_tokensFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findUnique
   */
  export interface refresh_tokensFindUniqueArgs extends refresh_tokensFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * refresh_tokens findUniqueOrThrow
   */
  export type refresh_tokensFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }


  /**
   * refresh_tokens base type for findFirst actions
   */
  export type refresh_tokensFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: Enumerable<refresh_tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Enumerable<Refresh_tokensScalarFieldEnum>
  }

  /**
   * refresh_tokens findFirst
   */
  export interface refresh_tokensFindFirstArgs extends refresh_tokensFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * refresh_tokens findFirstOrThrow
   */
  export type refresh_tokensFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: Enumerable<refresh_tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Enumerable<Refresh_tokensScalarFieldEnum>
  }


  /**
   * refresh_tokens findMany
   */
  export type refresh_tokensFindManyArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: Enumerable<refresh_tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Enumerable<Refresh_tokensScalarFieldEnum>
  }


  /**
   * refresh_tokens create
   */
  export type refresh_tokensCreateArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * The data needed to create a refresh_tokens.
     */
    data: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
  }


  /**
   * refresh_tokens createMany
   */
  export type refresh_tokensCreateManyArgs = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: Enumerable<refresh_tokensCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * refresh_tokens update
   */
  export type refresh_tokensUpdateArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * The data needed to update a refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
    /**
     * Choose, which refresh_tokens to update.
     */
    where: refresh_tokensWhereUniqueInput
  }


  /**
   * refresh_tokens updateMany
   */
  export type refresh_tokensUpdateManyArgs = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokensWhereInput
  }


  /**
   * refresh_tokens upsert
   */
  export type refresh_tokensUpsertArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * The filter to search for the refresh_tokens to update in case it exists.
     */
    where: refresh_tokensWhereUniqueInput
    /**
     * In case the refresh_tokens found by the `where` argument doesn't exist, create a new refresh_tokens with this data.
     */
    create: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
    /**
     * In case the refresh_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
  }


  /**
   * refresh_tokens delete
   */
  export type refresh_tokensDeleteArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    /**
     * Filter which refresh_tokens to delete.
     */
    where: refresh_tokensWhereUniqueInput
  }


  /**
   * refresh_tokens deleteMany
   */
  export type refresh_tokensDeleteManyArgs = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokensWhereInput
  }


  /**
   * refresh_tokens without action
   */
  export type refresh_tokensArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
  }



  /**
   * Model roles
   */


  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    role: string | null
  }

  export type RolesMaxAggregateOutputType = {
    role: string | null
  }

  export type RolesCountAggregateOutputType = {
    role: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    role?: true
  }

  export type RolesMaxAggregateInputType = {
    role?: true
  }

  export type RolesCountAggregateInputType = {
    role?: true
    _all?: true
  }

  export type RolesAggregateArgs = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs = {
    where?: rolesWhereInput
    orderBy?: Enumerable<rolesOrderByWithAggregationInput>
    by: RolesScalarFieldEnum[]
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }


  export type RolesGroupByOutputType = {
    role: string
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect = {
    role?: boolean
    user_roles?: boolean | roles$user_rolesArgs
    users?: boolean | roles$usersArgs
    _count?: boolean | RolesCountOutputTypeArgs
  }


  export type rolesInclude = {
    user_roles?: boolean | roles$user_rolesArgs
    users?: boolean | roles$usersArgs
    _count?: boolean | RolesCountOutputTypeArgs
  }

  export type rolesGetPayload<S extends boolean | null | undefined | rolesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? roles :
    S extends undefined ? never :
    S extends { include: any } & (rolesArgs | rolesFindManyArgs)
    ? roles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_roles' ? Array < user_rolesGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (rolesArgs | rolesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_roles' ? Array < user_rolesGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof roles ? roles[P] : never
  } 
      : roles


  type rolesCountArgs = 
    Omit<rolesFindManyArgs, 'select' | 'include'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rolesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'roles'> extends True ? Prisma__rolesClient<rolesGetPayload<T>> : Prisma__rolesClient<rolesGetPayload<T> | null, null>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rolesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'roles'> extends True ? Prisma__rolesClient<rolesGetPayload<T>> : Prisma__rolesClient<rolesGetPayload<T> | null, null>

    /**
     * Find the first Roles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `role`
     * const rolesWithRoleOnly = await prisma.roles.findMany({ select: { role: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs>(
      args?: SelectSubset<T, rolesFindManyArgs>
    ): Prisma.PrismaPromise<Array<rolesGetPayload<T>>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs>(
      args: SelectSubset<T, rolesCreateArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs>(
      args?: SelectSubset<T, rolesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs>(
      args: SelectSubset<T, rolesDeleteArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs>(
      args: SelectSubset<T, rolesUpdateArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs>(
      args?: SelectSubset<T, rolesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs>(
      args: SelectSubset<T, rolesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs>(
      args: SelectSubset<T, rolesUpsertArgs>
    ): Prisma__rolesClient<rolesGetPayload<T>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rolesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user_roles<T extends roles$user_rolesArgs= {}>(args?: Subset<T, roles$user_rolesArgs>): Prisma.PrismaPromise<Array<user_rolesGetPayload<T>>| Null>;

    users<T extends roles$usersArgs= {}>(args?: Subset<T, roles$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

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
   * roles base type for findUnique actions
   */
  export type rolesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUnique
   */
  export interface rolesFindUniqueArgs extends rolesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles base type for findFirst actions
   */
  export type rolesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: Enumerable<RolesScalarFieldEnum>
  }

  /**
   * roles findFirst
   */
  export interface rolesFindFirstArgs extends rolesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * roles findMany
   */
  export type rolesFindManyArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * roles create
   */
  export type rolesCreateArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }


  /**
   * roles createMany
   */
  export type rolesCreateManyArgs = {
    /**
     * The data used to create many roles.
     */
    data: Enumerable<rolesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * roles update
   */
  export type rolesUpdateArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }


  /**
   * roles upsert
   */
  export type rolesUpsertArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }


  /**
   * roles delete
   */
  export type rolesDeleteArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }


  /**
   * roles.user_roles
   */
  export type roles$user_rolesArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    where?: user_rolesWhereInput
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_rolesScalarFieldEnum>
  }


  /**
   * roles.users
   */
  export type roles$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * roles without action
   */
  export type rolesArgs = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude | null
  }



  /**
   * Model user_providers
   */


  export type AggregateUser_providers = {
    _count: User_providersCountAggregateOutputType | null
    _min: User_providersMinAggregateOutputType | null
    _max: User_providersMaxAggregateOutputType | null
  }

  export type User_providersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    access_token: string | null
    refresh_token: string | null
    provider_id: string | null
    provider_user_id: string | null
  }

  export type User_providersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    access_token: string | null
    refresh_token: string | null
    provider_id: string | null
    provider_user_id: string | null
  }

  export type User_providersCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    access_token: number
    refresh_token: number
    provider_id: number
    provider_user_id: number
    _all: number
  }


  export type User_providersMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    access_token?: true
    refresh_token?: true
    provider_id?: true
    provider_user_id?: true
  }

  export type User_providersMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    access_token?: true
    refresh_token?: true
    provider_id?: true
    provider_user_id?: true
  }

  export type User_providersCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    access_token?: true
    refresh_token?: true
    provider_id?: true
    provider_user_id?: true
    _all?: true
  }

  export type User_providersAggregateArgs = {
    /**
     * Filter which user_providers to aggregate.
     */
    where?: user_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_providers to fetch.
     */
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_providers
    **/
    _count?: true | User_providersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_providersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_providersMaxAggregateInputType
  }

  export type GetUser_providersAggregateType<T extends User_providersAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_providers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_providers[P]>
      : GetScalarType<T[P], AggregateUser_providers[P]>
  }




  export type User_providersGroupByArgs = {
    where?: user_providersWhereInput
    orderBy?: Enumerable<user_providersOrderByWithAggregationInput>
    by: User_providersScalarFieldEnum[]
    having?: user_providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_providersCountAggregateInputType | true
    _min?: User_providersMinAggregateInputType
    _max?: User_providersMaxAggregateInputType
  }


  export type User_providersGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    user_id: string
    access_token: string
    refresh_token: string | null
    provider_id: string
    provider_user_id: string
    _count: User_providersCountAggregateOutputType | null
    _min: User_providersMinAggregateOutputType | null
    _max: User_providersMaxAggregateOutputType | null
  }

  type GetUser_providersGroupByPayload<T extends User_providersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_providersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_providersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_providersGroupByOutputType[P]>
            : GetScalarType<T[P], User_providersGroupByOutputType[P]>
        }
      >
    >


  export type user_providersSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    provider_id?: boolean
    provider_user_id?: boolean
    providers?: boolean | providersArgs
    users?: boolean | usersArgs
  }


  export type user_providersInclude = {
    providers?: boolean | providersArgs
    users?: boolean | usersArgs
  }

  export type user_providersGetPayload<S extends boolean | null | undefined | user_providersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_providers :
    S extends undefined ? never :
    S extends { include: any } & (user_providersArgs | user_providersFindManyArgs)
    ? user_providers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'providers' ? providersGetPayload<S['include'][P]> :
        P extends 'users' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_providersArgs | user_providersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'providers' ? providersGetPayload<S['select'][P]> :
        P extends 'users' ? usersGetPayload<S['select'][P]> :  P extends keyof user_providers ? user_providers[P] : never
  } 
      : user_providers


  type user_providersCountArgs = 
    Omit<user_providersFindManyArgs, 'select' | 'include'> & {
      select?: User_providersCountAggregateInputType | true
    }

  export interface user_providersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_providers that matches the filter.
     * @param {user_providersFindUniqueArgs} args - Arguments to find a User_providers
     * @example
     * // Get one User_providers
     * const user_providers = await prisma.user_providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_providersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_providersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_providers'> extends True ? Prisma__user_providersClient<user_providersGetPayload<T>> : Prisma__user_providersClient<user_providersGetPayload<T> | null, null>

    /**
     * Find one User_providers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_providersFindUniqueOrThrowArgs} args - Arguments to find a User_providers
     * @example
     * // Get one User_providers
     * const user_providers = await prisma.user_providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_providersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_providersFindUniqueOrThrowArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Find the first User_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_providersFindFirstArgs} args - Arguments to find a User_providers
     * @example
     * // Get one User_providers
     * const user_providers = await prisma.user_providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_providersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_providersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_providers'> extends True ? Prisma__user_providersClient<user_providersGetPayload<T>> : Prisma__user_providersClient<user_providersGetPayload<T> | null, null>

    /**
     * Find the first User_providers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_providersFindFirstOrThrowArgs} args - Arguments to find a User_providers
     * @example
     * // Get one User_providers
     * const user_providers = await prisma.user_providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_providersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_providersFindFirstOrThrowArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Find zero or more User_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_providersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_providers
     * const user_providers = await prisma.user_providers.findMany()
     * 
     * // Get first 10 User_providers
     * const user_providers = await prisma.user_providers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_providersWithIdOnly = await prisma.user_providers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_providersFindManyArgs>(
      args?: SelectSubset<T, user_providersFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_providersGetPayload<T>>>

    /**
     * Create a User_providers.
     * @param {user_providersCreateArgs} args - Arguments to create a User_providers.
     * @example
     * // Create one User_providers
     * const User_providers = await prisma.user_providers.create({
     *   data: {
     *     // ... data to create a User_providers
     *   }
     * })
     * 
    **/
    create<T extends user_providersCreateArgs>(
      args: SelectSubset<T, user_providersCreateArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Create many User_providers.
     *     @param {user_providersCreateManyArgs} args - Arguments to create many User_providers.
     *     @example
     *     // Create many User_providers
     *     const user_providers = await prisma.user_providers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_providersCreateManyArgs>(
      args?: SelectSubset<T, user_providersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_providers.
     * @param {user_providersDeleteArgs} args - Arguments to delete one User_providers.
     * @example
     * // Delete one User_providers
     * const User_providers = await prisma.user_providers.delete({
     *   where: {
     *     // ... filter to delete one User_providers
     *   }
     * })
     * 
    **/
    delete<T extends user_providersDeleteArgs>(
      args: SelectSubset<T, user_providersDeleteArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Update one User_providers.
     * @param {user_providersUpdateArgs} args - Arguments to update one User_providers.
     * @example
     * // Update one User_providers
     * const user_providers = await prisma.user_providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_providersUpdateArgs>(
      args: SelectSubset<T, user_providersUpdateArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Delete zero or more User_providers.
     * @param {user_providersDeleteManyArgs} args - Arguments to filter User_providers to delete.
     * @example
     * // Delete a few User_providers
     * const { count } = await prisma.user_providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_providersDeleteManyArgs>(
      args?: SelectSubset<T, user_providersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_providers
     * const user_providers = await prisma.user_providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_providersUpdateManyArgs>(
      args: SelectSubset<T, user_providersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_providers.
     * @param {user_providersUpsertArgs} args - Arguments to update or create a User_providers.
     * @example
     * // Update or create a User_providers
     * const user_providers = await prisma.user_providers.upsert({
     *   create: {
     *     // ... data to create a User_providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_providers we want to update
     *   }
     * })
    **/
    upsert<T extends user_providersUpsertArgs>(
      args: SelectSubset<T, user_providersUpsertArgs>
    ): Prisma__user_providersClient<user_providersGetPayload<T>>

    /**
     * Count the number of User_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_providersCountArgs} args - Arguments to filter User_providers to count.
     * @example
     * // Count the number of User_providers
     * const count = await prisma.user_providers.count({
     *   where: {
     *     // ... the filter for the User_providers we want to count
     *   }
     * })
    **/
    count<T extends user_providersCountArgs>(
      args?: Subset<T, user_providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_providersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_providersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_providersAggregateArgs>(args: Subset<T, User_providersAggregateArgs>): Prisma.PrismaPromise<GetUser_providersAggregateType<T>>

    /**
     * Group by User_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_providersGroupByArgs} args - Group by arguments.
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
      T extends User_providersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_providersGroupByArgs['orderBy'] }
        : { orderBy?: User_providersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_providersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_providersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_providersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    providers<T extends providersArgs= {}>(args?: Subset<T, providersArgs>): Prisma__providersClient<providersGetPayload<T> | Null>;

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

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
   * user_providers base type for findUnique actions
   */
  export type user_providersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter, which user_providers to fetch.
     */
    where: user_providersWhereUniqueInput
  }

  /**
   * user_providers findUnique
   */
  export interface user_providersFindUniqueArgs extends user_providersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_providers findUniqueOrThrow
   */
  export type user_providersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter, which user_providers to fetch.
     */
    where: user_providersWhereUniqueInput
  }


  /**
   * user_providers base type for findFirst actions
   */
  export type user_providersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter, which user_providers to fetch.
     */
    where?: user_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_providers to fetch.
     */
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_providers.
     */
    cursor?: user_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_providers.
     */
    distinct?: Enumerable<User_providersScalarFieldEnum>
  }

  /**
   * user_providers findFirst
   */
  export interface user_providersFindFirstArgs extends user_providersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_providers findFirstOrThrow
   */
  export type user_providersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter, which user_providers to fetch.
     */
    where?: user_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_providers to fetch.
     */
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_providers.
     */
    cursor?: user_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_providers.
     */
    distinct?: Enumerable<User_providersScalarFieldEnum>
  }


  /**
   * user_providers findMany
   */
  export type user_providersFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter, which user_providers to fetch.
     */
    where?: user_providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_providers to fetch.
     */
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_providers.
     */
    cursor?: user_providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_providers.
     */
    skip?: number
    distinct?: Enumerable<User_providersScalarFieldEnum>
  }


  /**
   * user_providers create
   */
  export type user_providersCreateArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * The data needed to create a user_providers.
     */
    data: XOR<user_providersCreateInput, user_providersUncheckedCreateInput>
  }


  /**
   * user_providers createMany
   */
  export type user_providersCreateManyArgs = {
    /**
     * The data used to create many user_providers.
     */
    data: Enumerable<user_providersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_providers update
   */
  export type user_providersUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * The data needed to update a user_providers.
     */
    data: XOR<user_providersUpdateInput, user_providersUncheckedUpdateInput>
    /**
     * Choose, which user_providers to update.
     */
    where: user_providersWhereUniqueInput
  }


  /**
   * user_providers updateMany
   */
  export type user_providersUpdateManyArgs = {
    /**
     * The data used to update user_providers.
     */
    data: XOR<user_providersUpdateManyMutationInput, user_providersUncheckedUpdateManyInput>
    /**
     * Filter which user_providers to update
     */
    where?: user_providersWhereInput
  }


  /**
   * user_providers upsert
   */
  export type user_providersUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * The filter to search for the user_providers to update in case it exists.
     */
    where: user_providersWhereUniqueInput
    /**
     * In case the user_providers found by the `where` argument doesn't exist, create a new user_providers with this data.
     */
    create: XOR<user_providersCreateInput, user_providersUncheckedCreateInput>
    /**
     * In case the user_providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_providersUpdateInput, user_providersUncheckedUpdateInput>
  }


  /**
   * user_providers delete
   */
  export type user_providersDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    /**
     * Filter which user_providers to delete.
     */
    where: user_providersWhereUniqueInput
  }


  /**
   * user_providers deleteMany
   */
  export type user_providersDeleteManyArgs = {
    /**
     * Filter which user_providers to delete
     */
    where?: user_providersWhereInput
  }


  /**
   * user_providers without action
   */
  export type user_providersArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
  }



  /**
   * Model user_roles
   */


  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  export type User_rolesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    user_id: string | null
    role: string | null
  }

  export type User_rolesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    user_id: string | null
    role: string | null
  }

  export type User_rolesCountAggregateOutputType = {
    id: number
    created_at: number
    user_id: number
    role: number
    _all: number
  }


  export type User_rolesMinAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    role?: true
  }

  export type User_rolesMaxAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    role?: true
  }

  export type User_rolesCountAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    role?: true
    _all?: true
  }

  export type User_rolesAggregateArgs = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_rolesMaxAggregateInputType
  }

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>
  }




  export type User_rolesGroupByArgs = {
    where?: user_rolesWhereInput
    orderBy?: Enumerable<user_rolesOrderByWithAggregationInput>
    by: User_rolesScalarFieldEnum[]
    having?: user_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_rolesCountAggregateInputType | true
    _min?: User_rolesMinAggregateInputType
    _max?: User_rolesMaxAggregateInputType
  }


  export type User_rolesGroupByOutputType = {
    id: string
    created_at: Date
    user_id: string
    role: string
    _count: User_rolesCountAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  type GetUser_rolesGroupByPayload<T extends User_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_rolesSelect = {
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    role?: boolean
    roles?: boolean | rolesArgs
    users?: boolean | usersArgs
  }


  export type user_rolesInclude = {
    roles?: boolean | rolesArgs
    users?: boolean | usersArgs
  }

  export type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_roles :
    S extends undefined ? never :
    S extends { include: any } & (user_rolesArgs | user_rolesFindManyArgs)
    ? user_roles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roles' ? rolesGetPayload<S['include'][P]> :
        P extends 'users' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_rolesArgs | user_rolesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roles' ? rolesGetPayload<S['select'][P]> :
        P extends 'users' ? usersGetPayload<S['select'][P]> :  P extends keyof user_roles ? user_roles[P] : never
  } 
      : user_roles


  type user_rolesCountArgs = 
    Omit<user_rolesFindManyArgs, 'select' | 'include'> & {
      select?: User_rolesCountAggregateInputType | true
    }

  export interface user_rolesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_rolesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_rolesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_roles'> extends True ? Prisma__user_rolesClient<user_rolesGetPayload<T>> : Prisma__user_rolesClient<user_rolesGetPayload<T> | null, null>

    /**
     * Find one User_roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_rolesFindUniqueOrThrowArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_rolesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_rolesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_roles'> extends True ? Prisma__user_rolesClient<user_rolesGetPayload<T>> : Prisma__user_rolesClient<user_rolesGetPayload<T> | null, null>

    /**
     * Find the first User_roles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_rolesFindManyArgs>(
      args?: SelectSubset<T, user_rolesFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_rolesGetPayload<T>>>

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     * 
    **/
    create<T extends user_rolesCreateArgs>(
      args: SelectSubset<T, user_rolesCreateArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Create many User_roles.
     *     @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_roles = await prisma.user_roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_rolesCreateManyArgs>(
      args?: SelectSubset<T, user_rolesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     * 
    **/
    delete<T extends user_rolesDeleteArgs>(
      args: SelectSubset<T, user_rolesDeleteArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_rolesUpdateArgs>(
      args: SelectSubset<T, user_rolesUpdateArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_rolesDeleteManyArgs>(
      args?: SelectSubset<T, user_rolesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_rolesUpdateManyArgs>(
      args: SelectSubset<T, user_rolesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
    **/
    upsert<T extends user_rolesUpsertArgs>(
      args: SelectSubset<T, user_rolesUpsertArgs>
    ): Prisma__user_rolesClient<user_rolesGetPayload<T>>

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_rolesAggregateArgs>(args: Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesGroupByArgs} args - Group by arguments.
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
      T extends User_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_rolesGroupByArgs['orderBy'] }
        : { orderBy?: User_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_rolesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    roles<T extends rolesArgs= {}>(args?: Subset<T, rolesArgs>): Prisma__rolesClient<rolesGetPayload<T> | Null>;

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

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
   * user_roles base type for findUnique actions
   */
  export type user_rolesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findUnique
   */
  export interface user_rolesFindUniqueArgs extends user_rolesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles base type for findFirst actions
   */
  export type user_rolesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: Enumerable<User_rolesScalarFieldEnum>
  }

  /**
   * user_roles findFirst
   */
  export interface user_rolesFindFirstArgs extends user_rolesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: Enumerable<User_rolesScalarFieldEnum>
  }


  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: Enumerable<User_rolesScalarFieldEnum>
  }


  /**
   * user_roles create
   */
  export type user_rolesCreateArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
  }


  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs = {
    /**
     * The data used to create many user_roles.
     */
    data: Enumerable<user_rolesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
  }


  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
  }


  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput
  }


  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput
  }


  /**
   * user_roles without action
   */
  export type user_rolesArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
  }



  /**
   * Model user_security_keys
   */


  export type AggregateUser_security_keys = {
    _count: User_security_keysCountAggregateOutputType | null
    _avg: User_security_keysAvgAggregateOutputType | null
    _sum: User_security_keysSumAggregateOutputType | null
    _min: User_security_keysMinAggregateOutputType | null
    _max: User_security_keysMaxAggregateOutputType | null
  }

  export type User_security_keysAvgAggregateOutputType = {
    counter: number | null
  }

  export type User_security_keysSumAggregateOutputType = {
    counter: bigint | null
  }

  export type User_security_keysMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    credential_id: string | null
    credential_public_key: Buffer | null
    counter: bigint | null
    transports: string | null
    nickname: string | null
  }

  export type User_security_keysMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    credential_id: string | null
    credential_public_key: Buffer | null
    counter: bigint | null
    transports: string | null
    nickname: string | null
  }

  export type User_security_keysCountAggregateOutputType = {
    id: number
    user_id: number
    credential_id: number
    credential_public_key: number
    counter: number
    transports: number
    nickname: number
    _all: number
  }


  export type User_security_keysAvgAggregateInputType = {
    counter?: true
  }

  export type User_security_keysSumAggregateInputType = {
    counter?: true
  }

  export type User_security_keysMinAggregateInputType = {
    id?: true
    user_id?: true
    credential_id?: true
    credential_public_key?: true
    counter?: true
    transports?: true
    nickname?: true
  }

  export type User_security_keysMaxAggregateInputType = {
    id?: true
    user_id?: true
    credential_id?: true
    credential_public_key?: true
    counter?: true
    transports?: true
    nickname?: true
  }

  export type User_security_keysCountAggregateInputType = {
    id?: true
    user_id?: true
    credential_id?: true
    credential_public_key?: true
    counter?: true
    transports?: true
    nickname?: true
    _all?: true
  }

  export type User_security_keysAggregateArgs = {
    /**
     * Filter which user_security_keys to aggregate.
     */
    where?: user_security_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_security_keys to fetch.
     */
    orderBy?: Enumerable<user_security_keysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_security_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_security_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_security_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_security_keys
    **/
    _count?: true | User_security_keysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_security_keysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_security_keysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_security_keysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_security_keysMaxAggregateInputType
  }

  export type GetUser_security_keysAggregateType<T extends User_security_keysAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_security_keys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_security_keys[P]>
      : GetScalarType<T[P], AggregateUser_security_keys[P]>
  }




  export type User_security_keysGroupByArgs = {
    where?: user_security_keysWhereInput
    orderBy?: Enumerable<user_security_keysOrderByWithAggregationInput>
    by: User_security_keysScalarFieldEnum[]
    having?: user_security_keysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_security_keysCountAggregateInputType | true
    _avg?: User_security_keysAvgAggregateInputType
    _sum?: User_security_keysSumAggregateInputType
    _min?: User_security_keysMinAggregateInputType
    _max?: User_security_keysMaxAggregateInputType
  }


  export type User_security_keysGroupByOutputType = {
    id: string
    user_id: string
    credential_id: string
    credential_public_key: Buffer | null
    counter: bigint
    transports: string
    nickname: string | null
    _count: User_security_keysCountAggregateOutputType | null
    _avg: User_security_keysAvgAggregateOutputType | null
    _sum: User_security_keysSumAggregateOutputType | null
    _min: User_security_keysMinAggregateOutputType | null
    _max: User_security_keysMaxAggregateOutputType | null
  }

  type GetUser_security_keysGroupByPayload<T extends User_security_keysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_security_keysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_security_keysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_security_keysGroupByOutputType[P]>
            : GetScalarType<T[P], User_security_keysGroupByOutputType[P]>
        }
      >
    >


  export type user_security_keysSelect = {
    id?: boolean
    user_id?: boolean
    credential_id?: boolean
    credential_public_key?: boolean
    counter?: boolean
    transports?: boolean
    nickname?: boolean
    users?: boolean | usersArgs
  }


  export type user_security_keysInclude = {
    users?: boolean | usersArgs
  }

  export type user_security_keysGetPayload<S extends boolean | null | undefined | user_security_keysArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_security_keys :
    S extends undefined ? never :
    S extends { include: any } & (user_security_keysArgs | user_security_keysFindManyArgs)
    ? user_security_keys  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_security_keysArgs | user_security_keysFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<S['select'][P]> :  P extends keyof user_security_keys ? user_security_keys[P] : never
  } 
      : user_security_keys


  type user_security_keysCountArgs = 
    Omit<user_security_keysFindManyArgs, 'select' | 'include'> & {
      select?: User_security_keysCountAggregateInputType | true
    }

  export interface user_security_keysDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_security_keys that matches the filter.
     * @param {user_security_keysFindUniqueArgs} args - Arguments to find a User_security_keys
     * @example
     * // Get one User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_security_keysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_security_keysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_security_keys'> extends True ? Prisma__user_security_keysClient<user_security_keysGetPayload<T>> : Prisma__user_security_keysClient<user_security_keysGetPayload<T> | null, null>

    /**
     * Find one User_security_keys that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_security_keysFindUniqueOrThrowArgs} args - Arguments to find a User_security_keys
     * @example
     * // Get one User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_security_keysFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_security_keysFindUniqueOrThrowArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Find the first User_security_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_security_keysFindFirstArgs} args - Arguments to find a User_security_keys
     * @example
     * // Get one User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_security_keysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_security_keysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_security_keys'> extends True ? Prisma__user_security_keysClient<user_security_keysGetPayload<T>> : Prisma__user_security_keysClient<user_security_keysGetPayload<T> | null, null>

    /**
     * Find the first User_security_keys that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_security_keysFindFirstOrThrowArgs} args - Arguments to find a User_security_keys
     * @example
     * // Get one User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_security_keysFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_security_keysFindFirstOrThrowArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Find zero or more User_security_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_security_keysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findMany()
     * 
     * // Get first 10 User_security_keys
     * const user_security_keys = await prisma.user_security_keys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_security_keysWithIdOnly = await prisma.user_security_keys.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_security_keysFindManyArgs>(
      args?: SelectSubset<T, user_security_keysFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_security_keysGetPayload<T>>>

    /**
     * Create a User_security_keys.
     * @param {user_security_keysCreateArgs} args - Arguments to create a User_security_keys.
     * @example
     * // Create one User_security_keys
     * const User_security_keys = await prisma.user_security_keys.create({
     *   data: {
     *     // ... data to create a User_security_keys
     *   }
     * })
     * 
    **/
    create<T extends user_security_keysCreateArgs>(
      args: SelectSubset<T, user_security_keysCreateArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Create many User_security_keys.
     *     @param {user_security_keysCreateManyArgs} args - Arguments to create many User_security_keys.
     *     @example
     *     // Create many User_security_keys
     *     const user_security_keys = await prisma.user_security_keys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_security_keysCreateManyArgs>(
      args?: SelectSubset<T, user_security_keysCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_security_keys.
     * @param {user_security_keysDeleteArgs} args - Arguments to delete one User_security_keys.
     * @example
     * // Delete one User_security_keys
     * const User_security_keys = await prisma.user_security_keys.delete({
     *   where: {
     *     // ... filter to delete one User_security_keys
     *   }
     * })
     * 
    **/
    delete<T extends user_security_keysDeleteArgs>(
      args: SelectSubset<T, user_security_keysDeleteArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Update one User_security_keys.
     * @param {user_security_keysUpdateArgs} args - Arguments to update one User_security_keys.
     * @example
     * // Update one User_security_keys
     * const user_security_keys = await prisma.user_security_keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_security_keysUpdateArgs>(
      args: SelectSubset<T, user_security_keysUpdateArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Delete zero or more User_security_keys.
     * @param {user_security_keysDeleteManyArgs} args - Arguments to filter User_security_keys to delete.
     * @example
     * // Delete a few User_security_keys
     * const { count } = await prisma.user_security_keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_security_keysDeleteManyArgs>(
      args?: SelectSubset<T, user_security_keysDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_security_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_security_keysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_security_keys
     * const user_security_keys = await prisma.user_security_keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_security_keysUpdateManyArgs>(
      args: SelectSubset<T, user_security_keysUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_security_keys.
     * @param {user_security_keysUpsertArgs} args - Arguments to update or create a User_security_keys.
     * @example
     * // Update or create a User_security_keys
     * const user_security_keys = await prisma.user_security_keys.upsert({
     *   create: {
     *     // ... data to create a User_security_keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_security_keys we want to update
     *   }
     * })
    **/
    upsert<T extends user_security_keysUpsertArgs>(
      args: SelectSubset<T, user_security_keysUpsertArgs>
    ): Prisma__user_security_keysClient<user_security_keysGetPayload<T>>

    /**
     * Count the number of User_security_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_security_keysCountArgs} args - Arguments to filter User_security_keys to count.
     * @example
     * // Count the number of User_security_keys
     * const count = await prisma.user_security_keys.count({
     *   where: {
     *     // ... the filter for the User_security_keys we want to count
     *   }
     * })
    **/
    count<T extends user_security_keysCountArgs>(
      args?: Subset<T, user_security_keysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_security_keysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_security_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_security_keysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_security_keysAggregateArgs>(args: Subset<T, User_security_keysAggregateArgs>): Prisma.PrismaPromise<GetUser_security_keysAggregateType<T>>

    /**
     * Group by User_security_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_security_keysGroupByArgs} args - Group by arguments.
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
      T extends User_security_keysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_security_keysGroupByArgs['orderBy'] }
        : { orderBy?: User_security_keysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_security_keysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_security_keysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_security_keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_security_keysClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

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
   * user_security_keys base type for findUnique actions
   */
  export type user_security_keysFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter, which user_security_keys to fetch.
     */
    where: user_security_keysWhereUniqueInput
  }

  /**
   * user_security_keys findUnique
   */
  export interface user_security_keysFindUniqueArgs extends user_security_keysFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_security_keys findUniqueOrThrow
   */
  export type user_security_keysFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter, which user_security_keys to fetch.
     */
    where: user_security_keysWhereUniqueInput
  }


  /**
   * user_security_keys base type for findFirst actions
   */
  export type user_security_keysFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter, which user_security_keys to fetch.
     */
    where?: user_security_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_security_keys to fetch.
     */
    orderBy?: Enumerable<user_security_keysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_security_keys.
     */
    cursor?: user_security_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_security_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_security_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_security_keys.
     */
    distinct?: Enumerable<User_security_keysScalarFieldEnum>
  }

  /**
   * user_security_keys findFirst
   */
  export interface user_security_keysFindFirstArgs extends user_security_keysFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_security_keys findFirstOrThrow
   */
  export type user_security_keysFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter, which user_security_keys to fetch.
     */
    where?: user_security_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_security_keys to fetch.
     */
    orderBy?: Enumerable<user_security_keysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_security_keys.
     */
    cursor?: user_security_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_security_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_security_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_security_keys.
     */
    distinct?: Enumerable<User_security_keysScalarFieldEnum>
  }


  /**
   * user_security_keys findMany
   */
  export type user_security_keysFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter, which user_security_keys to fetch.
     */
    where?: user_security_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_security_keys to fetch.
     */
    orderBy?: Enumerable<user_security_keysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_security_keys.
     */
    cursor?: user_security_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_security_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_security_keys.
     */
    skip?: number
    distinct?: Enumerable<User_security_keysScalarFieldEnum>
  }


  /**
   * user_security_keys create
   */
  export type user_security_keysCreateArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * The data needed to create a user_security_keys.
     */
    data: XOR<user_security_keysCreateInput, user_security_keysUncheckedCreateInput>
  }


  /**
   * user_security_keys createMany
   */
  export type user_security_keysCreateManyArgs = {
    /**
     * The data used to create many user_security_keys.
     */
    data: Enumerable<user_security_keysCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_security_keys update
   */
  export type user_security_keysUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * The data needed to update a user_security_keys.
     */
    data: XOR<user_security_keysUpdateInput, user_security_keysUncheckedUpdateInput>
    /**
     * Choose, which user_security_keys to update.
     */
    where: user_security_keysWhereUniqueInput
  }


  /**
   * user_security_keys updateMany
   */
  export type user_security_keysUpdateManyArgs = {
    /**
     * The data used to update user_security_keys.
     */
    data: XOR<user_security_keysUpdateManyMutationInput, user_security_keysUncheckedUpdateManyInput>
    /**
     * Filter which user_security_keys to update
     */
    where?: user_security_keysWhereInput
  }


  /**
   * user_security_keys upsert
   */
  export type user_security_keysUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * The filter to search for the user_security_keys to update in case it exists.
     */
    where: user_security_keysWhereUniqueInput
    /**
     * In case the user_security_keys found by the `where` argument doesn't exist, create a new user_security_keys with this data.
     */
    create: XOR<user_security_keysCreateInput, user_security_keysUncheckedCreateInput>
    /**
     * In case the user_security_keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_security_keysUpdateInput, user_security_keysUncheckedUpdateInput>
  }


  /**
   * user_security_keys delete
   */
  export type user_security_keysDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    /**
     * Filter which user_security_keys to delete.
     */
    where: user_security_keysWhereUniqueInput
  }


  /**
   * user_security_keys deleteMany
   */
  export type user_security_keysDeleteManyArgs = {
    /**
     * Filter which user_security_keys to delete
     */
    where?: user_security_keysWhereInput
  }


  /**
   * user_security_keys without action
   */
  export type user_security_keysArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    last_seen: Date | null
    disabled: boolean | null
    display_name: string | null
    avatar_url: string | null
    locale: string | null
    email: string | null
    phone_number: string | null
    password_hash: string | null
    email_verified: boolean | null
    phone_number_verified: boolean | null
    new_email: string | null
    otp_method_last_used: string | null
    otp_hash: string | null
    otp_hash_expires_at: Date | null
    default_role: string | null
    is_anonymous: boolean | null
    totp_secret: string | null
    active_mfa_type: string | null
    ticket: string | null
    ticket_expires_at: Date | null
    webauthn_current_challenge: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    last_seen: Date | null
    disabled: boolean | null
    display_name: string | null
    avatar_url: string | null
    locale: string | null
    email: string | null
    phone_number: string | null
    password_hash: string | null
    email_verified: boolean | null
    phone_number_verified: boolean | null
    new_email: string | null
    otp_method_last_used: string | null
    otp_hash: string | null
    otp_hash_expires_at: Date | null
    default_role: string | null
    is_anonymous: boolean | null
    totp_secret: string | null
    active_mfa_type: string | null
    ticket: string | null
    ticket_expires_at: Date | null
    webauthn_current_challenge: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    last_seen: number
    disabled: number
    display_name: number
    avatar_url: number
    locale: number
    email: number
    phone_number: number
    password_hash: number
    email_verified: number
    phone_number_verified: number
    new_email: number
    otp_method_last_used: number
    otp_hash: number
    otp_hash_expires_at: number
    default_role: number
    is_anonymous: number
    totp_secret: number
    active_mfa_type: number
    ticket: number
    ticket_expires_at: number
    metadata: number
    webauthn_current_challenge: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
    disabled?: true
    display_name?: true
    avatar_url?: true
    locale?: true
    email?: true
    phone_number?: true
    password_hash?: true
    email_verified?: true
    phone_number_verified?: true
    new_email?: true
    otp_method_last_used?: true
    otp_hash?: true
    otp_hash_expires_at?: true
    default_role?: true
    is_anonymous?: true
    totp_secret?: true
    active_mfa_type?: true
    ticket?: true
    ticket_expires_at?: true
    webauthn_current_challenge?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
    disabled?: true
    display_name?: true
    avatar_url?: true
    locale?: true
    email?: true
    phone_number?: true
    password_hash?: true
    email_verified?: true
    phone_number_verified?: true
    new_email?: true
    otp_method_last_used?: true
    otp_hash?: true
    otp_hash_expires_at?: true
    default_role?: true
    is_anonymous?: true
    totp_secret?: true
    active_mfa_type?: true
    ticket?: true
    ticket_expires_at?: true
    webauthn_current_challenge?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
    disabled?: true
    display_name?: true
    avatar_url?: true
    locale?: true
    email?: true
    phone_number?: true
    password_hash?: true
    email_verified?: true
    phone_number_verified?: true
    new_email?: true
    otp_method_last_used?: true
    otp_hash?: true
    otp_hash_expires_at?: true
    default_role?: true
    is_anonymous?: true
    totp_secret?: true
    active_mfa_type?: true
    ticket?: true
    ticket_expires_at?: true
    metadata?: true
    webauthn_current_challenge?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    last_seen: Date | null
    disabled: boolean
    display_name: string
    avatar_url: string
    locale: string
    email: string | null
    phone_number: string | null
    password_hash: string | null
    email_verified: boolean
    phone_number_verified: boolean
    new_email: string | null
    otp_method_last_used: string | null
    otp_hash: string | null
    otp_hash_expires_at: Date
    default_role: string
    is_anonymous: boolean
    totp_secret: string | null
    active_mfa_type: string | null
    ticket: string | null
    ticket_expires_at: Date
    metadata: JsonValue | null
    webauthn_current_challenge: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_seen?: boolean
    disabled?: boolean
    display_name?: boolean
    avatar_url?: boolean
    locale?: boolean
    email?: boolean
    phone_number?: boolean
    password_hash?: boolean
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: boolean
    otp_method_last_used?: boolean
    otp_hash?: boolean
    otp_hash_expires_at?: boolean
    default_role?: boolean
    is_anonymous?: boolean
    totp_secret?: boolean
    active_mfa_type?: boolean
    ticket?: boolean
    ticket_expires_at?: boolean
    metadata?: boolean
    webauthn_current_challenge?: boolean
    refresh_tokens?: boolean | users$refresh_tokensArgs
    user_providers?: boolean | users$user_providersArgs
    user_roles?: boolean | users$user_rolesArgs
    user_security_keys?: boolean | users$user_security_keysArgs
    roles?: boolean | rolesArgs
    profile?: boolean | profileArgs
    profiles?: boolean | profilesArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    refresh_tokens?: boolean | users$refresh_tokensArgs
    user_providers?: boolean | users$user_providersArgs
    user_roles?: boolean | users$user_rolesArgs
    user_security_keys?: boolean | users$user_security_keysArgs
    roles?: boolean | rolesArgs
    profile?: boolean | profileArgs
    profiles?: boolean | profilesArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'refresh_tokens' ? Array < refresh_tokensGetPayload<S['include'][P]>>  :
        P extends 'user_providers' ? Array < user_providersGetPayload<S['include'][P]>>  :
        P extends 'user_roles' ? Array < user_rolesGetPayload<S['include'][P]>>  :
        P extends 'user_security_keys' ? Array < user_security_keysGetPayload<S['include'][P]>>  :
        P extends 'roles' ? rolesGetPayload<S['include'][P]> :
        P extends 'profile' ? profileGetPayload<S['include'][P]> | null :
        P extends 'profiles' ? profilesGetPayload<S['include'][P]> | null :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'refresh_tokens' ? Array < refresh_tokensGetPayload<S['select'][P]>>  :
        P extends 'user_providers' ? Array < user_providersGetPayload<S['select'][P]>>  :
        P extends 'user_roles' ? Array < user_rolesGetPayload<S['select'][P]>>  :
        P extends 'user_security_keys' ? Array < user_security_keysGetPayload<S['select'][P]>>  :
        P extends 'roles' ? rolesGetPayload<S['select'][P]> :
        P extends 'profile' ? profileGetPayload<S['select'][P]> | null :
        P extends 'profiles' ? profilesGetPayload<S['select'][P]> | null :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    refresh_tokens<T extends users$refresh_tokensArgs= {}>(args?: Subset<T, users$refresh_tokensArgs>): Prisma.PrismaPromise<Array<refresh_tokensGetPayload<T>>| Null>;

    user_providers<T extends users$user_providersArgs= {}>(args?: Subset<T, users$user_providersArgs>): Prisma.PrismaPromise<Array<user_providersGetPayload<T>>| Null>;

    user_roles<T extends users$user_rolesArgs= {}>(args?: Subset<T, users$user_rolesArgs>): Prisma.PrismaPromise<Array<user_rolesGetPayload<T>>| Null>;

    user_security_keys<T extends users$user_security_keysArgs= {}>(args?: Subset<T, users$user_security_keysArgs>): Prisma.PrismaPromise<Array<user_security_keysGetPayload<T>>| Null>;

    roles<T extends rolesArgs= {}>(args?: Subset<T, rolesArgs>): Prisma__rolesClient<rolesGetPayload<T> | Null>;

    profile<T extends profileArgs= {}>(args?: Subset<T, profileArgs>): Prisma__profileClient<profileGetPayload<T> | Null>;

    profiles<T extends profilesArgs= {}>(args?: Subset<T, profilesArgs>): Prisma__profilesClient<profilesGetPayload<T> | Null>;

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
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.refresh_tokens
   */
  export type users$refresh_tokensArgs = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: refresh_tokensInclude | null
    where?: refresh_tokensWhereInput
    orderBy?: Enumerable<refresh_tokensOrderByWithRelationInput>
    cursor?: refresh_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Refresh_tokensScalarFieldEnum>
  }


  /**
   * users.user_providers
   */
  export type users$user_providersArgs = {
    /**
     * Select specific fields to fetch from the user_providers
     */
    select?: user_providersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_providersInclude | null
    where?: user_providersWhereInput
    orderBy?: Enumerable<user_providersOrderByWithRelationInput>
    cursor?: user_providersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_providersScalarFieldEnum>
  }


  /**
   * users.user_roles
   */
  export type users$user_rolesArgs = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude | null
    where?: user_rolesWhereInput
    orderBy?: Enumerable<user_rolesOrderByWithRelationInput>
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_rolesScalarFieldEnum>
  }


  /**
   * users.user_security_keys
   */
  export type users$user_security_keysArgs = {
    /**
     * Select specific fields to fetch from the user_security_keys
     */
    select?: user_security_keysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_security_keysInclude | null
    where?: user_security_keysWhereInput
    orderBy?: Enumerable<user_security_keysOrderByWithRelationInput>
    cursor?: user_security_keysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_security_keysScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
  }



  /**
   * Model favorites
   */


  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesMinAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
  }

  export type FavoritesMaxAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
  }

  export type FavoritesCountAggregateOutputType = {
    id: number
    profile_id: number
    podcast_id: number
    _all: number
  }


  export type FavoritesMinAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
  }

  export type FavoritesMaxAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
  }

  export type FavoritesCountAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
    _all?: true
  }

  export type FavoritesAggregateArgs = {
    /**
     * Filter which favorites to aggregate.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: Enumerable<favoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type FavoritesGroupByArgs = {
    where?: favoritesWhereInput
    orderBy?: Enumerable<favoritesOrderByWithAggregationInput>
    by: FavoritesScalarFieldEnum[]
    having?: favoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }


  export type FavoritesGroupByOutputType = {
    id: string
    profile_id: string
    podcast_id: string
    _count: FavoritesCountAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends FavoritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type favoritesSelect = {
    id?: boolean
    profile_id?: boolean
    podcast_id?: boolean
    profiles?: boolean | profilesArgs
  }


  export type favoritesInclude = {
    profiles?: boolean | profilesArgs
  }

  export type favoritesGetPayload<S extends boolean | null | undefined | favoritesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? favorites :
    S extends undefined ? never :
    S extends { include: any } & (favoritesArgs | favoritesFindManyArgs)
    ? favorites  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profiles' ? profilesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (favoritesArgs | favoritesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profiles' ? profilesGetPayload<S['select'][P]> :  P extends keyof favorites ? favorites[P] : never
  } 
      : favorites


  type favoritesCountArgs = 
    Omit<favoritesFindManyArgs, 'select' | 'include'> & {
      select?: FavoritesCountAggregateInputType | true
    }

  export interface favoritesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Favorites that matches the filter.
     * @param {favoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends favoritesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, favoritesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'favorites'> extends True ? Prisma__favoritesClient<favoritesGetPayload<T>> : Prisma__favoritesClient<favoritesGetPayload<T> | null, null>

    /**
     * Find one Favorites that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {favoritesFindUniqueOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends favoritesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, favoritesFindUniqueOrThrowArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends favoritesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, favoritesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'favorites'> extends True ? Prisma__favoritesClient<favoritesGetPayload<T>> : Prisma__favoritesClient<favoritesGetPayload<T> | null, null>

    /**
     * Find the first Favorites that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends favoritesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, favoritesFindFirstOrThrowArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritesWithIdOnly = await prisma.favorites.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends favoritesFindManyArgs>(
      args?: SelectSubset<T, favoritesFindManyArgs>
    ): Prisma.PrismaPromise<Array<favoritesGetPayload<T>>>

    /**
     * Create a Favorites.
     * @param {favoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
    **/
    create<T extends favoritesCreateArgs>(
      args: SelectSubset<T, favoritesCreateArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Create many Favorites.
     *     @param {favoritesCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorites = await prisma.favorites.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends favoritesCreateManyArgs>(
      args?: SelectSubset<T, favoritesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorites.
     * @param {favoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
    **/
    delete<T extends favoritesDeleteArgs>(
      args: SelectSubset<T, favoritesDeleteArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Update one Favorites.
     * @param {favoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends favoritesUpdateArgs>(
      args: SelectSubset<T, favoritesUpdateArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Delete zero or more Favorites.
     * @param {favoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends favoritesDeleteManyArgs>(
      args?: SelectSubset<T, favoritesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends favoritesUpdateManyArgs>(
      args: SelectSubset<T, favoritesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorites.
     * @param {favoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
    **/
    upsert<T extends favoritesUpsertArgs>(
      args: SelectSubset<T, favoritesUpsertArgs>
    ): Prisma__favoritesClient<favoritesGetPayload<T>>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoritesCountArgs>(
      args?: Subset<T, favoritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): Prisma.PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesGroupByArgs} args - Group by arguments.
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
      T extends FavoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritesGroupByArgs['orderBy'] }
        : { orderBy?: FavoritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__favoritesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    profiles<T extends profilesArgs= {}>(args?: Subset<T, profilesArgs>): Prisma__profilesClient<profilesGetPayload<T> | Null>;

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
   * favorites base type for findUnique actions
   */
  export type favoritesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }

  /**
   * favorites findUnique
   */
  export interface favoritesFindUniqueArgs extends favoritesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * favorites findUniqueOrThrow
   */
  export type favoritesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites base type for findFirst actions
   */
  export type favoritesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: Enumerable<favoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }

  /**
   * favorites findFirst
   */
  export interface favoritesFindFirstArgs extends favoritesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * favorites findFirstOrThrow
   */
  export type favoritesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: Enumerable<favoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }


  /**
   * favorites findMany
   */
  export type favoritesFindManyArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: Enumerable<favoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }


  /**
   * favorites create
   */
  export type favoritesCreateArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * The data needed to create a favorites.
     */
    data: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
  }


  /**
   * favorites createMany
   */
  export type favoritesCreateManyArgs = {
    /**
     * The data used to create many favorites.
     */
    data: Enumerable<favoritesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * favorites update
   */
  export type favoritesUpdateArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * The data needed to update a favorites.
     */
    data: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
    /**
     * Choose, which favorites to update.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites updateMany
   */
  export type favoritesUpdateManyArgs = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoritesWhereInput
  }


  /**
   * favorites upsert
   */
  export type favoritesUpsertArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * The filter to search for the favorites to update in case it exists.
     */
    where: favoritesWhereUniqueInput
    /**
     * In case the favorites found by the `where` argument doesn't exist, create a new favorites with this data.
     */
    create: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
    /**
     * In case the favorites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
  }


  /**
   * favorites delete
   */
  export type favoritesDeleteArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    /**
     * Filter which favorites to delete.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites deleteMany
   */
  export type favoritesDeleteManyArgs = {
    /**
     * Filter which favorites to delete
     */
    where?: favoritesWhereInput
  }


  /**
   * favorites without action
   */
  export type favoritesArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
  }



  /**
   * Model profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    profile_num: number | null
  }

  export type ProfileSumAggregateOutputType = {
    profile_num: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    profile_num: number | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    creator_user_id: string | null
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    profile_num: number | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    creator_user_id: string | null
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    profile_num: number
    created_at: number
    updated_at: number
    username: number
    creator_user_id: number
    name: number
    bio: number
    avatar: number
    location: number
    website: number
    karma: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    profile_num?: true
  }

  export type ProfileSumAggregateInputType = {
    profile_num?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: profileWhereInput
    orderBy?: Enumerable<profileOrderByWithAggregationInput>
    by: ProfileScalarFieldEnum[]
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: string
    profile_num: number
    created_at: Date
    updated_at: Date
    username: string
    creator_user_id: string
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect = {
    id?: boolean
    profile_num?: boolean
    created_at?: boolean
    updated_at?: boolean
    username?: boolean
    creator_user_id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    location?: boolean
    website?: boolean
    karma?: boolean
    users?: boolean | usersArgs
  }


  export type profileInclude = {
    users?: boolean | usersArgs
  }

  export type profileGetPayload<S extends boolean | null | undefined | profileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? profile :
    S extends undefined ? never :
    S extends { include: any } & (profileArgs | profileFindManyArgs)
    ? profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (profileArgs | profileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<S['select'][P]> :  P extends keyof profile ? profile[P] : never
  } 
      : profile


  type profileCountArgs = 
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile'> extends True ? Prisma__profileClient<profileGetPayload<T>> : Prisma__profileClient<profileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, profileFindUniqueOrThrowArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile'> extends True ? Prisma__profileClient<profileGetPayload<T>> : Prisma__profileClient<profileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs>
    ): Prisma.PrismaPromise<Array<profileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

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
   * profile base type for findUnique actions
   */
  export type profileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findUnique
   */
  export interface profileFindUniqueArgs extends profileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile base type for findFirst actions
   */
  export type profileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * profile findFirst
   */
  export interface profileFindFirstArgs extends profileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile findMany
   */
  export type profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile create
   */
  export type profileCreateArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs = {
    /**
     * The data used to create many profiles.
     */
    data: Enumerable<profileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profile update
   */
  export type profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
  }


  /**
   * profile without action
   */
  export type profileArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
  }



  /**
   * Model profiles
   */


  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    profile_num: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    profile_num: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    profile_num: number | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    creator_user_id: string | null
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    profile_num: number | null
    created_at: Date | null
    updated_at: Date | null
    username: string | null
    creator_user_id: string | null
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    profile_num: number
    created_at: number
    updated_at: number
    username: number
    creator_user_id: number
    name: number
    bio: number
    avatar: number
    location: number
    website: number
    karma: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    profile_num?: true
  }

  export type ProfilesSumAggregateInputType = {
    profile_num?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    profile_num?: true
    created_at?: true
    updated_at?: true
    username?: true
    creator_user_id?: true
    name?: true
    bio?: true
    avatar?: true
    location?: true
    website?: true
    karma?: true
    _all?: true
  }

  export type ProfilesAggregateArgs = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs = {
    where?: profilesWhereInput
    orderBy?: Enumerable<profilesOrderByWithAggregationInput>
    by: ProfilesScalarFieldEnum[]
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }


  export type ProfilesGroupByOutputType = {
    id: string
    profile_num: number
    created_at: Date
    updated_at: Date
    username: string
    creator_user_id: string
    name: string | null
    bio: string | null
    avatar: string | null
    location: string | null
    website: string | null
    karma: string | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect = {
    id?: boolean
    profile_num?: boolean
    created_at?: boolean
    updated_at?: boolean
    username?: boolean
    creator_user_id?: boolean
    name?: boolean
    bio?: boolean
    avatar?: boolean
    location?: boolean
    website?: boolean
    karma?: boolean
    favorites?: boolean | profiles$favoritesArgs
    users?: boolean | usersArgs
    watchlist?: boolean | profiles$watchlistArgs
    _count?: boolean | ProfilesCountOutputTypeArgs
  }


  export type profilesInclude = {
    favorites?: boolean | profiles$favoritesArgs
    users?: boolean | usersArgs
    watchlist?: boolean | profiles$watchlistArgs
    _count?: boolean | ProfilesCountOutputTypeArgs
  }

  export type profilesGetPayload<S extends boolean | null | undefined | profilesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? profiles :
    S extends undefined ? never :
    S extends { include: any } & (profilesArgs | profilesFindManyArgs)
    ? profiles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'favorites' ? Array < favoritesGetPayload<S['include'][P]>>  :
        P extends 'users' ? usersGetPayload<S['include'][P]> :
        P extends 'watchlist' ? Array < watchlistGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProfilesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (profilesArgs | profilesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'favorites' ? Array < favoritesGetPayload<S['select'][P]>>  :
        P extends 'users' ? usersGetPayload<S['select'][P]> :
        P extends 'watchlist' ? Array < watchlistGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProfilesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof profiles ? profiles[P] : never
  } 
      : profiles


  type profilesCountArgs = 
    Omit<profilesFindManyArgs, 'select' | 'include'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profilesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profilesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profiles'> extends True ? Prisma__profilesClient<profilesGetPayload<T>> : Prisma__profilesClient<profilesGetPayload<T> | null, null>

    /**
     * Find one Profiles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, profilesFindUniqueOrThrowArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profilesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profilesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profiles'> extends True ? Prisma__profilesClient<profilesGetPayload<T>> : Prisma__profilesClient<profilesGetPayload<T> | null, null>

    /**
     * Find the first Profiles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profilesFindFirstOrThrowArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profilesFindManyArgs>(
      args?: SelectSubset<T, profilesFindManyArgs>
    ): Prisma.PrismaPromise<Array<profilesGetPayload<T>>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
    **/
    create<T extends profilesCreateArgs>(
      args: SelectSubset<T, profilesCreateArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profiles = await prisma.profiles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profilesCreateManyArgs>(
      args?: SelectSubset<T, profilesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
    **/
    delete<T extends profilesDeleteArgs>(
      args: SelectSubset<T, profilesDeleteArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profilesUpdateArgs>(
      args: SelectSubset<T, profilesUpdateArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profilesDeleteManyArgs>(
      args?: SelectSubset<T, profilesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profilesUpdateManyArgs>(
      args: SelectSubset<T, profilesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
    **/
    upsert<T extends profilesUpsertArgs>(
      args: SelectSubset<T, profilesUpsertArgs>
    ): Prisma__profilesClient<profilesGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
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
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profilesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    favorites<T extends profiles$favoritesArgs= {}>(args?: Subset<T, profiles$favoritesArgs>): Prisma.PrismaPromise<Array<favoritesGetPayload<T>>| Null>;

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    watchlist<T extends profiles$watchlistArgs= {}>(args?: Subset<T, profiles$watchlistArgs>): Prisma.PrismaPromise<Array<watchlistGetPayload<T>>| Null>;

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
   * profiles base type for findUnique actions
   */
  export type profilesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUnique
   */
  export interface profilesFindUniqueArgs extends profilesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }


  /**
   * profiles base type for findFirst actions
   */
  export type profilesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }

  /**
   * profiles findFirst
   */
  export interface profilesFindFirstArgs extends profilesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * profiles findMany
   */
  export type profilesFindManyArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profilesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * profiles create
   */
  export type profilesCreateArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }


  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs = {
    /**
     * The data used to create many profiles.
     */
    data: Enumerable<profilesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profiles update
   */
  export type profilesUpdateArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }


  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
  }


  /**
   * profiles upsert
   */
  export type profilesUpsertArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }


  /**
   * profiles delete
   */
  export type profilesDeleteArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }


  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
  }


  /**
   * profiles.favorites
   */
  export type profiles$favoritesArgs = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude | null
    where?: favoritesWhereInput
    orderBy?: Enumerable<favoritesOrderByWithRelationInput>
    cursor?: favoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }


  /**
   * profiles.watchlist
   */
  export type profiles$watchlistArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    where?: watchlistWhereInput
    orderBy?: Enumerable<watchlistOrderByWithRelationInput>
    cursor?: watchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * profiles without action
   */
  export type profilesArgs = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profilesInclude | null
  }



  /**
   * Model ratings
   */


  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    rating: number | null
  }

  export type RatingsSumAggregateOutputType = {
    rating: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
    rating: number | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
    rating: number | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    profile_id: number
    podcast_id: number
    rating: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    rating?: true
  }

  export type RatingsSumAggregateInputType = {
    rating?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
    rating?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
    rating?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
    rating?: true
    _all?: true
  }

  export type RatingsAggregateArgs = {
    /**
     * Filter which ratings to aggregate.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: Enumerable<ratingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type RatingsGroupByArgs = {
    where?: ratingsWhereInput
    orderBy?: Enumerable<ratingsOrderByWithAggregationInput>
    by: RatingsScalarFieldEnum[]
    having?: ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }


  export type RatingsGroupByOutputType = {
    id: string
    profile_id: string
    podcast_id: string
    rating: number
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends RatingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type ratingsSelect = {
    id?: boolean
    profile_id?: boolean
    podcast_id?: boolean
    rating?: boolean
  }


  export type ratingsGetPayload<S extends boolean | null | undefined | ratingsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ratings :
    S extends undefined ? never :
    S extends { include: any } & (ratingsArgs | ratingsFindManyArgs)
    ? ratings 
    : S extends { select: any } & (ratingsArgs | ratingsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ratings ? ratings[P] : never
  } 
      : ratings


  type ratingsCountArgs = 
    Omit<ratingsFindManyArgs, 'select' | 'include'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface ratingsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Ratings that matches the filter.
     * @param {ratingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ratingsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ratingsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ratings'> extends True ? Prisma__ratingsClient<ratingsGetPayload<T>> : Prisma__ratingsClient<ratingsGetPayload<T> | null, null>

    /**
     * Find one Ratings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ratingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ratingsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ratingsFindUniqueOrThrowArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ratingsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ratingsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ratings'> extends True ? Prisma__ratingsClient<ratingsGetPayload<T>> : Prisma__ratingsClient<ratingsGetPayload<T> | null, null>

    /**
     * Find the first Ratings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ratingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ratingsFindFirstOrThrowArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ratingsFindManyArgs>(
      args?: SelectSubset<T, ratingsFindManyArgs>
    ): Prisma.PrismaPromise<Array<ratingsGetPayload<T>>>

    /**
     * Create a Ratings.
     * @param {ratingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
    **/
    create<T extends ratingsCreateArgs>(
      args: SelectSubset<T, ratingsCreateArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Create many Ratings.
     *     @param {ratingsCreateManyArgs} args - Arguments to create many Ratings.
     *     @example
     *     // Create many Ratings
     *     const ratings = await prisma.ratings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ratingsCreateManyArgs>(
      args?: SelectSubset<T, ratingsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ratings.
     * @param {ratingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
    **/
    delete<T extends ratingsDeleteArgs>(
      args: SelectSubset<T, ratingsDeleteArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Update one Ratings.
     * @param {ratingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ratingsUpdateArgs>(
      args: SelectSubset<T, ratingsUpdateArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Delete zero or more Ratings.
     * @param {ratingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ratingsDeleteManyArgs>(
      args?: SelectSubset<T, ratingsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ratingsUpdateManyArgs>(
      args: SelectSubset<T, ratingsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ratings.
     * @param {ratingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
    **/
    upsert<T extends ratingsUpsertArgs>(
      args: SelectSubset<T, ratingsUpsertArgs>
    ): Prisma__ratingsClient<ratingsGetPayload<T>>

    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingsCountArgs>(
      args?: Subset<T, ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsGroupByArgs} args - Group by arguments.
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
      T extends RatingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingsGroupByArgs['orderBy'] }
        : { orderBy?: RatingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ratingsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * ratings base type for findUnique actions
   */
  export type ratingsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findUnique
   */
  export interface ratingsFindUniqueArgs extends ratingsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ratings findUniqueOrThrow
   */
  export type ratingsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }


  /**
   * ratings base type for findFirst actions
   */
  export type ratingsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: Enumerable<ratingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: Enumerable<RatingsScalarFieldEnum>
  }

  /**
   * ratings findFirst
   */
  export interface ratingsFindFirstArgs extends ratingsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ratings findFirstOrThrow
   */
  export type ratingsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: Enumerable<ratingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: Enumerable<RatingsScalarFieldEnum>
  }


  /**
   * ratings findMany
   */
  export type ratingsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: Enumerable<ratingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: Enumerable<RatingsScalarFieldEnum>
  }


  /**
   * ratings create
   */
  export type ratingsCreateArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * The data needed to create a ratings.
     */
    data: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
  }


  /**
   * ratings createMany
   */
  export type ratingsCreateManyArgs = {
    /**
     * The data used to create many ratings.
     */
    data: Enumerable<ratingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ratings update
   */
  export type ratingsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * The data needed to update a ratings.
     */
    data: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
    /**
     * Choose, which ratings to update.
     */
    where: ratingsWhereUniqueInput
  }


  /**
   * ratings updateMany
   */
  export type ratingsUpdateManyArgs = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
  }


  /**
   * ratings upsert
   */
  export type ratingsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * The filter to search for the ratings to update in case it exists.
     */
    where: ratingsWhereUniqueInput
    /**
     * In case the ratings found by the `where` argument doesn't exist, create a new ratings with this data.
     */
    create: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
    /**
     * In case the ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
  }


  /**
   * ratings delete
   */
  export type ratingsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
    /**
     * Filter which ratings to delete.
     */
    where: ratingsWhereUniqueInput
  }


  /**
   * ratings deleteMany
   */
  export type ratingsDeleteManyArgs = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingsWhereInput
  }


  /**
   * ratings without action
   */
  export type ratingsArgs = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect | null
  }



  /**
   * Model watchlist
   */


  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    profile_id: string | null
    podcast_id: string | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    profile_id: number
    podcast_id: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    profile_id?: true
    podcast_id?: true
    _all?: true
  }

  export type WatchlistAggregateArgs = {
    /**
     * Filter which watchlist to aggregate.
     */
    where?: watchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlists to fetch.
     */
    orderBy?: Enumerable<watchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: watchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs = {
    where?: watchlistWhereInput
    orderBy?: Enumerable<watchlistOrderByWithAggregationInput>
    by: WatchlistScalarFieldEnum[]
    having?: watchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }


  export type WatchlistGroupByOutputType = {
    id: string
    profile_id: string
    podcast_id: string
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type watchlistSelect = {
    id?: boolean
    profile_id?: boolean
    podcast_id?: boolean
    profiles?: boolean | profilesArgs
  }


  export type watchlistInclude = {
    profiles?: boolean | profilesArgs
  }

  export type watchlistGetPayload<S extends boolean | null | undefined | watchlistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? watchlist :
    S extends undefined ? never :
    S extends { include: any } & (watchlistArgs | watchlistFindManyArgs)
    ? watchlist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profiles' ? profilesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (watchlistArgs | watchlistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profiles' ? profilesGetPayload<S['select'][P]> :  P extends keyof watchlist ? watchlist[P] : never
  } 
      : watchlist


  type watchlistCountArgs = 
    Omit<watchlistFindManyArgs, 'select' | 'include'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface watchlistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {watchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends watchlistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, watchlistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'watchlist'> extends True ? Prisma__watchlistClient<watchlistGetPayload<T>> : Prisma__watchlistClient<watchlistGetPayload<T> | null, null>

    /**
     * Find one Watchlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {watchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends watchlistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, watchlistFindUniqueOrThrowArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends watchlistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, watchlistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'watchlist'> extends True ? Prisma__watchlistClient<watchlistGetPayload<T>> : Prisma__watchlistClient<watchlistGetPayload<T> | null, null>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends watchlistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, watchlistFindFirstOrThrowArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends watchlistFindManyArgs>(
      args?: SelectSubset<T, watchlistFindManyArgs>
    ): Prisma.PrismaPromise<Array<watchlistGetPayload<T>>>

    /**
     * Create a Watchlist.
     * @param {watchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
    **/
    create<T extends watchlistCreateArgs>(
      args: SelectSubset<T, watchlistCreateArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Create many Watchlists.
     *     @param {watchlistCreateManyArgs} args - Arguments to create many Watchlists.
     *     @example
     *     // Create many Watchlists
     *     const watchlist = await prisma.watchlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends watchlistCreateManyArgs>(
      args?: SelectSubset<T, watchlistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Watchlist.
     * @param {watchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
    **/
    delete<T extends watchlistDeleteArgs>(
      args: SelectSubset<T, watchlistDeleteArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Update one Watchlist.
     * @param {watchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends watchlistUpdateArgs>(
      args: SelectSubset<T, watchlistUpdateArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Delete zero or more Watchlists.
     * @param {watchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends watchlistDeleteManyArgs>(
      args?: SelectSubset<T, watchlistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends watchlistUpdateManyArgs>(
      args: SelectSubset<T, watchlistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watchlist.
     * @param {watchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
    **/
    upsert<T extends watchlistUpsertArgs>(
      args: SelectSubset<T, watchlistUpsertArgs>
    ): Prisma__watchlistClient<watchlistGetPayload<T>>

    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends watchlistCountArgs>(
      args?: Subset<T, watchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__watchlistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    profiles<T extends profilesArgs= {}>(args?: Subset<T, profilesArgs>): Prisma__profilesClient<profilesGetPayload<T> | Null>;

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
   * watchlist base type for findUnique actions
   */
  export type watchlistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter, which watchlist to fetch.
     */
    where: watchlistWhereUniqueInput
  }

  /**
   * watchlist findUnique
   */
  export interface watchlistFindUniqueArgs extends watchlistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * watchlist findUniqueOrThrow
   */
  export type watchlistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter, which watchlist to fetch.
     */
    where: watchlistWhereUniqueInput
  }


  /**
   * watchlist base type for findFirst actions
   */
  export type watchlistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter, which watchlist to fetch.
     */
    where?: watchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlists to fetch.
     */
    orderBy?: Enumerable<watchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watchlists.
     */
    cursor?: watchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watchlists.
     */
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }

  /**
   * watchlist findFirst
   */
  export interface watchlistFindFirstArgs extends watchlistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * watchlist findFirstOrThrow
   */
  export type watchlistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter, which watchlist to fetch.
     */
    where?: watchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlists to fetch.
     */
    orderBy?: Enumerable<watchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watchlists.
     */
    cursor?: watchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watchlists.
     */
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * watchlist findMany
   */
  export type watchlistFindManyArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter, which watchlists to fetch.
     */
    where?: watchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlists to fetch.
     */
    orderBy?: Enumerable<watchlistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing watchlists.
     */
    cursor?: watchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlists.
     */
    skip?: number
    distinct?: Enumerable<WatchlistScalarFieldEnum>
  }


  /**
   * watchlist create
   */
  export type watchlistCreateArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * The data needed to create a watchlist.
     */
    data: XOR<watchlistCreateInput, watchlistUncheckedCreateInput>
  }


  /**
   * watchlist createMany
   */
  export type watchlistCreateManyArgs = {
    /**
     * The data used to create many watchlists.
     */
    data: Enumerable<watchlistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * watchlist update
   */
  export type watchlistUpdateArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * The data needed to update a watchlist.
     */
    data: XOR<watchlistUpdateInput, watchlistUncheckedUpdateInput>
    /**
     * Choose, which watchlist to update.
     */
    where: watchlistWhereUniqueInput
  }


  /**
   * watchlist updateMany
   */
  export type watchlistUpdateManyArgs = {
    /**
     * The data used to update watchlists.
     */
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyInput>
    /**
     * Filter which watchlists to update
     */
    where?: watchlistWhereInput
  }


  /**
   * watchlist upsert
   */
  export type watchlistUpsertArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * The filter to search for the watchlist to update in case it exists.
     */
    where: watchlistWhereUniqueInput
    /**
     * In case the watchlist found by the `where` argument doesn't exist, create a new watchlist with this data.
     */
    create: XOR<watchlistCreateInput, watchlistUncheckedCreateInput>
    /**
     * In case the watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<watchlistUpdateInput, watchlistUncheckedUpdateInput>
  }


  /**
   * watchlist delete
   */
  export type watchlistDeleteArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
    /**
     * Filter which watchlist to delete.
     */
    where: watchlistWhereUniqueInput
  }


  /**
   * watchlist deleteMany
   */
  export type watchlistDeleteManyArgs = {
    /**
     * Filter which watchlists to delete
     */
    where?: watchlistWhereInput
  }


  /**
   * watchlist without action
   */
  export type watchlistArgs = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FavoritesScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    podcast_id: 'podcast_id'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hash: 'hash',
    executed_at: 'executed_at'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    profile_num: 'profile_num',
    created_at: 'created_at',
    updated_at: 'updated_at',
    username: 'username',
    creator_user_id: 'creator_user_id',
    name: 'name',
    bio: 'bio',
    avatar: 'avatar',
    location: 'location',
    website: 'website',
    karma: 'karma'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    profile_num: 'profile_num',
    created_at: 'created_at',
    updated_at: 'updated_at',
    username: 'username',
    creator_user_id: 'creator_user_id',
    name: 'name',
    bio: 'bio',
    avatar: 'avatar',
    location: 'location',
    website: 'website',
    karma: 'karma'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const Provider_requestsScalarFieldEnum: {
    id: 'id',
    options: 'options'
  };

  export type Provider_requestsScalarFieldEnum = (typeof Provider_requestsScalarFieldEnum)[keyof typeof Provider_requestsScalarFieldEnum]


  export const ProvidersScalarFieldEnum: {
    id: 'id'
  };

  export type ProvidersScalarFieldEnum = (typeof ProvidersScalarFieldEnum)[keyof typeof ProvidersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    podcast_id: 'podcast_id',
    rating: 'rating'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const Refresh_tokensScalarFieldEnum: {
    refresh_token: 'refresh_token',
    created_at: 'created_at',
    expires_at: 'expires_at',
    user_id: 'user_id',
    refresh_token_hash: 'refresh_token_hash'
  };

  export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    role: 'role'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_providersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    provider_id: 'provider_id',
    provider_user_id: 'provider_user_id'
  };

  export type User_providersScalarFieldEnum = (typeof User_providersScalarFieldEnum)[keyof typeof User_providersScalarFieldEnum]


  export const User_rolesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    user_id: 'user_id',
    role: 'role'
  };

  export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum]


  export const User_security_keysScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    credential_id: 'credential_id',
    credential_public_key: 'credential_public_key',
    counter: 'counter',
    transports: 'transports',
    nickname: 'nickname'
  };

  export type User_security_keysScalarFieldEnum = (typeof User_security_keysScalarFieldEnum)[keyof typeof User_security_keysScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_seen: 'last_seen',
    disabled: 'disabled',
    display_name: 'display_name',
    avatar_url: 'avatar_url',
    locale: 'locale',
    email: 'email',
    phone_number: 'phone_number',
    password_hash: 'password_hash',
    email_verified: 'email_verified',
    phone_number_verified: 'phone_number_verified',
    new_email: 'new_email',
    otp_method_last_used: 'otp_method_last_used',
    otp_hash: 'otp_hash',
    otp_hash_expires_at: 'otp_hash_expires_at',
    default_role: 'default_role',
    is_anonymous: 'is_anonymous',
    totp_secret: 'totp_secret',
    active_mfa_type: 'active_mfa_type',
    ticket: 'ticket',
    ticket_expires_at: 'ticket_expires_at',
    metadata: 'metadata',
    webauthn_current_challenge: 'webauthn_current_challenge'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    podcast_id: 'podcast_id'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type migrationsWhereInput = {
    AND?: Enumerable<migrationsWhereInput>
    OR?: Enumerable<migrationsWhereInput>
    NOT?: Enumerable<migrationsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    hash?: StringFilter | string
    executed_at?: DateTimeNullableFilter | Date | string | null
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    executed_at?: SortOrder
  }

  export type migrationsWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    executed_at?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    hash?: StringWithAggregatesFilter | string
    executed_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type provider_requestsWhereInput = {
    AND?: Enumerable<provider_requestsWhereInput>
    OR?: Enumerable<provider_requestsWhereInput>
    NOT?: Enumerable<provider_requestsWhereInput>
    id?: UuidFilter | string
    options?: JsonNullableFilter
  }

  export type provider_requestsOrderByWithRelationInput = {
    id?: SortOrder
    options?: SortOrder
  }

  export type provider_requestsWhereUniqueInput = {
    id?: string
  }

  export type provider_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    options?: SortOrder
    _count?: provider_requestsCountOrderByAggregateInput
    _max?: provider_requestsMaxOrderByAggregateInput
    _min?: provider_requestsMinOrderByAggregateInput
  }

  export type provider_requestsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<provider_requestsScalarWhereWithAggregatesInput>
    OR?: Enumerable<provider_requestsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<provider_requestsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    options?: JsonNullableWithAggregatesFilter
  }

  export type providersWhereInput = {
    AND?: Enumerable<providersWhereInput>
    OR?: Enumerable<providersWhereInput>
    NOT?: Enumerable<providersWhereInput>
    id?: StringFilter | string
    user_providers?: User_providersListRelationFilter
  }

  export type providersOrderByWithRelationInput = {
    id?: SortOrder
    user_providers?: user_providersOrderByRelationAggregateInput
  }

  export type providersWhereUniqueInput = {
    id?: string
  }

  export type providersOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: providersCountOrderByAggregateInput
    _max?: providersMaxOrderByAggregateInput
    _min?: providersMinOrderByAggregateInput
  }

  export type providersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<providersScalarWhereWithAggregatesInput>
    OR?: Enumerable<providersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<providersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type refresh_tokensWhereInput = {
    AND?: Enumerable<refresh_tokensWhereInput>
    OR?: Enumerable<refresh_tokensWhereInput>
    NOT?: Enumerable<refresh_tokensWhereInput>
    refresh_token?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    expires_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    refresh_token_hash?: StringNullableFilter | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type refresh_tokensOrderByWithRelationInput = {
    refresh_token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type refresh_tokensWhereUniqueInput = {
    refresh_token?: string
  }

  export type refresh_tokensOrderByWithAggregationInput = {
    refresh_token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
    _count?: refresh_tokensCountOrderByAggregateInput
    _max?: refresh_tokensMaxOrderByAggregateInput
    _min?: refresh_tokensMinOrderByAggregateInput
  }

  export type refresh_tokensScalarWhereWithAggregatesInput = {
    AND?: Enumerable<refresh_tokensScalarWhereWithAggregatesInput>
    OR?: Enumerable<refresh_tokensScalarWhereWithAggregatesInput>
    NOT?: Enumerable<refresh_tokensScalarWhereWithAggregatesInput>
    refresh_token?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    expires_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: UuidWithAggregatesFilter | string
    refresh_token_hash?: StringNullableWithAggregatesFilter | string | null
  }

  export type rolesWhereInput = {
    AND?: Enumerable<rolesWhereInput>
    OR?: Enumerable<rolesWhereInput>
    NOT?: Enumerable<rolesWhereInput>
    role?: StringFilter | string
    user_roles?: User_rolesListRelationFilter
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    role?: SortOrder
    user_roles?: user_rolesOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = {
    role?: string
  }

  export type rolesOrderByWithAggregationInput = {
    role?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rolesScalarWhereWithAggregatesInput>
    OR?: Enumerable<rolesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rolesScalarWhereWithAggregatesInput>
    role?: StringWithAggregatesFilter | string
  }

  export type user_providersWhereInput = {
    AND?: Enumerable<user_providersWhereInput>
    OR?: Enumerable<user_providersWhereInput>
    NOT?: Enumerable<user_providersWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    access_token?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    provider_id?: StringFilter | string
    provider_user_id?: StringFilter | string
    providers?: XOR<ProvidersRelationFilter, providersWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type user_providersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    provider_id?: SortOrder
    provider_user_id?: SortOrder
    providers?: providersOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_providersWhereUniqueInput = {
    id?: string
    provider_id_provider_user_id?: user_providersProvider_idProvider_user_idCompoundUniqueInput
    user_id_provider_id?: user_providersUser_idProvider_idCompoundUniqueInput
  }

  export type user_providersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    provider_id?: SortOrder
    provider_user_id?: SortOrder
    _count?: user_providersCountOrderByAggregateInput
    _max?: user_providersMaxOrderByAggregateInput
    _min?: user_providersMinOrderByAggregateInput
  }

  export type user_providersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_providersScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_providersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_providersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: UuidWithAggregatesFilter | string
    access_token?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    provider_id?: StringWithAggregatesFilter | string
    provider_user_id?: StringWithAggregatesFilter | string
  }

  export type user_rolesWhereInput = {
    AND?: Enumerable<user_rolesWhereInput>
    OR?: Enumerable<user_rolesWhereInput>
    NOT?: Enumerable<user_rolesWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    role?: StringFilter | string
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type user_rolesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    roles?: rolesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_rolesWhereUniqueInput = {
    id?: string
    user_id_role?: user_rolesUser_idRoleCompoundUniqueInput
  }

  export type user_rolesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    _count?: user_rolesCountOrderByAggregateInput
    _max?: user_rolesMaxOrderByAggregateInput
    _min?: user_rolesMinOrderByAggregateInput
  }

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_rolesScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_rolesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_rolesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: UuidWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
  }

  export type user_security_keysWhereInput = {
    AND?: Enumerable<user_security_keysWhereInput>
    OR?: Enumerable<user_security_keysWhereInput>
    NOT?: Enumerable<user_security_keysWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    credential_id?: StringFilter | string
    credential_public_key?: BytesNullableFilter | Buffer | null
    counter?: BigIntFilter | bigint | number
    transports?: StringFilter | string
    nickname?: StringNullableFilter | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type user_security_keysOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    transports?: SortOrder
    nickname?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_security_keysWhereUniqueInput = {
    id?: string
    credential_id?: string
  }

  export type user_security_keysOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    transports?: SortOrder
    nickname?: SortOrder
    _count?: user_security_keysCountOrderByAggregateInput
    _avg?: user_security_keysAvgOrderByAggregateInput
    _max?: user_security_keysMaxOrderByAggregateInput
    _min?: user_security_keysMinOrderByAggregateInput
    _sum?: user_security_keysSumOrderByAggregateInput
  }

  export type user_security_keysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_security_keysScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_security_keysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_security_keysScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidWithAggregatesFilter | string
    credential_id?: StringWithAggregatesFilter | string
    credential_public_key?: BytesNullableWithAggregatesFilter | Buffer | null
    counter?: BigIntWithAggregatesFilter | bigint | number
    transports?: StringWithAggregatesFilter | string
    nickname?: StringNullableWithAggregatesFilter | string | null
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    last_seen?: DateTimeNullableFilter | Date | string | null
    disabled?: BoolFilter | boolean
    display_name?: StringFilter | string
    avatar_url?: StringFilter | string
    locale?: StringFilter | string
    email?: StringNullableFilter | string | null
    phone_number?: StringNullableFilter | string | null
    password_hash?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    phone_number_verified?: BoolFilter | boolean
    new_email?: StringNullableFilter | string | null
    otp_method_last_used?: StringNullableFilter | string | null
    otp_hash?: StringNullableFilter | string | null
    otp_hash_expires_at?: DateTimeFilter | Date | string
    default_role?: StringFilter | string
    is_anonymous?: BoolFilter | boolean
    totp_secret?: StringNullableFilter | string | null
    active_mfa_type?: StringNullableFilter | string | null
    ticket?: StringNullableFilter | string | null
    ticket_expires_at?: DateTimeFilter | Date | string
    metadata?: JsonNullableFilter
    webauthn_current_challenge?: StringNullableFilter | string | null
    refresh_tokens?: Refresh_tokensListRelationFilter
    user_providers?: User_providersListRelationFilter
    user_roles?: User_rolesListRelationFilter
    user_security_keys?: User_security_keysListRelationFilter
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
    profile?: XOR<ProfileRelationFilter, profileWhereInput> | null
    profiles?: XOR<ProfilesRelationFilter, profilesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
    disabled?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    phone_number_verified?: SortOrder
    new_email?: SortOrder
    otp_method_last_used?: SortOrder
    otp_hash?: SortOrder
    otp_hash_expires_at?: SortOrder
    default_role?: SortOrder
    is_anonymous?: SortOrder
    totp_secret?: SortOrder
    active_mfa_type?: SortOrder
    ticket?: SortOrder
    ticket_expires_at?: SortOrder
    metadata?: SortOrder
    webauthn_current_challenge?: SortOrder
    refresh_tokens?: refresh_tokensOrderByRelationAggregateInput
    user_providers?: user_providersOrderByRelationAggregateInput
    user_roles?: user_rolesOrderByRelationAggregateInput
    user_security_keys?: user_security_keysOrderByRelationAggregateInput
    roles?: rolesOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
    profiles?: profilesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    id?: string
    email?: string
    phone_number?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
    disabled?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    phone_number_verified?: SortOrder
    new_email?: SortOrder
    otp_method_last_used?: SortOrder
    otp_hash?: SortOrder
    otp_hash_expires_at?: SortOrder
    default_role?: SortOrder
    is_anonymous?: SortOrder
    totp_secret?: SortOrder
    active_mfa_type?: SortOrder
    ticket?: SortOrder
    ticket_expires_at?: SortOrder
    metadata?: SortOrder
    webauthn_current_challenge?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    last_seen?: DateTimeNullableWithAggregatesFilter | Date | string | null
    disabled?: BoolWithAggregatesFilter | boolean
    display_name?: StringWithAggregatesFilter | string
    avatar_url?: StringWithAggregatesFilter | string
    locale?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    phone_number?: StringNullableWithAggregatesFilter | string | null
    password_hash?: StringNullableWithAggregatesFilter | string | null
    email_verified?: BoolWithAggregatesFilter | boolean
    phone_number_verified?: BoolWithAggregatesFilter | boolean
    new_email?: StringNullableWithAggregatesFilter | string | null
    otp_method_last_used?: StringNullableWithAggregatesFilter | string | null
    otp_hash?: StringNullableWithAggregatesFilter | string | null
    otp_hash_expires_at?: DateTimeWithAggregatesFilter | Date | string
    default_role?: StringWithAggregatesFilter | string
    is_anonymous?: BoolWithAggregatesFilter | boolean
    totp_secret?: StringNullableWithAggregatesFilter | string | null
    active_mfa_type?: StringNullableWithAggregatesFilter | string | null
    ticket?: StringNullableWithAggregatesFilter | string | null
    ticket_expires_at?: DateTimeWithAggregatesFilter | Date | string
    metadata?: JsonNullableWithAggregatesFilter
    webauthn_current_challenge?: StringNullableWithAggregatesFilter | string | null
  }

  export type favoritesWhereInput = {
    AND?: Enumerable<favoritesWhereInput>
    OR?: Enumerable<favoritesWhereInput>
    NOT?: Enumerable<favoritesWhereInput>
    id?: UuidFilter | string
    profile_id?: UuidFilter | string
    podcast_id?: UuidFilter | string
    profiles?: XOR<ProfilesRelationFilter, profilesWhereInput>
  }

  export type favoritesOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    profiles?: profilesOrderByWithRelationInput
  }

  export type favoritesWhereUniqueInput = {
    id?: string
  }

  export type favoritesOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    _count?: favoritesCountOrderByAggregateInput
    _max?: favoritesMaxOrderByAggregateInput
    _min?: favoritesMinOrderByAggregateInput
  }

  export type favoritesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<favoritesScalarWhereWithAggregatesInput>
    OR?: Enumerable<favoritesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<favoritesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    profile_id?: UuidWithAggregatesFilter | string
    podcast_id?: UuidWithAggregatesFilter | string
  }

  export type profileWhereInput = {
    AND?: Enumerable<profileWhereInput>
    OR?: Enumerable<profileWhereInput>
    NOT?: Enumerable<profileWhereInput>
    id?: UuidFilter | string
    profile_num?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    username?: StringFilter | string
    creator_user_id?: UuidFilter | string
    name?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
    karma?: StringNullableFilter | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type profileOrderByWithRelationInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type profileWhereUniqueInput = {
    id?: string
    profile_num?: number
    username?: string
    creator_user_id?: string
  }

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profileScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    profile_num?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    creator_user_id?: UuidWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    website?: StringNullableWithAggregatesFilter | string | null
    karma?: StringNullableWithAggregatesFilter | string | null
  }

  export type profilesWhereInput = {
    AND?: Enumerable<profilesWhereInput>
    OR?: Enumerable<profilesWhereInput>
    NOT?: Enumerable<profilesWhereInput>
    id?: UuidFilter | string
    profile_num?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    username?: StringFilter | string
    creator_user_id?: UuidFilter | string
    name?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
    karma?: StringNullableFilter | string | null
    favorites?: FavoritesListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    watchlist?: WatchlistListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
    favorites?: favoritesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    watchlist?: watchlistOrderByRelationAggregateInput
  }

  export type profilesWhereUniqueInput = {
    id?: string
    profile_num?: number
    username?: string
    creator_user_id?: string
  }

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profilesScalarWhereWithAggregatesInput>
    OR?: Enumerable<profilesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profilesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    profile_num?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    creator_user_id?: UuidWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    website?: StringNullableWithAggregatesFilter | string | null
    karma?: StringNullableWithAggregatesFilter | string | null
  }

  export type ratingsWhereInput = {
    AND?: Enumerable<ratingsWhereInput>
    OR?: Enumerable<ratingsWhereInput>
    NOT?: Enumerable<ratingsWhereInput>
    id?: UuidFilter | string
    profile_id?: UuidFilter | string
    podcast_id?: UuidFilter | string
    rating?: IntFilter | number
  }

  export type ratingsOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    rating?: SortOrder
  }

  export type ratingsWhereUniqueInput = {
    id?: string
    profile_id_podcast_id?: ratingsProfile_idPodcast_idCompoundUniqueInput
  }

  export type ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    rating?: SortOrder
    _count?: ratingsCountOrderByAggregateInput
    _avg?: ratingsAvgOrderByAggregateInput
    _max?: ratingsMaxOrderByAggregateInput
    _min?: ratingsMinOrderByAggregateInput
    _sum?: ratingsSumOrderByAggregateInput
  }

  export type ratingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ratingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ratingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ratingsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    profile_id?: UuidWithAggregatesFilter | string
    podcast_id?: UuidWithAggregatesFilter | string
    rating?: IntWithAggregatesFilter | number
  }

  export type watchlistWhereInput = {
    AND?: Enumerable<watchlistWhereInput>
    OR?: Enumerable<watchlistWhereInput>
    NOT?: Enumerable<watchlistWhereInput>
    id?: UuidFilter | string
    profile_id?: UuidFilter | string
    podcast_id?: UuidFilter | string
    profiles?: XOR<ProfilesRelationFilter, profilesWhereInput>
  }

  export type watchlistOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    profiles?: profilesOrderByWithRelationInput
  }

  export type watchlistWhereUniqueInput = {
    id?: string
  }

  export type watchlistOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    _count?: watchlistCountOrderByAggregateInput
    _max?: watchlistMaxOrderByAggregateInput
    _min?: watchlistMinOrderByAggregateInput
  }

  export type watchlistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<watchlistScalarWhereWithAggregatesInput>
    OR?: Enumerable<watchlistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<watchlistScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    profile_id?: UuidWithAggregatesFilter | string
    podcast_id?: UuidWithAggregatesFilter | string
  }

  export type migrationsCreateInput = {
    id: number
    name: string
    hash: string
    executed_at?: Date | string | null
  }

  export type migrationsUncheckedCreateInput = {
    id: number
    name: string
    hash: string
    executed_at?: Date | string | null
  }

  export type migrationsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsCreateManyInput = {
    id: number
    name: string
    hash: string
    executed_at?: Date | string | null
  }

  export type migrationsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type provider_requestsCreateInput = {
    id: string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsUncheckedCreateInput = {
    id: string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsCreateManyInput = {
    id: string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type provider_requestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type providersCreateInput = {
    id: string
    user_providers?: user_providersCreateNestedManyWithoutProvidersInput
  }

  export type providersUncheckedCreateInput = {
    id: string
    user_providers?: user_providersUncheckedCreateNestedManyWithoutProvidersInput
  }

  export type providersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_providers?: user_providersUpdateManyWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_providers?: user_providersUncheckedUpdateManyWithoutProvidersNestedInput
  }

  export type providersCreateManyInput = {
    id: string
  }

  export type providersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type providersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type refresh_tokensCreateInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    refresh_token_hash?: string | null
    users: usersCreateNestedOneWithoutRefresh_tokensInput
  }

  export type refresh_tokensUncheckedCreateInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    user_id: string
    refresh_token_hash?: string | null
  }

  export type refresh_tokensUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutRefresh_tokensNestedInput
  }

  export type refresh_tokensUncheckedUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensCreateManyInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    user_id: string
    refresh_token_hash?: string | null
  }

  export type refresh_tokensUpdateManyMutationInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateManyInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesCreateInput = {
    role: string
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    role: string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    role: string
  }

  export type rolesUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type user_providersCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    access_token: string
    refresh_token?: string | null
    provider_user_id: string
    providers: providersCreateNestedOneWithoutUser_providersInput
    users: usersCreateNestedOneWithoutUser_providersInput
  }

  export type user_providersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    access_token: string
    refresh_token?: string | null
    provider_id: string
    provider_user_id: string
  }

  export type user_providersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
    providers?: providersUpdateOneRequiredWithoutUser_providersNestedInput
    users?: usersUpdateOneRequiredWithoutUser_providersNestedInput
  }

  export type user_providersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: StringFieldUpdateOperationsInput | string
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_providersCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    access_token: string
    refresh_token?: string | null
    provider_id: string
    provider_user_id: string
  }

  export type user_providersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_providersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: StringFieldUpdateOperationsInput | string
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesCreateInput = {
    id?: string
    created_at?: Date | string
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    user_id: string
    role: string
  }

  export type user_rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesCreateManyInput = {
    id?: string
    created_at?: Date | string
    user_id: string
    role: string
  }

  export type user_rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type user_security_keysCreateInput = {
    id?: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
    users: usersCreateNestedOneWithoutUser_security_keysInput
  }

  export type user_security_keysUncheckedCreateInput = {
    id?: string
    user_id: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
  }

  export type user_security_keysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUser_security_keysNestedInput
  }

  export type user_security_keysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_security_keysCreateManyInput = {
    id?: string
    user_id: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
  }

  export type user_security_keysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_security_keysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritesCreateInput = {
    id?: string
    podcast_id: string
    profiles: profilesCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateInput = {
    id?: string
    profile_id: string
    podcast_id: string
  }

  export type favoritesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    profiles?: profilesUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type favoritesCreateManyInput = {
    id?: string
    profile_id: string
    podcast_id: string
  }

  export type favoritesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type favoritesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type profileCreateInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    users: usersCreateNestedOneWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
  }

  export type profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileCreateManyInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
  }

  export type profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesCreateInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesCreateNestedManyWithoutProfilesInput
    users: usersCreateNestedOneWithoutProfilesInput
    watchlist?: watchlistCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesUncheckedCreateNestedManyWithoutProfilesInput
    watchlist?: watchlistUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUpdateManyWithoutProfilesNestedInput
    users?: usersUpdateOneRequiredWithoutProfilesNestedInput
    watchlist?: watchlistUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUncheckedUpdateManyWithoutProfilesNestedInput
    watchlist?: watchlistUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type profilesCreateManyInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
  }

  export type profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsCreateInput = {
    id?: string
    profile_id: string
    podcast_id: string
    rating: number
  }

  export type ratingsUncheckedCreateInput = {
    id?: string
    profile_id: string
    podcast_id: string
    rating: number
  }

  export type ratingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ratingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ratingsCreateManyInput = {
    id?: string
    profile_id: string
    podcast_id: string
    rating: number
  }

  export type ratingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ratingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type watchlistCreateInput = {
    id: string
    podcast_id: string
    profiles: profilesCreateNestedOneWithoutWatchlistInput
  }

  export type watchlistUncheckedCreateInput = {
    id: string
    profile_id: string
    podcast_id: string
  }

  export type watchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
    profiles?: profilesUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type watchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type watchlistCreateManyInput = {
    id: string
    profile_id: string
    podcast_id: string
  }

  export type watchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type watchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
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
    mode?: QueryMode
    not?: NestedStringFilter | string
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

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    executed_at?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    executed_at?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    executed_at?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type provider_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    options?: SortOrder
  }

  export type provider_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type provider_requestsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type User_providersListRelationFilter = {
    every?: user_providersWhereInput
    some?: user_providersWhereInput
    none?: user_providersWhereInput
  }

  export type user_providersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type providersCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type providersMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type providersMinOrderByAggregateInput = {
    id?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type refresh_tokensCountOrderByAggregateInput = {
    refresh_token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
  }

  export type refresh_tokensMaxOrderByAggregateInput = {
    refresh_token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
  }

  export type refresh_tokensMinOrderByAggregateInput = {
    refresh_token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    refresh_token_hash?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type User_rolesListRelationFilter = {
    every?: user_rolesWhereInput
    some?: user_rolesWhereInput
    none?: user_rolesWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type user_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    role?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    role?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    role?: SortOrder
  }

  export type ProvidersRelationFilter = {
    is?: providersWhereInput
    isNot?: providersWhereInput
  }

  export type user_providersProvider_idProvider_user_idCompoundUniqueInput = {
    provider_id: string
    provider_user_id: string
  }

  export type user_providersUser_idProvider_idCompoundUniqueInput = {
    user_id: string
    provider_id: string
  }

  export type user_providersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    provider_id?: SortOrder
    provider_user_id?: SortOrder
  }

  export type user_providersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    provider_id?: SortOrder
    provider_user_id?: SortOrder
  }

  export type user_providersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    provider_id?: SortOrder
    provider_user_id?: SortOrder
  }

  export type RolesRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type user_rolesUser_idRoleCompoundUniqueInput = {
    user_id: string
    role: string
  }

  export type user_rolesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type user_rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type user_rolesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type user_security_keysCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    transports?: SortOrder
    nickname?: SortOrder
  }

  export type user_security_keysAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type user_security_keysMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    transports?: SortOrder
    nickname?: SortOrder
  }

  export type user_security_keysMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    credential_id?: SortOrder
    credential_public_key?: SortOrder
    counter?: SortOrder
    transports?: SortOrder
    nickname?: SortOrder
  }

  export type user_security_keysSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type Refresh_tokensListRelationFilter = {
    every?: refresh_tokensWhereInput
    some?: refresh_tokensWhereInput
    none?: refresh_tokensWhereInput
  }

  export type User_security_keysListRelationFilter = {
    every?: user_security_keysWhereInput
    some?: user_security_keysWhereInput
    none?: user_security_keysWhereInput
  }

  export type ProfileRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type ProfilesRelationFilter = {
    is?: profilesWhereInput
    isNot?: profilesWhereInput
  }

  export type refresh_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_security_keysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
    disabled?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    phone_number_verified?: SortOrder
    new_email?: SortOrder
    otp_method_last_used?: SortOrder
    otp_hash?: SortOrder
    otp_hash_expires_at?: SortOrder
    default_role?: SortOrder
    is_anonymous?: SortOrder
    totp_secret?: SortOrder
    active_mfa_type?: SortOrder
    ticket?: SortOrder
    ticket_expires_at?: SortOrder
    metadata?: SortOrder
    webauthn_current_challenge?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
    disabled?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    phone_number_verified?: SortOrder
    new_email?: SortOrder
    otp_method_last_used?: SortOrder
    otp_hash?: SortOrder
    otp_hash_expires_at?: SortOrder
    default_role?: SortOrder
    is_anonymous?: SortOrder
    totp_secret?: SortOrder
    active_mfa_type?: SortOrder
    ticket?: SortOrder
    ticket_expires_at?: SortOrder
    webauthn_current_challenge?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
    disabled?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    email_verified?: SortOrder
    phone_number_verified?: SortOrder
    new_email?: SortOrder
    otp_method_last_used?: SortOrder
    otp_hash?: SortOrder
    otp_hash_expires_at?: SortOrder
    default_role?: SortOrder
    is_anonymous?: SortOrder
    totp_secret?: SortOrder
    active_mfa_type?: SortOrder
    ticket?: SortOrder
    ticket_expires_at?: SortOrder
    webauthn_current_challenge?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type favoritesCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type favoritesMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type favoritesMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    profile_num?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
    profile_num?: SortOrder
  }

  export type FavoritesListRelationFilter = {
    every?: favoritesWhereInput
    some?: favoritesWhereInput
    none?: favoritesWhereInput
  }

  export type WatchlistListRelationFilter = {
    every?: watchlistWhereInput
    some?: watchlistWhereInput
    none?: watchlistWhereInput
  }

  export type favoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type watchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    profile_num?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    profile_num?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    username?: SortOrder
    creator_user_id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    website?: SortOrder
    karma?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    profile_num?: SortOrder
  }

  export type ratingsProfile_idPodcast_idCompoundUniqueInput = {
    profile_id: string
    podcast_id: string
  }

  export type ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    rating?: SortOrder
  }

  export type ratingsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    rating?: SortOrder
  }

  export type ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
    rating?: SortOrder
  }

  export type ratingsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type watchlistCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type watchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type watchlistMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    podcast_id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_providersCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutProvidersInput>, Enumerable<user_providersUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutProvidersInput>
    createMany?: user_providersCreateManyProvidersInputEnvelope
    connect?: Enumerable<user_providersWhereUniqueInput>
  }

  export type user_providersUncheckedCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutProvidersInput>, Enumerable<user_providersUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutProvidersInput>
    createMany?: user_providersCreateManyProvidersInputEnvelope
    connect?: Enumerable<user_providersWhereUniqueInput>
  }

  export type user_providersUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutProvidersInput>, Enumerable<user_providersUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<user_providersUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: user_providersCreateManyProvidersInputEnvelope
    set?: Enumerable<user_providersWhereUniqueInput>
    disconnect?: Enumerable<user_providersWhereUniqueInput>
    delete?: Enumerable<user_providersWhereUniqueInput>
    connect?: Enumerable<user_providersWhereUniqueInput>
    update?: Enumerable<user_providersUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<user_providersUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<user_providersScalarWhereInput>
  }

  export type user_providersUncheckedUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutProvidersInput>, Enumerable<user_providersUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<user_providersUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: user_providersCreateManyProvidersInputEnvelope
    set?: Enumerable<user_providersWhereUniqueInput>
    disconnect?: Enumerable<user_providersWhereUniqueInput>
    delete?: Enumerable<user_providersWhereUniqueInput>
    connect?: Enumerable<user_providersWhereUniqueInput>
    update?: Enumerable<user_providersUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<user_providersUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<user_providersScalarWhereInput>
  }

  export type usersCreateNestedOneWithoutRefresh_tokensInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutRefresh_tokensNestedInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    upsert?: usersUpsertWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type user_rolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutRolesInput>, Enumerable<user_rolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutRolesInput>
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: Enumerable<user_rolesWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<usersCreateWithoutRolesInput>, Enumerable<usersUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutRolesInput>
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type user_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutRolesInput>, Enumerable<user_rolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutRolesInput>
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: Enumerable<user_rolesWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<usersCreateWithoutRolesInput>, Enumerable<usersUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutRolesInput>
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type user_rolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutRolesInput>, Enumerable<user_rolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<user_rolesUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: Enumerable<user_rolesWhereUniqueInput>
    disconnect?: Enumerable<user_rolesWhereUniqueInput>
    delete?: Enumerable<user_rolesWhereUniqueInput>
    connect?: Enumerable<user_rolesWhereUniqueInput>
    update?: Enumerable<user_rolesUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<user_rolesUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<user_rolesScalarWhereInput>
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutRolesInput>, Enumerable<usersUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: usersCreateManyRolesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutRolesInput>, Enumerable<user_rolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<user_rolesUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: Enumerable<user_rolesWhereUniqueInput>
    disconnect?: Enumerable<user_rolesWhereUniqueInput>
    delete?: Enumerable<user_rolesWhereUniqueInput>
    connect?: Enumerable<user_rolesWhereUniqueInput>
    update?: Enumerable<user_rolesUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<user_rolesUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<user_rolesScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutRolesInput>, Enumerable<usersUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: usersCreateManyRolesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type providersCreateNestedOneWithoutUser_providersInput = {
    create?: XOR<providersCreateWithoutUser_providersInput, providersUncheckedCreateWithoutUser_providersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUser_providersInput
    connect?: providersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_providersInput = {
    create?: XOR<usersCreateWithoutUser_providersInput, usersUncheckedCreateWithoutUser_providersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_providersInput
    connect?: usersWhereUniqueInput
  }

  export type providersUpdateOneRequiredWithoutUser_providersNestedInput = {
    create?: XOR<providersCreateWithoutUser_providersInput, providersUncheckedCreateWithoutUser_providersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUser_providersInput
    upsert?: providersUpsertWithoutUser_providersInput
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutUser_providersInput, providersUncheckedUpdateWithoutUser_providersInput>
  }

  export type usersUpdateOneRequiredWithoutUser_providersNestedInput = {
    create?: XOR<usersCreateWithoutUser_providersInput, usersUncheckedCreateWithoutUser_providersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_providersInput
    upsert?: usersUpsertWithoutUser_providersInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutUser_providersInput, usersUncheckedUpdateWithoutUser_providersInput>
  }

  export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    upsert?: rolesUpsertWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersCreateNestedOneWithoutUser_security_keysInput = {
    create?: XOR<usersCreateWithoutUser_security_keysInput, usersUncheckedCreateWithoutUser_security_keysInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_security_keysInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type usersUpdateOneRequiredWithoutUser_security_keysNestedInput = {
    create?: XOR<usersCreateWithoutUser_security_keysInput, usersUncheckedCreateWithoutUser_security_keysInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_security_keysInput
    upsert?: usersUpsertWithoutUser_security_keysInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutUser_security_keysInput, usersUncheckedUpdateWithoutUser_security_keysInput>
  }

  export type refresh_tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<refresh_tokensCreateWithoutUsersInput>, Enumerable<refresh_tokensUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<refresh_tokensCreateOrConnectWithoutUsersInput>
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: Enumerable<refresh_tokensWhereUniqueInput>
  }

  export type user_providersCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutUsersInput>, Enumerable<user_providersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutUsersInput>
    createMany?: user_providersCreateManyUsersInputEnvelope
    connect?: Enumerable<user_providersWhereUniqueInput>
  }

  export type user_rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutUsersInput>, Enumerable<user_rolesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutUsersInput>
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: Enumerable<user_rolesWhereUniqueInput>
  }

  export type user_security_keysCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_security_keysCreateWithoutUsersInput>, Enumerable<user_security_keysUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_security_keysCreateOrConnectWithoutUsersInput>
    createMany?: user_security_keysCreateManyUsersInputEnvelope
    connect?: Enumerable<user_security_keysWhereUniqueInput>
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutUsersInput = {
    create?: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profileCreateOrConnectWithoutUsersInput
    connect?: profileWhereUniqueInput
  }

  export type profilesCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type refresh_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<refresh_tokensCreateWithoutUsersInput>, Enumerable<refresh_tokensUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<refresh_tokensCreateOrConnectWithoutUsersInput>
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: Enumerable<refresh_tokensWhereUniqueInput>
  }

  export type user_providersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutUsersInput>, Enumerable<user_providersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutUsersInput>
    createMany?: user_providersCreateManyUsersInputEnvelope
    connect?: Enumerable<user_providersWhereUniqueInput>
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutUsersInput>, Enumerable<user_rolesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutUsersInput>
    createMany?: user_rolesCreateManyUsersInputEnvelope
    connect?: Enumerable<user_rolesWhereUniqueInput>
  }

  export type user_security_keysUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<user_security_keysCreateWithoutUsersInput>, Enumerable<user_security_keysUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_security_keysCreateOrConnectWithoutUsersInput>
    createMany?: user_security_keysCreateManyUsersInputEnvelope
    connect?: Enumerable<user_security_keysWhereUniqueInput>
  }

  export type profileUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profileCreateOrConnectWithoutUsersInput
    connect?: profileWhereUniqueInput
  }

  export type profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type refresh_tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<refresh_tokensCreateWithoutUsersInput>, Enumerable<refresh_tokensUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<refresh_tokensCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<refresh_tokensUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: Enumerable<refresh_tokensWhereUniqueInput>
    disconnect?: Enumerable<refresh_tokensWhereUniqueInput>
    delete?: Enumerable<refresh_tokensWhereUniqueInput>
    connect?: Enumerable<refresh_tokensWhereUniqueInput>
    update?: Enumerable<refresh_tokensUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<refresh_tokensUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<refresh_tokensScalarWhereInput>
  }

  export type user_providersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutUsersInput>, Enumerable<user_providersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_providersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_providersCreateManyUsersInputEnvelope
    set?: Enumerable<user_providersWhereUniqueInput>
    disconnect?: Enumerable<user_providersWhereUniqueInput>
    delete?: Enumerable<user_providersWhereUniqueInput>
    connect?: Enumerable<user_providersWhereUniqueInput>
    update?: Enumerable<user_providersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_providersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_providersScalarWhereInput>
  }

  export type user_rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutUsersInput>, Enumerable<user_rolesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_rolesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: Enumerable<user_rolesWhereUniqueInput>
    disconnect?: Enumerable<user_rolesWhereUniqueInput>
    delete?: Enumerable<user_rolesWhereUniqueInput>
    connect?: Enumerable<user_rolesWhereUniqueInput>
    update?: Enumerable<user_rolesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_rolesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_rolesScalarWhereInput>
  }

  export type user_security_keysUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_security_keysCreateWithoutUsersInput>, Enumerable<user_security_keysUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_security_keysCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_security_keysUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_security_keysCreateManyUsersInputEnvelope
    set?: Enumerable<user_security_keysWhereUniqueInput>
    disconnect?: Enumerable<user_security_keysWhereUniqueInput>
    delete?: Enumerable<user_security_keysWhereUniqueInput>
    connect?: Enumerable<user_security_keysWhereUniqueInput>
    update?: Enumerable<user_security_keysUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_security_keysUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_security_keysScalarWhereInput>
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type profileUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profileCreateOrConnectWithoutUsersInput
    upsert?: profileUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutUsersInput, profileUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<refresh_tokensCreateWithoutUsersInput>, Enumerable<refresh_tokensUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<refresh_tokensCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<refresh_tokensUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: Enumerable<refresh_tokensWhereUniqueInput>
    disconnect?: Enumerable<refresh_tokensWhereUniqueInput>
    delete?: Enumerable<refresh_tokensWhereUniqueInput>
    connect?: Enumerable<refresh_tokensWhereUniqueInput>
    update?: Enumerable<refresh_tokensUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<refresh_tokensUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<refresh_tokensScalarWhereInput>
  }

  export type user_providersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_providersCreateWithoutUsersInput>, Enumerable<user_providersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_providersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_providersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_providersCreateManyUsersInputEnvelope
    set?: Enumerable<user_providersWhereUniqueInput>
    disconnect?: Enumerable<user_providersWhereUniqueInput>
    delete?: Enumerable<user_providersWhereUniqueInput>
    connect?: Enumerable<user_providersWhereUniqueInput>
    update?: Enumerable<user_providersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_providersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_providersScalarWhereInput>
  }

  export type user_rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_rolesCreateWithoutUsersInput>, Enumerable<user_rolesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_rolesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_rolesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_rolesCreateManyUsersInputEnvelope
    set?: Enumerable<user_rolesWhereUniqueInput>
    disconnect?: Enumerable<user_rolesWhereUniqueInput>
    delete?: Enumerable<user_rolesWhereUniqueInput>
    connect?: Enumerable<user_rolesWhereUniqueInput>
    update?: Enumerable<user_rolesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_rolesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_rolesScalarWhereInput>
  }

  export type user_security_keysUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<user_security_keysCreateWithoutUsersInput>, Enumerable<user_security_keysUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<user_security_keysCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<user_security_keysUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: user_security_keysCreateManyUsersInputEnvelope
    set?: Enumerable<user_security_keysWhereUniqueInput>
    disconnect?: Enumerable<user_security_keysWhereUniqueInput>
    delete?: Enumerable<user_security_keysWhereUniqueInput>
    connect?: Enumerable<user_security_keysWhereUniqueInput>
    update?: Enumerable<user_security_keysUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<user_security_keysUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<user_security_keysScalarWhereInput>
  }

  export type profileUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profileCreateOrConnectWithoutUsersInput
    upsert?: profileUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutUsersInput, profileUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<profilesCreateWithoutFavoritesInput, profilesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: profilesCreateOrConnectWithoutFavoritesInput
    connect?: profilesWhereUniqueInput
  }

  export type profilesUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<profilesCreateWithoutFavoritesInput, profilesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: profilesCreateOrConnectWithoutFavoritesInput
    upsert?: profilesUpsertWithoutFavoritesInput
    connect?: profilesWhereUniqueInput
    update?: XOR<profilesUpdateWithoutFavoritesInput, profilesUncheckedUpdateWithoutFavoritesInput>
  }

  export type usersCreateNestedOneWithoutProfileInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    upsert?: usersUpsertWithoutProfileInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
  }

  export type favoritesCreateNestedManyWithoutProfilesInput = {
    create?: XOR<Enumerable<favoritesCreateWithoutProfilesInput>, Enumerable<favoritesUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<favoritesCreateOrConnectWithoutProfilesInput>
    createMany?: favoritesCreateManyProfilesInputEnvelope
    connect?: Enumerable<favoritesWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput
    connect?: usersWhereUniqueInput
  }

  export type watchlistCreateNestedManyWithoutProfilesInput = {
    create?: XOR<Enumerable<watchlistCreateWithoutProfilesInput>, Enumerable<watchlistUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<watchlistCreateOrConnectWithoutProfilesInput>
    createMany?: watchlistCreateManyProfilesInputEnvelope
    connect?: Enumerable<watchlistWhereUniqueInput>
  }

  export type favoritesUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<Enumerable<favoritesCreateWithoutProfilesInput>, Enumerable<favoritesUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<favoritesCreateOrConnectWithoutProfilesInput>
    createMany?: favoritesCreateManyProfilesInputEnvelope
    connect?: Enumerable<favoritesWhereUniqueInput>
  }

  export type watchlistUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<Enumerable<watchlistCreateWithoutProfilesInput>, Enumerable<watchlistUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<watchlistCreateOrConnectWithoutProfilesInput>
    createMany?: watchlistCreateManyProfilesInputEnvelope
    connect?: Enumerable<watchlistWhereUniqueInput>
  }

  export type favoritesUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<Enumerable<favoritesCreateWithoutProfilesInput>, Enumerable<favoritesUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<favoritesCreateOrConnectWithoutProfilesInput>
    upsert?: Enumerable<favoritesUpsertWithWhereUniqueWithoutProfilesInput>
    createMany?: favoritesCreateManyProfilesInputEnvelope
    set?: Enumerable<favoritesWhereUniqueInput>
    disconnect?: Enumerable<favoritesWhereUniqueInput>
    delete?: Enumerable<favoritesWhereUniqueInput>
    connect?: Enumerable<favoritesWhereUniqueInput>
    update?: Enumerable<favoritesUpdateWithWhereUniqueWithoutProfilesInput>
    updateMany?: Enumerable<favoritesUpdateManyWithWhereWithoutProfilesInput>
    deleteMany?: Enumerable<favoritesScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput
    upsert?: usersUpsertWithoutProfilesInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
  }

  export type watchlistUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<Enumerable<watchlistCreateWithoutProfilesInput>, Enumerable<watchlistUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<watchlistCreateOrConnectWithoutProfilesInput>
    upsert?: Enumerable<watchlistUpsertWithWhereUniqueWithoutProfilesInput>
    createMany?: watchlistCreateManyProfilesInputEnvelope
    set?: Enumerable<watchlistWhereUniqueInput>
    disconnect?: Enumerable<watchlistWhereUniqueInput>
    delete?: Enumerable<watchlistWhereUniqueInput>
    connect?: Enumerable<watchlistWhereUniqueInput>
    update?: Enumerable<watchlistUpdateWithWhereUniqueWithoutProfilesInput>
    updateMany?: Enumerable<watchlistUpdateManyWithWhereWithoutProfilesInput>
    deleteMany?: Enumerable<watchlistScalarWhereInput>
  }

  export type favoritesUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<Enumerable<favoritesCreateWithoutProfilesInput>, Enumerable<favoritesUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<favoritesCreateOrConnectWithoutProfilesInput>
    upsert?: Enumerable<favoritesUpsertWithWhereUniqueWithoutProfilesInput>
    createMany?: favoritesCreateManyProfilesInputEnvelope
    set?: Enumerable<favoritesWhereUniqueInput>
    disconnect?: Enumerable<favoritesWhereUniqueInput>
    delete?: Enumerable<favoritesWhereUniqueInput>
    connect?: Enumerable<favoritesWhereUniqueInput>
    update?: Enumerable<favoritesUpdateWithWhereUniqueWithoutProfilesInput>
    updateMany?: Enumerable<favoritesUpdateManyWithWhereWithoutProfilesInput>
    deleteMany?: Enumerable<favoritesScalarWhereInput>
  }

  export type watchlistUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<Enumerable<watchlistCreateWithoutProfilesInput>, Enumerable<watchlistUncheckedCreateWithoutProfilesInput>>
    connectOrCreate?: Enumerable<watchlistCreateOrConnectWithoutProfilesInput>
    upsert?: Enumerable<watchlistUpsertWithWhereUniqueWithoutProfilesInput>
    createMany?: watchlistCreateManyProfilesInputEnvelope
    set?: Enumerable<watchlistWhereUniqueInput>
    disconnect?: Enumerable<watchlistWhereUniqueInput>
    delete?: Enumerable<watchlistWhereUniqueInput>
    connect?: Enumerable<watchlistWhereUniqueInput>
    update?: Enumerable<watchlistUpdateWithWhereUniqueWithoutProfilesInput>
    updateMany?: Enumerable<watchlistUpdateManyWithWhereWithoutProfilesInput>
    deleteMany?: Enumerable<watchlistScalarWhereInput>
  }

  export type profilesCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<profilesCreateWithoutWatchlistInput, profilesUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: profilesCreateOrConnectWithoutWatchlistInput
    connect?: profilesWhereUniqueInput
  }

  export type profilesUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<profilesCreateWithoutWatchlistInput, profilesUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: profilesCreateOrConnectWithoutWatchlistInput
    upsert?: profilesUpsertWithoutWatchlistInput
    connect?: profilesWhereUniqueInput
    update?: XOR<profilesUpdateWithoutWatchlistInput, profilesUncheckedUpdateWithoutWatchlistInput>
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

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
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

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type user_providersCreateWithoutProvidersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    access_token: string
    refresh_token?: string | null
    provider_user_id: string
    users: usersCreateNestedOneWithoutUser_providersInput
  }

  export type user_providersUncheckedCreateWithoutProvidersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    access_token: string
    refresh_token?: string | null
    provider_user_id: string
  }

  export type user_providersCreateOrConnectWithoutProvidersInput = {
    where: user_providersWhereUniqueInput
    create: XOR<user_providersCreateWithoutProvidersInput, user_providersUncheckedCreateWithoutProvidersInput>
  }

  export type user_providersCreateManyProvidersInputEnvelope = {
    data: Enumerable<user_providersCreateManyProvidersInput>
    skipDuplicates?: boolean
  }

  export type user_providersUpsertWithWhereUniqueWithoutProvidersInput = {
    where: user_providersWhereUniqueInput
    update: XOR<user_providersUpdateWithoutProvidersInput, user_providersUncheckedUpdateWithoutProvidersInput>
    create: XOR<user_providersCreateWithoutProvidersInput, user_providersUncheckedCreateWithoutProvidersInput>
  }

  export type user_providersUpdateWithWhereUniqueWithoutProvidersInput = {
    where: user_providersWhereUniqueInput
    data: XOR<user_providersUpdateWithoutProvidersInput, user_providersUncheckedUpdateWithoutProvidersInput>
  }

  export type user_providersUpdateManyWithWhereWithoutProvidersInput = {
    where: user_providersScalarWhereInput
    data: XOR<user_providersUpdateManyMutationInput, user_providersUncheckedUpdateManyWithoutUser_providersInput>
  }

  export type user_providersScalarWhereInput = {
    AND?: Enumerable<user_providersScalarWhereInput>
    OR?: Enumerable<user_providersScalarWhereInput>
    NOT?: Enumerable<user_providersScalarWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    access_token?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    provider_id?: StringFilter | string
    provider_user_id?: StringFilter | string
  }

  export type usersCreateWithoutRefresh_tokensInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRefresh_tokensInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRefresh_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
  }

  export type usersUpsertWithoutRefresh_tokensInput = {
    update: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
  }

  export type usersUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type user_rolesCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    user_id: string
  }

  export type user_rolesCreateOrConnectWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesCreateManyRolesInputEnvelope = {
    data: Enumerable<user_rolesCreateManyRolesInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: Enumerable<usersCreateManyRolesInput>
    skipDuplicates?: boolean
  }

  export type user_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUser_rolesInput>
  }

  export type user_rolesScalarWhereInput = {
    AND?: Enumerable<user_rolesScalarWhereInput>
    OR?: Enumerable<user_rolesScalarWhereInput>
    NOT?: Enumerable<user_rolesScalarWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    role?: StringFilter | string
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    last_seen?: DateTimeNullableFilter | Date | string | null
    disabled?: BoolFilter | boolean
    display_name?: StringFilter | string
    avatar_url?: StringFilter | string
    locale?: StringFilter | string
    email?: StringNullableFilter | string | null
    phone_number?: StringNullableFilter | string | null
    password_hash?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    phone_number_verified?: BoolFilter | boolean
    new_email?: StringNullableFilter | string | null
    otp_method_last_used?: StringNullableFilter | string | null
    otp_hash?: StringNullableFilter | string | null
    otp_hash_expires_at?: DateTimeFilter | Date | string
    default_role?: StringFilter | string
    is_anonymous?: BoolFilter | boolean
    totp_secret?: StringNullableFilter | string | null
    active_mfa_type?: StringNullableFilter | string | null
    ticket?: StringNullableFilter | string | null
    ticket_expires_at?: DateTimeFilter | Date | string
    metadata?: JsonNullableFilter
    webauthn_current_challenge?: StringNullableFilter | string | null
  }

  export type providersCreateWithoutUser_providersInput = {
    id: string
  }

  export type providersUncheckedCreateWithoutUser_providersInput = {
    id: string
  }

  export type providersCreateOrConnectWithoutUser_providersInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutUser_providersInput, providersUncheckedCreateWithoutUser_providersInput>
  }

  export type usersCreateWithoutUser_providersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_providersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_providersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_providersInput, usersUncheckedCreateWithoutUser_providersInput>
  }

  export type providersUpsertWithoutUser_providersInput = {
    update: XOR<providersUpdateWithoutUser_providersInput, providersUncheckedUpdateWithoutUser_providersInput>
    create: XOR<providersCreateWithoutUser_providersInput, providersUncheckedCreateWithoutUser_providersInput>
  }

  export type providersUpdateWithoutUser_providersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type providersUncheckedUpdateWithoutUser_providersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutUser_providersInput = {
    update: XOR<usersUpdateWithoutUser_providersInput, usersUncheckedUpdateWithoutUser_providersInput>
    create: XOR<usersCreateWithoutUser_providersInput, usersUncheckedCreateWithoutUser_providersInput>
  }

  export type usersUpdateWithoutUser_providersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_providersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type rolesCreateWithoutUser_rolesInput = {
    role: string
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutUser_rolesInput = {
    role: string
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersCreateWithoutUser_rolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type rolesUpsertWithoutUser_rolesInput = {
    update: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type rolesUpdateWithoutUser_rolesInput = {
    role?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    role?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_security_keysInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_security_keysInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_security_keysInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_security_keysInput, usersUncheckedCreateWithoutUser_security_keysInput>
  }

  export type usersUpsertWithoutUser_security_keysInput = {
    update: XOR<usersUpdateWithoutUser_security_keysInput, usersUncheckedUpdateWithoutUser_security_keysInput>
    create: XOR<usersCreateWithoutUser_security_keysInput, usersUncheckedCreateWithoutUser_security_keysInput>
  }

  export type usersUpdateWithoutUser_security_keysInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_security_keysInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type refresh_tokensCreateWithoutUsersInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    refresh_token_hash?: string | null
  }

  export type refresh_tokensUncheckedCreateWithoutUsersInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    refresh_token_hash?: string | null
  }

  export type refresh_tokensCreateOrConnectWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensCreateManyUsersInputEnvelope = {
    data: Enumerable<refresh_tokensCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type user_providersCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    access_token: string
    refresh_token?: string | null
    provider_user_id: string
    providers: providersCreateNestedOneWithoutUser_providersInput
  }

  export type user_providersUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    access_token: string
    refresh_token?: string | null
    provider_id: string
    provider_user_id: string
  }

  export type user_providersCreateOrConnectWithoutUsersInput = {
    where: user_providersWhereUniqueInput
    create: XOR<user_providersCreateWithoutUsersInput, user_providersUncheckedCreateWithoutUsersInput>
  }

  export type user_providersCreateManyUsersInputEnvelope = {
    data: Enumerable<user_providersCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    roles: rolesCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    role: string
  }

  export type user_rolesCreateOrConnectWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesCreateManyUsersInputEnvelope = {
    data: Enumerable<user_rolesCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type user_security_keysCreateWithoutUsersInput = {
    id?: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
  }

  export type user_security_keysUncheckedCreateWithoutUsersInput = {
    id?: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
  }

  export type user_security_keysCreateOrConnectWithoutUsersInput = {
    where: user_security_keysWhereUniqueInput
    create: XOR<user_security_keysCreateWithoutUsersInput, user_security_keysUncheckedCreateWithoutUsersInput>
  }

  export type user_security_keysCreateManyUsersInputEnvelope = {
    data: Enumerable<user_security_keysCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUsersInput = {
    role: string
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    role: string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type profileCreateWithoutUsersInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
  }

  export type profileUncheckedCreateWithoutUsersInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
  }

  export type profileCreateOrConnectWithoutUsersInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
  }

  export type profilesCreateWithoutUsersInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesCreateNestedManyWithoutProfilesInput
    watchlist?: watchlistCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateWithoutUsersInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesUncheckedCreateNestedManyWithoutProfilesInput
    watchlist?: watchlistUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesCreateOrConnectWithoutUsersInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    update: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    data: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
  }

  export type refresh_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: refresh_tokensScalarWhereInput
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput>
  }

  export type refresh_tokensScalarWhereInput = {
    AND?: Enumerable<refresh_tokensScalarWhereInput>
    OR?: Enumerable<refresh_tokensScalarWhereInput>
    NOT?: Enumerable<refresh_tokensScalarWhereInput>
    refresh_token?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    expires_at?: DateTimeFilter | Date | string
    user_id?: UuidFilter | string
    refresh_token_hash?: StringNullableFilter | string | null
  }

  export type user_providersUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_providersWhereUniqueInput
    update: XOR<user_providersUpdateWithoutUsersInput, user_providersUncheckedUpdateWithoutUsersInput>
    create: XOR<user_providersCreateWithoutUsersInput, user_providersUncheckedCreateWithoutUsersInput>
  }

  export type user_providersUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_providersWhereUniqueInput
    data: XOR<user_providersUpdateWithoutUsersInput, user_providersUncheckedUpdateWithoutUsersInput>
  }

  export type user_providersUpdateManyWithWhereWithoutUsersInput = {
    where: user_providersScalarWhereInput
    data: XOR<user_providersUpdateManyMutationInput, user_providersUncheckedUpdateManyWithoutUser_providersInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUser_rolesInput>
  }

  export type user_security_keysUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_security_keysWhereUniqueInput
    update: XOR<user_security_keysUpdateWithoutUsersInput, user_security_keysUncheckedUpdateWithoutUsersInput>
    create: XOR<user_security_keysCreateWithoutUsersInput, user_security_keysUncheckedCreateWithoutUsersInput>
  }

  export type user_security_keysUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_security_keysWhereUniqueInput
    data: XOR<user_security_keysUpdateWithoutUsersInput, user_security_keysUncheckedUpdateWithoutUsersInput>
  }

  export type user_security_keysUpdateManyWithWhereWithoutUsersInput = {
    where: user_security_keysScalarWhereInput
    data: XOR<user_security_keysUpdateManyMutationInput, user_security_keysUncheckedUpdateManyWithoutUser_security_keysInput>
  }

  export type user_security_keysScalarWhereInput = {
    AND?: Enumerable<user_security_keysScalarWhereInput>
    OR?: Enumerable<user_security_keysScalarWhereInput>
    NOT?: Enumerable<user_security_keysScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidFilter | string
    credential_id?: StringFilter | string
    credential_public_key?: BytesNullableFilter | Buffer | null
    counter?: BigIntFilter | bigint | number
    transports?: StringFilter | string
    nickname?: StringNullableFilter | string | null
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    role?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    role?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type profileUpsertWithoutUsersInput = {
    update: XOR<profileUpdateWithoutUsersInput, profileUncheckedUpdateWithoutUsersInput>
    create: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
  }

  export type profileUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUpsertWithoutUsersInput = {
    update: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
  }

  export type profilesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUpdateManyWithoutProfilesNestedInput
    watchlist?: watchlistUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUncheckedUpdateManyWithoutProfilesNestedInput
    watchlist?: watchlistUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type profilesCreateWithoutFavoritesInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    users: usersCreateNestedOneWithoutProfilesInput
    watchlist?: watchlistCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateWithoutFavoritesInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    watchlist?: watchlistUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesCreateOrConnectWithoutFavoritesInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutFavoritesInput, profilesUncheckedCreateWithoutFavoritesInput>
  }

  export type profilesUpsertWithoutFavoritesInput = {
    update: XOR<profilesUpdateWithoutFavoritesInput, profilesUncheckedUpdateWithoutFavoritesInput>
    create: XOR<profilesCreateWithoutFavoritesInput, profilesUncheckedCreateWithoutFavoritesInput>
  }

  export type profilesUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutProfilesNestedInput
    watchlist?: watchlistUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    watchlist?: watchlistUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type usersCreateWithoutProfileInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfileInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProfileInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
  }

  export type usersUpsertWithoutProfileInput = {
    update: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
  }

  export type usersUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type favoritesCreateWithoutProfilesInput = {
    id?: string
    podcast_id: string
  }

  export type favoritesUncheckedCreateWithoutProfilesInput = {
    id?: string
    podcast_id: string
  }

  export type favoritesCreateOrConnectWithoutProfilesInput = {
    where: favoritesWhereUniqueInput
    create: XOR<favoritesCreateWithoutProfilesInput, favoritesUncheckedCreateWithoutProfilesInput>
  }

  export type favoritesCreateManyProfilesInputEnvelope = {
    data: Enumerable<favoritesCreateManyProfilesInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_providers?: user_providersCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    default_role?: string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_providers?: user_providersUncheckedCreateNestedManyWithoutUsersInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUsersInput
    user_security_keys?: user_security_keysUncheckedCreateNestedManyWithoutUsersInput
    profile?: profileUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProfilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type watchlistCreateWithoutProfilesInput = {
    id: string
    podcast_id: string
  }

  export type watchlistUncheckedCreateWithoutProfilesInput = {
    id: string
    podcast_id: string
  }

  export type watchlistCreateOrConnectWithoutProfilesInput = {
    where: watchlistWhereUniqueInput
    create: XOR<watchlistCreateWithoutProfilesInput, watchlistUncheckedCreateWithoutProfilesInput>
  }

  export type watchlistCreateManyProfilesInputEnvelope = {
    data: Enumerable<watchlistCreateManyProfilesInput>
    skipDuplicates?: boolean
  }

  export type favoritesUpsertWithWhereUniqueWithoutProfilesInput = {
    where: favoritesWhereUniqueInput
    update: XOR<favoritesUpdateWithoutProfilesInput, favoritesUncheckedUpdateWithoutProfilesInput>
    create: XOR<favoritesCreateWithoutProfilesInput, favoritesUncheckedCreateWithoutProfilesInput>
  }

  export type favoritesUpdateWithWhereUniqueWithoutProfilesInput = {
    where: favoritesWhereUniqueInput
    data: XOR<favoritesUpdateWithoutProfilesInput, favoritesUncheckedUpdateWithoutProfilesInput>
  }

  export type favoritesUpdateManyWithWhereWithoutProfilesInput = {
    where: favoritesScalarWhereInput
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type favoritesScalarWhereInput = {
    AND?: Enumerable<favoritesScalarWhereInput>
    OR?: Enumerable<favoritesScalarWhereInput>
    NOT?: Enumerable<favoritesScalarWhereInput>
    id?: UuidFilter | string
    profile_id?: UuidFilter | string
    podcast_id?: UuidFilter | string
  }

  export type usersUpsertWithoutProfilesInput = {
    update: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    default_role?: StringFieldUpdateOperationsInput | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type watchlistUpsertWithWhereUniqueWithoutProfilesInput = {
    where: watchlistWhereUniqueInput
    update: XOR<watchlistUpdateWithoutProfilesInput, watchlistUncheckedUpdateWithoutProfilesInput>
    create: XOR<watchlistCreateWithoutProfilesInput, watchlistUncheckedCreateWithoutProfilesInput>
  }

  export type watchlistUpdateWithWhereUniqueWithoutProfilesInput = {
    where: watchlistWhereUniqueInput
    data: XOR<watchlistUpdateWithoutProfilesInput, watchlistUncheckedUpdateWithoutProfilesInput>
  }

  export type watchlistUpdateManyWithWhereWithoutProfilesInput = {
    where: watchlistScalarWhereInput
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type watchlistScalarWhereInput = {
    AND?: Enumerable<watchlistScalarWhereInput>
    OR?: Enumerable<watchlistScalarWhereInput>
    NOT?: Enumerable<watchlistScalarWhereInput>
    id?: UuidFilter | string
    profile_id?: UuidFilter | string
    podcast_id?: UuidFilter | string
  }

  export type profilesCreateWithoutWatchlistInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesCreateNestedManyWithoutProfilesInput
    users: usersCreateNestedOneWithoutProfilesInput
  }

  export type profilesUncheckedCreateWithoutWatchlistInput = {
    id?: string
    profile_num?: number
    created_at?: Date | string
    updated_at?: Date | string
    username: string
    creator_user_id: string
    name?: string | null
    bio?: string | null
    avatar?: string | null
    location?: string | null
    website?: string | null
    karma?: string | null
    favorites?: favoritesUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesCreateOrConnectWithoutWatchlistInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutWatchlistInput, profilesUncheckedCreateWithoutWatchlistInput>
  }

  export type profilesUpsertWithoutWatchlistInput = {
    update: XOR<profilesUpdateWithoutWatchlistInput, profilesUncheckedUpdateWithoutWatchlistInput>
    create: XOR<profilesCreateWithoutWatchlistInput, profilesUncheckedCreateWithoutWatchlistInput>
  }

  export type profilesUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUpdateManyWithoutProfilesNestedInput
    users?: usersUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_num?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    creator_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    karma?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoritesUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type user_providersCreateManyProvidersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    access_token: string
    refresh_token?: string | null
    provider_user_id: string
  }

  export type user_providersUpdateWithoutProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutUser_providersNestedInput
  }

  export type user_providersUncheckedUpdateWithoutProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_providersUncheckedUpdateManyWithoutUser_providersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesCreateManyRolesInput = {
    id?: string
    created_at?: Date | string
    user_id: string
  }

  export type usersCreateManyRolesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    last_seen?: Date | string | null
    disabled?: boolean
    display_name?: string
    avatar_url?: string
    locale: string
    email?: string | null
    phone_number?: string | null
    password_hash?: string | null
    email_verified?: boolean
    phone_number_verified?: boolean
    new_email?: string | null
    otp_method_last_used?: string | null
    otp_hash?: string | null
    otp_hash_expires_at?: Date | string
    is_anonymous?: boolean
    totp_secret?: string | null
    active_mfa_type?: string | null
    ticket?: string | null
    ticket_expires_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: string | null
  }

  export type user_rolesUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesUncheckedUpdateManyWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUpdateManyWithoutUsersNestedInput
    profile?: profileUpdateOneWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_providers?: user_providersUncheckedUpdateManyWithoutUsersNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUsersNestedInput
    user_security_keys?: user_security_keysUncheckedUpdateManyWithoutUsersNestedInput
    profile?: profileUncheckedUpdateOneWithoutUsersNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_number_verified?: BoolFieldUpdateOperationsInput | boolean
    new_email?: NullableStringFieldUpdateOperationsInput | string | null
    otp_method_last_used?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_hash_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean
    totp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    active_mfa_type?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    webauthn_current_challenge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensCreateManyUsersInput = {
    refresh_token: string
    created_at?: Date | string
    expires_at: Date | string
    refresh_token_hash?: string | null
  }

  export type user_providersCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    access_token: string
    refresh_token?: string | null
    provider_id: string
    provider_user_id: string
  }

  export type user_rolesCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
    role: string
  }

  export type user_security_keysCreateManyUsersInput = {
    id?: string
    credential_id: string
    credential_public_key?: Buffer | null
    counter?: bigint | number
    transports?: string
    nickname?: string | null
  }

  export type refresh_tokensUpdateWithoutUsersInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateWithoutUsersInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_providersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_user_id?: StringFieldUpdateOperationsInput | string
    providers?: providersUpdateOneRequiredWithoutUser_providersNestedInput
  }

  export type user_providersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: StringFieldUpdateOperationsInput | string
    provider_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type user_security_keysUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_security_keysUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_security_keysUncheckedUpdateManyWithoutUser_security_keysInput = {
    id?: StringFieldUpdateOperationsInput | string
    credential_id?: StringFieldUpdateOperationsInput | string
    credential_public_key?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    counter?: BigIntFieldUpdateOperationsInput | bigint | number
    transports?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritesCreateManyProfilesInput = {
    id?: string
    podcast_id: string
  }

  export type watchlistCreateManyProfilesInput = {
    id: string
    podcast_id: string
  }

  export type favoritesUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type favoritesUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type favoritesUncheckedUpdateManyWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type watchlistUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type watchlistUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
  }

  export type watchlistUncheckedUpdateManyWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    podcast_id?: StringFieldUpdateOperationsInput | string
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