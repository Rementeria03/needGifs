import { Category } from "components/Category/Category";
import React, { useEffect, useState } from "react";
import { getTrendingSearches } from "services/getTrendingSearches";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingSearches().then(setTrends);
  }, []);

  return <Category name="Trends" options={trends} />;
}


