import { SearchOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

const SearchBlock = styled.div``;

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const searchParams = useSearchParams();
  const defaultKeyword = searchParams.get("q") || "";
  const [keyword, setKeyword] = useState(defaultKeyword);
  const router = useRouter();
  const handleSearch = (keyword: string) => {
    if (keyword.trim()) {
      router.push(`/search?q=${keyword}`);
      return;
    } else {
      message.warning("검색어를 입력해주세요.");
    }
  };
  return (
    <SearchBlock>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="원하는 상품을 검색해보세요."
        size="large"
        onPressEnter={() => handleSearch(keyword)}
        suffix={<SearchOutlined onClick={() => handleSearch(keyword)} />}
      />
    </SearchBlock>
  );
};

export default Search;
