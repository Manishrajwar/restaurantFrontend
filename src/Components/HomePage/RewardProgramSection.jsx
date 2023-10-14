import rewardImg from "./assets/Screenshot 2023-10-13 130027.png"

function RewardProgramSection(){
    return (
        <div className="w-full flex flex-col items-center">

            <h1 className="font-[700] text-[2em] sm:text-[3em] text-center text-opacity-75 py-8 px-2">Our Loyalty & Rewards Program</h1>

            <main className="flex sm:flex-row flex-col-reverse sm:justify-normal justify-between  sm:mx-10 items-center">
                {/* left  */}
                <div className="sm:w-[45%] w-[90%] sm:ml-10 flex flex-col sm:justify-normal justify-center">
                     <p style={{
                        fontFamily:"Poppins-bold"
                     }} className="text-[#007475] font-[700] text-[26px] my-4 sm:text-left text-center ">Reward yourself with our new app</p>
                     <p style={{
                        fontFamily:"Poppins-semibold"
                     }} className="text-black font-[500] sm:text-left text-center">Unlock a delicious new world of perks when you join our free loyalty program and earn rewards , bithday gifts , menu exclusive and more.</p>
                     <button className="bg-[#007c7d] text-white font-[500] sm:w-fit   px-4 py-2 rounded-full my-4 ">JOIN REWARDS</button>
                </div>

                {/* right */}
                <div className="sm:w-[45%] w-full  mx-auto text-center ">

           <img src={rewardImg} className="w-[90%] text-center ml-5 h-[400px]" alt="" />
                </div>

            </main>





        </div>
    )
}

export default RewardProgramSection;