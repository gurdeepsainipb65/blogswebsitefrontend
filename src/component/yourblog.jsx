import { useEffect, useState } from "react";
import Blogscart from "./blogscart";
import axios from "axios";
import { BaseURL } from "../BaseURL";
import Loader from "./loader";

export default function Yourblog() {
  const [loading, setloading] = useState(true);
  const [userblog, setuserblog] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseURL}/api/blogs/userblog`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((resp) => {
        console.log(resp);
        setuserblog(resp.data.blogs);
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
        setloading(false)
      });
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
      {userblog.length === 0 ? (
        <p className="text-center text-xl text-gray-500">You Have No Blogs</p>
      ) : (
        <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-8 container mx-auto">
          {userblog.map((item, index) => (
            <Blogscart
              key={index}
              image={item.image}
              description={item.description}
              name={item.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
