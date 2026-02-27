export default function FilmGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.09] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.35\"%3E%3Ccircle cx=\"7\" cy=\"8\" r=\"1\"/%3E%3Ccircle cx=\"43\" cy=\"23\" r=\"1\"/%3E%3Ccircle cx=\"118\" cy=\"61\" r=\"1\"/%3E%3Ccircle cx=\"61\" cy=\"97\" r=\"1\"/%3E%3Ccircle cx=\"89\" cy=\"118\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')"
      }}
    />
  );
}
