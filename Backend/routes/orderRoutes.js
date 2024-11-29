import express from "express";
const router = express.Router();
import getOrders from "../controller/orderController.js";
import validateQuery from "../validateQuery.js"; 

router.get("/orders", validateQuery, getOrders);
export default router;
