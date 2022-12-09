import {ProductCard} from "../../components/Product";

interface ProductListProps {
   className?: string
}

function ProductList(props: ProductListProps)
{
   return (
      <div className={`${props.className} grid grid-cols-4 gap-5`}>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
   )
}

export {ProductList}