interface ColorProps {
   className?: string,
   color: string
}

function Color(props: ColorProps)
{
   return (
      <div className={"w-[150px] h-[30px]"} style={{backgroundColor: `${props.color}`}}></div>
   )
}

export {Color}