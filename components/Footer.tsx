import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-8">
        <a href="#" className="relative h-10 w-44">
          <Image src="/assets/pixelvisionlogo.png" alt="PixelVision logo" fill className="object-contain" />
        </a>

        <div className="flex flex-col items-center gap-3 text-center text-xs uppercase tracking-[0.2em] text-brand-muted sm:flex-row sm:gap-6 sm:text-sm">
          <a href="https://instagram.com" target="_blank" className="link-underline" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@pixelvision.studio" className="link-underline">
            hello@pixelvision.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
