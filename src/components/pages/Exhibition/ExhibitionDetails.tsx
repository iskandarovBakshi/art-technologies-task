import Picture from "@/components/Picture";
import { IExhibitionDetail } from "@/interfaces";
import { formatDate } from "@/lib/utilities";
import React from "react";

type ExhibitionDetailsProps = {
  exhibition: IExhibitionDetail;
};

function ExhibitionDetails({ exhibition }: ExhibitionDetailsProps) {
  return (
    <>
      <div className="mt-5">
        <span className="text-5xl">{exhibition.title}</span>{" "}
        <time className="italic text-lg">
          {formatDate(exhibition.aic_start_at)} -{" "}
          {formatDate(exhibition.aic_end_at)}
        </time>
      </div>
      <div className="mt-[38px] flex gap-[17px]">
        <div className="shrink-0 basis-[380px]">
          <div className="overflow-hidden">
            <Picture
              src={exhibition.image_url}
              alt={exhibition.title}
              width={750}
              height={422}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div>
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

export default ExhibitionDetails;
