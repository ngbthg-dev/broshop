import {Model} from "./Model"
import {Column, Entity, ManyToOne} from "typeorm"
import {Product} from "./Product"

@Entity("productImages")
class ProductImage extends Model
{
   constructor(index: number, url: string) {
      super()
      this.index = index
      this.url = url
   }

   @Column()
   index: number

   // @Column({type: "varchar", unique: true})
   @Column({type: "varchar"})
   url: string

   // relationship

   @ManyToOne(
      () => Product,
      (product: Product) => product.images)
   product: Product
}

export {ProductImage}