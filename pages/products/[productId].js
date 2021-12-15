import { useRouter } from "next/router";
import SearchPage from "../../features/Search/index.js";

export default function Search() {
  const router = useRouter();
  const { productId } = router.query;

  return <div>this is the productId</div>;
}
