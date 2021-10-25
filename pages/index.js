import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Main Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;
