import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    axios.get('http://localhost:3000/properties')
      .then(response => {
        const reversedProperties = response.data.properties.reverse();
        setProperties(reversedProperties);
        setTotalProperties(reversedProperties.length);
        setVisibleProperties(reversedProperties.slice(0, visibleCount));
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  useEffect(() => {
    setVisibleProperties(properties.slice(0, visibleCount));
  }, [properties, visibleCount]);

  // Function to calculate the difference between two dates
  const getDateDifference = (datePosted) => {
    const today = new Date();
    const postedDate = new Date(datePosted);
    const differenceInDays = Math.floor((today - postedDate) / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) {
      return 'Today';
    } else if (differenceInDays === 1) {
      return '1 Day Ago';
    } else {
      return `${differenceInDays} Days Ago`;
    }
  };

  // Function to format available date or show "Contact Owner"
  const formatAvailableFrom = (availableFrom) => {
    if (!availableFrom) {
      return 'Contact Owner';
    } else {
      return new Date(availableFrom).toLocaleDateString();
    }
  };

  // Function to load more properties
  const loadMoreProperties = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  return (
    <div className="property-list container mx-auto px-4">
      <h1 className='text-center font-bold text-4xl text-[#5175AE] italic mb-8'>Property Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProperties.map(property => (
          <Link to={`/property/${property._id}`} key={property._id}>
            <div className="card rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-600">
              <img src={property.media} alt={property.description} className="w-full h-64 object-cover" />
              <div className="p-4">
                {/* <h2 className='font-bold italic'>{property.description}</h2> */}
                <p><strong>Price:</strong> ${property.price}</p>
                <p><strong>Address:</strong> {property.address}</p>
                <p><strong>Date Posted:</strong> {getDateDifference(property.DatePosted)}</p>
                <p><strong>Available From:</strong> {formatAvailableFrom(property.AvailableFrom)}</p>
                {/* Display other property details */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleCount < totalProperties && (
        <div className="text-center mt-8">
          <button onClick={loadMoreProperties} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
