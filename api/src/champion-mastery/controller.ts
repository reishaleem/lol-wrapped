import type { API } from 'lambda-api';
import { getChampionMastery } from './service';

export function championMasteryApi(api: API) {
  api.get('/', async () => {
    return getChampionMastery();
  });
}
