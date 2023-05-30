import type { MockHandler } from "vite-plugin-mock-server";

import { returnJson } from "./utils";
import joke from "./data/joke.json";

const mocks: MockHandler[] = [
  {
    pattern: "/jokes/random",
    method: "GET",
    handle: (_req, res) => {
      returnJson(res, joke);
    }
  }
];

export default mocks;
