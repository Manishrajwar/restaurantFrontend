import food from "./assets/Screenshot 2023-10-13 131751.png"

const data = [
    { 
        img : food , 
        title : "CATERING"
    },
    {
        img : food , 
        title :"GROUP ORDERING"
    },
    {
        img : food , 
        title:"GIFT CARD"
    }
]

function ChooseOrderSection(){
    return (
        <div className="w-full flex flex-col items-center">

            <h1 style={{
                fontFamily:"Poppins-bold"
            }} className="text-[30px] font-[700] py-5 text-center px-2 ">CHOOSE YOUR ORDER</h1>

            <div className="w-[90%] flex flex-wrap justify-between " >

           {
            data.map((item , index)=>(
                <div key={index} className="flex group relative flex-col items-center w-[250px] transition-all duration-300 sm:max-w-[30%] mx-auto">
                    <img src={item.img} className="" alt="" />
                    <p style={{
                        fontFamily:"Poppins-bold"
                    }} className="lg:text-[28px] text-[20px] font-[700] py-5 ">{item.title}</p>

              <div className="absolute text-white top-20 hidden group-hover:block transition-all duration-300">
                <div className=" bg-[#635f5e] w-[250px] text-center">
                <p style={{
                    fontFamily:"Poppins-semibold"
                }} className="text-[24px]">Special</p>
                </div>
                <p style={{
                    fontFamily:"Poppins-regular"
                }} className="text-center text-[22px]">Gift Vouchers</p>
              </div>

                </div>
            ))
           }

            </div>


        </div>
    )
}

export default ChooseOrderSection;