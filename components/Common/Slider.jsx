import Image from "next/image";
import React from "react";
import Card from "../Product/Card";

function Slider({ data }) {
  return (
    <div className="flex">
      {data.map((item) => (
       <Card key={item.id}/>
      ))}
    </div>
  );
}

export default Slider;
