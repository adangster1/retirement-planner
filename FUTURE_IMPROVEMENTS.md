# Retirement Planner Remaining Gaps

Most high-priority correctness items from the June 2026 assessment have been implemented. This file now tracks only unresolved limitations and worthwhile follow-up work.

## Remaining Accuracy Gaps

1. **Joint-life RMDs are approximate**
   - The spouse-more-than-10-years-younger option uses an estimated divisor adjustment.
   - Replace this with the full IRS Joint Life and Last Survivor two-dimensional table.

2. **ACA premium credits are manual**
   - Current modeling uses explicit monthly premium and credit inputs.
   - Add automatic premium tax credit calculation from household size, MAGI, FPL, benchmark premium, and applicable percentage rules.

3. **Roth five-year clocks are not tracked**
   - The model tracks aggregate Roth basis and early earnings penalties.
   - Add separate five-year clocks for conversions and Roth IRA qualification rules.

4. **Monte Carlo uses one global allocation**
   - Historical bootstrap and parametric Monte Carlo use a single stock/bond/cash allocation across all account types.
   - Add account-specific allocations, glide paths, and rebalancing rules.

5. **Taxable account asset-location effects are simplified**
   - Taxable accounts support ordinary yield, qualified dividends, and realized LTCG yield, but Monte Carlo applies the same blended return path to taxable, traditional, Roth, and HSA accounts.
   - Model stock/bond/cash tax characteristics separately in taxable accounts.

6. **Long-term care and major spending events are generic**
   - Monte Carlo supports generic spending shocks.
   - Add explicit event distributions for long-term care, home repairs, assisted living, medical shocks, and other major late-life expenses.

  7. **Tax assumptions need clearer versioning and controls**
     - Current federal tax, LTCG, Medicare, and IRMAA constants are updated to 2026 and inflated forward, which is a reasonable
     default planning assumption.
     - Add a visible tax-law base year, source notes, and optional user overrides for bracket/deduction/IRMAA inflation
     assumptions.

8. **State tax modeling is generic**
   - Progressive state brackets can be entered manually as JSON.
   - Add state-specific defaults, deductions, Social Security treatment, retirement-income exclusions, and capital-gain handling.

9. **Inherited IRA rules are not modeled**
   - Current RMD logic models owner/spouse lifetime planning.
   - Add inherited IRA beneficiary rules, 10-year drawdown behavior, and heir tax treatment.

10. **Optimizer objective is still simplified**
    - The optimizer ranks by lifetime taxes, terminal portfolio, and peak marginal rate.
    - Add after-tax lifetime value/utility metrics that account for heirs, bequests, spending confidence, and tax-adjusted account values.
