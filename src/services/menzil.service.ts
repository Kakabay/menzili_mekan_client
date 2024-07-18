import axios from 'axios';
import { PagesTypes } from './types/pages.types';
import { PartnersTypes } from './types/partners.types';
import { CartoonsTypes } from './types/cartoons.type';
import { HomeServicesTypes } from './types/home-services.types';
import { HomeProjectsTypes } from './types/home-projects.types';
import { ContactTypes } from './types/contact.types';
import { MainServicesTypes } from './types/main-services.types';

class MenzilService {
  private URL = 'https://menzilmekan.com.tm/app/api/v1';

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

  getContact = async () => {
    return await axios.get<ContactTypes>(`${this.URL}/contact`);
  };

  getMainServices = async () => {
    return await axios.get<MainServicesTypes>(`${this.URL}/mainServices`);
  };
}

export default new MenzilService();
