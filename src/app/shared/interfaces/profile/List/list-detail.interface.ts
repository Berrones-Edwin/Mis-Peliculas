import { Item } from "./item.interface";

export interface ListDetail {
  code: number;
  catalog: {
    id: number;
    name: string;
    description: string;
    avatar: string;
    type_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    items: Array<Item>;
    
  }
}
