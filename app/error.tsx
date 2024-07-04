"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  err: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ err }) => {
  useEffect(() => {
    console.error(err);
  }, [err]);

  return <EmptyState title="Ooops!" subtitle="Something went wrong!" />;
};

export default ErrorState;
