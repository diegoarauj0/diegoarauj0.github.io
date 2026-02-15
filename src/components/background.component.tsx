import Squares from "./squares.component";

export function BackgroundComponent() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen">
      <Squares
        speed={0.35}
        squareSize={46}
        direction="diagonal"
        borderColor="rgba(166, 130, 255, 0.2)"
        hoverFillColor="rgba(154, 107, 255, 0.22)"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,93,212,0.2),transparent_56%)]" />
    </div>
  );
}
