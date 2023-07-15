import { auth, isTokenExpired } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../../redux/reducers/auth";

export function useTokenValidation() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
    } else if (!token || isTokenExpired(token)) {
      console.log("Token expired or not available. Generating a new token...");
      auth()
        .then((newToken) => {
          console.log("New token generated");
          dispatch(setToken(newToken));
        })
        .catch((error) => {
          console.error("Failed to generate a new token:", error);
        });
    }
  }, [dispatch, token, user]);
}
