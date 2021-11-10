import React from "react";
import { getAllEvents } from "../../components/helpers/api-helper";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
function Events(props) {
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default Events;
