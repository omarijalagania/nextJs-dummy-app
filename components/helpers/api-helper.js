export const getAllEvents = async () => {
  const response = await fetch(
    "https://events-nextjs-f3f62-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const transformedData = [];

  //transform Object to array
  for (const key in data) {
    transformedData.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      image: data[key].image,
      location: data[key].location,
      date: data[key].date,
      isFeatured: data[key].isFeatured,
    });
  }

  return transformedData;
};

export const featuredEvents = async () => {
  //request all events
  const allEvents = await getAllEvents();

  //filter featured events
  const featuredEvents = allEvents.filter((event) => event.isFeatured);
  return featuredEvents;
};

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
