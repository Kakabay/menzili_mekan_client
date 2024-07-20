export interface MainServicesTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  text: string;
  parts: Part[];
  created_at: string;
  updated_at: string;
}

export interface Part {
  item: string;
}
