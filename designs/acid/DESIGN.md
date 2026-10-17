---
name: Acid Chrome
id: acid
tone: dark
interactivity: high
status: proposed
good-for: [Launch / event, Music & culture]
feel: [Loud, Retro]
---

# Acid Chrome

> The page is a Y2K rave flyer. Liquid-chrome display type tilts to catch the light, an acid-green grid floor runs to the horizon, and the details read like a line-up.

## Borrowed from

Late-90s/Y2K rave and club flyers: liquid-chrome logotypes, acid smileys and acid-green, wireframe horizon grids, rotating sticker roundels, line-ups set in wide grotesks, and the photocopied "info line" at the bottom.

## Mood & fit

Loud, nocturnal, euphoric. Suits product launches, event and music sites, creative-tech personal brands, and any page whose job is hype. One screen of maximum energy, then calm down for the reading parts.

Good fit for: Launches, music & nightlife, loud personal brands.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Void | `#07070A` | page |
| Acid | `#C6FF00` | grid, labels, sticker |
| Hot magenta | `#FF2BD6` | extrude, horizon glow |
| Liquid chrome | `linear-gradient(176deg,#fff 0 16%,#A7B0C2 38%,#232733 49%,#F4F7FF 52%,#8E97AB 72%,#fff)` | display type only |
| Flash white | `#F2F2F2` | body text |

## Typography

- **After Dark** — Display · Unbounded 900, -0.06em, chrome gradient + magenta extrude
- **Doors 23:00 — Late ✦ Fri 13.11** — Info line · IBM Plex Mono, tracked +0.18em

```css
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400..900&family=IBM+Plex+Mono:wght@400;600&display=swap');
```

## Patterns & textures

- **Wireframe grid (tilt it)**
  ```css
  .pattern { background:linear-gradient(#C6FF00 2px,transparent 2px) 0 0/100% 20px,linear-gradient(90deg,#C6FF00 2px,transparent 2px) 0 0/20px 100%,#07070A; }
  ```
- **Horizon glow**
  ```css
  .pattern { background:radial-gradient(ellipse 80% 60% at 50% 100%,rgba(255,43,214,.7),transparent 70%),#07070A; }
  ```
- **Chrome ramp**
  ```css
  .pattern { background:linear-gradient(176deg,#fff 0 16%,#A7B0C2 38%,#232733 49%,#F4F7FF 52%,#8E97AB 72%,#fff); }
  ```

## Motion & interaction

- Pointer → `--mx/--my` → `rotateX/Y` on the title, plus a radial highlight layer that slides across the chrome.
- Floor: `rotateX(70deg)` plane whose background-position loops every 900ms.
- Sticker text rides an SVG `textPath` and spins once every 9s.

## Watch-outs

- Chrome text is decoration. Keep it to 2–4 words and never for anything that must be read quickly.
- No strobes. Real flyers flash; web pages must not (WCAG 2.3.1).
- Acid on void is fine for labels; body copy goes in near-white.

## Tokens

```css
--void: #07070A;  --acid: #C6FF00;  --hot: #FF2BD6;  --text: #F2F2F2;
--chrome: linear-gradient(176deg, #fff 0 16%, #A7B0C2 38%, #232733 49%, #F4F7FF 52%, #8E97AB 72%, #fff 100%);
--display: 'Unbounded', sans-serif (900, -0.06em);  --mono: 'IBM Plex Mono', monospace (+0.18em caps)
title: background-clip: text; filter: drop-shadow(0 5px 0 var(--hot)) drop-shadow(0 0 22px rgba(255,43,214,.5))
```
