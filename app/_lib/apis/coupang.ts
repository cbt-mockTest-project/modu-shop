import apiClient from "./apiClient";
import { Product } from "../models/product";
import { fetchWrapper } from "./fetchWrapper";

export interface GetCoupangProductsResponse {
  products: Product[];
}

export const FETCH_COUPANG_PRODUCTS_API_KEY = (keyword: string) =>
  `/modu-shop/coupang/product?keyword=${keyword}`;

export const getCoupangProducts = async (keyword: string) => {
  const response = await apiClient.get<GetCoupangProductsResponse>(keyword);
  return response;
};

export const fetchCoupangProducts = (keyword: string) =>
  fetchWrapper<GetCoupangProductsResponse>(
    FETCH_COUPANG_PRODUCTS_API_KEY(keyword)
  );
