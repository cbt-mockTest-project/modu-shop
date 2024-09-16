"use client";

import ProductListTemplate from "@/_components/product/ProductListTemplate";
import useProducts from "@/_lib/_hooks/useProducts";
import React from "react";
import styled from "styled-components";

const IndexPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { data: products01 } = useProducts("독서대");
  const { data: products02 } = useProducts("전자노트");
  const { data: products03 } = useProducts("에너지드링크");
  const { data: products04 } = useProducts("공부타이머");
  return (
    <IndexPageBlock>
      {products01 && (
        <ProductListTemplate
          title="독서대"
          key="독서대"
          products={products01.products}
        />
      )}
      {products04 && (
        <ProductListTemplate
          title="공부타이머"
          key="공부타이머"
          products={products04.products}
        />
      )}
      {products02 && (
        <ProductListTemplate
          title="전자노트"
          key="전자노트"
          products={products02.products}
        />
      )}
      {products03 && (
        <ProductListTemplate
          title="에너지드링크"
          key="에너지드링크"
          products={products03.products}
        />
      )}
    </IndexPageBlock>
  );
};

export default IndexPage;
