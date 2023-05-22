import FollowingFeedJSON from "components/home/feed/FollowingFeedJSON/FollowingFeedJSON";
import ListFeedUnit from "components/home/feed/ListFeedUnit/ListFeedUnit";
import lists from "json/lists.json";

export default function ListsPage() {
  return (
    <FollowingFeedJSON>
      {lists.slice(0, 10).map((item) => (
        <ListFeedUnit key={item.id} item={item}></ListFeedUnit>
      ))}
    </FollowingFeedJSON>
  );
}
