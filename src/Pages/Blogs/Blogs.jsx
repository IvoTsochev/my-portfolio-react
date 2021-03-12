import React, { useState, useEffect } from "react";
import axios from "axios";
// Styles
import "./Blogs.scss";
// Components
import BlogPost from "../../components/BlogPost/BlogPost";

const Blogs = () => {
  // States
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://resources.ivaylotsochev.com/wp-json/wp/v2/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="blogs">
      <h1>This is the blogs page</h1>
      {posts.map((singleBlog) => (
        <BlogPost key={singleBlog.id} singleBlog={singleBlog} title={singleBlog.title.rendered} />
      ))}
    </div>
  );
};

export default Blogs;
