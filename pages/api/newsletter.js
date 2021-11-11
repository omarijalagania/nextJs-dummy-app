function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    const allNames = {
      id: new Date().toISOString(),
      email: email,
    };
    res.status(201).json({ message: "Success", data: allNames });
  } else {
    res.status(200).json({ message: "it works" });
  }
}

export default handler;
