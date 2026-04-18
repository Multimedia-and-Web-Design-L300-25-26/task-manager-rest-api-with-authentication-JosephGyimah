import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB, disconnectDB } from "../src/config/db.js";

beforeAll(async () => {
	process.env.NODE_ENV = "test";
	dotenv.config({ path: ".env.test", quiet: true });
	process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret";

	await connectDB();
	await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
	await disconnectDB();
});