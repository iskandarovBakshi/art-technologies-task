// Exhibition type
export interface IExhibition {
  id: string;
  image_url: string;
  title: string;
  aic_start_at: string;
  aic_end_at: string;
}

export type IExhibitionDetail = IExhibition & {
  short_description: string;
};

export interface IExhibitionResponse {
  pagination: {
    current_page: number;
    limit: number;
    next_url: string;
    offset: 0;
    total: number;
    total_pages: number;
  };
  data: IExhibition[];
}

export interface IExhibitionNotFound {
  message: string;
  status: number;
}
