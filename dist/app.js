"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./app/routes");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
//middlewares
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
// Routes 
exports.app.use('/api', routes_1.demoRouter);
