# Study Posture Monitor

A web app that uses your webcam to detect poor posture and time away from
your desk in real time, helping you study with better posture and track
your focus.

All AI processing runs entirely in the browser. Your camera feed is never
sent anywhere.

> I built this because, as a student, I kept noticing my own bad posture
> while studying.

## Demo

<!-- Add a screenshot or GIF here once M3 is done -->
_Coming soon_

## Features

- Real-time posture detection from your webcam
- Slouch and lean-forward warnings
- Automatic away-from-desk detection
- Study time tracking
- Charts showing posture and study trends over time

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| AI       | MediaPipe Tasks Vision (in-browser) |
| Camera   | getUserMedia API                    |
| Frontend | React + TypeScript + Vite           |
| Charts   | Recharts                            |
| Backend  | Hono + Bun + TypeScript             |
| Database | MongoDB                             |
| Deploy   | Vercel (frontend) / Render (backend)|
| CI/CD    | GitHub Actions                      |

## Why In-Browser AI?

A real-time posture monitor processes every frame. Sending that to a server
would add latency, bandwidth cost, and server load. Running inference in the
browser keeps the video private, removes server costs, and stays fast — the
natural choice for this use case.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:5173 in your browser.
(getUserMedia only works on https or localhost.)

## Roadmap

- [x] Camera display
- [ ] Landmark detection
- [ ] Slouch detection (MVP)
- [ ] Away detection & study timer
- [ ] Save sessions (Hono + MongoDB)
- [ ] Charts (Recharts)
- [ ] Deploy + CI/CD

## License

MIT
