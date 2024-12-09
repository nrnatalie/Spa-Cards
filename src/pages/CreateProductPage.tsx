import React, { useState } from "react";
import { useStore } from "../store/useStore";

const CreateProductPage: React.FC = () => {
  const { addCard } = useStore();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageUrl) {
      setError("All fields are required");
      return;
    }

    const newCard = {
      id: Date.now().toString(),
      title,
      imageUrl,
      isLiked: false,
    };

    addCard(newCard);
    setTitle("");
    setImageUrl("");
    setError("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create a new product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Link to image</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            style={{ marginBottom: "10px" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Create product</button>
      </form>
    </div>
  );
};

export default CreateProductPage;
