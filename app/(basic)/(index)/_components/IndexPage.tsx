"use client";

import React from "react";
import styled from "styled-components";

const IndexPageBlock = styled.div`
  border: 1px solid ${({ theme }) => theme["blue-1"]};
`;

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  return <IndexPageBlock>asd</IndexPageBlock>;
};

export default IndexPage;
