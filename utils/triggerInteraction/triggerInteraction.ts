import { toast } from "ui/hooks/use-toast";

export default function triggerInteraction(
  podcastTitle: string,
  interactionType: string,
) {
  toast({
    title: `${podcastTitle} added to ${interactionType}`,
    description: `Now you can find it in your ${interactionType}`,
  });
}
