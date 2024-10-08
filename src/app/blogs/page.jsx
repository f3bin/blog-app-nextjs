import React from "react";
import Style from "./blogs.module.scss";
import { nextFetch } from "@/utils/nextFetch";
import Link from "next/link";

const Blogs = async () => {
  const data = await nextFetch("blogs");
  return (
    <div className={Style.main_container}>
      <Link href="/blogs/new-blog">
        <button className={Style.add_button}>Add new blog</button>
      </Link>
      <div className={Style.blog_root}>
        {data?.length > 0 ? (
          data?.map((item) => (
            <Link
              className={Style.blog_container}
              key={item.id}
              href={`/blogs/${item?.id}`}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Link>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
