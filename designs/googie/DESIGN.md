---
name: Googie
id: googie
tone: light
interactivity: medium
status: proposed
good-for: [Local business, Launch / event]
feel: [Playful, Warm, Retro]
---

# Googie

> Atomic-age roadside modernism. Starbursts, boomerangs and orbiting atoms in mustard, teal and coral, and a motel sign with chasing bulbs that lights up at dusk.

## Borrowed from

1950s–60s Googie architecture and roadside Americana: coffee-shop roofs, motel signs with chaser bulbs and neon "Vacancy" tubes, starbursts, boomerang laminate patterns, Sputnik chandeliers and atomic orbit logos.

## Mood & fit

Optimistic, friendly, a little kitsch. Suits hospitality, local businesses, events, consumer apps and startups that want "the future is fun" instead of "the future is grey". The day/dusk switch makes a natural light/dark theme.

Good fit for: Hospitality, local business, optimistic startups, events.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Sky cream | `#FFF1D6` | day page |
| Dusk | `#13233A` | night page |
| Atomic teal | `#1FB5AC` | sign, secondary |
| Coral | `#FF5A3C` | headlines, actions |
| Mustard | `#FFB81C` | starburst |
| Neon pink | `#FF8FB1` | vacancy tube, boomerang |
| Ink | `#1E2A3A` | text, line art |

## Typography

- **Tomorrow,** — Display & signage · Shrikhand 400
- **Est. 2026 · Motor Inn** — Labels & body · Josefin Sans 400/700, caps tracked +0.24em

```css
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&family=Josefin+Sans:wght@400..700&display=swap');
```

## Patterns & textures

- **Chaser bulbs**
  ```css
  .pattern { background:radial-gradient(circle at 9px 50%,#FFF6C9 0 3.5px,transparent 4.5px) 0 0/36px 100%,radial-gradient(circle at 27px 50%,#157F79 0 3.5px,transparent 4.5px) 0 0/36px 100%,#1FB5AC; }
  ```
- **Boomerang laminate**
  ```css
  .pattern { background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60'%3E%3Cpath d='M4 30 Q 30 6 64 18 Q 36 14 8 36Z' fill='%23FF8FB1'/%3E%3Cpath d='M44 54 Q 60 38 78 46 Q 60 44 46 58Z' fill='%231FB5AC'/%3E%3C/svg%3E"),#FFF1D6; }
  ```
- **Sunburst rays**
  ```css
  .pattern { background:conic-gradient(from 0deg,#FFB81C 0 7.5deg,#FFF1D6 7.5deg 15deg) 50% 50%/100% 100%; }
  ```

## Motion & interaction

- Bulbs: two radial-gradient layers (lit/unlit) shifted half a period with `steps(2)`, so the light chases; faster at dusk.
- Starburst turns once a minute; the atom's electrons ride SVG `animateMotion` paths.
- Day → dusk: one class swaps the sky token and switches the neon on with layered `text-shadow`, over 600–800ms.

## Watch-outs

- Shrikhand is a sign face: headlines and logos only, never paragraphs.
- Coral on cream sits near 3:1. Use it for large display type only; body text stays ink.
- Kitsch overload is easy. Keep the decoration to the hero and let the rest breathe on cream.

## Tokens

```css
--sky: #FFF1D6;  --dusk: #13233A;  --teal: #1FB5AC;  --coral: #FF5A3C;  --mustard: #FFB81C;  --pink: #FF8FB1;  --ink: #1E2A3A;  --bulb: #FFF6C9;
--display: 'Shrikhand', serif;   --sans: 'Josefin Sans', sans-serif (caps +0.24em)
sign: border-radius: 46px 10px 46px 10px; rotate: -4deg; box-shadow: 12px 12px 0 var(--coral);
neon: text-shadow: 0 0 6px var(--pink), 0 0 20px #FF3E7F;
```
