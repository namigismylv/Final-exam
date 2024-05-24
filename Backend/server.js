const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { type } = require("os")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()

const categoriesSchema = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
})
const categories = mongoose.model("categories", categoriesSchema)
app.get("/categories", async (req, res) => {
    const target = await categories.find()
    res.send(target)
})
app.get("/categories/:id", async (req, res) => {
    const { id } = req.params
    const target = await categories.findById(id)
    res.send(target)
})
app.post("/categories", async (req, res) => {
    const { image, title, desc } = req.body
    const newCat = new categories({ image: image, title: title, desc: desc })
    await newCat.save()
    const target = await categories.find()
    res.send(target)

})
app.delete("/categories/:id", async (req, res) => {
    const { id } = req.params
    await categories.findByIdAndDelete(id)
    const target = await categories.find()
    res.send(target)
})
mongoose.connect(process.env.CS).then(res => {
    console.log("db connected");
})
app.listen(process.env.PORT, (req, res) => {
    console.log("server işə düşdü");
})