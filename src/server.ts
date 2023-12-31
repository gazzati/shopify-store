import "./aliases"

import router from "@api/router"
import express from "express"

import config from "@root/config"

const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.use("/api", router)

app.listen(config.apiPort, () => {
  console.info(`Server started at port: ${config.apiPort}`)
})
