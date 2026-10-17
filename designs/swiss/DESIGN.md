---
name: Swiss Poster
id: swiss
tone: light
interactivity: low
status: proposed
good-for: [Studio / agency, Portfolio, Editorial]
feel: [Severe, Precise, Calm]
---

# Swiss Poster

> The International Typographic Style: a strict 12-column grid, one grotesk, flush-left ragged-right text, a single red, and huge numerals doing the shouting.

## Borrowed from

Swiss posters by Josef Müller-Brockmann, Armin Hofmann and the Basel/Zürich schools: objective photography, mathematical grids, asymmetric layouts, Akzidenz/Helvetica, red and black on white.

## Mood & fit

Rational, confident, timeless. Suits design studios, architecture, museums, serious portfolios, any type-led site that wants authority without decoration.

Good fit for: Studios, architecture, serious portfolios, type-led sites.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Poster paper | `#F5F4F0` | background |
| Black | `#111111` | text, rules |
| Swiss red | `#E3241B` | one hero element |

## Typography

- **12** — Numerals · Inter Tight 900, tracking −0.06em
- **Twelve systems on a grid.** — Headings & body · Inter Tight 400–800 (stand-in for Akzidenz/Helvetica)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400..900&display=swap');
```

## Patterns & textures

- **Visible column grid**
  ```css
  .pattern { background:repeating-linear-gradient(90deg,rgba(227,36,27,.12) 0 calc(100%/12 - 4px),transparent calc(100%/12 - 4px) calc(100%/12)),#F5F4F0; }
  ```
- **Rule + one geometric form**
  ```css
  .pattern { background:linear-gradient(#111,#111) 0 70%/100% 3px no-repeat,radial-gradient(circle at 70% 35%,#E3241B 0 28%,transparent 28.5%),#F5F4F0; }
  ```

## Motion & interaction

- Almost none. Content slides in along grid lines (translate by exactly one column).
- A grid toggle is the one "toy": it shows the system behind the page.
- Hover on links: underline thickens; nothing bounces.

## Watch-outs

- Easy to slide into generic minimalism. The huge numeral, the red and the visible grid are what make it Swiss.
- Flush-left ragged-right only. Never justify or centre body text.
- Use one family in two or three weights, no more.

## Tokens

```css
--paper: #F5F4F0;  --ink: #111111;  --red: #E3241B;
--sans: 'Inter Tight', sans-serif;   grid: 12 columns, 16px gutter, margins = 1 column on desktop
display: 900, -0.06em, line-height 0.78
```
