import mongoose from "mongoose"; 
// const { v4: uuidv4 } = require("uuid");
// const { faker } = require("@faker-js/faker");
import { faker } from "@faker-js/faker";
import OrderModel from "./model/orderModel.js";
// const OrderModel = require("./model/orderModel");

const generateOrder = () => {
  const statuses = ["pending", "processing", "completed", "cancelled"];

  return {
    customerName: faker.person.fullName(),
    orderAmount: parseFloat((Math.random() * 1000 + 50).toFixed(2)),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    items: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
      name: faker.commerce.productName(),
      quantity: Math.floor(Math.random() * 5) + 1,
      price: parseFloat((Math.random() * 200 + 10).toFixed(2)),
    })),
    createdAt: faker.date.between({
      from: new Date("2022-11-11"),
      to: new Date("2024-11-11"),
    }),
  };
};

const seedData = async () => {
  const url = "mongodb://localhost:27017/orders";

  try {
    console.log("Connecting to the database...");
    await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Clearing existing data...");
    await OrderModel.deleteMany({});
    console.log("Generating seed data...");
    const orders = Array.from({ length: 10000 }, generateOrder);

    console.log("Inserting orders into the database...");
    await OrderModel.insertMany(orders);

    console.log(`${orders.length} orders seeded successfully.`);
    console.log("Seeding completed!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
};
export default seedData;
