import { responsive } from "@/_lib/_styles/responsive";
import { Product } from "@/_lib/models/product";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ProductCardBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  flex-shrink: 0;
  user-select: none;
  position: relative;

  .image-wrapper {
    user-select: none;
    pointer-events: none;
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid ${(props) => props.theme.colorSplit};
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 0;

    .price-area {
      display: flex;
      align-items: center;
      gap: 12px;
      @media (max-width: ${responsive.small}) {
        font-size: 14px;
      }

      .price {
        font-weight: 700;
        color: ${(props) => props.theme["red-7"]};
      }

      .rocket-icon {
        position: relative;
      }
    }

    .name {
      color: ${(props) => props.theme.colorText};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      font-size: 14px;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .rating-area {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 4px;
      .rating-count {
        font-size: 12px;
        color: ${(props) => props.theme.colorTextTertiary};
      }

      .ant-rate-star {
        margin-inline-end: 2px;
        font-size: 16px;
      }
    }

    .price-discount {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;

      .discount-label {
        color: ${(props) => props.theme["red-5"]};
      }

      .discount-divider {
        width: 1px;
        height: 100%;
        background-color: ${(props) => props.theme.colorBorder};
      }

      .discount-price {
        text-decoration: line-through;
        color: ${(props) => props.theme.colorTextTertiary};
      }
    }
  }

  .rank {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 15px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${(props) => props.theme["red-5"]};
  }
`;

interface ProductCardProps {
  product: Product;
  rank: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  rank,
  className = "",
}) => {
  return (
    <ProductCardBlock
      className={className}
      href={product.productUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm-label={product.productName + " 클릭 이벤트 발생"}
    >
      <div className="image-wrapper">
        <Image src={product.productImage} alt={product.productName} fill />
      </div>
      <div className="product-info">
        {product.discountRate > 0 && (
          <div className="price-discount">
            <span className="discount-label">즉시할인가</span>
            <div className="discount-divider" />
            <span className="discount-rate">
              {(product.discountRate * 100).toFixed(0)}%
            </span>
            <span className="discount-price">
              {(
                Math.floor(
                  product.productPrice / (1 - product.discountRate) / 100
                ) * 100
              ).toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}
              원
            </span>
          </div>
        )}
        <div className="price-area">
          <div className="price">{product.productPrice.toLocaleString()}원</div>
          {product.isRocket && (
            <Image
              className="rocket-icon"
              src="https://image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png"
              alt={product.productName}
              width={64}
              height={16}
            />
          )}
        </div>
        <div className="name">{product.productName}</div>
        <div className="rating-area">
          <Rate disabled value={product.ratingValue} />
          <span className="rating-count">({product.ratingCount})</span>
        </div>
      </div>
      <div className="rank">{rank}</div>
    </ProductCardBlock>
  );
};

export default ProductCard;
