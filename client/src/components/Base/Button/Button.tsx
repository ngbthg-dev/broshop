interface ButtonProps {
   className?: string
   text: string
}

function Button(props: ButtonProps)
{
   return (
      <button className={`${props.className} bg-green-900 text-white self-start px-10 py-2`}>
         {props.text}
      </button>
   )
}

export {Button}