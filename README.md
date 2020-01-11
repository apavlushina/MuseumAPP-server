# MuseumAPP-server

Back-end for the Museums-Map application. The client repository can be found [here](https://github.com/apavlushina/MuseumApp). Built with NodeJS and PosgreSQL through Sequelize.

---

## Setup Backend

1. Set up a __Postgres database__ with docker at port 5432 with password *secret*:

    ```$ docker run -p 5432:5432 --name museum-app -e POSTGRES_PASSWORD=secret -d postgres```
2. Clone the project
 
    ```$ git clone git@github.com:apavlushina/MuseumAPP-server.git```
3. Run `npm install` from the project folder
   
4. Start the server with `node .` or `npx nodemon`, if you have nodemon installed
5. You should see `listening to :4000`  and `Model synchronization completes` in your terminal
   
6. Your server is running!


---


### Seeding the DB
The database can be seeded the first time by uncommenting lines 19-39 in model.js and inserting your key in the key variable.
The key can be generated [here](https://developers.google.com/maps/documentation/geocoding/get-api-key).
The seeds will create a list of 500 museums which are available for free with museumkaart.

## Features to be implemented
* Authentication
* Signing up
* Add filter to show only museums the user have not visited yet
* Add some data to show museum's rating, web-site, opening hours
