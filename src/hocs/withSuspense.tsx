import type { ComponentType, ReactNode } from "react";

import { Suspense } from "react";

function withSuspense<P extends object>(
  Component: ComponentType<P>,
  fallback: ReactNode,
) {
  const ComponentWithSuspense = (props: P) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
}

export default withSuspense;
