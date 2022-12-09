import "reflect-metadata";
import express, {Application, json, urlencoded} from "express"
import * as http from "http"
import {MysqlDataSource} from "./index"
import {ServerConfig} from "../constant"
import {container} from "tsyringe"
import cors from "cors"

import {ProductController} from "../app/controller";

class Server
{
   private readonly app: Application
   private readonly httpServer: http.Server

   constructor() {
      this.app = express()
      this.httpServer = http.createServer(this.app)
   }

   start() {
      this.connectDatabase()
      this.configureApp()
      this.configureRouter()

      this.httpServer.listen(ServerConfig.port)
   }

   configureApp() {
      this.app.use(json())
      this.app.use(cors())
      this.app.use(urlencoded({extended: true}))
   }

   connectDatabase() {
      MysqlDataSource.initialize()
         .then(() => {
            console.log("--- connect database successfully.")
         })
         .catch((error) => {
            console.log(error)
            console.log("--- database is dump.")
         })
   }

   configureRouter() {
      const productController = container.resolve(ProductController)

      this.app.use(productController.routes())
   }
}

export {Server}