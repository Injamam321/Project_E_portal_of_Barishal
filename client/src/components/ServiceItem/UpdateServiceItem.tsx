import { useState } from 'react';
import { Service } from '../../Hooks/useService';

interface UpdateServiceItemProps {
    serviceItem: Service;
    onUpdate: (updatedItem: Service) => void;
    onCancel: () => void;
}

const UpdateServiceItem: React.FC<UpdateServiceItemProps> = ({ serviceItem, onUpdate, onCancel }) => {
    const [updatedItem, setUpdatedItem] = useState<Service>(serviceItem);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUpdatedItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(updatedItem);
    };

    return (
        <><div className="bg-gradient-to-b from-[#8a173f] to-[#03ab9c] h-60 md:h-[15rem] lg:h-[10rem] rounded-b-full flex flex-col justify-center items-center">
            <p className="text-white text-center px-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Update:  {serviceItem?.name}
            </p>
        </div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto border-red-600 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Update Service Item</h2>
                <div className="flex justify-end gap-4 mt-6">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Update
                    </button>
                    <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Cancel
                    </button>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={updatedItem.name}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Image</label>
                    <input
                        type="text"
                        name="image"
                        value={updatedItem.image || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Branch</label>
                    <input
                        type="text"
                        name="branch"
                        value={updatedItem.branch || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={updatedItem.address || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Campus</label>
                    <input
                        type="text"
                        name="campus"
                        value={updatedItem.campus || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={updatedItem.contact || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Description</label>
                    <textarea
                        name="description"
                        value={updatedItem.description || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Destinations</label>
                    <input
                        type="text"
                        name="destinations"
                        value={updatedItem.destinations || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Founded</label>
                    <input
                        type="text"
                        name="founded"
                        value={updatedItem.founded || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={updatedItem.location || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Students</label>
                    <input
                        type="number"
                        name="students"
                        value={updatedItem.students || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={updatedItem.phone || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={updatedItem.email || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-600">Website</label>
                    <input
                        type="text"
                        name="website"
                        value={updatedItem.website || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-600">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={updatedItem.type || ''}
                        onChange={handleChange}
                        className="mt-2 p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </form>
        </>
    );
};

export default UpdateServiceItem;
