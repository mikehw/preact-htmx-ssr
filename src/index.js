import { h } from "preact";
import { render } from "preact-render-to-string";

import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Set HTML as the content type by default
fastify.addHook("preHandler", (req, reply, done) => {
  reply.type("text/html");
  done();
});

import home from "./pages/home";

fastify.get("/", async (request, reply) => {
  return render(home);
});

fastify.get("/get-time", async (request, reply) => {
  return render(<li>Current Time {new Date().toISOString()}</li>);
});

const { HOST = "localhost", PORT = "3000" } = process.env;
fastify.listen({ port: PORT, host: HOST }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
