import express, {Request, Response} from "express";
import logger from "@ayana/logger";
import readline from "readline"
import mongoose from "mongoose"

const app = express()
const log = logger.get(app)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  async function start() {
    rl.question('Input Port Number: ', (port) => {
        log.info(`Port Number: ${port}`);
        app.listen({port}, () => console.log(`Web server listening on port: ${port}`))
        log.info(`started on http://144.172.83.2:${port}`)
        rl.close();
      });
      try {
        mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true})
        log.info("connected to mongoDB")
      } catch (e) {
          log.error(e)
      }
  }

  // Call the start function
  start()

// Routes
import MainRoute from "./routes/GET/MainRoute"
import Registration from "./routes/POSTS/Player"
// the typescript compiler compiled something weird in the dist folder there are two of the same routes :waitwhat:
// reeeeeee the route still isng tloading recompile and re run please
app.use("/", MainRoute)
app.use("/gameregister", Registration)
