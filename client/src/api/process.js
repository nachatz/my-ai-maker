import { connection } from "./connection";

export async function postCsv(formData) {
  try {
    const response = await connection.post("/process", formData);
    return response.data["message"];
  } catch (error) {
    return error.response.data["message"];
  }
}
