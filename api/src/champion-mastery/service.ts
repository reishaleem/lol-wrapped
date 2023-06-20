import { Constants } from 'twisted';
import { riotClient } from '../riot-client';

export async function getChampionMastery() {
  const summoner = await riotClient.Summoner.getByName(
    'fifa4life',
    Constants.Regions.AMERICA_NORTH
  );
  const res = await riotClient.Champion.masteryBySummoner(
    summoner.response.id,
    Constants.Regions.AMERICA_NORTH
  );

  return res.response;
}
