import {ProductImageList} from "./ProductImageList";
import {ProductInfo} from "./ProductInfo";

interface ProductDetailProps {
   className?: string
}

function ProductDetail(props: ProductDetailProps)
{
   return (
      <div className={`${props.className}`}>
         <div className={"w-full grid grid-cols-12 gap-8 justify-center items-center h-[100vh]"}>
            <ProductImageList className={"col-start-3 col-end-7"}/>
            <ProductInfo className={"col-start-7 col-end-11"}/>
         </div>
      </div>
   )
}

export {ProductDetail}