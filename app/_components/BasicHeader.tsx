import { Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isHotdeal = pathname.includes("/hotdeal");
  const router = useRouter();
  return (
    <BasicHeaderBlock>
      <Link href="/">
        <div className="basic-header">
          <div className="basic-header-title">모두몰</div>
          <div className="basic-header-sub-title">
            학습효율이 배가 되는 학습필수품 최저가 쇼핑몰
          </div>
        </div>
      </Link>
      <Menu
        className="basic-header-menu"
        mode="horizontal"
        selectedKeys={[isHome ? "/" : isHotdeal ? "/hotdeal" : "/"]}
        onClick={(e) => {
          router.push(e.key);
        }}
        items={[
          {
            label: "인기상품",
            key: "/",
          },
          {
            label: "핫딜",
            key: "/hotdeal",
          },
        ]}
      />
    </BasicHeaderBlock>
  );
};

export default BasicHeader;
