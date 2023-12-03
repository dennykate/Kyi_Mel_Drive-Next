/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "@/components";
import { Info, Video } from "@/components/drive";
import slugParser from "@/utilities/slugParser";

interface MatadataType {
  params: { slug: string };
}

export async function generateMetadata({ params }: MatadataType) {
  return {
    title: `${slugParser(params.slug)}`,
    descrption: "This is Drive Page",
  };
}

const Drive = () => {
  return (
    <Layout position="static" footer={false}>
      {/* <Info /> */}
      <Video />
    </Layout>
  );
};

export default Drive;
