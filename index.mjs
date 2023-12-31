import express from "express";
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    const helloMessage = `Hello from the kiran cg express ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log(`web server is listening at PORT ${PORT}`)
})
