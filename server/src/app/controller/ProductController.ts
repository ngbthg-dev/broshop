import {Request, Response} from "express";
import {autoInjectable} from "tsyringe";
import {Controller} from "./Controller";
import {ProductService} from "../service";
import {Category, Product} from "../model";

@autoInjectable()
class ProductController extends Controller {
   private readonly productService: ProductService

   constructor(productService: ProductService) {
      super();
      this.productService = productService
   }

   routes() {
      this.router.get("/products", this.getProducts)
      this.router.get("/products/colors", this.getColors)
      this.router.get("/products/sizes", this.getSizes)
      this.router.get("/products/categories", this.getCategories)
      this.router.get("/products/:id", this.getProductById)

      return this.router
   }

   readonly getProducts = async (req: Request, res: Response) => {
      const products: Product[] = await this.productService.getProducts(req.query)
      return res.send(products)
   }

   readonly getProductById = async (req: Request, res: Response) => {
      const product: Product = await this.productService.getProductById(req.params.id)
      return res.send(product)
   }

   readonly getCategories = async (req: Request, res: Response) => {
      const categories: Category[] = await this.productService.getAllCategories()
      return res.send(categories)
   }

   readonly getColors = (req: Request, res: Response) => {
      return res.send(this.productService.getAllColors())
   }

   readonly getSizes = (req: Request, res: Response) => {
      return res.send(this.productService.getAllSizes())
   }
}

export {ProductController}