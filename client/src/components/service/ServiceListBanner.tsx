interface ServiceNameProps {
    serviceName: string | null
    serviceImage: string | undefined
    serviceDescription: string | null

}

const ServiceListBanner = ({ serviceName, serviceImage, serviceDescription }: ServiceNameProps) => {


    return (
        <>
            <div className=" bg-gradient-to-b from-[#8a173f]  to-[#03ab9c] h-60  md:h-[15rem] lg:h-[10rem] rounded-b-full flex flex-col lg:flex-row  justify-center items-center  ">
                <div className=" p-3 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-3 backdrop-blur-sm bg-white/75 rounded-lg cursor-pointer hover:bg-white/30">
                    <img
                        src={serviceImage}
                        alt="Logo"
                    />
                </div>

                <div className="mx-auto lg:mx-0">
                    <h2 className="text-white font-bold uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">{serviceName}</h2>
                    <p className="mt-2 text-lg leading-8 text-white text-center text-wrap">
                        {serviceDescription}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ServiceListBanner
