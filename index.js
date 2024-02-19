const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Server 1",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    message: "Hello from User Server 1",
  });
});

app.listen(PORT, () => console.log(`Server 1 is running on port: ${PORT}`));
