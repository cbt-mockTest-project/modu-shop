"use client";

import React from "react";
import styled from "styled-components";
import BasicHeader from "./BasicHeader";
import BasicFooter from "./BasicFooter";

const BasicLayoutBlock = styled.div`
  overflow: hidden;
  .basic-layout-body {
    padding: 35px 16px;
    max-width: 1280px;
    margin: 0 auto;
    min-height: calc(100vh - 200px);
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
      <BasicFooter />
    </BasicLayoutBlock>
  );
};

export default BasicLayout;
