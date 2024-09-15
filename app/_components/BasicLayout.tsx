"use client";

import React from "react";
import styled from "styled-components";
import BasicHeader from "./BasicHeader";

const BasicLayoutBlock = styled.div`
  .basic-layout-body {
    padding: 50px 16px;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <BasicLayoutBlock>
      <BasicHeader />
      <div className="basic-layout-body">{children}</div>
    </BasicLayoutBlock>
  );
};

export default BasicLayout;
