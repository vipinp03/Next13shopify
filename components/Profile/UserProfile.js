"use client"

import React, { useState, useEffect, useContext } from "react";
import OrderHistory from "./OrderHistory";
import { getUserDetails } from "@/lib/shopify";
import { UserContext } from '@/context/userContext'

const UserProfile = () => {

  const [profile, setProfile] = useState({});

  const { login, setLogin } = useContext(UserContext)

  async function fetchUserDetails() {
    const token = localStorage.getItem("login_token");
    console.log(token, "token meri jaan")
    const res = await getUserDetails(`"${token}"`);
    if (res !== null || undefined) {
      setProfile(res);
    }
    console.log(res, "User detail");
  }

  useEffect(() => {
    // if (!login) {
    //   window.location.href = "/login";
    // }
 
      fetchUserDetails();
    
      

  }, []);


  return (
    <>
      {profile && 
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


            <strong>Name: </strong>
            <p> {profile.customer?.firstName} {profile.customer?.lastName}
            </p>


            <p>
              <strong>Email: {profile.customer?.email} </strong>

            </p>

          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
        {/* <p>{user.address}</p> */}
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Permanent Address</h2>
        {/* <p>{user.permanentAddress}</p> */}
      </div>

      <div className="bg-white rounded-lg shadow px-6 py-4">
        <OrderHistory orders={profile.customer?.orders}/>
      </div>
    </div>
      }
    </>
  );
};

export default UserProfile;