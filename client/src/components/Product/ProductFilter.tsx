import {ColorSelector} from "./ColorSelector";

function ProductFilter()
{
   return (
      <section className={"flex gap-8"}>
         <ColorSelector/>
         <ColorSelector/>
         <ColorSelector/>
      </section>
   )
}

export {ProductFilter}