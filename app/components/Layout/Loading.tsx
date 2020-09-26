import React from "react";

export function Loading(): JSX.Element {
  return (
    <div
      className="h-screen grid place-items-center"
      aria-label="Loading spinner"
    >
      <img src="/assets/LoadingSpinner.svg" alt="Loading spinner" />
    </div>
  );
}
