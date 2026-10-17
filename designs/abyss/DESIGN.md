---
name: Abyss
id: abyss
tone: dark
interactivity: high
status: proposed
good-for: [Editorial, Launch / event]
feel: [Mysterious, Calm]
---

# Abyss

> The page sits at the bottom of a deep-sea trench. It is almost pitch black; your cursor is the submersible's lamp, and only bioluminescent creatures glow on their own.

## Borrowed from

Deep-sea exploration: submersible lamps cutting through black water, marine snow, bioluminescent jellyfish and anglerfish lures, depth gauges, specimen numbering from expedition logs, and the hush of the hadal zone.

## Mood & fit

Mysterious, quiet, rewarding curiosity. Suits research write-ups, long-form deep dives, data stories that reveal one thing at a time, and teaser launch pages. The reveal is the content strategy.

Good fit for: Research, deep-dive essays, data storytelling, mysterious launches.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Abyss | `#02060D` | darkness |
| Trench | `#071726` | lit water |
| Bone | `#DDE8EE` | text |
| Bio cyan | `#3BF7FF` | instruments, emphasis |
| Jelly violet | `#A78BFF` | creatures |
| Lure | `#FFE45C` | one point of light |

## Typography

- **What lives below** — Display · Fraunces 300, italic for the one word that matters
- **No. 03 · −4,736 m** — Instruments & log · IBM Plex Mono

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;600&display=swap');
```

## Patterns & textures

- **Lamp mask**
  ```css
  .pattern { background:radial-gradient(circle 40px at 40% 45%,rgba(2,6,13,0),rgba(2,6,13,.55) 48%,rgba(2,6,13,.97)),linear-gradient(135deg,#0B2A44,#071726); }
  ```
- **Marine snow**
  ```css
  .pattern { background:radial-gradient(circle,rgba(221,232,238,.6) 0 1px,transparent 1.6px) 0 0/22px 26px,radial-gradient(circle,rgba(59,247,255,.45) 0 1px,transparent 1.6px) 9px 11px/31px 37px,#02060D; }
  ```
- **Lure glow**
  ```css
  .pattern { background:radial-gradient(circle at 50% 50%,#FFE45C 0 5px,rgba(255,228,92,.35) 9px,transparent 26px),#02060D; }
  ```

## Motion & interaction

- One overlay: `radial-gradient(circle 170px at var(--x) var(--y), transparent, …97% black)` driven by the pointer.
- Creatures sit above the overlay so they glow in the dark; they bob (5.5s) and sway (3.2s) out of phase.
- Marine snow drifts down forever on two offset layers; depth reads off the lamp's y position.

## Watch-outs

- Hidden text is inaccessible text. Always ship a "Surface" control and never hide navigation in the dark.
- Touch has no hover: on phones, default the lamp to the content or start surfaced.
- Keep it to one lamp-lit hero. A whole site in the dark is tiring.

## Tokens

```css
--abyss: #02060D;  --trench: #071726;  --bone: #DDE8EE;  --cyan: #3BF7FF;  --violet: #A78BFF;  --lure: #FFE45C;
--display: 'Fraunces', serif (300, -0.035em);  --mono: 'IBM Plex Mono', monospace
lamp: radial-gradient(circle 170px at var(--x) var(--y), rgba(2,6,13,0) 0, rgba(2,6,13,.55) 48%, rgba(2,6,13,.97) 100%)
glow: filter: drop-shadow(0 0 10px var(--violet));
```
