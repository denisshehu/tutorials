import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Denis");
  const [age, setAge] = useState(26);

  const handleClick = () => {
    setName("Dea");
    setAge(22);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
