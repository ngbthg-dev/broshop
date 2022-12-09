import "reflect-metadata"
import {DataSource} from "typeorm"
import {DatabaseConfig} from "../constant";
import {Category, Product, FatherProduct, ProductImage, Collection, AddedItem, Cart, Profile, User} from "../app/model"

const MysqlDataSource = new DataSource({
   ...DatabaseConfig,
   synchronize: true,
   logging: false,
   entities: [Category, Collection, FatherProduct, Product, ProductImage, AddedItem, Cart, Profile, User],
   migrations: [],
   subscribers: [],
})

export {MysqlDataSource}