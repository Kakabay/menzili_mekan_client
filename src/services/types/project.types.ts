export interface ProjectTypes {
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
  banner_image: string;
  logo: string;
  information_number_1: string;
  information_number_2: string;
  information_number_3: string;
  information_text_1: string;
  information_text_2: string;
  information_text_3: string;
  information: string;
  main_characters_text: string;
  main_characters_image: string;
  list_characters: ListCharacter[];
  shots_text: string;
  shots_image: string;
  list_shots: ListShot[];
  posters_text: string;
  posters_image: string;
  list_posters: ListPoster[];
  trailer: null;
}

export interface ListCharacter {
  character_images: CharacterImage[];
  character_header: string;
  character_text: string;
}

export interface CharacterImage {
  image: string;
}

export interface ListPoster {
  image: string;
  image_type: string;
}

export interface ListShot {
  shot_image: string;
}
