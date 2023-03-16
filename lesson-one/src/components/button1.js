import React from "react";

export default function Button1({ data,sub }) {
  return (
    <div>
      <button>Submit</button>
      <p>{data[0].title}</p>
      {sub ? "This is true" : "This is false"}
    </div>
  );
}