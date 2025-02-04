  import express from "express";

  const app = express();

  //https://hooks.zapier.com/hooks/catch/17043103/22b8496/

  app.post("/hooks/catch/:userId/:zapId", (req, res) => {

    const userId = req.params.userId;
    const zapId = req.params.zapId;
    
    // store in database a new trigger

    
  });