const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/todoroutes");
const cors = require("cors");

const app = express();

const PORT =  5000;

mongoose.connect("mongodb://localhost:27017/ToDoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use(cors());

app.use("/", route);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
  console.error("Error starting server:", err);
});