"use client";

import React from "react";
import styled from "styled-components";
import BasicHeader from "./_components/BasicHeader";

const BasicLayoutBlock = styled.div``;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <BasicLayoutBlock>
      <BasicHeader />
      {children}
    </BasicLayoutBlock>
  );
};

export default BasicLayout;
