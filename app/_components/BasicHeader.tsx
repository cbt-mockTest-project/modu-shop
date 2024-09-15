import { Menu } from "antd";
import React from "react";
import styled from "styled-components";

const BasicHeaderBlock = styled.header`
  width: 100vw;
  .basic-header {
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    .basic-header-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 32px;
    }
    .basic-header-sub-title {
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.colorTextSecondary};
    }
  }

  .basic-header-menu {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

interface BasicHeaderProps {}

const BasicHeader: React.FC<BasicHeaderProps> = () => {
  return (
    <BasicHeaderBlock>
      <div className="basic-header">
        <div className="basic-header-title">모두몰</div>
        <div className="basic-header-sub-title">학습용품 전문 쇼핑몰</div>
      </div>
      <Menu
        className="basic-header-menu"
        mode="horizontal"
        items={[
          {
            label: "전체",
            key: "all",
          },
          {
            label: "베스트",
            key: "best",
          },
        ]}
      />
    </BasicHeaderBlock>
  );
};

export default BasicHeader;
