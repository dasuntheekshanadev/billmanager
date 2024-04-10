import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    vendor: "",
    type: "",
    location: "",
    locationCode: "",
    expenseType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center bg-purple-100 min-h-screen">
      <form className="w-full md:max-w-lg bg-white rounded-lg shadow-md px-8 py-6">
        <h2 className="text-3xl mb-4 text-purple-800 font-bold text-center">
          Manage Your Hostel Bills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vendor"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Vendor
            </label>
            <input
              type="text"
              id="vendor"
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter vendor name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select type</option>
              <option value="option1">Rent</option>
              <option value="option2">Electricity</option>
              <option value="option3">Water</option>
              <option value="option3">Other</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="locationCode"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Location Code
            </label>
            <input
              type="text"
              id="locationCode"
              name="locationCode"
              value={formData.locationCode}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter location code"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expenseType"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Expense Type
            </label>
            <input
              type="text"
              id="expenseType"
              name="expenseType"
              value={formData.expenseType}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter expense type"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-purple-800 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Enter your message"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
