function ProductCard()
{
   return (
      <article className={"border border-gray-300"}>
         <img loading={"lazy"} className={""} src="https://levents.asia/wp-content/uploads/2022/10/z3870358013970_70cd062d52e492599be908d81b2be660-1536x1536.jpg" alt=""/>
         <section className={"px-5 py-3 flex justify-between"}>
            <p className={""}>BRUHLERS/ALTERIOR BRUHTHER CAP NAVY</p>
            <p>350$</p>
         </section>
      </article>
   )
}

export {ProductCard}