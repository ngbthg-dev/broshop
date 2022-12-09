import {Model} from "./Model"
import {Column, Entity, ManyToOne, OneToMany} from "typeorm"
import {ColorEnum, SizeEnum} from "../../constant"
import {FatherProduct} from "./FatherProduct"
import {ProductImage} from "./ProductImage"
import {AddedItem} from "./AddedItem"

@Entity("products")
class Product extends Model {
   constructor(price: number, color: ColorEnum, size: SizeEnum, amount: number) {
      super();
      this.price = price;
      this.color = color;
      this.size = size;
      this.amount = amount;
   }

   @Column({type: "float"})
   price: number

   @Column({type: "enum", enum: ColorEnum})
   color: ColorEnum

   @Column({type: "enum", enum: SizeEnum})
   size: SizeEnum

   @Column({type: "smallint", unsigned: true})
   amount: number

   // relationship

   @ManyToOne(
      () => FatherProduct,
      (fatherProduct: FatherProduct) => fatherProduct.products)
   fatherProduct: FatherProduct

   @OneToMany(
      () => ProductImage,
      (image: ProductImage) => image.product,
      {cascade: true})
   images: ProductImage[]

   @OneToMany(
      () => AddedItem,
      (addedItem: AddedItem) => addedItem.product)
   addedItems: AddedItem[]
}

export {Product}