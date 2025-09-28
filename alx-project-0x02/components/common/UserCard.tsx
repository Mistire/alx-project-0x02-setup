"use client";

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
