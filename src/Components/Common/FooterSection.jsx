import "./common.css"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillFileMusicFill , BsFillArrowRightCircleFill} from 'react-icons/bs'



const knowUs = [
    "Our Menu" , "Locations" , "About Us" , "Catering"
]

const information = [
    "Our Story" , "Our Food" , "Rewards " , "Gift Vourchers" , "Allergens" , "Franchising"
]

function FooterSection(){
    return (
        <div className="w-full bg-[#282828] py-10 px-10 mx-auto flex footer_container justify-between">
            
            {/* tops */}
            <div className="flex footer_left_part_container justify-between w-[60%] ">

                {/* left two parts  */}
                <div className="flex justify-between footer_left_left_container w-[40%]">
                 
                 {/* first part */}
                 <div className="flex flex-col items-center ">
                    <p className="text-[#ffb050] font-[600] text-[20px]">Know Us</p>

{
    knowUs.map((item ,index)=>(
        <p className="text-white font-[500] py-2" key={index}>{item}</p>
    ))
}
                    
                 </div>

                 {/* second part  */}
                 <div>
                    <p className="text-[#ffb050] font-[600] text-[20px]">Information</p>
                    {
    information.map((item ,index)=>(
        <p className="text-white font-[500] py-2" key={index}>{item}</p>
    ))
}
                 </div>

                </div>

                {/* right part */}
                <div className="flex flex-col ">
                    <p className="text-white font-[700] text-[28px]">Bell pepper</p>

                    <p className="font-[500] text-white py-2">Unit 3,Central park , Coolock Village. </p>
                    <p className="font-[500] text-white py-1">Dublin5</p>

                    <p className="font-[500] text-white py-2">info@bellpepper.ie</p>

                    <p className="font-[500] text-white py-2">018770088</p>

                    <div className="flex flex-col ">
                        <p className="font-[500] text-white">Follow Us</p>

                        <div className="py-3 flex gap-2">
                            <BsFacebook className="text-white text-[26px]" />
                            <AiFillTwitterCircle className="text-white text-[26px]" />
                            <AiFillInstagram className="text-white text-[26px]" />
                            <BsFillFileMusicFill className="text-white text-[26px]" />

                        </div>

                    </div>

                </div>
               

            </div>


{/* last part  */}
<div  className="translate-x-[60px] last_email_section">
    <p className="text-[#ffb050] font-[600] text-[20px]">Sign Up</p>
    <input type="email" placeholder="Your Email Here" className="my-3 bg-transparent border-b-2 w-[250px] text-white " />
    <BsFillArrowRightCircleFill className="absolute text-white translate-x-[230px] translate-y-[-40px]" />

    <p className="text-white w-[60%] py-3">Subscribe our news letter gets our latest news & offers</p>

    <p className="text-[#ffb050] font-[600] text-[20px]">Get the Bell Pepper App!</p>
</div>

        </div>
    )
}

export default FooterSection;