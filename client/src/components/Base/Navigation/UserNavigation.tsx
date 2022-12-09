import {BsBag, BsCircleHalf} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"

function UserNavigation()
{
   return (
      <nav>
         <ul className={"flex gap-5 text-xl"}>
            <li><AiOutlineUser/></li>
            <li><BsBag/></li>
            <li><BsCircleHalf/></li>
         </ul>
      </nav>
   )
}

export {UserNavigation}