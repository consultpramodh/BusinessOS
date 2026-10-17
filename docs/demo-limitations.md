# Demo limitations

This is a static, dependency-free, browser-only design prototype. All jobs are synthetic and reset on reload. There is no authentication, database, scheduling engine, payment integration, or actual accounting. The workflow uses a simplified stage progression and estimated direct costs; it does not represent booked revenue or audited profitability. The overview metrics are calculated from the sample data, not real business records. Do not deploy as a real customer-data application.

## Manual verification checklist
- [ ] Open index.html at 375px and 1440px viewport widths
- [ ] Navigate via keyboard and verify visible focus
- [ ] Open a job, advance stage, and verify updated counts
- [ ] Create a sample job; verify it appears in the list
- [ ] Confirm dialogs close with Escape and Close
- [ ] Check text contrast and screen-reader announcements
- [ ] Check browser console for errors
