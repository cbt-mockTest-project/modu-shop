import useSWR from "swr";
import {
  GetCoupangProductsResponse,
  SEARCH_COUPANG_PRODUCTS_API_KEY,
  searchCoupangProducts,
} from "../apis/coupang";
import { useSearchParams } from "next/navigation";

const useSearchProducts = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q") || "";
  const fetcher = async () => {
    try {
      if (!keyword.trim()) throw new Error("검색어를 입력해주세요.");
      const products = await searchCoupangProducts(keyword);
      return products;
    } catch (error) {
      return { products: [] };
    }
  };

  const { data, isValidating } = useSWR<GetCoupangProductsResponse>(
    SEARCH_COUPANG_PRODUCTS_API_KEY(keyword),
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return { data, isValidating };
};

export default useSearchProducts;
