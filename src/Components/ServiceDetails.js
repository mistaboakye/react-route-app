import React from "react";

export default function ServiceDetails(props) {
  return (
    <div>
      <h1>Welcome: {props.match.params.id}</h1>

      <p>This is a test page</p>
    </div>
  );
}
