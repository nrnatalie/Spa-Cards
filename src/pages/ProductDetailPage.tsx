import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { cards } = useStore();
  const navigate = useNavigate();

  const product = cards.find((card) => card.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: "60%", height: "auto", objectFit: "cover" }}
      />
      <h2>{product.title}</h2>
      <p>Product Description: Тут может быть описание продукта или другой контент.</p>
      <button onClick={() => navigate("/")} style={{ padding: "10px", marginTop: "20px" }}>
        Return to product list
      </button>
    </div>
  );
};

export default ProductDetailPage;