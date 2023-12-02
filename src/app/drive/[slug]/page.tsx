/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "@/components";
import { Info } from "@/components/drive";

interface MatadataType {
  params: { slug: string };
}

export async function generateMetadata({ params }: MatadataType) {
  return {
    title: `${params.slug}`,
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
