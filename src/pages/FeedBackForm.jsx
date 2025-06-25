import React, { useState } from "react";
import Leftsidebar from "../components/leftsidebar";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ firstName: "", lastName: "", address: "", country: "", email: "", phone: "" });
  };

  return (
    <div className="flex w-screen h-screen gap-2 bg-gray-200 relative">
      <Leftsidebar />
      <div className="flex-1 flex flex-col items-center rounded-2xl justify-center bg-gray-200 relative">
        {/* Cross Button */}
        <button
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          onClick={() => navigate("/")}
          aria-label="Close"
        >
          <RxCross2 className="text-2xl text-gray-500" />
        </button>
        <h1 className="text-2xl font-bold mb-2 text-gray-500">
          Thank You So Much for Taking the Time!
        </h1>
        <p className="mb-4 text-gray-500">Please provide the below details!</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-lg bg-white p-6 rounded shadow"
        >
          <div className="flex gap-2">
            <input
              required
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-1/2 p-2 border rounded"
            />
            <input
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <textarea
            required
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter Full Address"
            className="w-full p-2 border rounded"
          />
          <input
            required
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Enter Country Name"
            className="w-full p-2 border rounded"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email Id"
            className="w-full p-2 border rounded"
          />
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit Phone number"
            pattern="[0-9]{10}"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </button>
        </form>

        {/* Show submitted data in a table */}
        {submitted && (
          <div className="mt-8 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Submitted Data</h2>
            <table className="w-full bg-white rounded shadow border">
              <tbody>
                <tr>
                  <td className="font-semibold p-2 border">First Name</td>
                  <td className="p-2 border">{submitted.firstName}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border">Last Name</td>
                  <td className="p-2 border">{submitted.lastName}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border">Address</td>
                  <td className="p-2 border">{submitted.address}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border">Country</td>
                  <td className="p-2 border">{submitted.country}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border">Email</td>
                  <td className="p-2 border">{submitted.email}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border">Phone</td>
                  <td className="p-2 border">{submitted.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
