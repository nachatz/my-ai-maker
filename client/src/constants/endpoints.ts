const endpoint = "https://api-my-ai-maker.onrender.com/v1";

export const endpoints = {
  auth: {
    jwt: `${endpoint}/jwt`,
  },
  models: {
    supported: `${endpoint}/models`,
    generate: `${endpoint}/features`,
  },
  data: {
    intake: `${endpoint}/process`,
  },
};
