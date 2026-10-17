---
name: Darkroom
id: darkroom
tone: dark
interactivity: medium
status: proposed
good-for: [Portfolio, Editorial]
feel: [Mysterious, Calm]
---

# Darkroom

> A contact sheet under the red safelight. Work sits in film frames with edge codes; picks get circled in grease pencil; switch the lights on to see the true print.

## Borrowed from

Analogue photography: contact sheets, 35mm sprocket holes and edge print (frame numbers, film stock), red safelights, grease-pencil selects, loupes and the enlarger.

## Mood & fit

Moody, focused, process-revealing. Suits photographers, filmmakers, art directors, and visual case studies where "choosing the frame" is the story.

Good fit for: Photographers, filmmakers, visual case studies.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Safelight dark | `#1A0504` | room |
| Safelight | `#E0402E` | glow |
| Label | `#FF9A82` | text under safelight |
| Film base | `#0B0B0B` | strips |
| Grease pencil | `#FFDD33` | selects, notes |
| Print paper | `#F2F0EA` | lights-on mode |

## Typography

- **Selects, roll 07** — Annotations · Permanent Marker (grease pencil), sparingly
- **07 ▸ 12A  KODAK-STYLE 400** — Edge print & data · IBM Plex Mono
- **Captions in a quiet serif.** — Captions · Instrument Serif italic

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Permanent+Marker&family=IBM+Plex+Mono:wght@400;600&display=swap');
```

## Patterns & textures

- **Sprocket holes**
  ```css
  .pattern { background:repeating-linear-gradient(90deg,#2a2a2a 0 8px,transparent 8px 16px) 0 8px/100% 8px no-repeat,repeating-linear-gradient(90deg,#2a2a2a 0 8px,transparent 8px 16px) 0 calc(100% - 8px)/100% 8px no-repeat,#0B0B0B; }
  ```
- **Safelight pool**
  ```css
  .pattern { background:radial-gradient(ellipse 60% 70% at 50% 0%,rgba(224,64,46,.6),transparent 70%),#1A0504; }
  ```

## Motion & interaction

- Grease circle: SVG ellipse with `stroke-dashoffset` 320 → 0, 700ms ease-in-out.
- Lights on/off: filter swap (`sepia + hue-rotate` vs `grayscale`) over 500ms.
- Idea: a loupe that follows the cursor and magnifies a frame (CSS `background-position` trick).

## Watch-outs

- Red-on-red is hard to read. Use the light salmon label colour, and give long reading a lights-on mode.
- Real photos carry this world. Without imagery it falls flat.
- Grease-pencil font only for short notes, never for paragraphs.

## Tokens

```css
--safe: #1A0504;  --red: #E0402E;  --label: #FF9A82;  --film: #0B0B0B;  --grease: #FFDD33;  --paper: #F2F0EA;
--marker: 'Permanent Marker', cursive;  --mono: 'IBM Plex Mono', monospace;  --serif: 'Instrument Serif', serif;
safelight filter: sepia(1) saturate(4) hue-rotate(-25deg) brightness(.75)
```
