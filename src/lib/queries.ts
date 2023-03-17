import { IExhibitionResponse } from "@/interfaces";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function get(path: string, config?: RequestInit) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "GET",
    ...config,
  });
  const text = await response.text();
  const data = text && JSON.parse(text);
  let error = null;
  if (!response.ok) {
    error = (data && data.message) || response.statusText;
  }
  return {
    response: data,
    error,
  };
}

export async function getExhibitions(search?: string) {
  const defaultSearch =
    "?limit=8&page=1&fields=id,image_url,title,aic_start_at,aic_end_at";
  const { response } = await get(
    `/exhibitions${search ? search : defaultSearch}`
  );
  return response as IExhibitionResponse;
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
