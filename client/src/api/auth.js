import { connection } from "./connection";

export async function auth() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  try {
    const response = await connection.post("/jwt", {
      "client-id": clientId,
      "client-secret": clientSecret,
    });

    const { message } = response.data;
    const token = message;
    connection.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function isTokenExpired(token) {
  const decodedToken = decodeToken(token);
  if (!decodedToken || !decodedToken.exp) {
    return true;
  }
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTimestamp;
}

function decodeToken(token) {
  try {
    const payloadBase64 = token.split(".")[1];
    const payload = atob(payloadBase64);
    return JSON.parse(payload);
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}
