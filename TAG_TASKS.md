# PolyBridge Tag Task History

This file records the major work represented by each repository tag.
Tags are listed in reverse chronological order.

## 0.1 — Public website and API foundation

### Major tasks completed

- Established the public PolyBridge repository under Needs of the Many.
- Created the Visual Studio solution and .NET 8 API foundation.
- Named the backend project PolyBridge.Api.
- Removed the WeatherForecast template sample.
- Added Website and App solution folders referencing source files.
- Enabled default-document and static-file serving in the API.
- Added automatic website copying into wwwroot during local builds.
- Added ignore rules for generated frontend copies, build output,
  and Visual Studio local settings.
- Created Home, About, and Contact pages.
- Added the PolyBridge logo and photographic background.
- Added a colorful example relationship-network illustration.
- Added navigation with outline icons and an About dropdown.
- Added project attribution to Needs of the Many.
- Added repository documentation and licensing: README, LICENSE
  (GPL-3.0-or-later), CONTRIBUTING, SECURITY, and AGENTS.

### Deployment and operational setup

- Configured Cloudflare Pages to publish website from master.
- Restored GitHub integration access and confirmed automatic deployment.
- Activated thepolybridge.org and www.thepolybridge.org with SSL.
- Confirmed the website works in an incognito browser session.
- Configured info@thepolybridge.org forwarding and tested delivery.

### Major commits included

- 207b9f9 — Add PolyBridge website and API foundation.
- 49b6f86 — Tighten closing goals paragraph.

### Notes

Version 0.1 establishes the public website and API foundation.
Application features, database implementation, and integration with
PluralBridge remain future work.

---

## Follow-up work

- Complete frontend synchronization and verification for build and publish.
- Validate local API builds and static-file serving.
