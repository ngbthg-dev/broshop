import {PageRouter} from "../Navigation";
import {ProductFilter} from "../../Product";

interface PageFooterProps {
   className?: string
}

function PageFooter(props: PageFooterProps)
{
   return (
      <footer className={`${props.className} w-full`}>
         <section className={"flex items-center justify-between bg-white border border-green-900 px-5 py-2"}>
            <PageRouter/>
            <ProductFilter/>
         </section>
      </footer>
   )
}

export {PageFooter}