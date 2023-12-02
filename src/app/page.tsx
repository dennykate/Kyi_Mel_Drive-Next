import { Layout } from "@/components";
import { About, Hero, HowToUse } from "@/components/home";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "Kyi Mel Drive",
    description: "Stream online and download yorur face",
  };
}

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <HowToUse />
    </Layout>
  );
};

export default Home;
