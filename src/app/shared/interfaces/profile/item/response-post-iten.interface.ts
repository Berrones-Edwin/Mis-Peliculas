export interface ResponsePostItem {
  code: number;
  message: string;
  data?: DataResponsePostItem;
}

export interface DataResponsePostItem {
  item: number;
  name: string;
  avatar: string;
  catalog_id: number;
  user_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}
