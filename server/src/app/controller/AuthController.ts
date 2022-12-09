import {Controller} from "./Controller";
import {Router} from "express"

class AuthController extends Controller {
   constructor() {
      super()
   }

   routes(): Router {
      return this.router;
   }
}