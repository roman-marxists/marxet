import { useRouter } from "next/router";

export default function Turkey() {
  const router = useRouter();
  console.log(router);
  return <div>Turkey</div>;
}
