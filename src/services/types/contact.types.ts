export interface ContactTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: Date;
  updated_at: Date;
}
