import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Product } from "@/_lib/models/product";
import { responsive } from "@/_lib/_styles/responsive";

const ProductLisTemplateForSearchBlock = styled.div`
  position: relative;
  .title-area {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    justify-content: space-between;
    .title {
      font-size: 20px;
      font-weight: 500;

      @media (max-width: ${responsive.small}) {
        font-size: 16px;
      }
    }

    .more-button {
      display: flex;
      align-items: center;
      gap: 4px;
      @media (max-width: ${responsive.small}) {
        font-size: 13px;
      }
    }
  }

  .product-list-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 1280px;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;

      @media (max-width: ${responsive.medium}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: ${responsive.small}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

interface ProductLisTemplateForSearchProps {
  title: React.ReactNode;
  products: Product[];
}

const ProductLisTemplateForSearch: React.FC<
  ProductLisTemplateForSearchProps
> = ({ title, products }) => {
  return (
    <ProductLisTemplateForSearchBlock>
      <div className="title-area">
        <div className="title">{title}</div>
      </div>
      <div className="product-list-wrapper">
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={product.productId}
              product={product}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </ProductLisTemplateForSearchBlock>
  );
};

export default ProductLisTemplateForSearch;
