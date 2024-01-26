/* eslint-disable react-hooks/rules-of-hooks */
import { Layout } from "@/components";
import { Container } from "@/components/drive";
import config from "@/config";
import slugParser from "@/utilities/slugParser";

interface MatadataType {
  params: { slug: string };
}

export async function generateMetadata({ params }: MatadataType) {
  // const data = await getData(params.slug);

  return {
    title: `${slugParser(params.slug)}`,
    description: config.description,
    // openGraph: {
    //   title: `${slugParser(params.slug)}`,
    //   url: `${config.originalUrl}/drive/${params.slug}`,
    //   content: config.description,
    //   description: config.description,
    //   images: [data?.data?.thumbnail],
    // },
  };
}

// async function getData(slug: string) {
//   const res = await fetch(config.baseApiUrl + `/drives/${slug}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Drive = async ({ params }: MatadataType) => {
  // const data = await getData(params.slug);

  return (
    <Layout position="static" footer={false}>
      <Container
        slug={params.slug}
        // resData={data?.data}
        resData={{
          name: "Spider-Man: Across the Spider-Verse (2023)",
          url: "https://www.mediafire.com/file/42q76f77jc9ya6s/Spider.Man.Across.The.Spider.Verse.2023.720p.mp4/file",
          size: "1.1GB",
          resolution: "720P",
          thumbnail:
            "https://4kwallpapers.com/images/walls/thumbs_2t/11595.jpg",
          video: "",
        }}
      />
    </Layout>
  );
};

export default Drive;
