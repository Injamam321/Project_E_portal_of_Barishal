import { Link } from 'react-router-dom'
import { FetchAllServiceResponse } from '../../Hooks/useAllService'

import { motion } from 'framer-motion';

const ServiceCard = ({ _id, image, name, description, slug }: FetchAllServiceResponse) => {


    return (
        <>
            <div className=" mt-9">
                <motion.div
                    whileHover={{ scale: 1.09, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to={`service/${slug}`} >
                        <div className="text-center bg-[#03ab9c] pt-2 rounded-lg">
                            <div className="mx-1 bg-white rounded-lg">
                                <div className="flex justify-center items-center text-red-500 text-2xl">
                                    <img src={image} alt="" className='mt-5 mb-5 h-20 w-auto' />
                                </div>
                                <p className=" pb-2 text-md font-bold">{name}</p>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div >
        </>
    )
}

export default ServiceCard