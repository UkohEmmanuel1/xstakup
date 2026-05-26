"use client";
import Link from "next/link";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">System fault detected</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => reset()}
            className="rounded-md bg-quantum-gradient px-4 py-2 text-sm text-white"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md border border-border px-4 py-2 text-sm"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
