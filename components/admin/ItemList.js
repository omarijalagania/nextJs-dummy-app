import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ItemList({ event, removeHandler }) {
  return (
    <Card sx={{ marginTop: "25px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="h5" component="div">
          {event.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.location}
        </Typography>
        <Typography variant="body2">{event.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={removeHandler.bind(null, event.id)}
          variant="contained"
          size="small"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemList;
