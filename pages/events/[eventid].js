import React from "react";
import {
  getEventById,
  getAllEvents,
} from "../../components/helpers/api-helper";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function DetailEvents(props) {
  return (
    <>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventid = context.params.eventid;
  const event = await getEventById(eventid);
  return {
    props: {
      event,
    },
  };
}

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({ params: { eventid: event.id } }));

  return { paths, fallback: false };
};

export default DetailEvents;
