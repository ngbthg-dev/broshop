import {Column, PrimaryGeneratedColumn} from "typeorm";
import {ModelHistory} from "./ModelHistory";

abstract class Model
{
   @PrimaryGeneratedColumn("uuid")
   id: string

   @Column(() => ModelHistory, {prefix: false})
   history: ModelHistory
}

export {Model}