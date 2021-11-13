import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  //MongoDb config
  const url =
    "mongodb+srv://omari:5dvS0B99120xvVAh@cluster0.eb8oh.mongodb.net/events?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url);

  //get value of current url path
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email.includes("@") || !name.trim() === "" || !text.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    //access to db comments
    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    console.log(result);
    newComment.id = result.insertedId;
    res.status(201).json({ message: "Comment Added", data: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();
    //Get all the comments from MongoDb
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }
  //close connection
  client.close();
};

export default handler;
