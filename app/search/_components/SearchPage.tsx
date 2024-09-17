"use client";

import ProductLisTemplateForSearch from "@/_components/product/ProductListTemplateForSearch";
import Search from "@/_components/search/Search";
import useSearchProducts from "@/_lib/_hooks/useSearchProducts";
import { Skeleton } from "antd";
import { useSearchParams } from "next/navigation";
import React from "react";
import styled from "styled-components";

const SearchPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .keyword-text {
  }

  .text-subtitle {
    color: ${({ theme }) => theme.colorTextSecondary};
  }
`;

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  const { data, isValidating } = useSearchProducts();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q");
  const isLoading = isValidating && !data;

  return (
    <SearchPageBlock>
      <Search />
      {isLoading ? (
        <Skeleton active />
      ) : data ? (
        <ProductLisTemplateForSearch
          title={
            <div>
              <span className="keyword-text">&quot;{keyword}&quot; </span>
              <span className="text-subtitle">검색 결과</span>
            </div>
          }
          products={data.products}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </SearchPageBlock>
  );
};

export default SearchPage;
