# stationery-and-food-lister
A polished, minimalist mobile app for managing food and stationery with smart recurring schedules, automatic item renewal, expiry tracking, reminders, personalized preferences, health-aware suggestions, purchase and completion history, search and filtering, and a clean mobile-first experience designed to make everyday list.

## AI and search architecture preparation
- Local deterministic search is prepared in `services/search`.
- Catalog lookup and recommendations are prepared through mock services and Supabase Edge Function entry points.
- AI is optional and must never control core deterministic list behavior (timers, recurrence, expiry, automatic additions, history, and notifications).
