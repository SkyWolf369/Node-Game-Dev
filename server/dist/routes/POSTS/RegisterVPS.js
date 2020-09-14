"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("<h1>Registration</h1>");
});
router.post("/", (req, res) => {
    // add POST thing here
    const typeOfVps = {
        distro: req.body.distro,
        hostname: req.body.hostname
    };
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJWUFMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL1BPU1RTL1JlZ2lzdGVyVlBTLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRzlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDMUIsc0JBQXNCO0lBQ3RCLE1BQU0sU0FBUyxHQUFHO1FBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO0tBQzlCLENBQUE7QUFLTCxDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZChcIjxoMT5SZWdpc3RyYXRpb248L2gxPlwiKVxufSlcblxucm91dGVyLnBvc3QoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIGFkZCBQT1NUIHRoaW5nIGhlcmVcbiAgICBjb25zdCB0eXBlT2ZWcHMgPSB7XG4gICAgICAgIGRpc3RybzogcmVxLmJvZHkuZGlzdHJvLFxuICAgICAgICBob3N0bmFtZTogcmVxLmJvZHkuaG9zdG5hbWVcbiAgICB9XG5cbiAgICBcblxuICAgIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl19