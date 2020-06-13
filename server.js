const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
