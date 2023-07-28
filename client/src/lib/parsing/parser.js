import { ordinalEncode } from "../encodings/encodings";

export const processData = async (file) => {
  try {
    const rawData = await parseCSV(file);
    const data = rawData.slice(1);
    const res = ordinalEncode(data);
    const columnTypes = getHeaderTypes(rawData);
    const headers = rawData[0];
    return {
      rawData: rawData,
      data: data,
      res: res,
      columnTypes: columnTypes,
      headers: headers,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const parseCSV = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const lines = content.split("\n");
      const data = lines.map((line) => line.split(","));
      resolve(data);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsText(file);
  });
};

const getHeaderTypes = (data) => {
  return data[1].map((item) => [typeof item, "ordinal"]);
};
