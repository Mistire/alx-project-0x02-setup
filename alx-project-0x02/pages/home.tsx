"use client";

import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const HomePage = () => {
  // initial cards (your current 3)
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: "Welcome to ALX Project",
      content:
        "This is a reusable card component example. You can pass any title and content.",
    },
    {
      title: "Dynamic Props",
      content:
        "The Card component accepts props for title and content, making it reusable.",
    },
    {
      title: "Next.js + TypeScript",
      content:
        "This project is set up using TypeScript and Next.js for type safety and scalability.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // handle new card submission from modal
  const handleAddCard = (title: string, content: string) => {
    setCards((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="p-8">
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        + Add New Post
      </button>

      {/* Render all cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} content={card.content} />
        ))}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
};

export default HomePage;
