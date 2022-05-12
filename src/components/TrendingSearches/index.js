import { useNearScreen } from "hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTranding() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return (
    <Suspense fallback={null}>
      <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
    </Suspense>
  );
}
