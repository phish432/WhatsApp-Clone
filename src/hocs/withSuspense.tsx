import type { ComponentType, ReactNode } from "react";

import { Suspense } from "react";

const withSuspense =
  <P extends object>(Component: ComponentType<P>, fallback: ReactNode) =>
  (props: P) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );

export default withSuspense;
