import {MysqlDataSource} from "../../config"
import {GetProductQuery} from "../../types"
import {Product} from "../model/"
import {Repository} from "typeorm"

class ProductRepository {
   private readonly self: Repository<Product>

   constructor() {
      this.self = MysqlDataSource.manager.getRepository(Product)
   }

   getById(id: any) {
      const productQueryBuilder = this.self
         .createQueryBuilder("product")
         .leftJoin("product.fatherProduct", "fatherProduct")
         .leftJoin("product.images", "productImage")
         .where("product.id LIKE :productId", {productId: id})
         .select(["fatherProduct.name", "product.id", "product.price", "product.color", "product.size", "productImage.url", "productImage.index"])

      return productQueryBuilder.getOne()
   }

   getProducts(query?: GetProductQuery): Promise<Product[]> {
      const productQueryBuilder = this.self.createQueryBuilder("product")

      productQueryBuilder
         .leftJoin("product.fatherProduct", "fatherProduct")
         .leftJoin("product.images", "productImage")
         .orderBy("productImage.index", "ASC")

      if (query && query.perPage && query.page) {
         productQueryBuilder.limit(query.perPage as number)
         productQueryBuilder.offset((query.page - 1)*query.perPage)
      }

      if (query && query.keyword) {
         productQueryBuilder.where("fatherProduct.name LIKE :keyword", {keyword: `%${query.keyword}%`})
      }

      productQueryBuilder.select(["fatherProduct.name", "product.id", "product.price", "product.color", "product.size", "productImage.url", "productImage.index"])

      return productQueryBuilder.getMany()
   }
}

export {ProductRepository}