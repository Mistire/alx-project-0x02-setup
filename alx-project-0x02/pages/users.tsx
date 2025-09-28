import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;


export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UserProps[] = await res.json();

    return {
      props: {
        users: data,
      },
      revalidate: 60, // optional ISR
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
