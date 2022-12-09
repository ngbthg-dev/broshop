import {CategoryRepository, ProductRepository} from "../repository";
import {Category, Product} from "../model";
import {ColorEnum, SizeEnum} from "../../constant";
import {autoInjectable} from "tsyringe";

@autoInjectable()
class ProductService {
   private readonly productRepo: ProductRepository
   private readonly categoryRepo: CategoryRepository

   constructor(productRepo: ProductRepository, categoryRepo: CategoryRepository) {
      this.categoryRepo = categoryRepo
      this.productRepo = productRepo
   }

   getProducts(query: any): Promise<Product[]> {
      return this.productRepo.getProducts(query)
   }

   getProductById(id: any): Promise<Product> {
      return this.productRepo.getById(id)
   }

   getAllCategories(): Promise<Category[]> {
      return this.categoryRepo.getAll()
   }

   getAllColors() {
      return ColorEnum
   }

   getAllSizes() {
      return SizeEnum
   }
}

export {ProductService}