import express from "express";
import os from "os";

const app = express()
const PORT = 3000

app.get("/", (req,res)=> {
    const message = `Hello v1.1 from the ${os.hostname()}`
    console.log(message)
    res.send(message)
})

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})