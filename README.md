# Matsuri Guide

An MVP for discovering festivals in Japan, designed for international residents, students, and travelers who want to participate rather than only watch.

## Participation

Participation means a visitor can do something: try food stalls or games, dance Bon Odori, carry a mikoshi, join a workshop, play taiko, help prepare, or meet local people.

## Features and routes

- `/` searchable, paginated upcoming festival directory, categories, and browser-only Near Me sorting
- `/category/[slug]`, `/event/[id]/[slug]`, `/past`
- `/upload` validated local festival submission
- `/newsletter` local subscription and unsubscribe
- `/partner`, `/about`, `/privacy`, and a festival not-found state

## Stack and run

Next.js 16, React 19, TypeScript, Tailwind CSS, ESLint, Vitest, and React Testing Library.

```bash
npm install
npm run dev
```

Run checks with `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.

## Data and limitations

The 24 geographically varied seed records are explicitly prototype data; they are not a source of current event facts. Festival submissions and newsletter emails use browser `localStorage`, so they are not shared across browsers or devices. Location is never stored.

## Future ideas

Search by activity, advanced location search, a real database, organizer accounts, multilingual support, and map search.
