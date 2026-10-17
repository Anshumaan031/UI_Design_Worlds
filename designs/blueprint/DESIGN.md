---
name: Drawing Set
id: blueprint
tone: dark
interactivity: low
status: built
good-for: [Portfolio, Studio / agency]
feel: [Precise, Technical, Calm]
---

# Drawing Set

> The page is a set of cyanotype drawing sheets: Prussian-blue ground, white line work, title blocks, and one red approval stamp.

## Borrowed from

Architectural and engineering drawing sets: cyanotype blueprints, double sheet borders with zone letters, title blocks (drawn / checked / sheet / revision), dimension lines with arrowheads, the rubber approval stamp.

## Mood & fit

Methodical, credible, "measure twice". Suits architecture, engineering, technical consulting, case-study heavy portfolios.

Good fit for: Architects, engineering firms, technical consultancies.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Ground | `#123F7E` | background |
| Ground deep | `#0C2E5E` | panels, scrollbar |
| Line | `#EEF4FF` | text, line work |
| Line dim | `#A9C0E2` | labels, zones |
| Stamp | `#FF5A4E` | one approval mark |

## Typography

- **General arrangement** — Display & labels · Barlow Condensed 500–700, tracked caps
- **Notes read like specification text.** — Body · Barlow 400–600

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&display=swap');
```

## Patterns & textures

- **Drafting grid · minor + major**
  ```css
  .pattern { background-color:#123F7E;background-image:linear-gradient(rgba(238,244,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(238,244,255,.2) 1px,transparent 1px),linear-gradient(rgba(238,244,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(238,244,255,.07) 1px,transparent 1px);background-size:80px 80px,80px 80px,16px 16px,16px 16px; }
  ```
- **Section hatch · 45°**
  ```css
  .pattern { background:repeating-linear-gradient(45deg, rgba(238,244,255,.5) 0 1px, transparent 1px 8px), #123F7E; }
  ```
- **Double sheet border**
  ```css
  .pattern { background:#123F7E;box-shadow:inset 0 0 0 6px #123F7E, inset 0 0 0 8px #EEF4FF, inset 0 0 0 14px #123F7E, inset 0 0 0 15px #A9C0E2; }
  ```

## Motion & interaction

- Line work draws in with `stroke-dashoffset`, 1.6s expo-out, once.
- Stamp lands with an overshoot: scale 2.2 → 1, rotate −12°, ink mask for wear.
- Hover: dashed outline buttons fill solid (pencil → ink).

## Watch-outs

- Only one stamp per view. It's an event, not decoration.
- Grid opacity stays low (6–16%) or it fights the text.
- Zone letters around the frame need space. Drop them on phones.

## Tokens

```css
--ground: #123F7E;  --ground-deep: #0C2E5E;  --line: #EEF4FF;  --line-dim: #A9C0E2;  --stamp: #FF5A4E;
--display: 'Barlow Condensed', sans-serif;  --sans: 'Barlow', sans-serif;
grid: 32px minor / 160px major at 6% and 16% line opacity
```
