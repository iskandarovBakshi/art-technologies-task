import BackButton from "@/components/BackButton";
import { IExhibitionDetail, IExhibitionNotFound } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Exhibition from "@/components/pages/Exhibition/Exhibition";
import { getExhibitionById, getExhibitions } from "@/service/exhibition";
import { useRouter } from "next/router";
import NotFound from "@/pages/404";

type ExhibitionProps = {
  exhibition: IExhibitionDetail;
  error: IExhibitionNotFound;
};

function ExhibitionPage({ exhibition, error }: ExhibitionProps) {
  const router = useRouter();

  if (error) {
    return <NotFound error={error} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{`Exhibition - ${
          error ? "Not Found" : exhibition.title
        }`}</title>
      </Head>
      <BackButton />
      <Exhibition exhibition={exhibition} />
    </>
  );
}

export default ExhibitionPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const exhibitionId = context.params?.id as string;
  const { exhibition, error } = await getExhibitionById(exhibitionId);

  return {
    props: {
      exhibition,
      error,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { exhibitions } = await getExhibitions("?limit=8&page=1&fields=id");

  return {
    paths: exhibitions.data.map((ex) => ({ params: { id: `${ex.id}` } })),
    fallback: true,
  };
};
