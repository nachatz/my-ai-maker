import { useState } from "react";
import { ModelsNav, RouteHeader, CardGrid } from "~/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";



export default function ModelsLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const mocked_data = [
    {
      title: "MyModel1",
      type: "feed forward",
      description: "My sample model that does nothing xdd",
      code: "print('hi')",
      icon: "global",
      color: "blue"
    },  
    {
      title: "MyModel2",
      type: "feed forward",
      description: "My sample model2 that does nothing xdd",
      code: "print('hi')",
      icon: "variable",
      color: "black"
    },
  ];

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (data === null) {
    void router.push("/");
    return null;
  }

  return (
    <div className="flex flex-col">
      <RouteHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex justify-center">
        <ModelsNav profile={data?.user} isOpen={isOpen} setIsOpen={setIsOpen} />
        <CardGrid cards={mocked_data} />
      </div>
    </div>
  );
}
