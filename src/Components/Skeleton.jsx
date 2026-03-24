/**
 * Skeleton — placeholder animado tipo shimmer.
 * Usa la clase .shimmer definida en index.css.
 *
 * Props:
 *   className  — clases extra (ancho, alto, rounded, etc.)
 *   circle     — si true, usa rounded-full
 *   lines      — número de líneas de texto (para párrafos)
 */
export function Skeleton({ className = "", circle = false, lines }) {
  if (lines) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`shimmer h-4 rounded-md ${i === lines - 1 ? "w-2/3" : "w-full"}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`shimmer ${circle ? "rounded-full" : "rounded-xl"} ${className}`}
    />
  );
}

/**
 * SkeletonCard — card completa de skeleton para secciones con imagen + texto.
 */
export function SkeletonCard({ imageHeight = "h-64" }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
      <Skeleton className={`w-full ${imageHeight}`} />
      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton lines={2} />
        <Skeleton className="h-8 w-32 rounded-full mt-4" />
      </div>
    </div>
  );
}

/**
 * SkeletonTeamCard — skeleton específico para cards del equipo.
 */
export function SkeletonTeamCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full h-[400px] rounded-2xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-36" />
        <Skeleton lines={3} />
      </div>
    </div>
  );
}

export default Skeleton;
