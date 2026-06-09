import { runProjection } from './financial';
import type { InputParams, ProjectionRow, ScenarioYear } from './types';

export interface MonteCarloResult {
  successRates: number[];
  percentiles: {
    p10: number[];
    p25: number[];
    p50: number[];
    p75: number[];
    p90: number[];
  };
  labels: number[];
  finalSuccessRate: number;
}

function triangularNoise(scale: number): number {
  return (Math.random() + Math.random() + Math.random() - 1.5) * scale;
}

export function buildScenarioPath(inputs: InputParams): ScenarioYear[] {
  const endAge = Math.max(
    inputs.lifeExp,
    (inputs.spouseLifeExp && inputs.spouseAge)
      ? inputs.age + (inputs.spouseLifeExp - inputs.spouseAge)
      : inputs.lifeExp,
  );
  const path: ScenarioYear[] = [];
  for (let age = inputs.age + 1; age <= endAge; age++) {
    const portfolioReturn = Math.max(-0.45, inputs.r + triangularNoise(0.16));
    const taxableReturn = Math.max(-0.45, inputs.taxableReturn + triangularNoise(0.14));
    const hsaReturn = Math.max(-0.45, inputs.hsaReturn + triangularNoise(0.14));
    const inflation = Math.max(0, inputs.inf + triangularNoise(0.025));
    const healthcareInflation = Math.max(0, inputs.healthcareInflationRate + triangularNoise(0.035));
    const expenseInflation = Math.max(0, inputs.expenseInflationRate + triangularNoise(0.025));
    path.push({
      age,
      portfolioReturn,
      taxableReturn,
      hsaReturn,
      inflation,
      expenseInflation,
      healthcareInflation,
      ssCOLA: inflation,
    });
  }
  return path;
}

const percentile = (arr: number[], p: number): number => {
  if (arr.length === 0) return 0;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.max(0, Math.min(s.length - 1, Math.ceil(p * s.length) - 1))];
};

export function runMonteCarlo(
  inputs: InputParams,
  conversionSchedule: Record<number, number> | null | undefined,
  runs = 1000,
): MonteCarloResult {
  const baseRows = runProjection(inputs, inputs.r, conversionSchedule ?? undefined).slice(1);
  const labels = baseRows.map(r => r.age);
  const balsByYear: number[][] = Array.from({ length: labels.length }, () => []);

  for (let sim = 0; sim < runs; sim++) {
    const scenarioPath = buildScenarioPath(inputs);
    const rows: ProjectionRow[] = runProjection(inputs, {
      returnRate: inputs.r,
      conversionSchedule: conversionSchedule ?? undefined,
      scenarioPath,
    }).slice(1);

    for (let i = 0; i < labels.length; i++) {
      balsByYear[i].push(rows[i]?.total ?? 0);
    }
  }

  const successRates = balsByYear.map(ys => Math.round((ys.filter(v => v > 0).length / runs) * 100));
  return {
    labels,
    successRates,
    percentiles: {
      p10: balsByYear.map(ys => percentile(ys, 0.10)),
      p25: balsByYear.map(ys => percentile(ys, 0.25)),
      p50: balsByYear.map(ys => percentile(ys, 0.50)),
      p75: balsByYear.map(ys => percentile(ys, 0.75)),
      p90: balsByYear.map(ys => percentile(ys, 0.90)),
    },
    finalSuccessRate: successRates[successRates.length - 1] ?? 0,
  };
}
