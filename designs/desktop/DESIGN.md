---
name: Desktop 98
id: desktop
tone: light
interactivity: high
status: proposed
good-for: [Portfolio, Launch / event]
feel: [Playful, Retro]
---

# Desktop 98

> The site is a beige-box operating system. Sections are windows you drag, focus and close; projects live in folders; a taskbar and Start menu are the navigation.

## Borrowed from

Late-90s desktop operating systems: the teal desktop, 3D-bevelled grey chrome, navy gradient title bars, pixel UI type, setup wizards with block progress bars, a Start menu with a vertical brand band, and the taskbar clock.

## Mood & fit

Nostalgic, tactile, explorable. Suits developer portfolios, retro-tech products, games, and interactive CVs where poking around is the experience. Works best when every window holds real content, not gimmicks.

Good fit for: Dev portfolios, nostalgic products, games, interactive CVs.

## Palette

| Name | Value | Role |
| --- | --- | --- |
| Desktop teal | `#008080` | wallpaper |
| Button face | `#C0C0C0` | chrome |
| Highlight | `#FFFFFF` | top-left bevel |
| Shadow | `#808080` | inner bevel |
| Dark shadow | `#0A0A0A` | outer bevel |
| Active title | `linear-gradient(90deg,#000080,#1084D0)` | focused window |

## Typography

- **Hello, world.** — Headings · Pixelify Sans 700
- **C:\Projects · 4 object(s)** — UI · Pixelify Sans 400 at 14–16px; no other family

```css
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
```

## Patterns & textures

- **Raised bevel**
  ```css
  .pattern { background:#C0C0C0;border:3px solid;border-color:#fff #0A0A0A #0A0A0A #fff;box-shadow:inset -2px -2px #808080,inset 2px 2px #DFDFDF; }
  ```
- **Sunken well**
  ```css
  .pattern { background:#fff;border:3px solid;border-color:#808080 #fff #fff #808080;box-shadow:inset 2px 2px #0A0A0A; }
  ```
- **Block progress**
  ```css
  .pattern { background:repeating-linear-gradient(90deg,#000080 0 14px,transparent 14px 17px) 8px 50%/70% 22px no-repeat,#C0C0C0; }
  ```

## Motion & interaction

- No easing anywhere: windows snap, menus pop, progress jumps a block at a time.
- Drag via pointer capture on the title bar, clamped to the desktop; focus raises `z-index` and greys every other title bar.
- Pressed state = inverted bevel (swap the light and dark border colours).

## Watch-outs

- Desktop metaphors collapse on phones. Stack windows as full-width cards below ~700px.
- Every window must be reachable without dragging or double-clicking (Start menu, taskbar, keyboard).
- Pastiche, not a clone: don't copy a real OS's logo, sounds or names.

## Tokens

```css
--desk: #008080;  --face: #C0C0C0;  --hi: #FFFFFF;  --lo: #808080;  --dark: #0A0A0A;  --navy: #000080;  --title2: #1084D0;
--ui: 'Pixelify Sans', sans-serif;
raised: border: 2px solid; border-color: var(--hi) var(--dark) var(--dark) var(--hi); box-shadow: inset -1px -1px var(--lo), inset 1px 1px #DFDFDF;
sunken: border-color: var(--lo) var(--hi) var(--hi) var(--lo); box-shadow: inset 1px 1px var(--dark);
```
