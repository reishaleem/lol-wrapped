import { APIGatewayEvent, Context } from 'aws-lambda';
import createApi, { Request, Response } from 'lambda-api';

import { handler } from './handler';

const api = createApi();

api.get('/', async (req: Request, res: Response) => {
  return { status: handler() };
});

export const run = async (event: APIGatewayEvent, context: Context) => {
  return await api.run(event, context);
};
