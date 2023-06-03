import type { APIGatewayEvent, Context, ProxyResult } from 'aws-lambda';
import createApi from 'lambda-api';

import { championMasteryApi } from './champion-mastery/controller';

const api = createApi();

api.register(championMasteryApi, { prefix: 'champion-mastery' });

export async function handler(
  event: APIGatewayEvent,
  context: Context
): Promise<ProxyResult> {
  return api.run(event, context);
}
