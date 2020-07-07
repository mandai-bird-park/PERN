const Pool = require("pg").Pool;

const pool = new Pool({
    user: "pi",
    password: "pi",
    host: "192.168.1.109",
    port: 5432,
    database: "mandai_bird_park"
});


module.exports = pool;
