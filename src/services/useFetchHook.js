import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [responseData, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  async function apiCall() {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { responseData, error, loading };
}
