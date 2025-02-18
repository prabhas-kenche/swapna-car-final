const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "car_bookings.db");
const db = new sqlite3.Database(dbPath);

db.all("SELECT * FROM bookings", (err, rows) => {
    if (err) {
        console.error("Error fetching data:", err);
    } else {
        console.log("Bookings Data:", rows);
    }
    db.close();
});
