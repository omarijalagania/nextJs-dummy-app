import React, { useState } from "react";

import { getDatabase, ref, set, push, child } from "firebase/database";

import appZ from "../../firebase";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function AddPost() {
  const [id, setId] = useState("7");
  const [date, setDate] = useState("2021");
  const [description, setDescription] = useState("test");
  const [image, setImage] = useState("image");
  const [isFeatured, setIsFeatured] = useState(false);
  const [location, setLocation] = useState("address");
  const [title, setTitle] = useState("test");

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
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch", marginTop: "30px" },
        width: "80%",
        border: "1px solid black",
        margin: "30px auto",
        padding: "10px",
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          required
          label="Add Id e.g (e3)"
          variant="filled"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          required
          label="Date: 2021-05-12"
          variant="filled"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        required
        label="Description"
        variant="filled"
        multiline
        maxRows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        required
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

      <TextField
        id="outlined-basic"
        required
        label="Address"
        variant="filled"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        required
        label="Title"
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button onClick={submitPost} variant="contained">
        Send Post
      </Button>
    </Box>
  );
}

export default AddPost;
