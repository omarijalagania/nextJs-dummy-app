import React, { useState } from "react";

import { getDatabase, ref, set } from "firebase/database";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function AddPost() {
  const [id, setId] = useState("e7");
  const [date, setDate] = useState("2021-05-12");
  const [description, setDescription] = useState("This is Test Description");
  const [image, setImage] = useState("images/coding-event.jpg");
  const [isFeatured, setIsFeatured] = useState(false);
  const [location, setLocation] = useState("My Street 12, 10115 Broke City");
  const [title, setTitle] = useState("Just Another Event");

  const postData = {
    id,
    date,
    description,
    image,
    isFeatured,
    location,
    title,
  };

  const submitPost = (e) => {
    e.preventDefault();
    const database = getDatabase();
    set(ref(database, "events/" + id), postData);
  };

  return (
    <>
      <form
        style={{
          marginTop: "30px",
          minWidth: "50%",
          width: "400px",
          border: "1px solid black",
          margin: "30px 20px",
          padding: "15px",
          borderRadius: "7px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{ padding: "7px", fontWeight: "900", fontSize: "24px" }}
        >
          New Post
        </Typography>
        <TextField
          id="outlined-basic"
          required
          label="Title"
          variant="filled"
          value={title}
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ display: "flex", margin: "30px 1px" }}>
          <TextField
            style={{ marginRight: "15px" }}
            id="outlined-basic"
            required
            fullWidth
            label="Date: 2021-05-12"
            variant="filled"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            required
            label="Add Id e.g (e3)"
            variant="filled"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <TextField
          style={{ marginBottom: "15px" }}
          id="outlined-basic"
          fullWidth
          required
          multiline={true}
          rows={5}
          label="Description"
          variant="filled"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "15px" }}
          id="outlined-basic"
          fullWidth
          required
          label="Address"
          variant="filled"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <TextField
            style={{ marginRight: "15px" }}
            id="outlined-basic"
            required
            fullWidth
            label="Image: images/coding-event.jpg"
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            required
            label="isFeatured : true -false"
            variant="filled"
            value={isFeatured}
            onChange={(e) => setIsFeatured(e.target.value)}
          />
        </div>

        <div>
          <Button onClick={submitPost} variant="contained">
            Send Post
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddPost;
