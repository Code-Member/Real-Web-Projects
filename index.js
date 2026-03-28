
  import express from "express";
  const app = express();
  const port = 3000;

   app.get("/",(req,res) =>{
      res.send("<h1>Home Page</h1>");
  });
  app.get("/about",(req,res) =>{
      res.send("<h1>About Me</h1><p>My Name is Mahaboob Basha</p>");
  });
 app.get("/contact",(req,res) =>{
      res.send("<h1>Contact Me</h1><p>+917207160407</p>");
  });
  
  app.listen(port, () =>{
     console.log(`Server Started on port${port}`);
  });