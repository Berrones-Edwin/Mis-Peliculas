export interface ResponsePostRated {
  code: number;
  message: string;
  data?: DataResponsePostRated;
}

export interface DataResponsePostRated {
  item: number;
  name: string;
  avatar: string;
  type_id: number;
  user_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}
