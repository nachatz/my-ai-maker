import { useRouter } from 'next/router';
import { Navbar, Footer } from "~/components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function CoreLayout(props: LayoutProps) {
  const router = useRouter();
  const isModelsPage = router.asPath.includes('/models');

  return (
    <div className="flex h-screen flex-col justify-between">
      {!isModelsPage && <Navbar />}
      <div className="min-h-auto">{props.children}</div>
      {!isModelsPage && <Footer />}
    </div>
  );
}
