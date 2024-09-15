"use client";
import { ComponentProps } from "react";
import { SWRConfig } from "swr";

interface SWRProviderProps extends ComponentProps<typeof SWRConfig> {
  children: React.ReactNode;
}

export const SWRProvider = (props: SWRProviderProps) => {
  const { children, ...configProps } = props;
  return <SWRConfig {...configProps}>{children}</SWRConfig>;
};
