import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import toast from 'react-hot-toast';

function FormRooms() {
    const [formData, setFormData] = useState({
        media: "",
        description: "",
        price: "",
        address: "",
        propertySummary: {
            buildingType: "",
            stories: "",
            roomType: "",
            distanceToCollege: "",
            nearestBusStop: "",
            utilities: false,
            furnishing: "",
            amenities: []
        },
        sellerInformation: {
            name: "",
            email: "",
            phone: ""
        },
        DatePosted: "",
        Gender: "",
        Deposit: "",
        AvailableFrom: "",
        Washroom: ""
    });

    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        if (name.includes("propertySummary") || name.includes("sellerInformation")) {
            const [parent, child] = name.split(".");
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === "checkbox" ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
        }
    }

    function submitHandler(event) {
        event.preventDefault();

        // Send form data to backend using axios
        axios.post('http://localhost:3000/properties', formData)
            .then(response => {
                console.log('Property data sent successfully');
                // Reset form data
            setFormData({
                media: "",
                description: "",
                price: "",
                address: "",
                propertySummary: {
                    buildingType: "",
                    stories: "",
                    roomType: "",
                    distanceToCollege: "",
                    nearestBusStop: "",
                    utilities: false,
                    furnishing: "",
                    amenities: []
                },
                sellerInformation: {
                    name: "",
                    email: "",
                    phone: ""
                },
                DatePosted: "",
                Gender: "",
                Deposit: "",
                AvailableFrom: "",
                Washroom: ""
            });
            toast.success("Form Submitted Successfully");
            // Optionally, you can redirect the user or show a success message here
            })
            .catch(error => {
                console.error('Error sending property data:', error);
            });
    }
    
    return (
        <div className="container mx-auto px-4">
            <form onSubmit={submitHandler} className='max-w-md mx-auto my-8'>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='name' className='mb-2'>Name</label>
                    <input
                        type='text'
                        name='sellerInformation.name'
                        placeholder='Enter your name'
                        value={formData.sellerInformation.name}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='phone' className='mb-2'>Phone Number</label>
                    <input
                        type='tel'
                        name='sellerInformation.phone'
                        placeholder='Enter your phone number'
                        value={formData.sellerInformation.phone}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='email' className='mb-2'>Email</label>
                    <input
                        type='email'
                        name='sellerInformation.email'
                        placeholder='Enter your email'
                        value={formData.sellerInformation.email}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='description' className='mb-2'>Description</label>
                    <textarea
                            type='text'
                            name='description'
                            placeholder='Enter the description'
                            value={formData.description}
                            onChange={changeHandler}
                            className='rounded-lg bg-slate-100 py-9 px-3 hover:outline-none '
                        
                    >

                    </textarea>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='price' className='mb-2'>Price</label>
                    <input
                        type='number'
                        name='price'
                        placeholder='Enter price'
                        value={formData.price}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='address' className='mb-2'>Address</label>
                    <input
                        type='text'
                        name='address'
                        placeholder='Enter address'
                        value={formData.address}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='buildingType' className='mb-2'>Building Type</label>
                    <select
                        name='propertySummary.buildingType'
                        value={formData.propertySummary.buildingType}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
                        <option value=''>Select building type</option>
                        <option value='Apartment'>Apartment</option>
                        <option value='House'>House</option>
                        <option value='Room'>Room</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='stories' className='mb-2'>Stories</label>
                    <select
                        name='propertySummary.stories'
                        value={formData.propertySummary.stories}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
                        <option value=''>Select number of stories</option>
                        <option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4+'>4+</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='roomType' className='mb-2'>Room Type</label>
                    <select
                        name='propertySummary.roomType'
                        value={formData.propertySummary.roomType}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
                        <option value=''>Select room type</option>
                        <option value='Only Private'>Only Private</option>
                        <option value='Sharing'>Sharing</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='furnishing' className='mb-2'>Furnishing</label>
                    <select
                        name='propertySummary.furnishing'
                        value={formData.propertySummary.furnishing}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
                        <option value=''>Select furnishing</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='utilities' className='mb-2'>Utilities</label>
                    <select
                        name='propertySummary.utilities'
                        value={formData.propertySummary.utilities}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
                        <option value=''>Select utilities</option>
                        <option value='true'>true</option>
                        <option value='false'>false</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='distanceToCollege' className='mb-2'>Distance To College</label>
                    <input
                        type='number'
                        name='propertySummary.distanceToCollege'
                        placeholder='Enter distance to college'
                        value={formData.propertySummary.distanceToCollege}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='nearestBusStop' className='mb-2'>Nearest Bus Stop</label>
                    <input
                        type='text'
                        name='propertySummary.nearestBusStop'
                        placeholder='Enter nearest bus stop'
                        value={formData.propertySummary.nearestBusStop}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='media' className='mb-2'>Media</label>
                    <input
                        type='text'
                        name='media'
                        placeholder='Enter media URL'
                        value={formData.media}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='Gender' className='mb-2'>Preferred gender</label>
                    <select
                        name='Gender'
                        value={formData.Gender}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'>
        
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>No Preference</option>
                    </select>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='Deposit' className='mb-2'>Deposit</label>
                    <input
                        type='number'
                        name='Deposit'
                        placeholder='Enter deposit'
                        value={formData.Deposit}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='AvailableFrom' className='mb-2'>Available From</label>
                    <input
                        type='date'
                        name='AvailableFrom'
                        value={formData.AvailableFrom}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='Washroom' className='mb-2'>Washroom</label>
                    <input
                        type='number'
                        name='Washroom'
                        placeholder='Enter number of washrooms'
                        value={formData.Washroom}
                        onChange={changeHandler}
                        className='rounded-lg bg-slate-100 py-2 px-3'
                    />
                </div>
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4'>Submit</button>
            </form>
        </div>
    );
}

export default FormRooms;