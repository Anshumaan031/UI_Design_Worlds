---
name: Rotary
id: rotary
tone: dark
interactivity: high
status: built
good-for: [Studio / agency, Launch / event]
feel: [Playful, Retro, Warm]
---

# Rotary

> The site is a pillar-box-red desk phone on cobalt wallpaper. The dial is the navigation: every extension reaches something, and 0 is the operator (contact).

## Borrowed from

Mid-century desk telephones: the clear finger wheel over a printed number card, the chrome finger stop, pulse dialling as the wheel returns, the directory card, plus 1960s pop-art colour and a patterned wallpaper behind.

## Mood & fit

Loud, witty, tactile. Suits playful personal sites, creative agencies, events and campaigns. Wrong for serious B2B or dense documentation.

Good fit for: Playful personal sites, agencies, events.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Cobalt wall | `#1A35D1` | page |
| Pillar-box red | `#E8261B` | phone, footer |
| Ivory | `#F4ECDD` | wheel, cards, text |
| Ink | `#14130F` | numerals |
| Lamp | `#FFD23F` | highlights, live line |
| Blue ink | `#CDD6FF` | secondary on cobalt |

## Typography

- **Dial 0.** — Display & numerals · Unbounded 700–900
- **Directory · extension 7** — Body · Hanken Grotesk 400–700

```css
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400..900&family=Hanken+Grotesk:wght@400..700&display=swap');
```

## Patterns & textures

- **Ring wallpaper**
  ```css
  .pattern { background:radial-gradient(circle,transparent 9px,rgba(244,236,221,.18) 10px 12px,transparent 13px) 0 0/52px 52px,radial-gradient(circle,rgba(244,236,221,.18) 2px,transparent 3px) 26px 26px/52px 52px,#1A35D1; }
  ```
- **Ruled directory card**
  ```css
  .pattern { background:repeating-linear-gradient(180deg,transparent 0 23px,rgba(232,38,27,.35) 23px 24px),#F4ECDD; }
  ```
- **Ticket notches**
  ```css
  .pattern { background:radial-gradient(circle 12px at 0 50%,#1A35D1 98%,transparent) left/51% 100% no-repeat,radial-gradient(circle 12px at 100% 50%,#1A35D1 98%,transparent) right/51% 100% no-repeat,#FFD23F; }
  ```

## Motion & interaction

- Hole k sits at 60 − 30k degrees; it needs 60 + 30k degrees of rotation to reach the stop at 120°.
- Return is linear (a governor), ~180ms + 950ms × rotation/330, emitting one pulse per digit (0 = 10).
- Phone shakes while ringing; handset lifts on connect; content lines rise in with a stagger.
- Typing a digit anywhere dials it.

## Watch-outs

- Provide a plain directory list too: never make the dial the only route.
- Red on cobalt vibrates. Separate them with ivory or a deep shadow.
- Sound (pulse clicks, ring) stays off until the visitor turns the ringer on.

## Tokens

```css
--wall: #1A35D1;  --red: #E8261B;  --ivory: #F4ECDD;  --ink: #14130F;  --lamp: #FFD23F;  --blue-ink: #CDD6FF;
--display: 'Unbounded', sans-serif;  --sans: 'Hanken Grotesk', sans-serif;
theta(k) = 60 - 30k;  need(k) = 60 + 30k;  stop = 120deg (clockwise from 12 o'clock)
```
