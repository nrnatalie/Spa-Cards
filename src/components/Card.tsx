import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, title }) => {
  const { toggleLike, deleteCard, cards } = useStore();
  const navigate = useNavigate();

  const card = cards.find((card) => card.id === id);
  const isLiked = card?.isLiked || false;

  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(id);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isLiked ? "red" : "gray ",
          }}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>

        <button
          onClick={() => deleteCard(id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "red",
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Card;
