import React from "react";
import {
  getEventById,
  featuredEvents,
} from "../../components/helpers/api-helper";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Comments from "../../components/input/comments";
function DetailEvents(props) {
  if (!props.event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

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
        <Comments eventid={props.event.id} />
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
    revalidate: 30,
  };
}

export const getStaticPaths = async () => {
  const allEvents = await featuredEvents();

  //get dynamic id from url
  const paths = allEvents.map((event) => ({ params: { eventid: event.id } }));

  return { paths, fallback: "blocking" };
};

export default DetailEvents;
