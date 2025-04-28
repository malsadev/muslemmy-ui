import { LemmyHttp } from "lemmy-js-client";

const baseUrl = "http://localhost:8536"; // This should be injected from environment

export const lemmyClient = new LemmyHttp(baseUrl);