import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    vendor: "",
    vendorLocation: "",
    type: "",
    expenseType: "",
    agreementPeriod: {
      start: "",
      end: "",
      calculatedDate: "",
    },
    keyPayment: {
      amount: "",
      period: "",
    },
    rentCycle: {
      type: "",
      payment: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRentFieldsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        [name]: value,
      },
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
          Manage VoiceD Hostel Bills
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
              <option value="option4">Other</option>
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
              htmlFor="vendorLocation"
              className="block text-purple-800 text-sm font-bold mb-2"
            >
              Vendor Location
            </label>
            <input
              type="text"
              id="vendorLocation"
              name="vendorLocation"
              value={formData.vendorLocation}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter vendor location"
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
          {formData.type === "option1" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="start"
                  className="block text-purple-800 text-sm font-bold mb-2"
                >
                  Agreement Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  name="start"
                  value={formData.agreementPeriod.start}
                  onChange={handleRentFieldsChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="end"
                  className="block text-purple-800 text-sm font-bold mb-2"
                >
                  Agreement End Date
                </label>
                <input
                  type="date"
                  id="end"
                  name="end"
                  value={formData.agreementPeriod.end}
                  onChange={handleRentFieldsChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="calculatedDate"
                  className="block text-purple-800 text-sm font-bold mb-2"
                >
                  Calculated Date
                </label>
                <input
                  type="text"
                  id="calculatedDate"
                  name="calculatedDate"
                  value={formData.agreementPeriod.calculatedDate}
                  onChange={handleRentFieldsChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-purple-800 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter calculated date"
                />
              </div>
              {/* Similarly, add other fields for Key Payment and Rent Cycle */}
            </>
          )}
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
