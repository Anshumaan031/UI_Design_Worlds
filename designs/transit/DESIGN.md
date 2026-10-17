---
name: Transit Map
id: transit
tone: light
interactivity: medium
status: proposed
good-for: [Roadmap / timeline]
feel: [Precise, Playful]
---

# Transit Map

> Wayfinding signage and schematic line diagrams. Each career phase or product track is a coloured line, each milestone a station, and a train moves through it.

## Borrowed from

Schematic metro maps (Harry Beck's London Underground diagram, Vignelli's New York map) and transit wayfinding: 45°/90° lines, white station ticks, interchange rings, round line bullets, black signage bands.

## Mood & fit

Clear, systematic, friendly. Suits timelines, roadmaps, career paths, onboarding flows, multi-track programmes, and conference schedules.

Good fit for: Timelines, roadmaps, career paths, onboarding.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Map white | `#FFFFFF` | background |
| Sign black | `#1B1B1B` | signage, text |
| Line green | `#009B3A` | track 1 |
| Line orange | `#F08A00` | track 2 |
| Line purple | `#7D3F98` | track 3 |
| Line blue | `#0074C8` | track 4 |

## Typography

- **Platform 2 · Northbound** — Everything · Overpass 400–900 (Highway Gothic lineage)

```css
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400..900&display=swap');
```

## Patterns & textures

- **Interchange ring**
  ```css
  .pattern { background:linear-gradient(#009B3A,#009B3A) 0 50%/100% 10px no-repeat,linear-gradient(#F08A00,#F08A00) 50% 0/10px 100% no-repeat,radial-gradient(circle,#fff 0 8px,#1B1B1B 8px 11px,transparent 11px) 50% 50%/40px 40px no-repeat,#fff; }
  ```
- **Signage band + bullet**
  ```css
  .pattern { background:linear-gradient(#1B1B1B,#1B1B1B) 0 30%/100% 28px no-repeat,radial-gradient(circle,#009B3A 0 11px,transparent 12px) 18px calc(30% + 0px)/28px 28px no-repeat,#fff; }
  ```

## Motion & interaction

- Train: SVG `animateMotion` along the line path, slow and steady (7s).
- Stations: hover/focus enlarges the tick and announces the stop in a live region.
- Idea: scroll progress drives the train between stations (one section = one stop).

## Watch-outs

- Lines only at 0°, 45° and 90°. Free curves break the schematic.
- Line colours alone don't carry meaning: always pair with a letter bullet.
- Orange text on white fails contrast; orange is for lines, never words.

## Tokens

```css
--bg: #FFFFFF;  --ink: #1B1B1B;  --green: #009B3A;  --orange: #F08A00;  --purple: #7D3F98;  --blue: #0074C8;
--sans: 'Overpass', sans-serif;   line stroke: 10px round caps;  station: r 7, white fill, 3px ink stroke
```
