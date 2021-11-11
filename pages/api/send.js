import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const surName = req.body.surName;

    const allNames = {
      id: new Date().toISOString(),
      name: name,
      surName: surName,
    };
    // create a path to file
    const filePath = path.join(process.cwd(), "data", "names.json");
    //read what in file
    const fileData = fs.readFileSync(filePath);
    //convert jo JSON
    const data = JSON.parse(fileData);
    //push data to array in json file
    data.push(allNames);
    //write everything in file
    fs.writeFileSync(filePath, JSON.stringify(data));
    //respose code 201 success data send
    res.status(201).json({ message: "Success", data: allNames });
  } else {
    res.status(200).json({ message: "it works" });
  }
}

export default handler;
