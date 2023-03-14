
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.FavoritesScalarFieldEnum = makeEnum({
  id: 'id',
  profile_id: 'profile_id',
  podcast_id: 'podcast_id'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  hash: 'hash',
  executed_at: 'executed_at'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProfilesScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Provider_requestsScalarFieldEnum = makeEnum({
  id: 'id',
  options: 'options'
});

exports.Prisma.ProvidersScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RatingsScalarFieldEnum = makeEnum({
  id: 'id',
  profile_id: 'profile_id',
  podcast_id: 'podcast_id',
  rating: 'rating'
});

exports.Prisma.Refresh_tokensScalarFieldEnum = makeEnum({
  refresh_token: 'refresh_token',
  created_at: 'created_at',
  expires_at: 'expires_at',
  user_id: 'user_id',
  refresh_token_hash: 'refresh_token_hash'
});

exports.Prisma.RolesScalarFieldEnum = makeEnum({
  role: 'role'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.User_providersScalarFieldEnum = makeEnum({
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  access_token: 'access_token',
  refresh_token: 'refresh_token',
  provider_id: 'provider_id',
  provider_user_id: 'provider_user_id'
});

exports.Prisma.User_rolesScalarFieldEnum = makeEnum({
  id: 'id',
  created_at: 'created_at',
  user_id: 'user_id',
  role: 'role'
});

exports.Prisma.User_security_keysScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  credential_id: 'credential_id',
  credential_public_key: 'credential_public_key',
  counter: 'counter',
  transports: 'transports',
  nickname: 'nickname'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
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
});

exports.Prisma.WatchlistScalarFieldEnum = makeEnum({
  id: 'id',
  profile_id: 'profile_id',
  podcast_id: 'podcast_id'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
