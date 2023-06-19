const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();
app.use(express.static("./public"));
app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join("/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`go to localhost:${PORT}`);
});
