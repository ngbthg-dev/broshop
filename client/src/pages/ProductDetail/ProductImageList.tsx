interface ProductImageListProps {
   className?: string
}

function ProductImageList(props: ProductImageListProps)
{
   return (
      <div className={`${props.className}`}>
         <img className={"border border-green-900"} src="https://levents.asia/wp-content/uploads/2022/10/z3870358013954_4dce8d5fe3866a6f53b499a773cc8c4f-2048x2048.jpg" alt=""/>
      </div>
   )
}

export {ProductImageList}