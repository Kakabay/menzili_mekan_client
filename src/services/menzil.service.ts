import axios from "axios";
import { PagesTypes } from "./types/pages.types";
import { PartnersTypes } from "./types/partners.types";
import { CartoonsTypes } from "./types/cartoons.type";
import { HomeServicesTypes } from "./types/home-services.types";
import { HomeProjectsTypes } from "./types/home-projects.types";

class MenzilService {
  private URL = "https://menzilmekan.com.tm/app/api/v1";

  getPages = async () => {
    return await axios.get<PagesTypes>(`${this.URL}/pages`);
  };

  getPartners = async () => {
    return await axios.get<PartnersTypes>(`${this.URL}/partners`);
  };

  getCartoons = async () => {
    return await axios.get<CartoonsTypes>(`${this.URL}/cartoons`);
  };

  getHomeServices = async () => {
    return await axios.get<HomeServicesTypes>(`${this.URL}/home-services`);
  };

  getHomeProjects = async () => {
    return await axios.get<HomeProjectsTypes>(`${this.URL}/home-projects`);
  };
}

export default new MenzilService();
