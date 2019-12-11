const initState = require("./allMuseums.js");
const request = require("superagent");

const Sequelize = require("sequelize");
const db = require("../db");

const Museum = db.define("museum", {
  url: Sequelize.STRING,
  title: Sequelize.STRING,
  city: Sequelize.STRING,
  url: Sequelize.STRING,
  lat: Sequelize.STRING,
  lng: Sequelize.STRING
});

Museum.sync()
  .then(() => console.log("Model synchronization completes"))
  .then(async () => {
    console.log("create raws", initState[1]);
    for (let i = 3; i < 5; i++) {
      const coord = await request(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${initState[i].SubTitle}+${initState[i].Title}&key=AIzaSyAjeveDvwPThAT_jpTrQd59uUjB_PYKiEM`
      ).then(response => response.body.results[0].geometry.location);
      console.log("coord", coord);
      const lat = coord.lat;
      console.log("lat", lat);
      const lng = coord.lng;
      console.log("lng", lng);
      await Museum.create({
        id: i,
        title: initState[i].SubTitle,
        city: initState[i].Title,
        url: initState[i].ImageUrl,
        lat: lat,
        lng: lng
      });
    }
  })
  .catch(console.error);

module.exports = Museum;
