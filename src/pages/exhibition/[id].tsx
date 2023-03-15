import BackButton from "@/components/BackButton";
import { IExhibitionDetail, IExhibitionNotFound } from "@/interfaces";
import { getExhibitionById } from "@/lib/queries";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Exhibition from "@/components/pages/Exhibition/Exhibition";

type ExhibitionProps = {
  exhibition: IExhibitionDetail;
  error: IExhibitionNotFound;
};

function ExhibitionPage({ exhibition, error }: ExhibitionProps) {
  return (
    <>
      <Head>
        <title>{`Exhibition - ${
          error ? "Not Found" : exhibition.title
        }`}</title>
      </Head>
      <BackButton />
      <Exhibition exhibition={exhibition} error={error} />
    </>
  );
}

export default ExhibitionPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { exhibition, error } = await getExhibitionById(
    context.query["id"] as string
  );

  return {
    props: {
      exhibition,
      error,
    },
  };
};
