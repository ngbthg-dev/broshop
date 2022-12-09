import {Model} from "./Model"
import {Column, Entity, OneToMany} from "typeorm"
import {FatherProduct} from "./FatherProduct"

@Entity("categories")
class Category extends Model {
   constructor(id: string, name: string, description: string) {
      super()
      this.id = id
      this.name = name
      this.description = description
   }

   @Column({type: "varchar", unique: true})
   name: string

   @Column({type: "tinytext", nullable: true})
   description?: string

   // relationship

   @OneToMany(() => FatherProduct, (fatherProduct: FatherProduct) => fatherProduct.category)
   fatherProducts: FatherProduct[]
}

export {Category}