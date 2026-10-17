---
name: The Board
id: board
tone: dark
interactivity: low
status: built
good-for: [Dev & AI tools, Portfolio]
feel: [Precise, Technical]
---

# The Board

> The page is a populated circuit board. Sections are components, links are traces, the one red LED is the only live colour.

## Borrowed from

Printed circuit boards: green solder mask, copper ground pours, gold-plated (ENIG) pads, white silkscreen labels, reference designators like U1 and R12, mounting holes in the corners.

## Mood & fit

Precise, engineered, quietly nerdy. Suits engineers, hardware and infra teams, AI builders, developer tools. Avoid for soft consumer brands.

Good fit for: Engineers, hardware, infra and AI builders.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Solder mask | `#0E3B2C` | background |
| Mask deep | `#072419` | wells, holes |
| Copper | `#C9772F` | traces, rules |
| Gold | `#D8B25B` | pads, focus |
| Silkscreen | `#F1EEE2` | text |
| Silk dim | `#A9BDAE` | secondary text |
| LED | `#FF3B30` | the one live signal |

## Typography

- **Systems 0 → 1** — Display · Chakra Petch 600–700, uppercase
- **Designed for cockpit legibility.** — Body · B612 400/700 (Airbus cockpit face)
- **U1 · R12 · 3.3V** — Data · B612 Mono, designators and numbers only

```css
@import url('https://fonts.googleapis.com/css2?family=B612:wght@400;700&family=B612+Mono:wght@400;700&family=Chakra+Petch:wght@500;600;700&display=swap');
```

## Patterns & textures

- **Copper pour dots · 14px grid**
  ```css
  .pattern { background:radial-gradient(circle at 1px 1px, rgba(201,119,47,.35) 1px, transparent 1.5px) 0 0/14px 14px, #0E3B2C; }
  ```
- **IC pins · repeating gradient**
  ```css
  .pattern { background:repeating-linear-gradient(90deg,#C9CBC6 0 4px,transparent 4px 10px) 50% 0/80% 10px no-repeat, repeating-linear-gradient(90deg,#C9CBC6 0 4px,transparent 4px 10px) 50% 100%/80% 10px no-repeat, linear-gradient(#141414,#141414) 50% 50%/80% 60% no-repeat, #0E3B2C; }
  ```
- **Plated through-holes**
  ```css
  .pattern { background:radial-gradient(circle, #072419 30%, #D8B25B 31% 46%, transparent 47%) 0 0/48px 48px, #0E3B2C; }
  ```

## Motion & interaction

- Signal pulse: short dash on the trace path, `stroke-dasharray: 14 300`, linear 2.4s loop.
- LED: `steps(2)` blink, never smooth. Hardware doesn't fade.
- Hover lifts a component 3px with a gold outline ring.

## Watch-outs

- Keep a single accent (the LED). More reds turn it into a Christmas board.
- Silk-dim on mask passes contrast only at 16px+.
- Wide nav rows overflow on phones. Let them wrap.

## Tokens

```css
--mask: #0E3B2C;  --mask-deep: #072419;  --copper: #C9772F;  --gold: #D8B25B;
--silk: #F1EEE2;  --silk-dim: #A9BDAE;  --led: #FF3B30;
--display: 'Chakra Petch', sans-serif;  --sans: 'B612', sans-serif;  --mono: 'B612 Mono', monospace;
```
