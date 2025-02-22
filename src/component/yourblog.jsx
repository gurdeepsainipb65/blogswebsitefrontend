import { useEffect, useState } from "react";
import Blogscart from "./blogscart";
import axios from "axios";
import { BaseURL } from "../BaseURL";

export default function Yourblog() {
  const [userblog, setuserblog] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseURL}/api/blogs/userblog`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((resp) => {
        console.log(resp);
        setuserblog(resp.data.blogs);
      });
  }, []);

  return (
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
  );
}
