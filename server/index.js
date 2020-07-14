const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//  middleware
app.use(cors());
app.use(express.json()); // req.body

//  ROUTES
app.get("/Attendance", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM attendance")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/Bird", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM bird ORDER BY bird_name asc")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/Aviary", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM aviary ORDER BY aviary_name asc")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
