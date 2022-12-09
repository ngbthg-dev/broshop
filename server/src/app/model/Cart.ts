import {Model} from "./Model"
import {Entity, OneToMany, OneToOne, JoinColumn} from "typeorm"
import {User} from "./User"
import {AddedItem} from "./AddedItem"

@Entity("carts")
class Cart extends Model
{
   @OneToOne(() => User, (user: User) => user.cart)
   @JoinColumn()
   user: User

   // relationship

   @OneToMany(() => AddedItem, (addedItem: AddedItem) => addedItem.cart)
   addedItems: AddedItem[]
}

export {Cart}