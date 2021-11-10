import React from "react";
import { getFilteredEvents } from "../../components/helpers/api-helper";
import EventList from "../../components/events/event-list";
function FilteredEvents(props) {
  const filteredEvents = props.filteredEvents;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found!</p>;
  }

  return (
    <>
      <EventList items={filteredEvents} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;

  //extract slug from url
  const filterData = params.slug;

  //extract year and month
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  //converting to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
    },
  };
};

export default FilteredEvents;
