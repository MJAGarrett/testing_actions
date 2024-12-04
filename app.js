import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/change", (req, res) => {
  res.send("Minor change to run workflow");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
