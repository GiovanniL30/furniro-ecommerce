import express from "express";
import js from "jsonwebtoken";

const appR = express.Router();

appR.get("/", (req, res) => {
  const { username, password } = req.body;

  // Normally, you would validate the username and password here
  const token = js.sign({ username }, "my-secret-key", { expiresIn: "1h" });
  res.json({ token });
});

export default appR;
