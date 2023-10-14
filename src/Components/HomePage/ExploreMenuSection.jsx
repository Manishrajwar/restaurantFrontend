import menuImg from "./assets/menuImg.jpg"

function ExploreMenuSection(){
    return (
        <section className="w-full py-10 bg-white flex flex-col items-center">

            <h1 className="font-[700] text-[26px] pb-5 ">EXPLORE OUR MENU</h1>

            <div className="flex flex-wrap w-[90%] justify-between ">

                <div className="w-[250px] sm:w-[30%] mx-auto sm:mx-0 flex flex-col items-center">
                <img className="" src={menuImg} alt="" />
                 <p className="font-[700] text-[22px] ">Takeout</p>

                </div>
                <div className="w-[250px] sm:w-[30%] mx-auto sm:mx-0  flex flex-col items-center">
                <img className="" src={menuImg} alt="" />
       <p className="font-[700] text-[22px] ">Lunch Box</p>

                </div>
                <div className="sm:w-[30%] mx-auto sm:mx-0 w-[250px] flex flex-col items-center">
                <img className="" src={menuImg} alt="" />
       <p className="font-[700] text-[22px] ">Meal Deals</p>

                </div>

               
            </div>

 <div>
    <button style={{
        fontFamily:"Poppins-semibold"
    }} className="bg-[#007475] text-center text-white font-[500] px-7 py-2 rounded-full my-10 ">VIEW FULL MENU</button>
 </div>

        </section>
    )
}

export default ExploreMenuSection;