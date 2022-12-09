import {Column, Entity, OneToOne, JoinColumn} from "typeorm";
import {GenderEnum} from "../../constant";
import {Model} from "./Model";
import {User} from "./User";

@Entity("profiles")
class Profile extends Model
{
   @Column()
   name: string

   @Column({type: "enum", enum: GenderEnum})
   gender: GenderEnum

   @Column({type: "date"})
   birthday: Date

   // relationship

   @OneToOne(() => User, (user: User) => user.profile)
   @JoinColumn()
   user: User
}

export {Profile}