export const getUserMetadata = async (getAccessToken) => {
  let accessToken = "";
  try {
    accessToken = await getAccessToken();
  } catch (e) {
    console.log(e.message);
  }

  return accessToken;
};
