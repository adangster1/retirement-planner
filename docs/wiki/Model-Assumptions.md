# Model Assumptions

This page documents the major assumptions in Retirement Planner. It should be updated whenever calculation logic changes.

## General Projection

The app projects year by year from the current age through the modeled household horizon. The household horizon is normally the primary user's life expectancy. For married scenarios, spouse-only survivor years may extend the projection if the spouse's remaining life expectancy is longer.

The model is deterministic unless Monte Carlo is used. Deterministic results use the configured return and inflation assumptions.

For married plans, the primary user's age remains the row age shown in projection tables. Spouse age advances in parallel based on the entered spouse age. If a separate spouse retirement age is entered, the model converts that spouse age into the corresponding projection year.

## Inflation

Inflation affects future spending, tax bracket extrapolation, and some modeled values. A single long-term inflation assumption cannot represent every real-world category. Healthcare, housing, insurance, and taxes may inflate differently.

## Account Types

The model tracks:

- Traditional retirement accounts.
- Roth accounts.
- Taxable brokerage.
- HSA.

Traditional withdrawals and Roth conversions are generally taxable as ordinary income. Roth withdrawals are modeled as tax-free. Taxable accounts can generate ordinary yield, qualified dividends, and long-term capital gains depending on settings.

Advanced account entries can be assigned to you, your spouse, or jointly. Investment balances are still modeled as household assets for withdrawal purposes. Guaranteed income sources use ownership directly: start and end ages are interpreted as the owner's age, owner-specific income stops when that owner dies, and survivor pension/annuity benefits continue only when a survivor benefit is configured.

Basic account inputs are household-level totals by account type. They do not distinguish which spouse owns the balance or contribution. Advanced account inputs should be used when account ownership, owner-specific contributions, per-account returns, or guaranteed income timing matter.

Advanced investment-account contributions stop based on account owner: your accounts stop at your retirement age, spouse-owned accounts stop at spouse retirement age, and joint accounts stop at the household retirement year. If no spouse retirement age is set, existing-plan behavior is preserved and the primary retirement year is used as the household cutoff.

## Withdrawal Order

The projection draws from accounts according to the app's internal withdrawal logic. Review `src/financial.ts` for exact implementation. Important outputs to inspect are taxable depletion, traditional withdrawals, Roth withdrawals, and HSA withdrawals.

## Roth Conversions

Roth conversions are modeled as taxable income in the year of conversion. Conversion tax is modeled as paid from the taxable account. If the taxable account cannot cover taxes and spending, the app can show additional traditional withdrawals, which may increase taxable income.

The optimizer searches strategies; it does not prove a globally perfect plan for every possible real-world tax rule or future law change.

## Required Minimum Distributions

RMDs follow the app's implementation of SECURE 2.0 style age rules and use prior year-end balances. Qualified charitable distributions are supported. A joint-life RMD estimate can be enabled, but it is an approximation and not a full replacement for IRS tables.

## Social Security

The app estimates Social Security based on entered claiming-age estimates and claiming age. It also models taxable Social Security using provisional income concepts.

Social Security law and benefit estimates can change. Use SSA.gov estimates where possible.

## Wages and Retirement Ages

The model supports separate primary and spouse wages for married plans. Primary wages continue until the primary retirement age. Spouse wages continue until spouse retirement age when provided. When spouse retirement age is not provided, spouse wages follow the primary retirement year for backward compatibility with older saved plans.

Basic account contributions use active household wages for contribution-cap and employer-match calculations. Advanced account contributions use the wage stream associated with the account owner.

The spending-smile retirement phase and household retirement summaries use the later modeled household retirement year when spouse retirement age is provided.

## Basic vs Advanced Expenses

Basic expense inputs are household-level monthly spending categories. They do not assign costs to a spouse or model different start/end ages beyond the built-in spending-smile and long-term-care assumptions.

Advanced expense items should be used when spending has specific timing, such as recurring bills, loans, one-time events, custom start or end ages, or different inflation treatment by category.

## Federal Taxes

Federal tax brackets use 2026 values and are extrapolated forward by the model's inflation assumption. The model includes standard deduction behavior, 65+ additional standard deduction, Social Security taxation, preferential income tax treatment where modeled, and IRMAA estimates.

This is not a full tax filing engine. It does not replace tax software or professional tax advice.

## State Taxes

The app supports state tax settings, including flat and bracketed approaches depending on user input. State tax treatment varies widely and can include exclusions, credits, deductions, local taxes, retirement income rules, and filing-status rules not represented in full.

## IRMAA

IRMAA surcharges are estimated based on income from two years prior. Real IRMAA determinations depend on Medicare rules, MAGI, appeal rights, and life-changing events.

## Investment Returns

Deterministic projections use configured return assumptions. Monte Carlo varies returns based on selected method and options.

Returns are not forecasts. Sequence risk can matter more than average return, especially near retirement.

## Monte Carlo

Monte Carlo reruns the full projection under varied returns and reports success rate. It is a stress-testing tool, not a guarantee. The output depends on method, run count, seed, allocation assumptions, and return history or distribution parameters.

## Known Limitations

- Future law changes are not modeled.
- Tax calculations are approximations.
- Healthcare and long-term care costs are simplified unless manually itemized.
- Estate, inheritance, and beneficiary tax treatment are not modeled in detail.
- Roth five-year rules and early withdrawal edge cases may not cover every personal situation.
- State-specific tax complexity is simplified.
- Investment fees, asset location, and rebalancing details are simplified.

## Best Use

Use the app to compare scenarios and understand sensitivity. Use professionals and official sources before acting on tax, investment, or retirement claiming decisions.
