import Blogscart from "./blogscart";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./loader";
import PostButton from "../assets/postbutton";
import { Link } from "react-router-dom";
import { BaseURL } from "../BaseURL";

export default function Blogspage() {
  const [blog, setBlog] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/blogs`)
      .then((response) => {
        setBlog(response.data.blogs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setloading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-[72vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex w-full justify-center items-center gap-5 p-6 h-32">
        <div className="lg:text-3xl text-blue-500 font-bold">
          You Can Upload Your Blogs Here
        </div>
        <Link to="/postblogs">
          <PostButton />
        </Link>
      </div>
      <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-8 container mx-auto">
        {blog.map((item, index) => (
          <Blogscart
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
