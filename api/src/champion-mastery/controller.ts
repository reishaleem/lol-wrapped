import { API } from 'lambda-api';
import { getChampionMastery } from './service';

export const championMasteryApi = (api: API) => {
  api.get('/', async () => {
    return getChampionMastery();
  });
};
