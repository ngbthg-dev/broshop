import {Logo} from "../Logo";
import {PageNavigation} from "../Navigation";
import {UserNavigation} from "../Navigation";
import {SearchBar} from "../Input";

interface PageHeaderProps {
   className?: string
}

function PageHeader(props: PageHeaderProps)
{
   return (
      <header className={`${props.className} w-full`}>
         <section className={"flex items-center justify-between bg-white border border-green-900 px-5 py-2"}>
            <Logo/>
            <PageNavigation/>
            <SearchBar/>
            <UserNavigation/>
         </section>
      </header>
   )
}

export {PageHeader}