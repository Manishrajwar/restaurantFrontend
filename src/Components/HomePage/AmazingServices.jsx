import img1 from "./assets/food-svgrepo-com.svg"
import img2 from "./assets/23.png"
import img3 from "./assets/13.png"

const data = [
    {
        img : img1 , 
        title :"Quality Food",
    }
    ,
    {
        img: img2 , 
        title :"Super Taste",
    }
    ,
    {
        img : img3 ,
        title:"Fast Delivery"
    }
]

function AmazingServices(){
    return (

        <div className="w-full flex flex-col items-center "> 

            <h1 className="font-[700] text-[26px] py-4 text-center ">OUR AMAZING SERVICES</h1>

            <div className="bg-[#007c7d] w-full flex sm:flex-row flex-col sm:gap-0 gap-4 px-10 justify-between py-5 items-center ">

          {
            data.map((item , index)=>(
                <div key={index} className="sm:max-w-[200px] flex flex-col items-center"> 
                   <img src={item.img} alt="" className="max-h-[300px] max-w-[50%]" />
                   <p className="text-white font-[600] py-3 text-[24px]">{item.title}</p>
                </div>
            ))
          }


            </div>

        </div>
    )
}

export default AmazingServices;