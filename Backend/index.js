import express from "express";
import orderRoutes from "./routes/orderRoutes.js";
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./db.js";
import cors from "cors";
import { config } from "dotenv";
import seedData from "./seed.js";
const app = express();
config();


const PORT = process.env.PORT || 7000;

connectDB();

// if (process.env.SEED === "true") {
//   seedData();
// }
app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api", orderRoutes);
// app.get("/api/seed-status", async (req, res) => {
//   try {
//     const count = await OrderModel.countDocuments();
//     res.status(200).json({ message: `Total seeded orders: ${count}` });
//   } catch (error) {
//     res.status(500).json({ error: "Unable to fetch seed data count" });
//   }
// });
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
