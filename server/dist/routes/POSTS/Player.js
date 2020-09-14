"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    res.json({
        status: 200,
        message: "registration page"
    });
    // just a temporary thing
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9QT1NUUy9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsTUFBTSxFQUFFLEdBQUc7UUFDWCxPQUFPLEVBQUMsbUJBQW1CO0tBQzlCLENBQUMsQ0FBQTtJQUNGLHlCQUF5QjtBQUM3QixDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5wb3N0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBtZXNzYWdlOlwicmVnaXN0cmF0aW9uIHBhZ2VcIlxuICAgIH0pXG4gICAgLy8ganVzdCBhIHRlbXBvcmFyeSB0aGluZ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl19