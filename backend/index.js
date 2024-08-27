const express = require("express");
const notes = require("./data/notes");//test data
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const cors = require("cors");
const app = express();
dotenv.config();

// Connect to the database
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
