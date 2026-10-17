---
name: Thermal Receipt
id: receipt
tone: light
interactivity: medium
status: proposed
good-for: [Commerce / pricing, Portfolio]
feel: [Playful, Retro, Calm]
---

# Thermal Receipt

> Content prints out on a till roll: a narrow monospaced column, dashed dividers, a torn zigzag edge, a barcode, and a total that lands last.

## Borrowed from

Thermal till receipts and order tickets: 58/80mm paper rolls, dot-matrix monospace, dashed separators, centred shop headers, item/price columns, barcodes, torn edges, the faded grey of thermal print.

## Mood & fit

Honest, itemised, witty. Suits pricing pages, shops, "CV as a receipt", year-in-review and changelog pages. Monospace is earned here: it's what receipts are printed in.

Good fit for: Pricing pages, shops, résumés, year-in-review.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Counter | `#D7D2C8` | page |
| Thermal paper | `#FBFAF6` | roll |
| Thermal ink | `#2A2A2A` | text, barcode |
| Total red | `#C8302C` | the total only |

## Typography

- **SYSTEMS & CO.** — Everything · IBM Plex Mono 400/600; headers tracked +0.2em

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap');
```

## Patterns & textures

- **Barcode (gradient)**
  ```css
  .pattern { background:repeating-linear-gradient(90deg,#2A2A2A 0 2px,transparent 2px 4px,#2A2A2A 4px 7px,transparent 7px 8px,#2A2A2A 8px 9px,transparent 9px 12px) 50% 50%/80% 50% no-repeat,#FBFAF6; }
  ```
- **Torn zigzag edge (mask)**
  ```css
  .pattern { background:#FBFAF6;-webkit-mask:conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/14px 100%;mask:conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/14px 100%; }
  ```

## Motion & interaction

- Lines print at ~110ms intervals, each dropping 6px into place (print-head rhythm).
- The roll grows downwards; the page scroll follows it.
- Idea: a "Tear off" button that animates a rip and copies the content.

## Watch-outs

- Keep the column narrow (≈ 32–42 characters) or it stops reading as a receipt.
- Item/price rows must stay real text, not ASCII art, for screen readers.
- Faded grey thermal ink fails contrast. Keep the ink near #2A2A2A.

## Tokens

```css
--counter: #D7D2C8;  --paper: #FBFAF6;  --ink: #2A2A2A;  --red: #C8302C;
--mono: 'IBM Plex Mono', monospace;   width: min(340px, 100%)
torn edge: mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50% / 14px 100%
```
