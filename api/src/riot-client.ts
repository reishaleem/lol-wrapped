import { LolApi } from 'twisted';

export const riotClient = new LolApi({
  key: process.env.RIOT_API_KEY,
});
