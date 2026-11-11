type DiamondClusterProps = {
  className?: string;
  /** Pulse the tiles in sequence (used for the loading state). */
  animated?: boolean;
  /** Tile colour utility applied to the cluster; defaults to the brand red. */
  tint?: string;
  /** Accessible name; the art is hidden from assistive tech without one. */
  title?: string;
};

/**
 * Six tilted tiles in a diamond cluster — the KREW mark used as
 * loader art and as the services motif. Decorative by default.
 */
const TILES: { x: number; y: number }[] = [
  { x: 50.8, y: 15 },
  { x: 28.8, y: 29 },
  { x: 15.4, y: 46 },
  { x: 50.8, y: 46 },
  { x: 77, y: 46 },
  { x: 50.8, y: 77.5 },
];

export default function DiamondCluster({
  className = "",
  animated = false,
  tint = "text-[#CC0000]",
  title,
}: DiamondClusterProps) {
  return (
    <span
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={`relative block aspect-[240/200] ${tint} ${className}`}
    >
      {TILES.map((tile, index) => (
        <span
          key={`${tile.x}-${tile.y}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 rotate-45"
          style={{ left: `${tile.x}%`, top: `${tile.y}%`, width: "21.7%" }}
        >
          <span
            className={`block aspect-square rounded-[16%] bg-current ${animated ? "krew-diamond" : ""}`}
            style={animated ? { animationDelay: `${index * 0.11}s` } : undefined}
          />
        </span>
      ))}
    </span>
  );
}
