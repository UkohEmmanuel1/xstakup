import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-widest text-blue">Error 404</p>
        <h1 className="mt-3 text-6xl font-bold text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-blue-gradient px-5 py-2.5 text-sm font-medium text-white shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
