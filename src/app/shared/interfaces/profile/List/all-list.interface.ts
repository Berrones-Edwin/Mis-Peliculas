import { ListDetail } from "./list-detail.interface";

export interface AllList {
  code: number;
  lists: List;
}

export interface List {
  current_page: number;
  data: Array<ListDetail>;
  first_page_url: string;
  from: string; //?
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: string; //?
  total: number;
  created_at: string;
  updated_at: string;
}
