# stationery-and-food-lister
A polished, minimalist mobile app for managing food and stationery with smart recurring schedules, automatic item renewal, expiry tracking, reminders, personalized preferences, health-aware suggestions, purchase and completion history, search and filtering, and a clean mobile-first experience designed to make everyday list.

## Open the website locally
- Option 1: Open `/home/runner/work/stationery-and-food-lister/stationery-and-food-lister/index.html` in your browser.
- Option 2: Start a local server from `/home/runner/work/stationery-and-food-lister/stationery-and-food-lister`:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`

## AI and search architecture preparation
- Local deterministic search is prepared in `services/search`.
- Catalog lookup and recommendations are prepared through mock services and Supabase Edge Function entry points.
- AI is optional and must never control core deterministic list behavior (timers, recurrence, expiry, automatic additions, history, and notifications).
