import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './secrets.env' });

const app = express();
app.use(cors());
app.use(express.json());
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "********" : "NOT SET");
console.log("DB_NAME:", process.env.DB_NAME);


// Підключення до бази MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Перевірка підключення
db.connect(err => {
    if (err) {
        console.error("Помилка підключення:", err);
        return;
    }
    console.log("Підключено до MySQL");
});


app.get("/users", (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

// 📌 Додавання нового користувача
app.post("/add", (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO user (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Користувач доданий!" });
    });
});

// 📌 Запуск сервера
app.listen(5000, () => {
    console.log("Сервер працює на порту 5000");
});
