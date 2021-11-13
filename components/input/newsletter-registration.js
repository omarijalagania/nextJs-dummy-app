import React, { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import toast, { Toaster } from "react-hot-toast";
function NewsletterRegistration() {
  const email = useRef();
  //Send Email
  function registrationHandler(event) {
    event.preventDefault();
    const notify = () => toast.success("Subscribed Successfully");
    const errorNotify = () => toast.error("Email Can not be Emplty!");
    //get user input with Ref
    const emailR = email.current.value;
    //POST Email To API
    try {
      if (!emailR == "") {
        fetch("/api/newsletter", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailR }),
        });
        notify();
        email.current.value = "";
      } else {
        return errorNotify();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={classes.newsletter}>
      <Toaster />
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
