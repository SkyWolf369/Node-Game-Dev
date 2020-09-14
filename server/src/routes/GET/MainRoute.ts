import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "hello there"
    })
})

export default router