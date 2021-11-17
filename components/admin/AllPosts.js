import React, { useState, useEffect } from "react";
import { getAllEvents } from "../helpers/api-helper";

import { getDatabase, ref, remove } from "firebase/database";

import ItemList from "./ItemList";

import firebase from "firebase/compat/app";

function AllPosts() {
  const [events, setEvents] = useState([]);

  const allPosts = async () => {
    const events = await getAllEvents();
    setEvents(events);
  };
  useEffect(() => {
    allPosts();
  }, []);

  if (!events) {
    return <p>Loading...</p>;
  }

  const removeHandler = (id) => {
    const database = getDatabase();
    remove(ref(database, "events/" + id));
  };

  return (
    <div>
      <p>Number of Posts: {events.length}</p>
      {events.map((event) => (
        <ItemList key={event.id} event={event} removeHandler={removeHandler} />
      ))}
    </div>
  );
}

export default AllPosts;
