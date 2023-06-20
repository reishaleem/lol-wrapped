import type { API } from 'lambda-api';
import { getChampionMastery } from './service';

export function championMasteryApi(api: API) {
  api.get('/', async (req, res) => {
    const getChampionMasteryResponse = await getChampionMastery();
    return res.status(200).send(getChampionMasteryResponse.slice(0, 5));
  });
}
