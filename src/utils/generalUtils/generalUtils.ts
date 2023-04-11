export function getSearchMessage(selectedLayoutSegment: string, selectedPodcast?: string, pathname?: string): string {
  let searchMessage: string;
  switch (selectedLayoutSegment) {
    case 'podcast':
      searchMessage = `${pathname}`
      break;
    case 'home':
      searchMessage = "Search for podcasts, episodes, guests, notes...";
      break;
    case 'for-you':
      searchMessage = "Search for podcasts, episodes, guests, notes...";
      break;
    default:
      searchMessage = "Search for podcasts, episodes, guests, notes...";
  }
  return searchMessage;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(str: string): string {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}


export function getPodcastTitleFromUrl(url?: string): string {
  if (!url) return '';
  const segments = url.split('/');
  const titleSegmentIndex = segments.indexOf('podcast') + 1;
  const title = segments[titleSegmentIndex].replace(/-/g, ' ');

  return capitalizeWords(title);
}
