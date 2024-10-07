"use client";
import React from "react";
import Style from "./blogDetail.module.scss";
import useBlogDetail from "./useBlogDetail";

const BlogDetail = ({ params }) => {
  const { data, loading, handleBackButton } = useBlogDetail(params?.blogID);
  return (
    <div className={Style.main_container}>
      <button className={Style.back_button} onClick={handleBackButton}>
        Back to blogs
      </button>
      <div className={Style.blog_root}>
        {loading ? (
          <>Loading...</>
        ) : data ? (
          <div>
            <h3>Blog Title is {data["title"]}</h3>
            <p>Blog Content is {data["body"]}</p>
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
