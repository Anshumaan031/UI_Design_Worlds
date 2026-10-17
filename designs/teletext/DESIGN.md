---
name: Teletext
id: teletext
tone: dark
interactivity: medium
status: built
good-for: [Portfolio, Music & culture]
feel: [Retro, Playful, Technical]
---

# Teletext

> The site is a broadcast text service: black screen, eight fixed colours, one bitmap face, a 40-column grid, and pages you reach with coloured keys.

## Borrowed from

1970s–90s broadcast teletext (Ceefax, Oracle and their cousins): 40×25 character pages, double-height headlines, chunky block "mosaic" graphics, the four coloured Fastext keys on the remote.

## Mood & fit

Nostalgic, cheeky, information-dense. Suits media, retro-tech, game studios, dev portfolios with a sense of humour.

Good fit for: Retro-tech, media, playful dev portfolios.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Black | `#000000` | screen |
| White | `#FFFFFF` | body |
| Yellow | `#FFFF00` | headlines |
| Cyan | `#00FFFF` | graphics, info |
| Green | `#00FF00` | secondary |
| Red | `#FF0000` | fastext 1 |
| Blue | `#0000FF` | header band |
| Magenta | `#FF00FF` | accents |

## Typography

- **P100 LABTEXT 100** — Everything · VT323, one size; double-height via scaleY(2)

```css
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
```

## Patterns & textures

- **Scanlines over colour**
  ```css
  .pattern { background:repeating-linear-gradient(180deg,transparent 0 2px,rgba(0,0,0,.35) 3px), linear-gradient(90deg,#0000FF 0 50%,#FF0000 50%); }
  ```
- **Mosaic block cells (2×3)**
  ```css
  .pattern { background:conic-gradient(#00FFFF 25%, #000 0 50%, #00FFFF 0 75%, #000 0) 0 0/24px 16px; }
  ```

## Motion & interaction

- Page change: `clip-path` wipe with `steps(3)`, so it looks like the page is being redrawn.
- A clock that actually ticks in the header.
- Fastext keys map to the four colours; type page numbers for power users.

## Watch-outs

- A fixed 40-column grid doesn't reflow. Scale the font size with the viewport instead.
- Pure blue (#0000FF) text on black fails contrast. Use it only as a background band.
- Give screen readers real text alongside the mosaic art.

## Tokens

```css
black #000  white #FFF  yellow #FF0  cyan #0FF  green #0F0  red #F00  blue #00F  magenta #F0F
font: 'VT323', monospace;  line-height: 0.92em;  white-space: pre;  width: 40ch
```
