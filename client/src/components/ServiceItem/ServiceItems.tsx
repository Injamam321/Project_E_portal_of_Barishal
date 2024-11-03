import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceItems from '../../Hooks/useServiceItems';
import { FaChevronRight } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAuth } from '../../context/AuthContext';
import UpdateServiceItem from './UpdateServiceItem';
import { Service } from '../../Hooks/useService';

const ServiceItems = () => {
    const { mainServiceSlug, mainServiceID, id } = useParams();
    const { serviceItem, createServiceItem, updateServiceItem, deleteServiceItem } = useServiceItems(mainServiceSlug!, mainServiceID!, id!);
    const { account } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    const serviceDetails = [
        { label: 'Branch', value: serviceItem?.branch },
        { label: 'Address', value: serviceItem?.address },
        { label: 'Campus', value: serviceItem?.campus },
        { label: 'Contact', value: serviceItem?.contact },
        { label: 'Description', value: serviceItem?.description },
        { label: 'Destinations', value: serviceItem?.destinations },
        { label: 'Founded', value: serviceItem?.founded },
        { label: 'Location', value: serviceItem?.location },
        { label: 'Students', value: serviceItem?.students },
        { label: 'Email', value: serviceItem?.email },
        { label: 'Website', value: serviceItem?.website },
        { label: 'Phone', value: serviceItem?.phone },
    ];

    const handleCreate = () => {
        const newItem = { /* new item details */ };
        createServiceItem(newItem);
    };

    const handleUpdate = (updatedItem: Service) => {
        updateServiceItem(updatedItem);
        setIsEditing(false);
    };

    const handleDelete = () => {
        deleteServiceItem();
    };

    return (
        <>
            {isEditing ? (
                <UpdateServiceItem
                    serviceItem={serviceItem!}
                    onUpdate={handleUpdate}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className=' mb-9 '>
                    <div className="bg-gradient-to-b from-[#8a173f] to-[#03ab9c] h-60 md:h-[15rem] lg:h-[10rem] rounded-b-full flex flex-col justify-center items-center">
                        <p className="text-white text-center px-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                            {serviceItem?.name}
                        </p>
                    </div>
                    <div className=" flex gap-6 items-center justify-center mt-12 px-4 ">
                        <div className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg shadow-md w-full max-w-4xl p-6">
                            <div className="grid grid-cols-12 gap-4 items-center">

                                {serviceItem?.image ?
                                    <div className="col-span-12 md:col-span-12 flex justify-center">
                                        <img
                                            src={serviceItem.image}
                                            alt={`${serviceItem.name} image`}
                                            className="rounded-lg max-w-full h-auto"
                                        />
                                    </div>
                                    :
                                    <div className="col-span-12 md:col-span-2 flex justify-center text-[#0b635b] text-7xl">
                                        <FaChevronRight />
                                    </div>

                                }
                                <div className="col-span-12 md:col-span-10">
                                    {serviceDetails.map((detail, index) => detail.value && (
                                        <div key={index} className="py-2">

                                            {detail.label === 'Website'
                                                ?
                                                <p className="text-gray-700 text-lg md:text-xl font-semibold">
                                                    <span className="text-blue-600">{detail.label}: </span>
                                                    <a href={detail.value} target='_blank' className=' hover:underline'> {detail.value}</a>
                                                </p>
                                                :
                                                <p className="text-gray-700 text-lg md:text-xl font-semibold">
                                                    <span className="text-blue-600">{detail.label}:</span> {detail.value}
                                                </p>
                                            }


                                        </div>
                                    ))}
                                    {serviceItem?.type && (
                                        <div className="py-2">
                                            <p className="text-md text-blue-600 font-light">Type: {serviceItem?.type}</p>
                                        </div>
                                    )}
                                </div>
                                {account?.role === 'admin' && (
                                    <div className="col-span-12 md:col-span-10 flex justify-end">
                                        <div className="flex gap-4 mt-4">
                                            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                                <FaEdit className=' text-3xl ' />
                                            </button>
                                            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                                <MdDelete className=' text-3xl' />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceItems;
