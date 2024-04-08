import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a question? Check out our FAQ section for answers.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid gap-10 lg:grid-cols-1 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex-shrink-0 bg-blue-500 text-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Q: How to find a house using RentHub?</h3>
              <p className="mt-2 text-sm">A: You can visit our Home page to browse through all the available listings. Once you find a place you're interested in, you can use the contact information provided to get in touch with the owner and arrange to rent the place.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex-shrink-0 bg-blue-500 text-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Q: How do I list my room or place on the website?</h3>
              <p className="mt-2 text-sm">A: To list your room or place on our website, you'll first need to sign in using your Google account or create a dedicated account on our website. Once signed in, navigate to the "List your room" section and fill out the form with all the necessary information about your place. After completing the form, your listing will be available for everyone to see.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="flex-shrink-0 bg-blue-500 text-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Q: How are we different from other rental websites?</h3>
              <p className="mt-2 text-sm">A: We have more listings targeting students than any other platform in Sarnia, and we are trusted by Lambton College.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
