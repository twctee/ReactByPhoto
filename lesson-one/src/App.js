import { useState } from "react";
import "./App.css";
import Button1 from "./components/button1";

function App() {
  const [subject, setSubject] = useState(true);
  const [count, setCount] = useState(0);
  const info = {
    name: "Tee",
    age: 18,
  };

  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  function handleClick() {
    alert("You clicked me!");
  }

  function addNum() {
    setCount(count + 1);
  }
  function delNum() {
    setCount(count - 1);
  }

  return (
    <div>
      <Button1 data={products} sub={subject}/>
      <p className="test-text" style={{ color: "red" }}>
        asdfasdfsdaf
        <br />
        asdfasdfsadf
      </p>
      <p>
        My name is {info.name}
        <br /> Age {info.age}
      </p>
      {subject ? "This is true" : "This is false"}
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button><br/>
      <button onClick={addNum}>+</button>
      <button onClick={delNum}>-</button><br/>

      {count}
    </div>
  );
}

export default App;
