"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_controller_1 = require("./user/user.controller");
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const PORT = process.env.PORT || 2000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", user_controller_1.router);
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, "../public", "favicon.ico")));
app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});
