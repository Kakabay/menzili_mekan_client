export interface HomeProjectsTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  list_image: string;
  created_at: string;
  updated_at: string;
}
