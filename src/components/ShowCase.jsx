import TshirtShowcase from "./TshirtShowcase";
import "./ShowCase.css";
import styled from "styled-components";
import React, { useState } from "react";

const ShowcaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  background-color: black;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduced padding for extra small screens */
  }
`;

const ProductImage = styled.img`
  width: 40%;
  height: auto;
  margin-right: 60px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProductDetails = styled.div`
  width: 50%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductName = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ProductPrice = styled.p`
  font-size: 20px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ProductDescription = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
`;

const SizeSelector = styled.div`
  margin-bottom: 30px;
`;

const SizeBubbleContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow wrapping of size options */
`;

const SizeBubble = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &.selected {
    background-color: #007bff;
    border-color: #007bff;
  }

  &:hover,
  &:focus {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

const AddToCartButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const EnhancedTshirtShowcase = styled.div`
  background-image: url("xamples/014.png");
  background-color: #ffffff;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 0px;
  width: 90vh;
  height: 80vh;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100vw;
    height: 65vw;
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduced padding for extra small screens */
    margin-top: 20px;
    width: 100%;
  }
`;

const ShowCase = () => {
  const product = {
    id: 1,
    name: "Stylish T-Shirt",
    price: 30,
    description:
      "This is a high-quality t-shirt with a modern design. The soft and breathable fabric ensures all-day comfort. Available in multiple sizes to fit your style.",
    image: "xamples/014.png",
    sizes: ["S", "M", "L", "XL"],
  };

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <ShowcaseContainer className="font-code transition-colors   ">
      <EnhancedTshirtShowcase>
        <TshirtShowcase />
      </EnhancedTshirtShowcase>
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>Price: ${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <SizeSelector>
          <label>Size: </label>
          <SizeBubbleContainer>
            {product.sizes.map((size, index) => (
              <SizeBubble
                key={index}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SizeBubble>
            ))}
          </SizeBubbleContainer>
        </SizeSelector>
        <AddToCartButton>Add to Cart</AddToCartButton>
        <ProductImage src={product.image} alt={product.name} />
      </ProductDetails>
    </ShowcaseContainer>
  );
};

export default ShowCase;
