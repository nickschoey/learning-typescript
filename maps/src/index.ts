/// <reference types="@types/googlemaps" />
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
