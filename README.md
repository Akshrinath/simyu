# Simyu Cleantech Innovations

Static website for Simyu Cleantech Innovations — a renewable energy company developing the SERENE technology platform.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page website with all sections |
| `css/style.css` | All styling (no external framework needed beyond Bootstrap) |
| `js/app.js` | Team rendering, navbar effects, scroll reveal, contact scroll fix |

## Features

- **Responsive design** with Bootstrap 5
- **Scroll animations** using IntersectionObserver
- **Sticky navbar** with transparent-to-solid effect
- **Interactive Google Maps** embedded for UK, USA, and India offices
- **Real team data** fetched from live simyu.tech site (12 members)
- **Contact scroll fix** — "Contact Us" dropdown properly scrolls to show the header
- **Mailto form** for sending messages

## How to Run

Simply open `index.html` in any modern browser. No server required.

```bash
# Optional: serve locally
npx serve .
