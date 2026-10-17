---
name: Receiver
id: receiver
tone: dark
interactivity: high
status: built
good-for: [Editorial, Music & culture]
feel: [Warm, Playful, Retro]
---

# Receiver

> A walnut valve radio in a dark room. Content items are stations on the dial; between them the signal breaks into static, and the magic eye closes as you lock on.

## Borrowed from

1950s tabletop valve radios: arched walnut cabinets, woven speaker cloth with brass threads, backlit cream dial glass, a red needle, piano-key preset buttons, the green "magic eye" tuning tube, and the studio ON AIR sign.

## Mood & fit

Warm, intimate, after-hours. Suits storytellers, podcasts, writers, music, and personal brands that want warmth instead of tech gloss.

Good fit for: Storytellers, podcasts, warm personal brands.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Night | `#120C08` | room |
| Walnut | `#6A3E22` | cabinet |
| Brass | `#E6C27A` | lettering, rims |
| Dial cream | `#F3E4C0` | glass, text |
| Valve amber | `#FFB648` | glow, numerals |
| Needle red | `#E2321F` | needle, ON AIR |
| Magic eye | `#5CF29A` | tuning signal |

## Typography

- **Receiver** — Display · Fraunces italic 800, opsz 144
- **88 · 92 · 96 · 100 MHz** — Dial & labels · Barlow Condensed 600–700, tabular numerals
- **Programme notes in plain Barlow.** — Body · Barlow

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap');
```

## Patterns & textures

- **Grille cloth weave**
  ```css
  .pattern { background:repeating-linear-gradient(45deg,rgba(230,194,122,.2) 0 2px,transparent 2px 10px),repeating-linear-gradient(-45deg,rgba(230,194,122,.15) 0 2px,transparent 2px 10px),linear-gradient(#4C3320,#2E1E12); }
  ```
- **Walnut grain**
  ```css
  .pattern { background:repeating-linear-gradient(91deg,rgba(0,0,0,.12) 0 2px,transparent 2px 7px,rgba(255,220,180,.05) 7px 9px,transparent 9px 16px),repeating-linear-gradient(88deg,transparent 0 40px,rgba(0,0,0,.14) 40px 43px,transparent 43px 90px),linear-gradient(#7A4727,#3B2213); }
  ```
- **Knurled brass knob**
  ```css
  .pattern { background:repeating-conic-gradient(rgba(0,0,0,.35) 0 4deg,transparent 4deg 10deg) 50% 50%/70px 70px no-repeat,radial-gradient(circle at 40% 32%,#F2DFB4,#B98F4E 55%,#6E4E22) 50% 50%/70px 70px no-repeat,#2E1E12; }
  ```

## Motion & interaction

- Clarity = (1 − distance to nearest station / 1.1)²; drives text garble, static opacity, dial glow and the eye.
- Warm-up sweep on load: the needle runs the band and settles on station 1 (2.6s cubic-out).
- Static: tiny canvas of noise scaled up with `image-rendering: pixelated`.
- Optional audio: band-passed hiss crossfades into a tremolo chord.

## Watch-outs

- The dial must stay a real slider (role or native range) with a spoken value that includes the station name.
- Garbled text flickers. Stop the flicker under reduced motion.
- Brass on walnut is low contrast. Keep it for big display text only.

## Tokens

```css
--night: #120C08;  --wood: #6A3E22;  --brass: #E6C27A;  --cream: #F3E4C0;  --amber: #FFB648;  --red: #E2321F;  --eye: #5CF29A;
--serif: 'Fraunces', serif;  --cond: 'Barlow Condensed', sans-serif;  --sans: 'Barlow', sans-serif;
glow: 0 0 calc(10px + 40px * var(--c)) rgba(255,170,60, calc(.15 + .45 * var(--c)))   /* --c = clarity 0..1 */
```
