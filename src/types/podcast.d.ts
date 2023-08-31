export namespace Podcasts {
  export type Podcast = {
    id?: number;
    title?: string;
    createdAt?: Date;
    updatedAt?: Date;
    uid?: string;
    description?: string;
    url?: string;
    slug?: string;
    cover?: string;
    host?: string;
    podcastHostId?: string;
    podcastHost?: Person;
    episodes?: Episode[];
    backgroundCoverImage?: string;
    tags?: string;
    genre?: string;
    rating?: number;
    similarPodcasts?: Podcast[];
    similarPodcastsRelation?: Podcast[];
    reviews?: Review[];
    streamingAt?: StreamingSites[];
    lastUpdate?: number;
    isItExplicit?: boolean;
    isItBlocked?: boolean;
    hasNotBeenUpdating?: boolean;
    outsideImageUrl?: string;
    language?: string;
    amountOfEpisodes?: number;
    popularity?: number;
    priority?: number;
    podcastCreatedOn?: Date;
    frequencyOfUpdates?: number;
  };

  /**
   *
   */
  export type Episode = {
    id: number;
    title: string | null;
    description: string | null;
    publishedAt: Date | null;
    url: string | null;
    podcastId: number | null;
    episodeNumber: number | null;
    bestEpisode: boolean | null;
    featuredEpisode: boolean | null;
    mostStreamedEpisode: boolean | null;
    episodeCoverImage: string | null;
  };
}
