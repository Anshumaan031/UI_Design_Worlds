---
name: Ransom Zine
id: zine
tone: light
interactivity: high
status: proposed
good-for: [Music & culture, Studio / agency]
feel: [Loud, Playful]
---

# Ransom Zine

> A punk zine run off the office photocopier. Headlines are letters cut from a dozen magazines, body copy is typewritten, and everything is taped, stapled and scrawled on.

## Borrowed from

'77 punk and riot-grrrl zines, ransom-note collage, Xerox grain and toner speckle, masking tape, staples, highlighter, typewriter body copy and marker scrawl in the margins.

## Mood & fit

Defiant, handmade, funny. Suits zines and newsletters, indie labels, activist and community projects, and portfolios that want to look like they were made by a person in one sleepless night.

Good fit for: Zines, activists, indie labels, irreverent portfolios.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Copier paper | `#ECEAE3` | page + noise |
| Toner | `#121212` | text, blocks |
| Hot pink | `#FF3EA5` | marker, shadows |
| Highlighter | `#FFE600` | emphasis |
| Mag blue | `#2B59FF` | cut-out paper |
| Masking tape | `#E9D9A6` | at 85% opacity |

## Typography

- **RANSOM** — Headlines · one letter per font: Fraunces, Archivo, VT323, Instrument Serif, Big Shoulders Stencil, Unbounded…
- **Typed on a borrowed machine.** — Body · Special Elite (typewriter)
- **cut it out!** — Scrawl · Permanent Marker, short notes only

```css
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=VT323&family=Big+Shoulders+Stencil+Display:wght@700;900&family=Archivo:wdth,wght@62..125,400..900&family=Instrument+Serif:ital@0;1&family=Doto:wght@600;900&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Unbounded:wght@400..900&family=Permanent+Marker&family=Special+Elite&display=swap');
```

## Patterns & textures

- **Toner grain + copier vignette**
  ```css
  .pattern { background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E"),radial-gradient(ellipse,transparent 50%,rgba(0,0,0,.25)),#ECEAE3; }
  ```
- **Highlighter stroke**
  ```css
  .pattern { background:linear-gradient(transparent 52%,#FFE600 52% 92%,transparent 92%) 50% 50%/70% 28px no-repeat,#fff; }
  ```
- **Masking tape**
  ```css
  .pattern { background:linear-gradient(rgba(233,217,166,.9),rgba(233,217,166,.9)) 50% 50%/70% 30px no-repeat,#ECEAE3; }
  ```

## Motion & interaction

- Each cut letter: random font, paper, `rotate` ±9°, size 0.85–1.2em and an 8-point `clip-path` for scissor edges.
- Letters drop in with a 40ms stagger and an overshoot (`cubic-bezier(.2,1.4,.4,1)`).
- Buttons are stickers: hard pink offset shadow that collapses on press.

## Watch-outs

- The ransom headline is `role="img"` with the real text in `aria-label`; screen readers must not spell it letter by letter.
- Load-heavy: ten font families. Subset them or limit the pool to five in production.
- Chaos is for headlines only. Body copy stays one typeface, one column, high contrast.

## Tokens

```css
--paper: #ECEAE3;  --toner: #121212;  --pink: #FF3EA5;  --yellow: #FFE600;  --blue: #2B59FF;  --tape: rgba(233,217,166,.85);
--body: 'Special Elite', monospace;   --scrawl: 'Permanent Marker', cursive;
cut letter: padding .1em .16em; rotate: ±9deg; clip-path: polygon(8 jittered points); box-shadow: 1px 2px 0 rgba(0,0,0,.25)
sticker button: box-shadow: 4px 4px 0 var(--pink) → 0 0 0 on :active
```
