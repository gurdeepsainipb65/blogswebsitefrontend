import { useState } from "react";
import axios from "axios";
import Loader from "./loader";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../BaseURL";
const Form = () => {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  setTimeout(() => {
    setloading(false);
  }, 1000);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    categary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    console.log("Token:", localStorage.getItem("token"));

    axios
      .post(`${BaseURL}/api/blogs/add`, formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log("Response received:", response);
        setFormData({
          name: "",
          image: "",
          category: "",
          description: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div className="h-[72vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Blog Post
        </h2>
        <h2 className="text-center">Give information About Your blog</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <img
              src={formData.image}
              alt="Product"
              className="mt-2 w-full h-64 object-cover rounded-lg shadow-md border border-gray-200"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product category"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              required
              minLength={20}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
