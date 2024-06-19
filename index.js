const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json({ name: "Thuy Tran", message: "Hello! Welcome to my app!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
