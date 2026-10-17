---
name: Obsidian Atelier
id: obsidian
tone: dark
interactivity: medium
status: built
good-for: [Commerce / pricing, Launch / event, Studio / agency]
feel: [Mysterious, Precise, Warm]
---

# Obsidian Atelier

> A watchmaker's showroom after hours: black basalt ground, a guilloché dial that actually tells the time, and gold used the way a jeweller uses it, in thin lines and one lit headline word.

## Borrowed from

Dress-watch dials: engine-turned guilloché, applied baton markers, the red seconds hand, polished gold cases with a conic sheen, and the printed spec card in a boutique.

## Mood & fit

Quiet, nocturnal, expensive. The headline is thin and large so gold can do the shouting in one word. Suits products that are already beautiful and few. Avoid for volume retail or anything with small data tables, where thin serifs on black will tire the eye.

Good fit for: Watchmakers, fine jewellery, spirits, private banks, members' clubs: anything sold by craft and rarity.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Night | `#0A0A0B` | background |
| Basalt | `#151517` | raised panels |
| Gold | `#C9A24B` | hairlines, markers, the one accent |
| Champagne | `#EAD9A8` | gold highlights, numerals |
| Pearl | `#E9E6DF` | text |
| Smoke | `#A29D92` | secondary text |
| Rose gold | `linear-gradient(100deg,#8F6B22,#EAD9A8 40%,#C9A24B 60%,#8F6B22)` | button fill, watch case |

## Typography

- **Time, kept** — Display · Cormorant 300, italic 500 for the gilded word
- **BOOK A VIEWING** — UI · Tenor Sans, tracked caps

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Tenor Sans&display=swap');
```

## Patterns & textures

- **Guilloché · conic 4°**
  ```css
  .pattern { background:repeating-conic-gradient(#17161A 0 2deg,#0C0C0E 2deg 4deg); }
  ```
- **Gilding · 100°**
  ```css
  .pattern { background:linear-gradient(100deg,#8F6B22,#EAD9A8 40%,#C9A24B 60%,#8F6B22); }
  ```

## Motion & interaction

- The gilded word breathes between Gold and a brighter champagne over 6s, `ease-in-out`.
- Hands are driven from `Date` on `requestAnimationFrame`; with reduced motion the seconds hand ticks once a second.
- The primary button floods with gold from the left in 600ms, `cubic-bezier(.16,1,.3,1)`.

## Watch-outs

- Gold is a line colour. Fill large areas with it and the page becomes a casino.
- Keep body copy at 15px or above and Smoke or lighter; Cormorant thins out badly at small sizes on black.
- Only one gilded word per screen.

## Tokens

```css
--night: #0A0A0B;  --basalt: #151517;  --gold: #C9A24B;  --champ: #EAD9A8;  --pearl: #E9E6DF;  --smoke: #A29D92;
--serif: 'Cormorant', serif;  --sans: 'Tenor Sans', sans-serif;
```
