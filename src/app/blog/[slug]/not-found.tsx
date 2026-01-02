import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-primary text-6xl font-bold">404</h2>
        <p className="text-white/70 text-xl">Blog post not found</p>
        <p className="text-white/50 text-sm">
          The post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
