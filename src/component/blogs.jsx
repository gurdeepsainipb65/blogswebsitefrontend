import Blogscart from "./blogscart";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./loader";


export default function Blogspage() {
  const [blog, setBlog] = useState([]);
  const [loading,setloading]=useState(false)

  useEffect(() => {
    setloading(true)
    axios
      .get("https://blogswebsitebackend.onrender.com/api/blogs")
      .then((response) => {
        console.log(response);
        setBlog(response.data.blogs);
        if(blog){
          setloading(false)
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); // It's a good practice to handle errors
  }, []);

  if (loading) {
    return (
      <div className="h-[72vh] flex justify-center items-center">
        <Loader/>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-8 container mx-auto">
        {blog.map((item, index) => (
          <Blogscart key={index} image={item.image} name={item.name} description={item.description} /> // Assuming you want to pass item as a prop
        ))}
      </div>
    </div>
  );
}
