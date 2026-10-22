import React from "react";
import { useParams } from "react-router";

const AboutSub = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
      <p>This is the {name} page.</p>
    </div>
  );
};

export default AboutSub;