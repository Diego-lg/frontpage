// ProductRow.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { products } from "./Product";

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-220px * 3)); }
`;

const ProductRowContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 20px 0;
  position: relative;
  width: 100%;
  background-color: #000;
`;

const ProductRowContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 20s linear infinite;
  @media (max-width: 768px) {
    animation-duration: 40s;
  }
`;

const ProductCard = styled.div`
  flex: 0 0 auto;
  width: 420px;
  margin-right: 20px;
  border-radius: 12px;
  padding: 20px;

  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5),
    inset 0px 0px 10px rgba(255, 255, 255, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7),
      inset 0px 0px 15px rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 768px) {
    width: 160px;
    margin-right: 10px;
  }
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: #ffa500; // Accent color for product name
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #bbb;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductRow = () => {
  const duplicatedProducts = [...products, ...products, ...products];
  return (
    <ProductRowContainer>
      <ProductRowContent>
        {duplicatedProducts.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductRowContent>
    </ProductRowContainer>
  );
};

export default ProductRow;
