# Paweł Powała REKLAMY — strona internetowa

Strona wizytówkowa firmy reklamowej, zbudowana w React + Vite + Tailwind CSS.

## Uruchomienie projektu

Wymagany jest zainstalowany [Node.js](https://nodejs.org/) (wersja 18 lub nowsza).

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski (podgląd na żywo)
npm run dev
```

Strona będzie dostępna pod adresem, który pojawi się w terminalu (zwykle `http://localhost:5173`).

Aby zbudować wersję produkcyjną (do wgrania na hosting):

```bash
npm run build
```

Wygenerowane pliki znajdą się w folderze `dist/`. Podgląd zbudowanej wersji:

```bash
npm run preview
```

## Zdjęcia

W folderze `public/images/` znajdują się **tymczasowe placeholdery** (wygenerowane
lokalnie, żeby strona od razu działała) o dokładnie tych nazwach, których używa kod:

- `hero-reklama.jpg` — zdjęcie główne sekcji Hero
- `baner-reklamowy.jpg` — usługa reklamy
- `szyld.jpg` — usługa projektowania / reklamy
- `projektowanie.jpg` — projektowanie materiałów
- `montaz-reklamy.jpg` — rozwieszanie i montaż
- `reklama-uliczna.jpg` — galeria realizacji
- `czyszczenie-reklamy.jpg` — usługa czyszczenia

**Podmień te pliki na prawdziwe zdjęcia** (zachowując te same nazwy), a strona
automatycznie zacznie je wyświetlać — nie trzeba zmieniać żadnego kodu.

## Struktura plików

```
pawel-powala-reklamy/
├── index.html                     # dokument HTML, meta SEO (title, description)
├── package.json                   # zależności i skrypty npm
├── vite.config.js                 # konfiguracja Vite
├── tailwind.config.js             # tokeny kolorów, typografii Tailwind
├── postcss.config.js              # konfiguracja PostCSS
├── .gitignore
├── README.md                      # ten plik
├── public/
│   └── images/                    # zdjęcia (placeholdery do podmiany)
└── src/
    ├── main.jsx                   # punkt wejścia aplikacji React
    ├── App.jsx                    # łączy wszystkie sekcje strony
    ├── index.css                  # style globalne, Tailwind, animacje scroll-reveal
    ├── hooks/
    │   └── useReveal.js           # hook do subtelnej animacji przy przewijaniu
    └── components/
        ├── Navbar.jsx             # górny pasek z menu i hamburgerem mobilnym
        ├── Hero.jsx                # sekcja otwierająca
        ├── Services.jsx            # sekcja „Co robimy?” — 4 karty usług
        ├── WhyUs.jsx               # sekcja „Dlaczego warto z nami?”
        ├── Gallery.jsx             # galeria realizacji z lightboxem
        ├── Process.jsx             # sekcja „Jak działamy?” — 4 kroki
        ├── CTA.jsx                 # wyróżniona sekcja z wezwaniem do kontaktu
        ├── Contact.jsx             # dane firmy, formularz, blok lokalizacji
        └── Footer.jsx              # stopka
```

## Formularz kontaktowy

Formularz w `src/components/Contact.jsx` nie wysyła jeszcze wiadomości — obecnie
tylko symuluje wysyłkę i pokazuje komunikat potwierdzający. Aby podłączyć realną
wysyłkę, najprostsze opcje to:

- **Formspree** (formspree.io) — dodaj `action="https://formspree.io/f/TWOJ_ID"` do
  formularza i usuń `event.preventDefault()` w funkcji `handleSubmit`,
- **EmailJS** — wywołaj `emailjs.send(...)` wewnątrz `handleSubmit`,
- własny endpoint API — wyślij dane z `handleSubmit` przez `fetch(...)`.

## Dane firmy użyte na stronie

- Nazwa: Paweł Powała REKLAMY
- Adres: ul. Dworcowa 24, 05-126 Nieporęt
- Telefon: 511 624 139
- NIP: 536-172-62-64
- REGON: 545177274
