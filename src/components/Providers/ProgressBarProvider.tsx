"use client";

import { ProgressProvider } from "@bprogress/next/app";

const ProvidersBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color="#1e1e1e"
      options={{ showSpinner: false }}
      shallowRouting
      disableSameURL
    >
      {children}
    </ProgressProvider>
  );
};

export default ProvidersBarProvider;
