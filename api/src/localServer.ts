import fastify from 'fastify';

const server = fastify();

server.get('/', async () => {
  return 'Healthy';
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
