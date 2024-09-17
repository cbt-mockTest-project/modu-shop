import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import StyledComponentsRegistry from "./_providers/StyledComponentsRegistry";
import BasicLayout from "./_components/BasicLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "모두몰 - 학습필수품 최저가 쇼핑몰",
  description: "학습효율이 배가 되는 학습필수품 최저가 쇼핑몰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <BasicLayout>{children}</BasicLayout>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
