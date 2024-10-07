import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useBlogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogs");
        const jsonData = await response.json();
        console.log(jsonData, "jsonDataa");
        setLoading(false);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickNewBlog = () => {
    router.push("/blogs/new-blog");
  };

  const handleClickBlog = (id) => {
    console.log("id", id);
    router.push(`/blogs/${id}`);
  };

  return { data, loading, handleClickBlog, handleClickNewBlog };
};

export default useBlogs;
