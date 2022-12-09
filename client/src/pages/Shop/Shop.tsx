import {ProductList} from "./ProductList";

interface ShopProps {
   className?: string
}

function Shop(props: ShopProps)
{
   return (
      <div className={`${props.className}`}>
         <ProductList className={""}/>
      </div>
   )
}

export {Shop}