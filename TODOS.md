# TODOS -- ChinaUS

Deferred items from CEO review (2026-05-11).

## P2 -- Post-MVP Enhancements

### Multi-language support (CN/JP/KR)
- **What:** Add Chinese, Japanese, Korean translations for all UI text and tool flows.
- **Why:** 240-hour transit visa is used heavily by JP/KR travelers. Chinese UI helps local friends/family assist visitors.
- **Effort:** L (human ~1 week / CC ~2-3 hours)
- **Depends on:** MVP shipped and validated. Translation quality requires native speakers to review.

### Flight number auto-detection
- **What:** Enter a flight number, auto-detect origin/destination/airline and check eligibility.
- **Why:** Removes the manual step of looking up entry ports. Users know their flight number, not their airport code.
- **Effort:** M-L (needs external flight data API -- FlightAware, AviationStack, or similar)
- **Depends on:** MVP shipped. API costs and rate limits need evaluation.

### Upgrade reverse lookup to real flight routes
- **What:** Replace great-circle approximation with actual flight route data for "Can I Stop in China?"
- **Why:** Great-circle detour radius is approximate. Real routes show actual layover options.
- **Effort:** M (evaluate IATA Timatic API or FlightConnections data)
- **Depends on:** Reverse lookup feature shipped with great-circle approximation.

## P3 -- Platform Extensions

### WhatsApp/Telegram bot
- **What:** Bot that answers "Can I transit through China?" via chat.
- **Why:** Meets users where they already are. Shareable in travel group chats.
- **Effort:** M (different platform, needs bot hosting)
- **Depends on:** MVP shipped and validated.

### Browser extension
- **What:** Extension that detects flight booking pages and injects eligibility info.
- **Why:** Intercepts users at the moment of decision (booking a flight).
- **Effort:** M-L (browser extension development, Chrome + Firefox)
- **Depends on:** MVP shipped and validated.

### Community-driven data corrections
- **What:** Allow users to flag incorrect visa rules or port data.
- **Why:** Policy changes frequently. Community corrections keep data current.
- **Effort:** M-L (needs backend -- contradicts "no database" constraint for MVP)
- **Depends on:** Significant user base. Consider GitHub Issues as a lightweight alternative.

### Real-time policy change monitoring
- **What:** Monitor NIA announcements for visa policy changes. Auto-update JSON data.
- **Why:** China's visa policies change. Manual updates are error-prone and delayed.
- **Effort:** M (needs scraper/cron job + diff detection)
- **Depends on:** MVP shipped and stable data format.

## Open Questions (from design doc)

1. Domain name -- what domain will this live on?
2. Rule accuracy verification -- how to verify edge cases?
3. Update cadence -- who keeps the JSON data current?
