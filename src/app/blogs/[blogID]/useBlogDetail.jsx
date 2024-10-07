import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useBlogDetail = (id) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blogs/${id}`);
        const jsonData = await response.json();
        setLoading(false);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBackButton = () => {
    router.push("/blogs");
  };
  return {
    data,
    loading,
    handleBackButton,
  };
};

export default useBlogDetail;
