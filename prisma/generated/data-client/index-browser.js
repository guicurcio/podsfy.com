
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

exports.Prisma.EpisodeScalarFieldEnum = makeEnum({
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
});

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug',
  otherNames: 'otherNames'
});

exports.Prisma.PodcastScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ReviewScalarFieldEnum = makeEnum({
  id: 'id',
  review: 'review',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  podcastId: 'podcastId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StreamingSitesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  publishedAt: 'publishedAt',
  url: 'url',
  hits: 'hits'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Podcast: 'Podcast',
  Person: 'Person',
  Episode: 'Episode',
  StreamingSites: 'StreamingSites',
  Review: 'Review'
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
