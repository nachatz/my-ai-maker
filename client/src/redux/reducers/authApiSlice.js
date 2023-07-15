import { apiSlice } from "../../api/apiSlice";

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: "/jwt",
        method: "POST",
        body: { "client-id": clientId, "client-secret": clientSecret },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
