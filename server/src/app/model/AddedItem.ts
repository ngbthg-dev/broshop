import {Model} from "./Model";
import {Column, Entity, ManyToOne} from "typeorm";
import {Cart} from "./Cart";
import {Product} from "./Product";

@Entity("addedItems")
class AddedItem extends Model
{
   @Column({type: "smallint"})
   amount: number

   // relationship

   @ManyToOne(() => Cart, (cart: Cart) => cart.addedItems)
   cart: Cart

   @ManyToOne(() => Product, (product: Product) => product.addedItems)
   product: Product
}

export {AddedItem}