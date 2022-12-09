import {Router} from "express";

abstract class Controller
{
   protected readonly router: Router

   protected constructor() {
      this.router = Router()
   }

   abstract routes(): Router
}

export {Controller}