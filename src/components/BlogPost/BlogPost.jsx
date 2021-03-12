import React from "react";
import "./BlogPost.scss";

const BlogPost = ({ singleBlog }) => {

  const { title, excerpt } = singleBlog;

  return (
    <div className="singleBlogPost">
      <h1>{title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>
    </div>
  );
};

export default BlogPost;
