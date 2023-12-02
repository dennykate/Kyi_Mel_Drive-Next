import { Layout } from "@/components";
import { Info } from "@/components/drive";

export async function generateMetadata() {
  return {
    title: "Drive | Kyi Mel Drive",
    descrption: "This is Drive Page",
  };
}

const Drive = () => {
  return (
    <Layout position="static">
      <Info />
    </Layout>
  );
};

export default Drive;
