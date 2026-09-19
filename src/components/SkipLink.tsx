export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold focus-visible:text-bg-dark focus-visible:shadow-md"
    >
      Skip to main content
    </a>
  );
}
