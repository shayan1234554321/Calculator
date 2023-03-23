import { useEffect, useState } from 'react';

const baseURL = process.env.REACT_APP_ApiPath;
export default function ApiNinja() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchingAPI = async () => {
    try {
      setLoading(true);
      await fetch(`${baseURL}/?category=attitude`, {
        method: 'GET',
        headers: { 'X-API-KEY': '/tZkLGCPasBYhhpCUjjWCw==8PHIdKMaefWjcRht' },
        contentType: 'application/json',
      })
        .then((res) => res.json())
        .then((res) => setData(res));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchingAPI();
  }, []);

  return ({
    data, loading,
  });
}
