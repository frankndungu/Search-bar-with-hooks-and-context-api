import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfigObject, returnDataCallback) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfigObject.url, {
        method: requestConfigObject.method ? requestConfigObject.method : "GET",
        body: requestConfigObject.body
          ? JSON.stringify(requestConfigObject.body)
          : null,
        headers: requestConfigObject.headers ? requestConfigObject.headers : {},
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      returnDataCallback(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };
  return { sendRequest, isLoading, error };
};

export default useHttp;
