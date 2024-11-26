import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "First blog",
      body: "Content of the first blog.",
      author: "Denis",
      id: 1,
    },
    {
      title: "Second blog",
      body: "Content of the second blog.",
      author: "Dea",
      id: 2,
    },
    {
      title: "Third blog",
      body: "Content of the third blog.",
      author: "Kiki",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Denis");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //   [] -> refreshes the page only once, at the beginning
  //   [name] -> refreshes the page every time the value of name changes
  useEffect(() => {
    console.log("useEffect ran.");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Dea")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
