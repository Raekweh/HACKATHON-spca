const express = require('express');
const router = express.Router();
const Clinic = require("../../models/Clinic");

const articles = [
    {
        region: "North Island",
        address:"221b hillborough rd",
        country:"New Zealand",
        phoneNumber:"0905082",
        openingHours:"8am - 5pm",
        suburb:"Ormiston",
        specialistType:"dog"
    },
    {
        region: "North Island",
        address:"180c high street",
        country:"",
        phoneNumber:"096293888",
        openingHours:"24 / 7",
        suburb:"Mt Roskill",
        specialistType:"goldfish"
    },
    {
        region: "North Island",
        address:"10a Queen Street",
        country:"New Zealand",    
        phoneNumber:"09525629",
        openingHours:"9am - 8pm",
        suburb:"Reumera",
        specialistType:"pokemon master"
    },    
];

router.post("/add", (req, res) => {

    articles.forEach(element => console.log(element));
  
    newArticle
      .save()
      .then(() => res.json("Article added!"))
      .catch((err) => res.status(404).json("Error " + err));
  });