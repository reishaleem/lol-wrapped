import type { API } from 'lambda-api';
import { getChampionMastery } from './service';

export function championMasteryApi(api: API) {
  api.get('/', (req, res) => {
    return res.status(200).send(getChampionMastery());
  });
}
