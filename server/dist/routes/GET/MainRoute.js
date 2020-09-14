"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "hello there"
    });
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9HRVQvTWFpblJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRTlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNMLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLGFBQWE7S0FDekIsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUE7QUFFRixrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6IFwiaGVsbG8gdGhlcmVcIlxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXX0=