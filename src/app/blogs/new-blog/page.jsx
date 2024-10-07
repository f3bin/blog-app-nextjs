"use client";
import Link from "next/link";
import React from "react";
import useNewBlog from "./useNewBlog";
import Style from "./newBlog.module.scss";

const AddNewBlog = () => {
  const {
    newBlog,
    errors,
    handleSubmitNewBlog,
    handleBackButton,
    handleChangeTitle,
    handleChangeContent,
  } = useNewBlog();
  return (
    <div className={Style.new_blog_container}>
      <button className={Style.back_button} onClick={handleBackButton}>
        Back to blogs
      </button>
      <div className={Style.form_container}>
        <h3>Add New Blog Here</h3>
        <div className={Style.new_blog_form_container}>
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBlog?.title}
            onChange={handleChangeTitle}
          />
          <p className={Style.error_text}>
            {newBlog?.title === "" && errors?.title !== "" && errors?.title}
          </p>
          <label for="content">Content</label>
          <textarea
            type="text"
            id="content"
            name="content"
            value={newBlog?.body}
            rows={4}
            cols={40}
            onChange={handleChangeContent}
          />
          <p className={Style.error_text}>
            {newBlog?.body === "" && errors?.body !== "" && errors?.body}
          </p>
          <button onClick={handleSubmitNewBlog}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
