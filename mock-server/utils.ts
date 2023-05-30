import type { ServerResponse } from "http";

export const returnJson = function (res: ServerResponse, jsonObject: object, statusCode = 200): void {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(jsonObject));
};
