"use client";
import Link from "next/link";

export default function ErrorPage({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => reset()}
            className="rounded-md bg-blue-gradient px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Try again
          </button>
          <Link href="/" className="rounded-md border border-border px-4 py-2 text-sm">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
