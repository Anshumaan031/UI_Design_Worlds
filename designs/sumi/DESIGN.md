---
name: Sumi Tea House
id: sumi
tone: light
interactivity: high
status: built
good-for: [Local business, Commerce / pricing, Portfolio]
feel: [Calm, Warm, Severe]
---

# Sumi Tea House

> A tea house menu as a single brushstroke: one ink enso is the timer, the type is a heavy Mincho, and a cinnabar hanko seal is stamped only when the cup is ready.

## Borrowed from

Sumi-e brush circles, hanko vermilion seals, vertical tategaki headings, washi paper, and the printed menu of a Kyoto tea room.

## Mood & fit

Still, warm and deliberate. Big heavy serif, a lot of paper, and exactly one colour doing the work. Suits places that want to feel unhurried. Avoid for anything urgent or transactional: the pace is part of the design.

Good fit for: Tea and sake houses, ceramics, ryokan and wellness, meditation and slow-craft brands.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Washi | `#EFE8DA` | background |
| Sumi ink | `#14110F` | text, enso, selected row |
| Cinnabar | `#C8321E` | the one accent: seal, vertical text, button |
| Ash | `#5E574C` | secondary text |

## Typography

- **Slow down** — Display · Shippori Mincho 800
- **一期一会** — Vertical accent · Shippori Mincho 800, writing-mode: vertical-rl
- **Green · 80°C · 1:30** — UI · Zen Kaku Gothic New 400

```css
@import url('https://fonts.googleapis.com/css2?family=Shippori Mincho:wght@400;500;800&family=Zen Kaku Gothic New:wght@400;500&display=swap');
```

## Patterns & textures

- **Washi glow**
  ```css
  .pattern { background:radial-gradient(ellipse at 30% 40%,#F6F0E3,#EFE8DA 70%); }
  ```
- **Enso ring**
  ```css
  .pattern { background:radial-gradient(circle,transparent 0 52%,#14110F 53% 72%,transparent 73%),#EFE8DA; }
  ```

## Motion & interaction

- The ensō draws in over 2.2s with `stroke-dashoffset`, `cubic-bezier(.22,1,.36,1)`.
- Steeping redraws the ring from nothing as it fills; the ring is the progress, so no separate bar.
- The seal stamps in from 1.9× scale in 600ms.

## Watch-outs

- The brush edge is an SVG turbulence filter. Keep it on a single element or it gets expensive.
- Cinnabar once per view. A second red thing and the seal stops meaning anything.
- Do not set the Japanese in tracked caps; it is only tracked when vertical.

## Tokens

```css
--paper: #EFE8DA;  --ink: #14110F;  --cinnabar: #C8321E;  --ash: #5E574C;
--serif: 'Shippori Mincho', serif;  --sans: 'Zen Kaku Gothic New', sans-serif;
```
