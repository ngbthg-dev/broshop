import {AiOutlineDown} from "react-icons/ai"
import {useEffect, useState, useRef} from "react"

function ColorSelector()
{
   return (
      <div className={"border flex items-center gap-28 border-green-900 px-2 py-[2px]"}>
         <span>COLOR</span>
         <AiOutlineDown/>
      </div>
   )
}

export {ColorSelector}