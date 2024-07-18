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
  created_at: Date;
  updated_at: Date;
}

export interface Part {
  item: string;
}
