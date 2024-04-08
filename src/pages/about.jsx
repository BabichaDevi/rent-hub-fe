import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            This website is made by Lambton College students to help international students seeking housing in Sarnia. The platform facilitates the search, listing, and booking of rental properties in the area, providing a convenient and efficient solution for both landlords and tenants.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get to know the people behind our platform.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src="/founder.jpg" alt="Founder" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Vivek Saini</h3>
            <p className="mt-2 text-sm text-gray-600">Founder & CEO</p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src="/co-founder.jpg" alt="Co-founder" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Babicha</h3>
            <p className="mt-2 text-sm text-gray-600">Co-founder & CTO</p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src="/team-member.jpg" alt="Team Member" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Rohan</h3>
            <p className="mt-2 text-sm text-gray-600">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
