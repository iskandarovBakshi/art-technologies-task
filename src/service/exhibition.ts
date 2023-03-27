import { IExhibitionDetail, IExhibitionResponse } from "@/interfaces";
import { get } from "./instance";

export async function getExhibitions(search?: string) {
  const defaultSearch =
    "?limit=8&page=1&fields=id,image_url,title,aic_start_at,aic_end_at";
  const { response, error } = await get(
    `/exhibitions${search ? search : defaultSearch}`
  );
  return {
    exhibitions: response as IExhibitionResponse,
    error,
  };
}

export async function getExhibitionById(id: string) {
  const { response, error } = await get(
    `/exhibitions/${id}?fields=id,image_url,title,aic_start_at,aic_end_at,short_description`
  );

  return {
    exhibition: response.data ? response.data : null,
    error,
  };
}
