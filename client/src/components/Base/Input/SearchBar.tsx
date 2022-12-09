function SearchBar()
{
   return (
      <label htmlFor={"searchBar"}>
         <input className={"" +
            "outline-0 px-2 py-[2px] w-[230px] uppercase text-[12px] " +
            "border border-green-900" +
            ""} name={"searchBar"} id={"searchBar"} placeholder={"search"} type="text"/>
      </label>
   )
}

export {SearchBar}