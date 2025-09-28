"use client";

import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-8 grid gap-6 md:grid-cols-2">
      <Card 
        title="Welcome to ALX Project" 
        content="This is a reusable card component example. You can pass any title and content." 
      />
      <Card 
        title="Dynamic Props" 
        content="The Card component accepts props for title and content, making it reusable." 
      />
      <Card 
        title="Next.js + TypeScript" 
        content="This project is set up using TypeScript and Next.js for type safety and scalability." 
      />
    </div>
  );
};

export default HomePage;