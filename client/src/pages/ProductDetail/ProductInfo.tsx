import {Color} from "../../components/Product";
import {Button} from "../../components/Base";

interface ProductInfoProps {
   className?: string
}

function ProductInfo(props: ProductInfoProps)
{
   return (
      <div className={`${props.className} flex flex-col gap-2`}>
         <p className={"text-2xl font-bold"}>BRUHLERS/ALTERIOR BRUHTHER CAP NAVY</p>
         <div className={"flex items-center justify-between"}>
            <span className={"text-xl"}>400$</span>
            <span>|</span>
            <span className={"text-sm"}>XL</span>
            <span>|</span>
            <Color color={"blue"}/>
         </div>
         <Button text={"Add"}/>
      </div>
   )
}

export {ProductInfo}