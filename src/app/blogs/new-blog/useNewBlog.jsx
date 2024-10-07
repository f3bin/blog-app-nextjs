import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useNewBlog = () => {
  const router = useRouter();
  const [newBlog, setNewBlog] = useState({
    title: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const handleBackButton = () => {
    router.push("/blogs");
    setNewBlog({
      title: "",
      body: "",
    });
  };

  const handleChangeTitle = (e) => {
    setNewBlog((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleChangeContent = (e) => {
    setNewBlog((prevState) => ({
      ...prevState,
      body: e.target.value,
    }));
  };

  const handleSubmitNewBlog = async (e) => {
    e.preventDefault();
    if (newBlog?.title === "" && newBlog?.body === "") {
      setErrors((prevState) => ({
        ...prevState,
        title: "Title Required",
        body: "Content Required",
      }));
    } else if (newBlog?.title === "") {
      setErrors((prevState) => ({
        ...prevState,
        title: "Title Required",
      }));
    } else if (newBlog?.body === "") {
      setErrors((prevState) => ({
        ...prevState,
        body: "Content Required",
      }));
    } else {
      try {
        const response = await fetch("http://localhost:3001/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newBlog?.title,
            body: newBlog?.body,
          }),
        });

        if (response.ok) {
          handleBackButton();
          toast.success("Blog Added Successfully");
        } else {
          console.error("Error submitting data:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  return {
    newBlog,
    errors,
    handleSubmitNewBlog,
    handleChangeTitle,
    handleChangeContent,
    handleBackButton,
  };
};

export default useNewBlog;
