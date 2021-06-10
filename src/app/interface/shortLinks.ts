export interface ShortLinks {
  [x: string]: any;
  id?: string,
  original_url: string;
  short_url: string | null;
  user_id: string | null;
  view_count: number | null;
  tag: string | null;
  author: string | null;
}
