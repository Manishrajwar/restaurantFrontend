import Navbar from "../Components/Common/Navbar";
import HeroSection from "../Components/HomePage/HeroSection";
import ExploreMenuSection from "../Components/HomePage/ExploreMenuSection";
import SpecialMealSection from "../Components/HomePage/SpecialMealSection";
import RewardProgramSection from "../Components/HomePage/RewardProgramSection";
import ChooseOrderSection from "../Components/HomePage/ChooseOrderSection";
import AmazingServices from "../Components/HomePage/AmazingServices";
import FooterSection from "../Components/Common/FooterSection";
import { navItem } from "../Data/navbar";
import { useState } from "react";
import "./page.css"
import { useEffect } from "react";


function Home(){

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 850) {
setShowNavbar(false)
          } 
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    

    const [showNavbar , setShowNavbar] = useState(false);

    return (
        <div className="w-[100vw] min-h-[100vh] overflow-x-hidden relative">

            <Navbar setShowNavbar={setShowNavbar} />

            {/* this is for sidebar navbar */}

{
    showNavbar && 

            <div className="sidebar translate-x-[50vw] h-[100vh] mt-[70px] flex flex-col items-center  fixed top-0 w-[50%] bg-[#007c7d] right-0 z-20  ">
                {
 navItem.map((item ,index)=>(
    <p className="text-white font-[600] py-4" key={index}>{item}</p>
 ))
                }
            </div>

}



            <HeroSection />

            {/* yellow line  */}

 <section className="w-full flex justify-center px-2 text-center bg-[#ffb050] py-3">
    <p style={{fontFamily:"Poppins-regular"}} className="font-[600] text-[10px] sm:text-[14px]"> Try our NEW digital-exclusives! <span className="underline">order Salt & chilli chicken chips</span></p>
 </section>

 <ExploreMenuSection />

<SpecialMealSection />

<RewardProgramSection />

{/* line */}
<div className="w-[90%] h-[1px] bg-black mx-auto my-12 "></div>

<ChooseOrderSection />

{/* line */}
<div className="w-[90%] h-[1px] bg-black mx-auto my-3 "></div>

<AmazingServices />

<FooterSection />



        </div>
    )
}

export default Home;