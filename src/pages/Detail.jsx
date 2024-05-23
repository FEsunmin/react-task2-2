import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(`Detail ID: ${id}`);

  return (
    <div>
      <h1>Detail</h1>
      <p>Detail ID: {id}</p>
    </div>
  );
};

export default Detail;
