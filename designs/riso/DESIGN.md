---
name: Overprint
id: riso
tone: light
interactivity: medium
status: built
good-for: [Studio / agency, Music & culture, Editorial]
feel: [Playful, Loud, Warm]
---

# Overprint

> A two-drum risograph zine: medium blue and fluorescent pink on newsprint. Inks multiply where they overlap, and the drums drift out of register.

## Borrowed from

Risograph printing as used in zines and gig posters: spot-colour drums printed one at a time, halftone screens, paper tooth, colours that multiply where they overlap, and imperfect registration.

## Mood & fit

Warm, crafted, indie, a little punk. Suits designers, studios, cultural events, editorial and newsletters.

Good fit for: Designers, studios, culture, editorial.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Newsprint | `#F2EDE3` | paper |
| Medium Blue | `#0078BF` | drum 1 |
| Fluo Pink | `#FF48B0` | drum 2 |
| Federal Blue | `#2E4A7D` | body text (7:1) |
| Yellow | `#FFE800` | stickers only |

## Typography

- **Back issues** — Display · Bricolage Grotesque, opsz 96, wdth 75, 800
- **a zine about shipping things** — Voice · Instrument Serif, italic for asides

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Instrument+Serif:ital@0;1&display=swap');
```

## Patterns & textures

- **Halftone dot screen**
  ```css
  .pattern { background:radial-gradient(circle,#FF48B0 40%,transparent 44%) 0 0/7px 7px, #F2EDE3; }
  ```
- **Multiply overlap**
  ```css
  .pattern { background:linear-gradient(#0078BF,#0078BF) 20% 30%/55% 50% no-repeat, linear-gradient(#FF48B0,#FF48B0) 70% 70%/55% 50% no-repeat, #F2EDE3;background-blend-mode:multiply; }
  ```
- **Paper grain (SVG noise)**
  ```css
  .pattern { background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/><feColorMatrix values='0 0 0 0 0.45  0 0 0 0 0.42  0 0 0 0 0.38  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");background-color:#F2EDE3;background-blend-mode:multiply; }
  ```

## Motion & interaction

- Title prints in two passes (clip-path), pink lands slightly later.
- Pointer position offsets the pink layer: `translate(calc(6px + var(--mx) * 22px), …)`.
- Canvas halftone of photos at 15° (blue) and 75° (pink) screen angles.

## Watch-outs

- Pink and medium blue are both too light for body text. Body goes in Federal Blue.
- Grain overlay must be `pointer-events: none` and low opacity.
- Two inks maximum per spread. A third ink becomes clip art.

## Tokens

```css
--paper: #F2EDE3;  --blue: #0078BF;  --pink: #FF48B0;  --navy: #2E4A7D;  --yellow: #FFE800;
--display: 'Bricolage Grotesque', sans-serif;  --serif: 'Instrument Serif', serif;
.ink { mix-blend-mode: multiply }  .screen { mask: radial-gradient(circle, #000 58%, transparent 62%) 0 0 / 5px 5px }
```
