import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer two distinct services tailored to the needs of both tenants and landlords in Sarnia.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex-shrink-0 bg-blue-500 text-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">For Tenants</h3>
              <p className="mt-2 text-sm">We help international students and other tenants find affordable and suitable accommodation in Sarnia. Our platform simplifies the search, listing, and booking process, ensuring a convenient and hassle-free experience.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex-shrink-0 bg-blue-500 text-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">For Landlords</h3>
              <p className="mt-2 text-sm">For landlords in Sarnia, our platform provides a streamlined solution to find reliable tenants for their properties. We offer tools to list properties, screen potential tenants, and manage rental agreements, ensuring a seamless and efficient process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
