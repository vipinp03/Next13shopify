import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="my-10 mx-8 flex h-auto w-96 flex-col">
      <div className="w-full h-full">
        <Image
          className="object-cover w-full h-full rounded"
          src="https://cdn.shopify.com/s/files/1/0685/6808/8854/products/pdp_hair_4x_3e13f8cb-18ad-4268-a6c3-7a8c780b3a35_750x.jpg?v=1673613325"
          alt="product image"
          width="220"
          height="200"
        />
      </div>
      <div className="mt-4 px-1 pb-1">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            Lululemon Comfort Tee - White
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$79</span>
            <span className="text-sm text-slate-900 line-through">$99</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
