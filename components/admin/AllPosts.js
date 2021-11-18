import React, { useState, useEffect } from "react";
import { getAllEvents } from "../helpers/api-helper";

import { useSnackbar } from "notistack";

import { getDatabase, ref, remove } from "firebase/database";

import ItemList from "./ItemList";
import { Paper, List } from "@mui/material";

import firebase from "firebase/compat/app";

function AllPosts() {
  const [events, setEvents] = useState([]);
  const [removeItem, setRemoveItem] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const allPosts = async () => {
    const events = await getAllEvents();
    setEvents(events);
  };
  useEffect(() => {
    allPosts();
  }, [events]);

  const removeHandler = (id) => {
    try {
      const database = getDatabase();
      remove(ref(database, "events/" + id));
      enqueueSnackbar("Post Removed", { variant: "info" });
      setRemoveItem(!removeItem);
    } catch (error) {
      enqueueSnackbar("Failed to remove post", { variant: "error" });
    }
  };

  return (
    <div>
      <p>Number of Posts: {events.length}</p>
      <Paper style={{ maxHeight: 450, overflow: "auto", minWidth: 300 }}>
        <List>
          {events.map((event) => (
            <ItemList
              key={event.id}
              event={event}
              removeHandler={removeHandler}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default AllPosts;
