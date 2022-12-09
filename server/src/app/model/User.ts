import {Entity, Column, OneToOne} from "typeorm"
import {Model} from "./Model";
import {GenderEnum} from "../../constant";
import {Profile} from "./Profile";
import {Cart} from "./Cart";

@Entity("users")
class User extends Model
{
    @Column({type: "varchar", unique: true})
    username: string

    @Column()
    password: string

    @Column({type: "varchar", unique: true})
    email: string

    @Column({type: "enum", enum: GenderEnum})
    gender: GenderEnum

    // relationship

    @OneToOne(() => Profile, (profile: Profile) => profile.user)
    profile: Profile

    @OneToOne(() => Cart, (cart: Cart) => cart.user)
    cart: Cart
}

export {User}