import {MysqlDataSource} from "../../src/config"
import {Category, Collection, FatherProduct, Product, ProductImage} from "../../src/app/model"
import {faker} from '@faker-js/faker'
import {ColorEnum, SizeEnum} from "../../src/constant";

MysqlDataSource.initialize()
   .then(() => {
      console.log("--- connect database successfully.")
      // fakeCategories()
      // fakeCollections()
      MysqlDataSource.manager.save(fakeFatherProducts())
   })
   .catch((error) => {
      console.log(error)
      console.log("--- database is dump.")
   })

async function fakeCategories() {
   await MysqlDataSource
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([
         new Category("cate1", "pain", "yeah, that's a pain"),
         new Category("cate2","shit", "yeah, that's a shit"),
         new Category("cate3", "chainsaw main", "yeah, that's chainsaw main")])
      .execute()
}

async function fakeCollections() {
   await MysqlDataSource
      .createQueryBuilder()
      .insert()
      .into(Collection)
      .values([
         new Collection("coll1", "pain", "yeah, that's a pain"),
         new Collection("coll2","shit", "yeah, that's a shit"),
         new Collection("coll3", "chainsaw main", "yeah, that's chainsaw main")
      ])
      .execute()
}

function fakeProductImages(): ProductImage[] {
   const productImageList: ProductImage[] = []

   for (let j = 0; j < 4; j++) {
      productImageList.push(new ProductImage(j, faker.image.abstract(640, 480, true)))
   }

   return productImageList
}

function fakeProducts() {
   const productList: Product[] = []

   for (let j = 0; j < 5; j++) {
      const product = new Product(
         Number(faker.commerce.price(100, 1000)),
         faker.helpers.arrayElement([ColorEnum.BLACK, ColorEnum.WHITE]),
         faker.helpers.arrayElement([SizeEnum.LARGE, SizeEnum.X_LARGE, SizeEnum.SMALL]),
         faker.datatype.number({min: 1, max: 100}))

      product.images = fakeProductImages()
      productList.push(product)
   }

   return productList
}

function fakeFatherProducts()
{
   const fatherProductList: FatherProduct[] = []

   for (let i = 0; i < 50; i++) {
      const fatherProduct = new FatherProduct(faker.commerce.productName())
      fatherProduct.products = fakeProducts()
      fatherProduct.categoryId = faker.helpers.arrayElement(["cate1", "cate2", "cate3"])
      fatherProduct.collectionId = faker.helpers.arrayElement(["coll1", "coll2", "coll3"])

      fatherProductList.push(fatherProduct)
   }

   return fatherProductList
}