---
name: Maison Velle
id: maison
tone: light
interactivity: medium
status: built
good-for: [Editorial, Launch / event, Commerce / pricing]
feel: [Severe, Warm, Precise]
---

# Maison Velle

> A couture house's seasonal invitation: ivory stock, a fat-and-hairline Didone at poster scale, and one tall arch of draped oxblood satin that stands in for the garment.

## Borrowed from

Printed fashion-week invitations and magazine mastheads: Didone contrast, letter-spaced caps, hairline rules, the arched window of a salon doorway, bolts of satin lit from one side.

## Mood & fit

Expensive, hushed and certain. Everything is spaced out except the headline, which is the only loud thing in the room. Suits brands with real product photography to lean on. Avoid for anything that needs density, such as dashboards, shops with filters or long forms.

Good fit for: Fashion houses, jewellers, galleries, hospitality and any brand that sells restraint at a high price.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Ivory stock | `#F3EEE4` | background |
| Ink | `#0F0D0C` | text, rules, primary button |
| Oxblood | `#6E1423` | the one accent: italic words, hover, fabric |
| Taupe | `#6F6559` | labels, captions |

## Typography

- **The Cape** — Display · Bodoni Moda 400, italic 600 for the accent word
- **APPOINTMENT ONLY** — Labels · Jost 500, tracked .26–.28em caps
- **Wool crêpe, lined in silk.** — Body · Jost 300

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Jost:wght@300;400;500&display=swap');
```

## Patterns & textures

- **Satin drape · 94°**
  ```css
  .pattern { background:repeating-linear-gradient(94deg,#4A0B17 0 14px,#8E1B30 30px,#B8344B 38px,#8E1B30 46px,#4A0B17 64px); }
  ```
- **Hairline rule · 1px ink**
  ```css
  .pattern { background:linear-gradient(#0F0D0C,#0F0D0C) top/100% 1px no-repeat,#F3EEE4; }
  ```

## Motion & interaction

- The look name wipes in with `clip-path: inset()` over 900ms, `cubic-bezier(.16,1,.3,1)`.
- A skewed highlight crosses the cloth every 7s; it is the only ambient motion.
- Buttons fill upward with oxblood; the text link's underline retracts.

## Watch-outs

- Do not add a second accent. Oxblood must stay rare or the page turns into a wine label.
- Hairlines vanish on low-quality screens; keep rules at full ink or the 22% hair tone, nothing lighter.
- The Didone's thin strokes need size. Below about 28px use Jost.

## Tokens

```css
--ivory: #F3EEE4;  --ink: #0F0D0C;  --blood: #6E1423;  --taupe: #6F6559;
--serif: 'Bodoni Moda', serif;  --sans: 'Jost', sans-serif;
```
