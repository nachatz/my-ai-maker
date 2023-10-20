import { Navbar, Footer } from "~/components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function CoreLayout(props: LayoutProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <div className="min-h-auto">{props.children}</div>
      <Footer />
    </div>
  );
}
