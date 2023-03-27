import { IExhibition } from "@/interfaces";
import { formatDate } from "@/utils";
import Link from "next/link";
import React from "react";
import Picture from "./Picture";

type CardProps = {
  exhibition: IExhibition;
};

function Card({ exhibition }: CardProps) {
  return (
    <>
      <Link
        href={`/exhibition/${encodeURIComponent(exhibition.id)}`}
        className="text-center md:text-start"
      >
        <div className="max-w-[313px] h-48 overflow-hidden mx-auto md:mx-0">
          <Picture
            src={exhibition.image_url}
            width={313}
            height={313}
            alt={exhibition.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <h3 className="text-lg mt-2">{exhibition.title}</h3>
        <time className="text-sm italic block">
          {formatDate(exhibition.aic_start_at)} -{" "}
          {formatDate(exhibition.aic_end_at)}
        </time>
      </Link>
    </>
  );
}

export default Card;
