import food1 from "./assets/food1.jpg"
import food2 from "./assets/food2.jpg"
import "./homePage.css"
import {BsArrowUpShort } from "react-icons/bs"
import {  useEffect, useState } from "react";


const MenuData = [
    {
        img : food1 , 
        title:"Dish Name",
        para:"Lorem manish LoremLorem"
    },
    {
        img : food1 , 
        title:"Dish Name",
        para:"Lorem singh LoremLorem"
    },
    {
        img : food2 , 
        title:"Dish Name",
        para:"Lorem rajwar LoremLorem"
    },
    {
        img : food1 , 
        title:"Dish Name",
        para:"Lorem sanjay LoremLorem"
    },
    {
        img : food1 , 
        title:"Dish Name",
        para:"Lorem singh LoremLorem"
    },
    {
        img : food1 , 
        title:"Dish Name",
        para:"Lorem rajwar LoremLorem"
    },
]


function SpecialMealSection(){

    const [count , setCount] = useState(1);
    const [prevState , setPrevState] = useState(1);
    
    console.log('count' , count);
    console.log('pre' , prevState);



   
    return (
        <section className="w-full ">

 {/* line  */}
 <div className="w-[90%] h-[1px] my-5 bg-black bg-opacity-80 mx-auto"></div>

 <main className="w-full special_meal_container flex justify-between items-center">

    {/* left part */}
     <div className="w-full relative sm:mt-0 mt-10 text_image_animate_container overflow-hidden ">

         <div className="w-[450px] h-[400px] text_rec_wrapper border-t-2 border-[#007c7d] border-b-2 border-r-2 flex  flex-col justify-center items-center ">

            <p style={{
                fontFamily:"Poppins-semibold"
            }} className="text-[#007c7d] font-[600] text-center text-[32px]  ml-[-100px]">SPECIALS <br /> &  <br /> VALUE MEALS</p>
            <button style={{
                fontFamily:"Poppins-semibold"
            }} className="bg-[#007c7d] text-white px-8 py-2 rounded-full font-[600] ml-[-100px] mt-6">Let's Go</button>

         </div>

         <div className="absolute top-0 translate-x-[300px] border-l-4 border-[#007c7d] rounded-full bg-white translate-y-[20px] half-circle">
            {/* border  */}
            <div className="w-[320px]  h-[320px] flex justify-center items-center changingImg_container border-[10px] border-[#007c7d] rounded-full">
                <img src={MenuData[count].img} className="max-w-[300px] changing_img" alt="" />
            </div>
         </div>



     </div>

          {/* right part  */}
          <div className="w-[50%] menuSlider_container bg-aqua-400 flex flex-col gap-5 py-10 ">

            {/* top arrow  icons */}
            <div className="w-[90%] flex justify-end   ">

                <div className="w-[40px] h-[40px] overflow-hidden rounded-full border-2 border-[#007c7d] flex justify-center items-center">


<BsArrowUpShort onClick={()=>{
    if(count > 1){
        setPrevState(count);
        setCount((prev)=>prev-1)
    }
}} className={`cursor-pointer text-[30px] text-[#007c7d] `} />
</div>
</div>


{/* middle part  */}

              <div className={`w-full flex flex-col h-[450px]  gap-10 py-5  overflow-y-hidden `}>
              
           {
            MenuData.map((item ,index)=>(
                 <div  key={index} className={` h-[100px] py-14 flex overflow-y-hidden items-center single_item_meal gap-4 rounded-l-full ${ (prevState < count && count === 2)?(`translate-y-[-140px]`):('')} ${ (prevState < count && count === 3)?(`translate-y-[-280px]`):('')} ${ (prevState < count && count === 3)?(`translate-y-[-320px]`):('')} ${ (prevState < count && count === 4)?(`translate-y-[-460px]`):('')}    ${ (prevState > count && count === 1 )?('translate-y-[0px]'):('')} ${ (prevState > count && count ===2 )?('translate-y-[-140px]'):('')} ${ (prevState > count && count === 3 )?('translate-y-[-280px]'):('')}  ${count===index?('bg-[#007c7d] text-white '):('translate-x-[10%]')} `}> 

                    {/* left image */}
                    <img src={item.img} alt="" className="w-[80px]  rounded-full mx-3 h-[80px]" />
 
                    {/* right */}
                    <div className="flex flex-col  ">
                        <p className="font-[700] text-[20px]  ">{item.title}</p>
                        <p style={{
                            fontFamily:"Poppins-regular"
                        }}>{item.para}</p>
                    </div>

                 </div>
            ))
           }

</div> 


{/* down icons */}
<div className="w-[90%] flex justify-end ">

<div className="w-[40px] h-[40px] overflow-hidden rounded-full border-2 border-[#007c7d] flex justify-center items-center">


                <BsArrowUpShort  onClick={()=>{
                    if(count <4){
                        setPrevState(count);
                        setCount((prev)=>prev+1);
                    }
                    }} className="text-[30px] cursor-pointer text-[#007c7d] rotate-[180deg] " />
            </div>
            </div>


          </div>

 </main>

 {/* line  */}
 <div className="w-[90%] h-[1px] my-5 bg-black bg-opacity-80 mx-auto"></div>
 
        </section>
    )
}
export default SpecialMealSection;