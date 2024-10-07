"use client";
import React from "react";
import useBlogs from "./useBlogs";
import Style from "./blogs.module.scss";

const Blogs = () => {
  const { data, loading, handleClickBlog, handleClickNewBlog } = useBlogs();
  return (
    <div className={Style.main_container}>
      <button className={Style.add_button} onClick={handleClickNewBlog}>
        Add new blog
      </button>
      <div className={Style.blog_root}>
        {loading ? (
          <>Loading...</>
        ) : data?.length > 0 ? (
          data?.map((item) => (
            <div
              className={Style.blog_container}
              key={item.id}
              onClick={() => handleClickBlog(item?.id)}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
