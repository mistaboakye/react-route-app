import React from "react";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <Link to="./service/1">Food</Link>
      <Link to="./service/2">Eat</Link>
      <Link to="./service/3">Serve</Link>
      <Link to="./service/4">Price</Link>
    </div>
  );
}
