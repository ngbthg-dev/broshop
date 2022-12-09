import {Shop} from "../Shop"
import {PageFooter, PageHeader} from "../../components/Base";
import {ProductDetail} from "../ProductDetail";

function Main()
{
   return (
      <>
         <PageHeader className={"p-7 fixed top-0"}/>
         <Shop className={"m-auto px-14 my-24"}/>
         {/*<ProductDetail className={"m-auto px-14"}/>*/}
         <PageFooter className={"p-7 fixed bottom-0"}/>
      </>
   )
}

export {Main}