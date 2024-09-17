import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Product } from "@/_lib/models/product";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { responsive } from "@/_lib/_styles/responsive";

const ProductLisTemplateBlock = styled.div`
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
      display: flex;
      gap: 16px;

      .product-card {
        width: calc(100% / 4 - 16px);
        @media (max-width: ${responsive.medium}) {
          width: calc(100% / 3 - 16px);
        }

        @media (max-width: ${responsive.small}) {
          width: calc(50% - 32px);
        }

        @media (max-width: ${responsive.xsmall}) {
          width: calc(100% - 64px);
        }
      }
    }
  }

  .arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: black;
    color: white;
    border: none;
    width: 35px;
    height: 35px;
    opacity: 0.3;
    cursor: pointer;

    @media (max-width: ${responsive.small}) {
      display: none;
    }
  }

  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }
`;

interface ProductLisTemplateProps {
  title: string;
  products: Product[];
}

const ProductLisTemplate: React.FC<ProductLisTemplateProps> = ({
  title = "독서대",
  products,
}) => {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      if (window.innerWidth < 768) return;
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = listElement;
        setIsLeftArrowVisible(scrollLeft > 0);
        setIsRightArrowVisible(scrollLeft + clientWidth < scrollWidth);
      };

      listElement.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        listElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [products]);

  const handleLeftArrowClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= listRef.current.clientWidth;
    }
  };

  const handleRightArrowClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += listRef.current.clientWidth;
    }
  };

  return (
    <ProductLisTemplateBlock>
      {isLeftArrowVisible && (
        <button
          className="arrow-button left-arrow"
          onClick={handleLeftArrowClick}
        >
          <LeftOutlined />
        </button>
      )}
      <div className="title-area">
        <div className="title">{title}</div>
      </div>
      <div className="product-list-wrapper" ref={listRef}>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              className="product-card"
              key={product.productId}
              product={product}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
      {isRightArrowVisible && (
        <button
          className="arrow-button right-arrow"
          onClick={handleRightArrowClick}
        >
          <RightOutlined />
        </button>
      )}
    </ProductLisTemplateBlock>
  );
};

export default ProductLisTemplate;
