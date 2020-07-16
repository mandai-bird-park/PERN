const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//  middleware
app.use(cors());
app.use(express.json()); // req.body

//  ROUTES
app.get("/attendance", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM attendance")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/bird", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM bird ORDER BY bird_name asc")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/aviary", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM aviary ORDER BY aviary_name asc")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/trap", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM trap")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.put("/trap", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = await pool.query( "UPDATE trap SET trap_status=$1 WHERE trap_id=$2", [description, '000']  );
  
      res.json("Todo was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
