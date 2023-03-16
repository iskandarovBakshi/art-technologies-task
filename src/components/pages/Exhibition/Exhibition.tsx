import { IExhibitionDetail, IExhibitionNotFound } from "@/interfaces";
import React from "react";
import ExhibitionDetails from "./ExhibitionDetails";

type ExhibitionProps = {
  exhibition: IExhibitionDetail;
  error: IExhibitionNotFound;
};

function Exhibition({ exhibition, error }: ExhibitionProps) {
  if (error) {
    return (
      <div className="text-center mt-[50px]">
        <h1 className="text-2xl">404 - Exhibition not found</h1>
      </div>
    );
  }

  return <ExhibitionDetails exhibition={exhibition} />;
}

export default Exhibition;
