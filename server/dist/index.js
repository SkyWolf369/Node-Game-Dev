"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("@ayana/logger"));
const readline_1 = __importDefault(require("readline"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const log = logger_1.default.get(app);
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function start() {
    rl.question('Input Port Number: ', (port) => {
        log.info(`Port Number: ${port}`);
        app.listen({ port }, () => console.log(`Web server listening on port: ${port}`));
        log.info(`started on http://144.172.83.2:${port}`);
        rl.close();
    });
    try {
        mongoose_1.default.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true });
        log.info("connected to mongoDB");
    }
    catch (e) {
        log.error(e);
    }
}
// Call the start function
start();
// Routes
const MainRoute_1 = __importDefault(require("./routes/GET/MainRoute"));
const Player_1 = __importDefault(require("./routes/POSTS/Player"));
// the typescript compiler compiled something weird in the dist folder there are two of the same routes :waitwhat:
// reeeeeee the route still isng tloading recompile and re run please
app.use("/", MainRoute_1.default);
app.use("/gameregister", Player_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBbUQ7QUFDbkQsMkRBQW1DO0FBQ25DLHdEQUErQjtBQUMvQix3REFBK0I7QUFFL0IsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO0FBQ3JCLE1BQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRTNCLE1BQU0sRUFBRSxHQUFHLGtCQUFRLENBQUMsZUFBZSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztJQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Q0FDdkIsQ0FBQyxDQUFDO0FBQ0gsS0FBSyxVQUFVLEtBQUs7SUFDbEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5RSxHQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ2xELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSTtRQUNGLGtCQUFRLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQ2hHLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtLQUNqQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNmO0FBQ0wsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixLQUFLLEVBQUUsQ0FBQTtBQUVULFNBQVM7QUFDVCx1RUFBOEM7QUFDOUMsbUVBQWdEO0FBQ2hELGtIQUFrSDtBQUNsSCxxRUFBcUU7QUFDckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsbUJBQVMsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGdCQUFZLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7UmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJAYXlhbmEvbG9nZ2VyXCI7XG5pbXBvcnQgcmVhZGxpbmUgZnJvbSBcInJlYWRsaW5lXCJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IGxvZyA9IGxvZ2dlci5nZXQoYXBwKVxuXG5jb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxuICB9KTtcbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgcmwucXVlc3Rpb24oJ0lucHV0IFBvcnQgTnVtYmVyOiAnLCAocG9ydCkgPT4ge1xuICAgICAgICBsb2cuaW5mbyhgUG9ydCBOdW1iZXI6ICR7cG9ydH1gKTtcbiAgICAgICAgYXBwLmxpc3Rlbih7cG9ydH0sICgpID0+IGNvbnNvbGUubG9nKGBXZWIgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0OiAke3BvcnR9YCkpXG4gICAgICAgIGxvZy5pbmZvKGBzdGFydGVkIG9uIGh0dHA6Ly8xNDQuMTcyLjgzLjI6JHtwb3J0fWApXG4gICAgICAgIHJsLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3XCIsIHt1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pXG4gICAgICAgIGxvZy5pbmZvKFwiY29ubmVjdGVkIHRvIG1vbmdvREJcIilcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoZSlcbiAgICAgIH1cbiAgfVxuXG4gIC8vIENhbGwgdGhlIHN0YXJ0IGZ1bmN0aW9uXG4gIHN0YXJ0KClcblxuLy8gUm91dGVzXG5pbXBvcnQgTWFpblJvdXRlIGZyb20gXCIuL3JvdXRlcy9HRVQvTWFpblJvdXRlXCJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSBcIi4vcm91dGVzL1BPU1RTL1BsYXllclwiXG4vLyB0aGUgdHlwZXNjcmlwdCBjb21waWxlciBjb21waWxlZCBzb21ldGhpbmcgd2VpcmQgaW4gdGhlIGRpc3QgZm9sZGVyIHRoZXJlIGFyZSB0d28gb2YgdGhlIHNhbWUgcm91dGVzIDp3YWl0d2hhdDpcbi8vIHJlZWVlZWVlIHRoZSByb3V0ZSBzdGlsbCBpc25nIHRsb2FkaW5nIHJlY29tcGlsZSBhbmQgcmUgcnVuIHBsZWFzZVxuYXBwLnVzZShcIi9cIiwgTWFpblJvdXRlKVxuYXBwLnVzZShcIi9nYW1lcmVnaXN0ZXJcIiwgUmVnaXN0cmF0aW9uKVxuIl19