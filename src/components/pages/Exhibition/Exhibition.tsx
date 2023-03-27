import Picture from "@/components/Picture";
import { IExhibitionDetail } from "@/interfaces";
import { formatDate } from "@/utils";
import React from "react";

type ExhibitionProps = {
  exhibition: IExhibitionDetail;
};

function Exhibition({ exhibition }: ExhibitionProps) {
  return (
    <>
      <div className="mt-5">
        <span className="text-xl font-bold md:text-5xl">
          {exhibition.title}
        </span>{" "}
        <time className="italic text-sm md:text-lg block md:inline">
          {formatDate(exhibition.aic_start_at)} -{" "}
          {formatDate(exhibition.aic_end_at)}
        </time>
      </div>
      <div className="mt-5 flex gap-[17px] relative pb-[40px] flex-wrap md:flex-nowrap">
        <div className="shrink-0 grow md:grow-0 basis-full md:basis-[380px]">
          <div className="overflow-hidden">
            <Picture
              src={exhibition.image_url}
              alt={exhibition.title}
              width={750}
              height={422}
              className="w-full md:object-cover"
            />
          </div>
        </div>
        <div className="-order-1 md:order-1 md:bg-transparent bg-slate-300 bg-opacity-50 p-3 rounded shadow md:p-0 md:shadow-none">
          {exhibition.short_description ? (
            exhibition.short_description
          ) : (
            <span className="text-red-500">No Description!</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Exhibition;
