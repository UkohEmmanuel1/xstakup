import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">Error 404</p>
        <h1 className="mt-3 text-6xl font-bold text-foreground">Route not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The endpoint you requested does not exist in this deployment.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-quantum-gradient px-5 py-2.5 text-sm font-medium text-white shadow-quantum"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
