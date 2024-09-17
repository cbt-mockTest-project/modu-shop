"use client";

import ProductListTemplate from "@/_components/product/ProductListTemplate";
import Search from "@/_components/search/Search";
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
  const { data: products05 } = useProducts("노트북 거치대");
  const { data: products06 } = useProducts("포스트잇");
  const { data: products07 } = useProducts("스터디 플래너");
  const { data: products08 } = useProducts("지워지는볼펜");
  const { data: products09 } = useProducts("공책");
  return (
    <IndexPageBlock>
      <Search />
      {products01 && (
        <ProductListTemplate
          title="독서대"
          key="독서대"
          products={products01.products}
        />
      )}
      {products07 && (
        <ProductListTemplate
          title="스터디 플래너"
          key="스터디 플래너"
          products={products07.products}
        />
      )}
      {products04 && (
        <ProductListTemplate
          title="공부타이머"
          key="공부타이머"
          products={products04.products}
        />
      )}
      {products08 && (
        <ProductListTemplate
          title="지워지는볼펜"
          key="지워지는볼펜"
          products={products08.products}
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
      {products09 && (
        <ProductListTemplate
          title="공책"
          key="공책"
          products={products09.products}
        />
      )}
      {products05 && (
        <ProductListTemplate
          title="노트북 거치대"
          key="노트북 거치대"
          products={products05.products}
        />
      )}
      {products06 && (
        <ProductListTemplate
          title="포스트잇"
          key="포스트잇"
          products={products06.products}
        />
      )}
    </IndexPageBlock>
  );
};

export default IndexPage;
