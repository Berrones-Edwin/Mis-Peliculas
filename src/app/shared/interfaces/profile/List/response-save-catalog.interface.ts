export interface ResponseSaveCatalog {
  code: number;
  message: string;
  data?: DataResponseSaveCatalog;
}

export interface DataResponseSaveCatalog {
  name: string;
  description: string;
  type_id: number;
  user_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}
