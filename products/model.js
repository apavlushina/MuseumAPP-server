const initState = require("./allMuseums.js");
const request = require("superagent");
// const myKey = require("./key");

const myKey = process.env.REACT_APP_GEO_API;

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
    for (let i = 0; i < initState.length; i++) {
      for (let i = 0; i < 10; i++) {
        const coord = await request(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${initState[i].SubTitle}+${initState[i].Title}&key=${myKey}`
        ).then(response => response.body.results[0].geometry.location);
        const lat = coord.lat;
        const lng = coord.lng;
        await Museum.create({
          id: initState[i].MuseumId,
          title: initState[i].SubTitle,
          city: initState[i].Title,
          url: initState[i].ImageUrl,
          lat: lat,
          lng: lng
        });
      }
    }
  })
  .catch(console.error);

module.exports = Museum;
