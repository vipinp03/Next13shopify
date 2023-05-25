import React from "react";
import OrderHistory from "./OrderHistory";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Street, City, Country",
    permanentAddress: "456 Avenue, City, Country",
    orders: [
      { id: 1, product: "Product 1", date: "2023-05-01" },
      { id: 2, product: "Product 2", date: "2023-05-05" },
      { id: 3, product: "Product 3", date: "2023-05-10" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6 ">
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
       <div className="flex items-center">
       <div>
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="mx-3">
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        </div>
       </div>
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
        <p>{user.address}</p>
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Permanent Address</h2>
        <p>{user.permanentAddress}</p>
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4">
        <OrderHistory />
      </div>
    </div>
  );
};

export default UserProfile;
