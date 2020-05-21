const express = require("express");
const app = express();
const moment = require('moment');
const pool = require("./db");
const cors = require('cors');


//middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});



//Routes



app.post("/ads", async (req, res) => {


    try {

        const newAds = await pool.query(
            `INSERT INTO ads (name, vehicle_model, red_number, mobile_number, pick_up_address, drop_off_address, 
                info, created_date, modified_date ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) Returning *`,
            [req.body.name, req.body.vehicle_model, req.body.red_number, req.body.mobile_number, req.body.pick_up_address,
            req.body.drop_off_address, req.body.info, moment(new Date()), moment(new Date())]
        );

        res.json(newAds.rows[0]);

    } catch (err) {
        console.error(err.message);
    }

})


app.get("/posts", async (req, res) => {
    try {
        const allposts = await pool.query("SELECT * FROM ads");
        res.json(allposts.rows);
    } catch (err) {
        console.error(err.message)
    }
})


