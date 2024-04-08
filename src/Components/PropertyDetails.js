import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaHouseCircleCheck } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${id}`)
      .then(response => {
        setProperty(response.data.property);
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full  flex-row mx-auto min-h-52'>
       <img src={property.media[0]} alt="House" className='w-[100%] h-[450px] mx-auto object-contain '/>
       <br/>
       


        <div  className=' w-[60%] mx-auto  p-3   bg-slate-50'>
          
            {/* name-addr */}
            <div className='flex-row  text-left w-[50%] bg-white'>
                <h1 className=' text-4xl font-bold'>{property.sellerInformation.name}'s room</h1>
                <h2 className='text-lg font-medium'>{property.address}</h2>
            </div>
            <br/>

            {/* details of the the house */}
            <div className='flex-row w-[70%] ml-4 mx-auto '>
                {/* rent */}
                <div className='flex w-full  p-3'>
                    <h1 className='w-full text-left'>Rent</h1>
                    <h2 className='text-right w-full'>{property.price}</h2>
                </div>
                {/* utilities */}
                <div className='flex w-full bg-white p-3'>
                    <h1 className='w-full text-left'>Utilities</h1>
                    <h2 className='text-right w-full'>{property.propertySummary.utilities ? 'Yes' : 'No'}</h2>
                </div>
                {/* Deposit */}
                <div className='flex w-full bg-white p-3'>
                    <h1 className='w-full text-left'>Deposit</h1>
                    <h2 className='text-right w-full'>{property.Deposit}</h2>
                </div>
                {/* property details */}
                <div className='flex w-full  p-3'>
                    <h1 className='w-full text-left'>Property Type</h1>
                    <h2 className='text-right w-full'> {property.propertySummary.roomType}</h2>
                </div>
                {/* bathroom */}
                <div className='flex w-full  p-3'>
                    <h1 className='w-full text-left'>bathroom</h1>
                    <h2 className='text-right w-full'> {property.Washroom}</h2>
                
                </div>
                {/* room Furnishing */}
                <div className='flex w-full bg-white  p-3'>
                    <h1 className='w-full text-left'>Room furnishing</h1>
                    <h2 className='text-right w-full'> {property.propertySummary.furnishing}</h2>
                </div>
                {/* Distance to college */}
                <div className='flex w-full bg-white  p-3'>
                    <h1 className='w-full text-left'>Distance to College</h1>
                    <h2 className='text-right w-full'> {property.propertySummary.distanceToCollege}</h2>
                </div>

                {/* Nearest Bus Stop */}
                <div className='flex w-full  p-3'>
                    <h1 className='w-full text-left'>Nearest Bus Stop</h1>
                    <h2 className='text-right w-full'> {property.propertySummary.nearestBusStop}</h2>
                </div>
                {/* gender */}
                <div className='flex w-full  p-3'>
                    <h1 className='w-full text-left'>Prefer Gender</h1>
                    <h2 className='text-right w-full'> </h2>
                </div>
                {/* amenities */}
                <div className='flex w-full bg-white  p-3'>
                    <h1 className='w-full text-left'>Amenities</h1>
                    <h2 className='text-right w-full'> {property.propertySummary.amenities}</h2>
                </div>
                {/* Available on */}
                <div className='flex w-full bg-white p-3'>
                    <h1 className='w-full text-left'>Available On</h1>
                    <h2 className='text-right w-full'> {property.AvailableFrom}</h2>
                </div>

            </div>

            {/* description of a house */}
            <br/>
            <div className=' w-[60%]  ml-4 text-wrap'>
               <span className='flex items-center gap-2'> <FaHouseCircleCheck /> About the room</span>
                <p className='w-full justify-start min-h-40'>
                 {property.description}
                </p>
                <br></br>
            </div>
            {/* Owner Information */}
            <div className=' w-[60%]  ml-4 text-wrap'>
                <span className='flex items-center gap-2'> <MdVerified />{property.sellerInformation.name}'s</span>
                
            </div><br/>
            <div className=' w-[30%]  ml-4 text-wrap '>
               <div className='w-full ml-5 '>
                    <span className='flex items-center gap-2'> <FaPhone />{property.sellerInformation.phone}</span>
               </div>
               <div className='w-full ml-5 '>
                    <span className='flex items-center gap-2'> <MdMarkEmailRead />{property.sellerInformation.email}</span>
               </div>
                
            </div>
        </div>
    
    </div>
  );
};

export default PropertyDetails;
