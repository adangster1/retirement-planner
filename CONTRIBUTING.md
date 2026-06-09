# Contributing

Thanks for helping improve Retirement Planner. Issues, bug reports, model corrections, documentation improvements, and pull requests are welcome.

## Before you open an issue

- Check whether the behavior is already documented in the README or wiki docs.
- Remember that this is a planning model, not financial, tax, or legal advice.
- If the issue is about a calculation, include enough numbers to reproduce it without sharing private financial details.

## Good bug reports

Useful reports include:

- What you expected to happen.
- What actually happened.
- The tab or workflow where it happened.
- Browser and operating system.
- Whether the issue happens with a new plan.
- A redacted JSON export if the bug depends on plan data.

## Pull requests

Before opening a PR:

```bash
npm install
npm test
npm run build
```

Keep changes focused. For calculation changes, add or update tests in `src/__tests__/`. For UI changes, include a screenshot or short screen recording when the visual behavior is hard to describe.

## Calculation changes

This app intentionally favors transparent, inspectable assumptions over pretending to be a full professional tax engine. If you change tax, RMD, Social Security, IRMAA, or optimizer logic, include:

- The rule or assumption being changed.
- The year or source of the rule.
- A focused test case.
- Any tradeoffs or approximation that remain.

## License

By contributing, you agree that your contribution will be licensed under the MIT License used by this repository.
