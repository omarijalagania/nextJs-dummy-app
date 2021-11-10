import React from "react";
import { featuredEvents } from "../components/helpers/api-helper";
import EventList from "../components/events/event-list";

function Home(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await featuredEvents();
  return {
    props: {
      events: data,
    },
    revalidate: 1800,
  };
}

export default Home;
