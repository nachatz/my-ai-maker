import type { Model, Fetch } from "~/types";

export const fetcher = async (
  url: RequestInfo | URL,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: Model | null | undefined,
): Promise<Fetch<Model>> => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<Fetch<Model>>;
};
