
# Remote Monitoring

## Objective
1. Database management
1. Remotely access
1. Database Dashboard
1. Data Analysis
1. Multi-User
1. Deployment
1. Media Server

## Python Script 

Used to interface the data obtained by LabView to SQL 

The bitness of the Python script needs to be **32bit** in order to match the LabView **32bit**

The PostgreSQL database adapter used is **psycopg2** to allow the Python script to write directly into the database. 

`To install the library psycopg2`

    $ pip install psycopg2

`To establish connection to the database`

    conn = psycopg2.connect(host="localhost",database="mandai_bird_park", user="postgres", password="!Control1")

`Full Code`

    sql = """INSERT INTO attendance(bird_id, aviary_id, weight, image_path, created_on, created_at)
            VALUES(%s, '1', %s, %s, %s, %s) RETURNING bird_id;"""
    conn = None
    try:
        # read database configuration
        # connect to the PostgreSQL database
        # refer to database.ini
        conn = psycopg2.connect(host="localhost",database="mandai_bird_park", user="postgres", password="!Control1")
        # create a new cursor
        cur = conn.cursor()
        # execute the INSERT statement
        cur.execute(sql, (rfid, weight, image_path, date, time))
        # cur.execute(sql2, rfid)
        # get the generated id back
        rfid = cur.fetchone()[0]
        # commit the changes to the database
        conn.commit()
        # close communication with the database
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        return False # If unsuccessful transaction
    finally:
        if conn is not None:
            conn.close()

`Full Code explanation`

conn - connection       
cur.execute - execute the sql query (INSERT, CREATE, UPDATE)        
sql - sql query statement       
attendance - an existing table      

In order to access server outside the localhost, replace 'localhost' with the address and the corresponding user and password

Need to ensure that the user have the right privilege to execute sql query

## React (Front-End Framework)

### Bootstrap MDBReact

To handle the UI/UX design of the web application

#### MDBDataTable
#### 

## Express (Back-End Framework)

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 

`index.js`

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

`db.js`

    const Pool = require("pg").Pool;

    const pool = new Pool({
        user: "postgres",
        password: "!Control1",
        host: "localhost",
        port: 5432,
        database: "mandai_bird_park"
    });


    module.exports = pool;

### PostgreSQL

PostgreSQL is a powerful, open source object-relational database management system (ORDBMS) 

`attendance`

    CREATE TABLE public.attendance
    (
        bird_id character varying COLLATE pg_catalog."default" NOT NULL,
        aviary_id character varying COLLATE pg_catalog."default",
        weight double precision NOT NULL,
        image_path character varying COLLATE pg_catalog."default" NOT NULL,
        created_at character varying COLLATE pg_catalog."default",
        created_on character varying COLLATE pg_catalog."default"
    )
`aviary`

    CREATE TABLE public.aviary
    (
        aviary_id character varying COLLATE pg_catalog."default" NOT NULL,
        aviary_name character varying COLLATE pg_catalog."default" NOT NULL,
        bird_list character varying[] COLLATE pg_catalog."default" NOT NULL,
        aviary_image character varying COLLATE pg_catalog."default"
    )
`bird`

    CREATE TABLE public.bird
    (
        bird_id character varying COLLATE pg_catalog."default" NOT NULL,
        bird_name character varying COLLATE pg_catalog."default",
        bird_description character varying COLLATE pg_catalog."default" NOT NULL,
        last_updated_weight character varying COLLATE pg_catalog."default" NOT NULL,
        last_updated_image_path character varying COLLATE pg_catalog."default" NOT NULL,
        last_updated_timestamp character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT "Bird_pkey" PRIMARY KEY (bird_id)
    )

## Node.js (JavaScript runtime environment)

Provides event-driven and asynchronous features which makes it lightweight and efficient.

