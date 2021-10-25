import React from "react";
import Button from "../ui/button";

import classes from "./event-item.module.css";

function EventItem({ events }) {
  const humanReadeble = new Date(events.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.item}>
      <img src={`/${events.image}`} alt={events.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{events.title}</h2>
          <div className={classes.date}>
            <time>{humanReadeble}</time>
          </div>
          <div className={classes.address}>
            <address>{events.location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${events.id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
