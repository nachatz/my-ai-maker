import { ModelsNav } from "~/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Models() {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (data === null) {
    void router.push("/");
    return null;
  }

  return <ModelsNav profile={data.user}></ModelsNav>;
}
