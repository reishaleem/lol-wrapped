import fastify, { type FastifyRequest } from 'fastify';
import type { APIGatewayEvent, Context } from 'aws-lambda';
import { handler } from '../src/index';

function convertRequestToEvent(
  fastifyRequest: FastifyRequest
): APIGatewayEvent {
  return {
    body: JSON.stringify(fastifyRequest.body),
    path: fastifyRequest.url,
    resource: fastifyRequest.routerPath,
    httpMethod: fastifyRequest.method,
    isBase64Encoded: false,
    queryStringParameters: fastifyRequest.query as Record<string, string>,
    multiValueQueryStringParameters: {},
    pathParameters: {},
    headers: fastifyRequest.headers as Record<string, string>,
    multiValueHeaders: {},
    requestContext: {
      path: fastifyRequest.url,
      resourcePath: fastifyRequest.routerPath,
      httpMethod: fastifyRequest.method,
      protocol: 'HTTP/1.1',
    },
  } as APIGatewayEvent;
}

const server = fastify();

server.all('/*', async (request, reply) => {
  const event = convertRequestToEvent(request);
  const response = await handler(event, {} as Context);

  if (response.headers) {
    reply.headers(response.headers);
  }
  reply.status(response.statusCode).send(response.body);
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
