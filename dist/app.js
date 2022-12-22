"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import all lib
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
const error_1 = __importDefault(require("./middleware/error"));
// Environment Variable Configuration
(0, dotenv_1.config)();
// Define Application Entry point app
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://music-client-pi.vercel.app",
    ],
}));
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
// test route
app.get("/", (req, res) => {
    res.send("Hello Api Working");
});
// Routes
const auth_1 = __importDefault(require("./routes/auth"));
const artist_1 = __importDefault(require("./routes/artist"));
const album_1 = __importDefault(require("./routes/album"));
const song_1 = __importDefault(require("./routes/song"));
const user_1 = __importDefault(require("./routes/user"));
// Routes Middleware
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/artist", artist_1.default);
app.use("/api/v1/album", album_1.default);
app.use("/api/v1/song", song_1.default);
app.use("/api/v1/admin", user_1.default);
// Middleware Error Handler
app.use(error_1.default);
exports.default = app;