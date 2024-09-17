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
  const [
    products01,
    products02,
    products03,
    products04,
    products05,
    products06,
    products07,
    products08,
    products09,
  ] = await Promise.all([
    fetchProducts("독서대"),
    fetchProducts("전자노트"),
    fetchProducts("에너지드링크"),
    fetchProducts("공부타이머"),
    fetchProducts("노트북 거치대"),
    fetchProducts("포스트잇"),
    fetchProducts("스터디 플래너"),
    fetchProducts("지워지는볼펜"),
    fetchProducts("공책"),
  ]);

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
