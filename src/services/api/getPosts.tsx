import axios, { AxiosError } from "axios";

export const usePosts = () => {
  const getPosts = async () => {
    try {
      const endpoint = "https://jsonplaceholder.typicode.com/posts";

      const response = await axios.get(endpoint);

      if (response.status === 200) {
        const { data } = response;

        return data;
      }
    } catch (e: any) {
      let error;

      if (e && e instanceof AxiosError) {
        error = e.response?.data.message;
      } else if (e && e instanceof Error) {
        error = e.message;
      }

      return { error: error };
    }
  };

  return {
    getPosts,
  };
};
