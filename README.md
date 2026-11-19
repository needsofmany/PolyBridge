# PolyBridge

PolyBridge is an independent project by Needs of the Many. It is building tools for people in poly relationships to describe their connections, picture relationship networks, and manage shared information on their own terms.

The design is guided by user-defined relationship descriptions, consent, identity, privacy, and ownership of data. Support for plural people and plural identities is part of the intended capabilities.

- Website: https://thepolybridge.org
- Contact: info@thepolybridge.org

## What exists today

The repository currently contains a public static website and a .NET 8 API foundation.

The website describes the project. The API project serves static files and is the starting point for later service work. Relationship-network tools, accounts, and shared data management are design goals. They are not implemented behavior.

Not implemented:

- the application
- integration between the website, API, and application
- a database
- hash verification of copied files
- complete publish synchronization

## Repository layout

| Path | Role |
|---|---|
| `api/PolyBridge/PolyBridge.sln` | Visual Studio solution |
| `api/PolyBridge/PolyBridge/PolyBridge.Api.csproj` | .NET 8 API project |
| `website/` | Authoritative public website source |
| `app/src/` | Planned application source |

`wwwroot` files under the API project are generated copies of the website. Edit `website/` instead.

## Local website preview

From the repository root:

```text
python -m http.server 8081 --bind 127.0.0.1 --directory website
```

Open http://localhost:8081.

This preview serves `website/` directly. It does not build the API.

## Local website copy

`PolyBridge.Api.csproj` defines `SyncWebsiteBeforeBuild`, which runs before a local build. It copies files from `website/` into the API project's `wwwroot`, keeping relative paths and skipping unchanged files. Files under `website/scripts/` are excluded. The copy does not delete stale destination files, does not copy `app/src`, and does not verify file hashes. There is no separate publish synchronization step.

Cloudflare Pages publishes `website/` directly from `master`.

## Third-party assets

Photographs and artwork in this repository keep the rights and licenses that apply to those works. The software license does not relicense those assets.

## Project documents

- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [License](LICENSE)

PolyBridge software is released under GPL-3.0-or-later, the GNU General Public License version 3 or, at your option, any later version.
