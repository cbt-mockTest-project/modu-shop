import useSWR from "swr";
import {
  FETCH_COUPANG_PRODUCTS_API_KEY,
  fetchCoupangProducts,
  GetCoupangProductsResponse,
} from "../apis/coupang";

const useProducts = (keyword: string) => {
  const fetcher = async () => {
    try {
      const products = await fetchCoupangProducts(keyword);
      return products;
    } catch (error) {
      return { products: [] };
    }
  };

  const { data, isValidating } = useSWR<GetCoupangProductsResponse>(
    FETCH_COUPANG_PRODUCTS_API_KEY(keyword),
    fetcher
  );
  console.log(FETCH_COUPANG_PRODUCTS_API_KEY(keyword));
  return { data, isValidating };
};

export default useProducts;
