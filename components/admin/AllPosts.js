import React, { useState, useEffect } from "react";
import { getAllEvents } from "../helpers/api-helper";

import { getDatabase, ref, remove } from "firebase/database";

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
    //database.ref("events" + id).remove();
    console.log(database);
  };

  return (
    <div>
      {events.map((event) => {
        return (
          <ul key={event.id}>
            <li onClick={removeHandler.bind(null, event.id)}>
              {(event.id, event.description)}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default AllPosts;
