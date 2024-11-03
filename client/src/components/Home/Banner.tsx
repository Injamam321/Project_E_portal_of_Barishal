import { useAuth } from "../../context/AuthContext";


const Banner = () => {
    const { account } = useAuth();

    return (
        <div>
            <div className=" bg-gradient-to-b from-[#8a173f]  to-[#03ab9c] h-80 md:h-[14rem] lg:h-[18rem] rounded-b-full flex flex-col justify-center items-center  ">
                {account?.role === "admin" && <h2 className=' text-white font-bold text-lg md:text-3xl lg:text-4xl mb-10'>Wellcome Admin User:
                    <span className=" uppercase"> {account.username}</span>
                </h2>}

                <h2 className=' text-white font-bold text-lg md:text-3xl lg:text-4xl mb-10'>E-Service Of Barishal</h2>
                <p className='text-white text-center px-10 md:text-2xl lg:text-3xl'>
                    বরিশাল জেলার সকল সার্ভিস এবং লোকেশন <br /> সম্পর্কে জানতে আমাদের সাথেই থাকুন।
                </p>
            </div>
        </div>
    )
}

export default Banner