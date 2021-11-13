import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    const url =
      "mongodb+srv://omari:5dvS0B99120xvVAh@cluster0.eb8oh.mongodb.net/events?retryWrites=true&w=majority";

    const client = await MongoClient.connect(url);
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: email });
    client.close();
    res.status(201).json({ message: "Success" });
  } else {
    res.status(200).json({ message: "it works" });
  }
}

export default handler;
