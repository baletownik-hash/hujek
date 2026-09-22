import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/images/baner-reklamowy.jpg",
    alt: "Duży baner reklamowy zawieszony na ogrodzeniu placu budowy",
  },
  {
    src: "/images/szyld.jpg",
    alt: "Szyld firmowy zamontowany nad wejściem do lokalu",
  },
  {
    src: "/images/projektowanie.jpg",
    alt: "Projektowanie graficzne materiałów reklamowych na komputerze",
  },
  {
    src: "/images/reklama-uliczna.jpg",
    alt: "Reklama zewnętrzna umieszczona na budynku przy ulicy",
  },
  {
    src: "/images/montaz-reklamy.jpg",
    alt: "Montaż baneru reklamowego na konstrukcji zewnętrznej",
  },
  {
    src: "/images/czyszczenie-reklamy.jpg",
    alt: "Czyszczenie powierzchni szyldu reklamowego",
  },
];

export default function Gallery() {
  const headingRef = useReveal();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="realizacje" className="bg-paper py-20 sm:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Realizacje</h2>
          <p className="mt-3 text-lg text-ink">
            Przykłady prac związanych z reklamą zewnętrzną, banerami i
            szyldami.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <GalleryItem
              key={photo.src}
              photo={photo}
              onOpen={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[active].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Zamknij podgląd zdjęcia"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={PHOTOS[active].src}
            alt={PHOTOS[active].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryItem({ photo, onOpen }) {
  const ref = useReveal();
  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl bg-graphite-light"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span
        className="absolute inset-0 bg-graphite/0 transition-colors duration-300 group-hover:bg-graphite/20"
        aria-hidden="true"
      />
    </button>
  );
}
