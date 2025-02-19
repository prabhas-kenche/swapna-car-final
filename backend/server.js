const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// SQLite Database Connection (Single DB)
const dbPath = path.join(__dirname, "car_bookings.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Database connection error:", err);
    else console.log("Connected to SQLite database");
});

// Ensure 'bookings' table exists
db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        profession TEXT,
        age INTEGER,
        contact TEXT,
        email TEXT,
        address TEXT,
        pickupDate TEXT,
        pickupTime TEXT,
        dropDate TEXT,
        dropTime TEXT,
        visitingPlaces TEXT,
        totalDays TEXT,
        totalHours INTEGER,
        carTitle TEXT,
        carImage TEXT,
        userId TEXT,
        price INTEGER
    )
`);

// Booking Route (Used by both frontends)
app.post("/api/book-car", (req, res) => {
    const data = req.body;

    const stmt = db.prepare(`
        INSERT INTO bookings (
            name, profession, age, contact, email, address, pickupDate, pickupTime,
            dropDate, dropTime, visitingPlaces, totalDays, totalHours, carTitle, carImage, userId, price
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
        data.name, data.profession, data.age, data.contact, data.email, data.address,
        data.pickupDate, data.pickupTime, data.dropDate, data.dropTime, data.visitingPlaces,
        data.totalDays, data.totalHours, data.carTitle, data.carImage, data.userId, data.price,
        function (err) {
            if (err) {
                res.status(500).json({ message: "Error saving booking", error: err });
            } else {
                res.status(201).json({ message: "Booking successful", bookingId: this.lastID });
            }
        }
    );

    stmt.finalize();
});

// Admin Route to Fetch All Bookings
app.get("/api/bookings", (req, res) => {
    db.all("SELECT * FROM bookings ORDER BY id DESC", [], (err, rows) => {
        if (err) {
            console.error("Error fetching bookings:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


//Calculating total earnings, total bookings, total days of the particular car
app.get("/api/car-overview/:carname", (req, res) => {
    const { carname } = req.params;

    const query = `
        SELECT 
            SUM(CAST(totalDays AS INTEGER)) AS totalDays,
            SUM(CAST(totalDays AS INTEGER) * CAST(price AS INTEGER)) AS totalEarnings,
            COUNT(*) AS totalBookings
        FROM bookings
        WHERE carTitle = ${carname};
    `;

    db.get(query, [carname], (err, row) => {
        if (err) {
            console.error("Error fetching car overview data:", err);
            return res.status(500).json({ error: err.message });
        }

        res.json({
            carTitle: carname,
            totalDays: row.totalDays || 0,
            totalEarnings: row.totalEarnings || 0,
            totalBookings: row.totalBookings || 0
        });
    });
});



// Start the unified server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
