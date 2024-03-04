"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dataBase_1 = __importDefault(require("./app/DB/dataBase"));
(0, dataBase_1.default)();
// Example usage of Dotenv
const PORT = process.env.PORT || 3000;
// Start the server
app_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
