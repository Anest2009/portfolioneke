# Anest Petollari — Portfolio

Anest’s portfolio in the requested samworks.vercel.app-inspired layout: Home, Projects, Experience, and Contact. The More menu is excluded.

## Run and verify

```sh
npm install
npm run dev
npm run check
npm run build
```

## Content

- `src/data/portfolio.ts`: work experience, recent products, skills, and certifications from the original portfolio.
- `src/data/reference.ts`: project card presentation and technology links for Anest.
- Projects include MEGAFONI, SANAMY, Energy Demand Forecasting, Kohela, ArtCoffe, and Nano Chat, plus the original design explorations.
- Education is preserved from the original portfolio.
- Contact links point to Anest’s GitHub, LinkedIn, email, and Google Calendar booking page.
- GitHub activity is a snapshot for Anest2009, fetched November 9, 2026 from https://github-contributions-api.jogruber.de/v4/Anest2009?y=last. The chart displays its date; it does not refresh automatically.
- The contact form opens a draft to anestpetollari44@gmail.com in the visitor’s mail app. Direct server-side email delivery is not configured.
- No view count or third-party testimonials are presented as Anest’s.

The rendering check covers routes, personal identity, projects, experience, certifications, navigation, form requirements, images, fonts, and activity. Interactive browser verification remains blocked by a saved localhost permission setting. Vercel deploys the `main` branch to https://anestpetollari.vercel.app.
