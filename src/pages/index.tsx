import Home from "@/components/pages/Home/Home";
import { IExhibitionResponse } from "@/interfaces";
import { getExhibitions } from "@/lib/queries";
import Head from "next/head";

type HomePageProps = {
  data: IExhibitionResponse;
};

export default function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Exhibitions list - Home</title>
      </Head>
      <Home data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const exhibitions = await getExhibitions();

  return {
    props: {
      data: exhibitions,
    },
  };
}
