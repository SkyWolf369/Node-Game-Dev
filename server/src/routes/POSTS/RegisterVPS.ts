import express from "express";
import mongoose from "mongoose"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Registration</h1>")
})

router.post("/", (req, res) => {
    // add POST thing here
    const typeOfVps = {
        distro: req.body.distro,
        hostname: req.body.hostname
    }

    

    
})

export default router