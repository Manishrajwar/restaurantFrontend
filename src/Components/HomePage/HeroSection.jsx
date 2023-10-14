import "./homePage.css"
import heroImg from "./assets/heroSecImg.jpg"
import { useState } from "react"

const NumberOfImage = [
  '1' , "2","3"
]

function HeroSection(){

const [currentSlide , setCurrentSlide] = useState(0);

const [count ,setCount] = useState(0);

  return (
    <section className="w-[100vw] relative flex overflow-hidden ">


{/* first img */}

{
  count === 0  &&

      <div className={`  relative w-[100vw] overflow-hidden`}>

        <img src={heroImg} className="max-h-[650px] w-[100%]" alt="" />
 
<div className="absolute top-0 translate-x-[50px] translate-y-[50px] hero_sec_text_container text-white p-10">

        <p style={{
          fontFamily:"Poppins-bold"
        }} className="font-[700] lg:text-[44px] heading sm:text-[26px] " >
        Bellpepper <br /> Feel Good <br /> Thai Restaurant <br />& Takeaway
        </p>

        <p style={{fontFamily:"Poppins-regular"}} className="font-[400] hero_para lg:text-[22px] sm:text-[18px] text-[12px] py-5 ">
        at right Love yourself bell pepper is all about fresh , <br />
nutritious tasty food cooked to orde
        </p>

        <button style={{
          fontFamily:"Poppins-bold"
        }} className="bg-[#007c7d]  px-6 rounded-full py-2 font-[500] text-[20px] order_online_btn my-5 ">Order Online</button>
</div>
      </div>

}

      {/* second img  */}
      {
        count === 1  && 
        <div className="heroAnimate relative w-[100vw] overflow-hidden">

        <img src={heroImg} className="max-h-[650px] w-[100%]" alt="" />
 
<div className="absolute top-0 translate-x-[50px] translate-y-[50px] hero_sec_text_container text-white p-10">

        <p style={{
          fontFamily:"Poppins-bold"
        }} className="font-[700] lg:text-[44px] heading sm:text-[26px] " >
        Zesty <br /> Thai Bites Eatery <br /> & Takeout 
        </p>

        <p style={{fontFamily:"Poppins-regular"}} className="font-[400] hero_para lg:text-[22px] sm:text-[18px] text-[12px] py-5 ">
        at right Love yourself bell pepper is all about fresh , <br />
nutritious tasty food cooked to orde
        </p>

        <button style={{
          fontFamily:"Poppins-bold"
        }} className="bg-[#007c7d]  px-6 rounded-full py-2 font-[500] text-[20px] order_online_btn my-5 ">Order Online</button>
</div>
      </div>


      }
      {/* third img  */}
      {
        count === 2  && 
        <div className=" heroAnimate relative w-[100vw] overflow-hidden">

        <img src={heroImg} className="max-h-[650px] w-[100%]" alt="" />
 
<div className="absolute top-0 translate-x-[50px] translate-y-[50px] hero_sec_text_container text-white p-10">

        <p style={{
          fontFamily:"Poppins-bold"
        }} className="font-[700] lg:text-[44px] heading sm:text-[26px] " >
       Sizzling <br />Spice Thai <br /> Kitchen & Takeaway
        </p>

        <p style={{fontFamily:"Poppins-regular"}} className="font-[400] hero_para lg:text-[22px] sm:text-[18px] text-[12px] py-5 ">
        at right Love yourself bell pepper is all about fresh , <br />
nutritious tasty food cooked to orde
        </p>

        <button style={{
          fontFamily:"Poppins-bold"
        }} className="bg-[#007c7d]  px-6 rounded-full py-2 font-[500] text-[20px] order_online_btn my-5 ">Order Online</button>
</div>
      </div>
      }






{/* this is for the bottom  dots*/}
        <div className="absolute bottom-0 translate-y-[-10px] left-[50%] flex gap-6">
       {
        NumberOfImage.map((_ ,index)=>(
          <div onClick={()=>{
            setCurrentSlide(index);
            setCount(index);
            
            }}  className={` cursor-pointer flex justify-center items-center  ${currentSlide === index?('sm:w-[30px] sm:h-[30px] w-[15px] h-[15px] border-2 border-white'):('')} rounded-full `}>

          <p key={index} className={` ${currentSlide === index?('sm:w-[10px] w-[5px] h-[5px] sm:h-[10px]'):('sm:w-[20px] w-[10px] h-[10px] sm:h-[20px]')}  rounded-full  bg-white text-white`}>
            
          </p>
          </div>
        ))
       }


        </div>


    </section>
  )
}

export default HeroSection;