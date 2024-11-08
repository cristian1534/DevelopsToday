import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchPopulation = (URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resolve = await axios.get(URL);
        const result = await resolve.data;
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        return;
      }
    };
    fetchData();
  }, [URL]);

  return { data, loading };
};

export default useFetchPopulation;
