import { auth, isTokenExpired } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export function useTokenValidation() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      console.log("Token expired or not available. Generating a new token...");
      auth()
        .then((newToken) => {
          console.log("New token generated");
          dispatch({ type: "setToken", payload: newToken });
        })
        .catch((error) => {
          console.error("Failed to generate a new token:", error);
        });
    }
  }, [dispatch, token]);
}
