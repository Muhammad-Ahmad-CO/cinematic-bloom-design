import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Statement,
  FullWidthVisual,
  Services,
  Experimental,
  BigStatement,
  Work,
  FinalCta,
  Footer,
} from "@/components/site/Sections";

const title = "Verdant Studio — Cinematic Design & Digital Experiences";
const description =
  "Verdant is an experimental design studio building cinematic brand systems, digital products and motion work at the edge of technology and nature.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Statement />
        <FullWidthVisual />
        <Services />
        <Experimental />
        <BigStatement />
        <Work />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
