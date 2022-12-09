require("dotenv").config()

const ServerConfig = Object.freeze({
   port: process.env.APP_PORT
})

export {ServerConfig}