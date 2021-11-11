import React, { useRef } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const email = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    //get user input with Ref
    const emailR = email.current.value;

    //POST Email To API
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailR }),
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            ref={email}
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
