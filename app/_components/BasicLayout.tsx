"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import BasicHeader from "./BasicHeader";
import BasicFooter from "./BasicFooter";
import TagManager from "react-gtm-module";

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
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-TB5Q6869",
    });
  }, []);
  return (
    <BasicLayoutBlock>
      <BasicHeader />
      <div className="basic-layout-body">{children}</div>
      <BasicFooter />
    </BasicLayoutBlock>
  );
};

export default BasicLayout;
