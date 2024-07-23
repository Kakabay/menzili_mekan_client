export interface ContactUsTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  text: string;
  image: string;
  created_at: string;
  updated_at: string;
}
