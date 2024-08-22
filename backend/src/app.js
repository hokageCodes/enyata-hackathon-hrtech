const express = require("express");
const connectDB = require("./utils/db");
const logger = require("./utils/logger");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");

// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/admin", adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Start the server


module.exports = app;