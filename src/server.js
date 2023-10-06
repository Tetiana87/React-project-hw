const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fixedToken = "jfhoskfh566hdtuk";

app.use(cors());

app.use(bodyParser.json());

app.post("/api/authenticate", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "password") {
    res.json({ token: fixedToken });
    console.log("good");
  } else {
    res.status(401).json({ error: "Invalid name or password" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
