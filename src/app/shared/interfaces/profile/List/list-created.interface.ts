export interface ListCreated {
  code: number;
  message: string;
  data: {
    user_id: number;
    name: string;
    description: string;
    type_id: number;
    updated_at: string;
    created_at: string;
    id: number;
  };
}
