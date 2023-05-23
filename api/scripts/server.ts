import fastify from 'fastify';

const server = fastify();

server.all('/*', async () => {
  // TODO: Build a fake APIGatewayEvent and Context? object to pass into the handler
  // const event: APIGatewayEvent = {};
  // const context: Context = {};
  // return handler(event, context);
  return 'Hello World';
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
