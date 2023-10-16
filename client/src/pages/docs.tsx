import { DocsContent, Faq, Footer, Navbar } from "~/components";

export default function Docs() {
  return (
    <>
      <Navbar page="Docs"/>
      <DocsContent />
      <Faq />
      <Footer />
    </>
  );
}
