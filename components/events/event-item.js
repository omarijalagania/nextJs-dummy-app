import React from "react";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem({ events }) {
  const humanReadeble = new Date(events.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = events.location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${events.image}`} alt={events.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{events.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadeble}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{addressText}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${events.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
