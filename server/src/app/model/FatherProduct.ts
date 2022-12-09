import {Model} from "./Model";
import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {Category} from "./Category";
import {Collection} from "./Collection";
import {Product} from "./Product";

@Entity("fatherProducts")
class FatherProduct extends Model
{
   constructor(name: string) {
      super();
      this.name = name;
   }

   @Column({type: "varchar", unique: true})
   name: string

   // relationship

   @ManyToOne(() => Category, (category: Category) => category.fatherProducts)
   category: Category

   @Column()
   categoryId: string

   @ManyToOne(() => Collection, (collection: Collection) => collection.fatherProducts)
   collection: Collection

   @Column()
   collectionId: string

   @OneToMany(
      () => Product,
      (product: Product) => product.fatherProduct,
      {cascade: true})
   products: Product[]
}

export {FatherProduct}