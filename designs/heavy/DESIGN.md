---
name: Heavy Load
id: heavy
tone: dark
interactivity: medium
status: built
good-for: [Launch / event, Portfolio]
feel: [Loud, Severe]
---

# Heavy Load

> Plant machinery in black and safety yellow: crawling hazard tape, stencil paint, riveted plates and a split-flap board. Everything has weight.

## Borrowed from

Industrial safety signage and plant floors: black-and-yellow hazard chevrons, spray-stencilled lettering, riveted rating plates, and the clacking split-flap boards of old stations and airports.

## Mood & fit

Loud, confident, built to last. Suits bold personal brands, infra/ops tooling, product launches, construction-tech. Wrong for calm, wellness or luxury.

Good fit for: Bold personal brands, ops/infra, launches.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Ink | `#0B0B0A` | background |
| Steel | `#161614` | panels |
| Safety yellow | `#FFD400` | display, actions |
| Yellow deep | `#E0B700` | pressed states |
| Paint white | `#F4F1E6` | body text |
| Dust | `#B8B29A` | secondary |

## Typography

- **Load rated** — Display · Big Shoulders Stencil Display 900; outline lines via -webkit-text-stroke
- **Shift log · 2024** — Body & flaps · Archivo variable (wdth 62–125, wght 400–900)

```css
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@700;900&family=Archivo:wdth,wght@62..125,400..900&display=swap');
```

## Patterns & textures

- **Hazard tape · −45°**
  ```css
  .pattern { background:repeating-linear-gradient(-45deg,#FFD400 0 16px,#0B0B0A 16px 32px); }
  ```
- **Perforated plate dots**
  ```css
  .pattern { background:radial-gradient(circle at 1px 1px, rgba(255,212,0,.3) 1.4px, transparent 1.8px) 0 0/14px 14px, #0B0B0A; }
  ```
- **Riveted plate corners**
  ```css
  .pattern { background:radial-gradient(circle, #8a8676 3px, #3a3830 4px, transparent 5px) 12px 12px/calc(100% - 24px) calc(100% - 24px), #FFD400; }
  ```

## Motion & interaction

- Tape crawl: background-position loop, 1.4–1.6s linear. Size the tile to the stripe diagonal (stripe × 2 × √2) so it loops without a jump.
- Split-flap: each cell cycles random glyphs every ~48ms, then settles left to right with a stagger.
- Name stamped letter by letter; belts of words move with scroll.

## Watch-outs

- Yellow is a fill and a headline colour. Never body text on white.
- Thick coloured borders on one side of a card read as a cheap trick. Use gaps over a yellow ground instead.
- Moving tape must stop when the user prefers reduced motion.

## Tokens

```css
--ink: #0B0B0A;  --steel: #161614;  --yel: #FFD400;  --yel-deep: #E0B700;  --text: #F4F1E6;  --dim: #B8B29A;
--stencil: 'Big Shoulders Stencil Display', sans-serif;  --body: 'Archivo', sans-serif;
tape: repeating-linear-gradient(-45deg, var(--yel) 0 18px, var(--ink) 18px 36px) / 50.9px 100%
```
