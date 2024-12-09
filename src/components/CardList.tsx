import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import Card from "./Card";

const CardList: React.FC = () => {
  const { cards, fetchCards, filter, setFilter } = useStore();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);
  const filteredCards =
    filter === "liked" ? cards.filter((card) => card.isLiked) : cards;

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: filter === "all" ? "blue" : "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("liked")}
          style={{
            padding: "10px",
            backgroundColor: filter === "liked" ? "blue" : "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Selected
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
