import React from "react";
import styled from "styled-components";

const BasicFooterBlock = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 100px;
  background-color: ${({ theme }) => theme.colorBgLayout};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .basic-footer-content {
    font-size: 13px;
    color: ${({ theme }) => theme.colorTextSecondary};
  }
`;

interface BasicFooterProps {}

const BasicFooter: React.FC<BasicFooterProps> = () => {
  return (
    <BasicFooterBlock>
      <div className="basic-footer-content">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다.
      </div>
    </BasicFooterBlock>
  );
};

export default BasicFooter;
