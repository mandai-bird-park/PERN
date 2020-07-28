const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "!Control1",
    host: "localhost",
    port: 5432,
    database: "mandai_bird_park"
});


module.exports = pool;
