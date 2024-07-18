export interface PagesTypes {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  description: string;
  slug: string;
  created_at: string;
  updated_at: string;
  header: string;
  banner_video_link?: string;
  banner_video_image?: string;
  youtube_link?: string;
  banner: Banner;
}

export interface Banner {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}
