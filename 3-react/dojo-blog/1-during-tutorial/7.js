const Home = () => {
  const handleClick = (e) => {
    console.log("Hello world!", e);
  };

  const handleClick2 = (name, e) => {
    console.log(`Hello ${name}!`, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => handleClick2("Denis", e)}>Click me too!</button>
    </div>
  );
};

export default Home;
