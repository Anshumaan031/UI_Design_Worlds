---
name: Sequencer
id: sequencer
tone: light
interactivity: high
status: built
good-for: [Portfolio, Dev & AI tools, Music & culture]
feel: [Playful, Technical]
---

# Sequencer

> The portfolio is a hardware groovebox on a desk. Pads are projects, a playhead walks them, and the tempo knob is a real control.

## Borrowed from

Compact synths and drum machines (Teenage Engineering OP-1/OP-Z, Roland TR series, Elektron boxes): anodised aluminium, black silkscreen labels, one signal orange, dot-matrix LCDs, rubber pads, endless encoders.

## Mood & fit

Playful but precise, "toy for professionals". Suits product builders, creative-tech, music, anyone whose work is about systems with rhythm.

Good fit for: Builders, music/creative tech, product portfolios.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Desk | `#CFCAC0` | page |
| Aluminium | `#ECEAE4` | device |
| Silkscreen | `#171716` | text, pads |
| Signal orange | `#FF5B14` | the one accent |
| LCD | `#12120F` | screen |
| LCD ink | `#FF7A33` | screen text |

## Typography

- **BPM 096** — LCD · Doto 600/900 (dot-matrix), screen only
- **AP-1 Sequencer** — Body & labels · Geist 400–700, labels 11px tracked caps
- **CH 1 · 120 BPM** — Data · Geist Mono

```css
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@600;900&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;600&display=swap');
```

## Patterns & textures

- **Speaker grille**
  ```css
  .pattern { background:radial-gradient(circle,#2b2a27 2.2px,transparent 2.8px) 0 0/11px 11px, #ECEAE4; }
  ```
- **LCD pixel grid**
  ```css
  .pattern { background:linear-gradient(90deg,rgba(255,122,51,.12) 1px,transparent 1px) 0 0/4px 4px, linear-gradient(rgba(255,122,51,.12) 1px,transparent 1px) 0 0/4px 4px, #12120F; }
  ```
- **Screw head**
  ```css
  .pattern { background:radial-gradient(circle at 40% 35%,#f7f6f2,#a9a59b 70%) 50% 50%/40px 40px no-repeat, #DEDBD3; }
  ```

## Motion & interaction

- Knob = `role="slider"`: pointer drag, wheel, arrow keys; arc fill via `pathLength=100` dasharray.
- Playhead interval = 60 / bpm / 4 seconds per 16th note; pad changes every beat.
- Optional WebAudio (kick, pad note, hat), volume starts at mute.
- Mixer faders rise when scrolled into view.

## Watch-outs

- Never autoplay sound. Volume starts at mute; audio context only on a user gesture.
- Auto-play visuals must stop under reduced motion.
- Every knob needs a keyboard path and a readable value (`aria-valuetext`).

## Tokens

```css
--desk: #CFCAC0;  --alu: #ECEAE4;  --ink: #171716;  --orange: #FF5B14;  --lcd: #12120F;  --lcd-ink: #FF7A33;
--sans: 'Geist', sans-serif;  --mono: 'Geist Mono', monospace;  --dot: 'Doto', monospace;
device: radius 26px; shadow inset 0 1px 0 #fff, 0 2px 0 #b9b4a9, 0 40px 60px -30px rgba(40,34,20,.55)
```
