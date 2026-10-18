# Video repository extraction — 2026-10-18

User video: https://www.youtube.com/watch?v=HhZdNYI4pJs
Title: I Tried 100+ Github Repos for Claude. These 6 Are the Best.

## Extraction evidence
Web page fetch initially throttled. A direct public watch-page fetch succeeded; parsed ytInitialPlayerResponse.videoDetails.shortDescription. The description contains the following 12 GitHub links under its repository list, despite the title saying six. Each repository was independently retrieved through GitHub metadata. No full video viewing/transcript analysis claimed. Relevant README content for Addy, Humanizer, Scrollcraft and Playwright was read separately; no listed tool installed from the video.

Description timestamps relevant for later review: 3:09 websites/copy; 4:57 planning; 6:20 mobile/backend/payment; 7:34 browser/security; 8:32 SEO. These are description markers, not independently watched excerpts.

| Description label | Exact GitHub link | BusinessOS disposition (our assessment, not video claim) |
|---|---|---|
| Hyperframes | https://github.com/heygen-com/hyperframes | Product walkthrough/demo video later; not operating-domain dependency |
| Google Workspace CLI | https://github.com/googleworkspace/cli | Possible future integration adapter; existing connectors first where sufficient |
| Apify MCP Server | https://github.com/apify/apify-mcp-server | Possible external acquisition research; no need in current qualification/domain work |
| Scrollcraft | https://github.com/nateherkai/scroll-craft | Design-process reference; immersive scrolling not appropriate by default inside daily operational workspace |
| Humanizer | https://github.com/blader/humanizer | Potential editorial reference for operator copy; preserve business meaning/evidence |
| Addy Osmani’s Agent Skills | https://github.com/addyosmani/agent-skills | Spec→plan→build→verify/review discipline relevant; keep existing repository governance authoritative |
| Expo Skills | https://github.com/expo/skills | Only if separately justified native mobile app; responsive web first |
| Supabase Agent Skills | https://github.com/supabase/agent-skills | Conditional production database guidance; does not authorize backend now |
| Stripe Best Practices | https://github.com/stripe/ai/tree/main/skills/stripe-best-practices | Conditional payment integration guidance; no live money movement or provider selection now |
| Playwright CLI | https://github.com/microsoft/playwright-cli | Browser-testing candidate in supported environment; cannot bypass environment/controller restrictions |
| Claude Security | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security | Security-workflow reference; availability/runtime suitability not established by GitHub link alone |
| OpenSEO | https://github.com/every-app/open-seo | Potential later acquisition/reporting source; not required for relationship foundation |

## Separate related reference
https://github.com/mattpocock/skills appears in secondary video summaries as a bonus and repository identity is verified, but it is NOT in the fetched YouTube description's 12-link list. Do not present it as a description extraction. Similarly, token-saver bonus names from secondary summaries are not reconstructed into guessed GitHub URLs.

## Decision
Do not install a bundle of unrelated repositories or copy their agent instructions wholesale. Evaluate the one solving a measured bottleneck, read its own license/setup/security constraints and retain source attribution. OpenUI is the separate user-requested reference already exercised by a bounded parser/contract spike; it did not come from this video's description.
