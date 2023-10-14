import { navItem } from "../../Data/navbar";
import {BiChevronDown} from "react-icons/bi"
import "./common.css"
import logo from "../../assets/logo.jpg"
import {ImAndroid} from "react-icons/im"
import {AiOutlineHeart} from "react-icons/ai"
import {BsFillHandbagFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"


function Navbar({setShowNavbar}){
    return (
        <div className="w-full bg-[#007c7d] h-[70px]  flex items-center px-[20px] justify-between  ">
           
           {/* first nav items */}
          <nav style={{
            fontFamily:"poppins-semibold"
          }} className="flex flex-row gap-10 navItem_container ">
            {
                navItem.map((item , index)=>(
                    index === 0 ?(
                        <div className="flex flex-col items-center relative py-1 navItem_wrapper" >

                        <span className="text-white font-[600] cursor-pointer" key={index}>{item}</span>
                        <div className="  navItem_line bottom-0 absolute"></div>
                        </div>

                        ):(
                            <div style={{
                                fontFamily:"poppins-semibold"
                              }}  className="flex flex-col items-center relative py-1 navItem_wrapper" >
                            <span className="text-white flex items-center   cursor-pointer">{item} <BiChevronDown />  </span>
                            <div className="  navItem_line bottom-0 absolute"></div>

                            </div>
                        )
                ))
            }
          </nav>

{/* middle logo */}
          <img src={logo} className="max-w-[50px]" alt="" />


{/* third items  */}
          <div className="flex  text-white items-center">

            {/* first items */}
            <div className="flex items-center px-3">
                <div className="border-2 border-white rounded-full px-2 py-2">

                <ImAndroid className="text-[24px]" />
                </div>
                <p className="px-2" >Login or <br /> Register</p>
            </div>

            {/* second item */}
            <div className="border-2 border-white rounded-full text-black bg-white px-2 py-2 mx-3">
                <AiOutlineHeart />
                
            </div>

            <div className="border-2 border-white rounded-full bg-white text-black mx-3 px-2 py-2">
                <BsFillHandbagFill/>
            </div>




          </div>


{/* this is for the menu bar for small screen */}
<div className=" relative smallNavItems hidden">

<p onClick={()=>setShowNavbar((prev)=>!prev)}><AiOutlineMenu className="text-[22px] text-white" /></p>
</div>



        </div>
    )
}

export default Navbar;