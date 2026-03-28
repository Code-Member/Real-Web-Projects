import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];

// arrays list of js

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) {
    tasks.push(task);
  }
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const index = req.body.index;
  tasks.splice(index,1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});