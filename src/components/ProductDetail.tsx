import React from "react";

interface ProductDetailProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetail;
