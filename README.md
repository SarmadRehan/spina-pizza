# Spina Pizza: Landing Page Prototype

A demo site for Spina Pizza, an Old World pizza and natural wine spot at the Atlanta Dairies in
Reynoldstown, Atlanta. It is built as a client prototype and is not the official website; banners
at the top and bottom of the page say so. It is unlisted (`noindex`) and meant to be shared only
with Spina.

Live demo: https://sarmadrehan.github.io/spina-pizza/

## Main features

- **Hours, front and center.** Customers have been confused by their hours (Google Maps and
  Instagram disagree), so the page shows the owner's own Instagram hours in a large board, with
  today highlighted in Atlanta time (`src/components/HoursVisit.tsx`).
- **Order for pickup.** Every order button (header, hero, mobile bar) opens one shared "Coming soon"
  panel (`src/components/OrderDialog.tsx`): call (404) 824-7594 or order on Uber Eats for now.
- **Late Night.** Thursday to Saturday from 10pm, takeout only: slices, garlic knots, salads, drinks
  and rotating soft serve.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Playfair Display (the elegant serif) and DM Sans (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, pink checkered paper), icons
  assets/images/  logo and photos from their own Instagram, imported statically
  components/     one component per page section, plus the logo and the order panel
  data/           spina.ts: contact details, hours, late night, menu, drinks, story
```

All business content lives in `src/data/spina.ts`, with the source of each fact noted beside it.

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-24):

| Fact | Source |
| --- | --- |
| "Old World Pizza + Vino at the Atlanta Dairies" | Instagram bio @spinapizza |
| 777 Memorial Dr SE, Suite B102, Atlanta, GA 30316 (Reynoldstown, next to Small Fry) | Instagram bio, Google Maps, The Infatuation |
| Hours: Mon closed, Tue–Thu 4pm–10pm, Fri–Sat 4pm–12am, Sun 4pm–10pm | Instagram bio (Google Maps says Fri–Sat until 1am; the brief says to use Instagram) |
| Phone (404) 824-7594; call-in pickup orders; Uber Eats | Google Maps, Instagram bio |
| Dine-in and takeout | Google Maps |
| Opened 2026-08-27 after about five years of delays and pop-ups | Atlanta Magazine 2026-08-26, Instagram posts |
| Owner and chef Anthony Spina Jr., from a family of pizza makers (his father started O4W Pizza) | Atlanta Magazine, The Infatuation |
| Menu: wood-fired 12-inch pies, pastas, small plates, Caesar, branzino, tiramisu, aperitivo cocktails, natural wine | Atlanta Magazine, Google Maps, Anthony's Instagram |

- **Dish descriptions** come from their own Instagram captions, with prices left off: the Capo (Sep 16,
  2026), the Diavola and the stuffed long hot peppers (Sep 3), Lasagna for 2 and Branzino Divorciado
  (Sep 25), fig carpaccio (Sep 5, marked "Seasonal") and the braised beef ragù (Oct 7, marked "Recent
  special"). The 30-month Parmigiano note is from the Sep 3 post.
- **Late Night**: their post of Oct 9, 2026. It gives no end time ("til the wheels fall off"), so the
  page doesn't either.
- **Uber Eats link**: the bit.ly link in their Instagram bio, resolved to the store page with its
  tracking and saved-address parameters removed.
- **Photos** (`src/assets/images/`): only from Spina's own Instagram posts, no customer photos,
  captured for the demo. The ragù photo is cropped to leave out a printed menu with prices, and the
  Hot Boy photo to leave out its text overlay. Swap in originals before any real launch.
- **Logo**: their Instagram profile picture, with the white background made transparent.
- **Colors**: by Sarmad's choice for this demo, a blend. Spina's own logo colors lead (black, white
  and pink `#F07CB0`), with touches of the brief's red-sauce palette (cream, tomato red, deep green).

No prices, star ratings, review quotes or testimonials are shown. The map embeds the street address
rather than the business, so Google's rating card stays off the page.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/spina-pizza` (the Pages project path), adds `.nojekyll` so
the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the repository is
renamed, update the base path in the `deploy` script.

## Notes

- Pink is never used as text on cream (2.4:1); it appears as a fill with black text, or as text on
  black, to meet WCAG AA contrast.
- The page is marked `noindex` so the demo never competes with Spina's own listings.
