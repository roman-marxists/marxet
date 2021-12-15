import { useRouter } from "next/router";
import SearchPage from "../../features/Search/SearchPage.js";

export default function Search() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <SearchPage productId={productId} />
    </div>
  );
}
