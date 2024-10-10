import React from "react";
import Style from "./blogDetail.module.scss";
import { nextFetch } from "@/utils/nextFetch";
import Link from "next/link";

const BlogDetail = async ({ params }) => {
  const data = await nextFetch(`blogs/${params?.blogID}`, "blogDetail");
  return (
    <div className={Style.main_container}>
      <Link href="/blogs">
        <button className={Style.back_button}>Back to blogs</button>
      </Link>
      <div className={Style.blog_root}>
        {data ? (
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
