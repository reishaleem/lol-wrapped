import type { APIGatewayEvent, Context } from 'aws-lambda';
import createApi from 'lambda-api';

import { championMasteryApi } from './champion-mastery/controller';

const api = createApi();

api.register(championMasteryApi, { prefix: 'champion-mastery' });

export const handler = async (event: APIGatewayEvent, context: Context) => {
  return api.run(event, context);
};
