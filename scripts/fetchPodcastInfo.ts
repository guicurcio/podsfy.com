import { parseStringPromise } from "xml2js";

async function fetchPodcastInfo(searchTerm: string) {
  if (!searchTerm) {
    throw new Error("Please provide a search term");
  }

  const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=podcast&limit=1`;
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error(`Failed to search iTunes API: ${response.statusText}`);
  }

  const json: any = await response.json();
  if (json.resultCount === 0) {
    throw new Error("No podcast found for provided term");
  }

  const feedUrl = json.results[0].feedUrl as string;
  if (!feedUrl) {
    throw new Error("Feed URL not found in iTunes results");
  }

  const feedResp = await fetch(feedUrl);
  if (!feedResp.ok) {
    throw new Error(`Failed to fetch feed: ${feedResp.statusText}`);
  }

  const xml = await feedResp.text();
  const parsed = await parseStringPromise(xml, { explicitArray: false });
  const channel = parsed.rss.channel;

  const episodes = (Array.isArray(channel.item) ? channel.item : [channel.item])
    .filter(Boolean)
    .map((item: any) => ({
      title: item.title,
      description: item.description,
      pubDate: item.pubDate,
      link: item.link,
    }));

  return {
    title: channel.title,
    description: channel.description,
    episodes,
  };
}

const term = process.argv.slice(2).join(" ");
fetchPodcastInfo(term)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
