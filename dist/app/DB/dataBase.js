"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default.connect(process.env.MONGO_URI || "", {
        dbName: process.env.DB_NAME,
    })
        .then(() => console.log("Database connected successfully"))
        .catch((err) => console.log(err));
};
exports.default = connectDB;
