import {ColorEnum} from "../constant";

interface GetProductQuery {
   page?: number,
   perPage?: number,
   color?: ColorEnum,
   category?: string,
   collection?: string,
   keyword?: string
}

export {GetProductQuery}