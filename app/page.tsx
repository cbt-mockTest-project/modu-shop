import IndexPage from "./(index)/_components/IndexPage";
import {
  FETCH_COUPANG_PRODUCTS_API_KEY,
  fetchCoupangProducts,
  GetCoupangProductsResponse,
} from "./_lib/apis/coupang";
import { SWRProvider } from "./_providers/SwrProvider";

const fetchProducts = async (
  keyword: string
): Promise<GetCoupangProductsResponse> => {
  try {
    const products = await fetchCoupangProducts(keyword);
    return products;
  } catch (error) {
    console.log(error);
    return { products: [] };
  }
};

export default async function Home() {
  const products01 = await fetchProducts("독서대");
  const products02 = await fetchProducts("전자노트");
  const products03 = await fetchProducts("에너지드링크");
  const products04 = await fetchProducts("공부타이머");
  const products05 = await fetchProducts("노트북 거치대");
  const products06 = await fetchProducts("포스트잇");
  const products07 = await fetchProducts("스터디 플래너");
  const products08 = await fetchProducts("지워지는볼펜");
  const products09 = await fetchProducts("공책");
  const fallback = {
    [FETCH_COUPANG_PRODUCTS_API_KEY("독서대")]: products01,
    [FETCH_COUPANG_PRODUCTS_API_KEY("전자노트")]: products02,
    [FETCH_COUPANG_PRODUCTS_API_KEY("에너지드링크")]: products03,
    [FETCH_COUPANG_PRODUCTS_API_KEY("공부타이머")]: products04,
    [FETCH_COUPANG_PRODUCTS_API_KEY("노트북 거치대")]: products05,
    [FETCH_COUPANG_PRODUCTS_API_KEY("포스트잇")]: products06,
    [FETCH_COUPANG_PRODUCTS_API_KEY("스터디 플래너")]: products07,
    [FETCH_COUPANG_PRODUCTS_API_KEY("지워지는볼펜")]: products08,
    [FETCH_COUPANG_PRODUCTS_API_KEY("공책")]: products09,
  };
  return (
    <SWRProvider
      value={{
        fallback,
      }}
    >
      <IndexPage />
    </SWRProvider>
  );
}
