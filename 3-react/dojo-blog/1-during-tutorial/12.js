import { useState } from "react";
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Dea")}
        title="Dea's blogs"
      />
    </div>
  );
};

export default Home;
