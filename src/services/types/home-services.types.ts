export interface HomeServicesTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
