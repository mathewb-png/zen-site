"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-6 text-[#2f3b36]">
        <div className="text-center">
          <h1 className="text-2xl font-light">Something went wrong</h1>
          <button
            type="button"
            onClick={reset}
            className="btn-primary mt-6 rounded-full px-6 py-2 text-sm"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
