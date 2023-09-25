import { useEffect, useState } from "react";
import {
  checkAndRedirectIfEmpty,
  arraysToDictionaries,
} from "../lib/utils/utils";
import { processData } from "../lib/parsing/parser";

export function useValidationData(file) {
  const [dataInfo, setDataInfo] = useState([]);

  const [data, setData] = useState({
    data: [[]],
    encodedData: [[]],
  });

  useEffect(() => {
    checkAndRedirectIfEmpty(file);
    processData(file)
      .then((result) => {
        setData({
          data: result.data,
          encodedData: result.res,
        });
        setDataInfo(arraysToDictionaries(result.headers, result.columnTypes));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [file]);

  return { data, dataInfo };
}
