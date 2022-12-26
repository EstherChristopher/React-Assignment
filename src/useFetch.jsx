import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        const responseBody = await response.json();
        console.log(responseBody);

        setData(responseBody);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      }
    };
    fetchRequest();
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
