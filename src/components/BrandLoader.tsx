import DiamondCluster from "@/components/DiamondCluster";

/**
 * Brand loading state: the KREW diamond cluster on transparent
 * background, tiles pulsing in sequence in the brand red.
 */
export default function BrandLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-20">
      <DiamondCluster animated className="w-[86px] sm:w-[104px]" />
      <span className="sr-only" role="status">
        {label}
      </span>
    </div>
  );
}
