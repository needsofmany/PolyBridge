# Contributing to PolyBridge

Thanks for your interest in contributing.

PolyBridge is an independent project by Needs of the Many. This guide covers how to propose work, how branches move, and the privacy boundaries for public contributions.

## License for contributions

By submitting a pull request, patch, or other contribution to this repository, you agree that your contribution is provided under the same license as this project:

GNU General Public License, version 3 or, at your option, any later version (GPL-3.0-or-later).

## Where work happens

- **GitHub Issues** are for proposals and actionable work.
- **Pull requests** are for review of code, documentation, and website changes.

Do not put security reports or private relationship information in a public issue. Use the path in [SECURITY.md](SECURITY.md).

## Branch workflow

| Branch | Role |
|---|---|
| `master` | Production. Receives reviewed releases from `dev`. |
| `dev` | Integration. Receives focused feature branches. |
| Feature branch | Active work. Starts from `dev` and is submitted by pull request into `dev`. |

Keep a feature branch to one coherent change. Opening a pull request proposes the change. It does not guarantee acceptance.

A targeted production patch starts from `master` when the current public release needs a narrow correction that should not wait for other work on `dev`. A maintainer decides whether an issue qualifies. After that patch is released, `master` is merged back into `dev` so the fix stays in later work.

## Changes and review

- Keep unrelated edits out of the same pull request.
- Describe what changed, why, and what validation you ran.
- Update documentation when behavior or public instructions change.
- Preserve existing copyright and license notices, including notices on third-party material.

Maintainers decide scope and architecture. They may ask for revisions, ask that work be split, defer it, or decline it when it does not fit the project.

## Respect and privacy

Respect poly relationships, plural identities, consent, and privacy.

Use synthetic examples. Keep real relationship records, private identities, credentials, and personal communications out of issues, pull requests, commits, screenshots, fixtures, and documentation.
