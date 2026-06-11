import { describe, expect, it } from 'vitest';
import { runProjection } from '../financial';
import type { InputParams } from '../types';

interface SamplePlan {
  version: number;
  name: string;
  inputs: InputParams;
  conversionSchedule: Record<number, number> | null;
}

describe('sample import data', () => {
  const sampleModules = import.meta.glob<SamplePlan>('../../sample-data/*.json', {
    eager: true,
    import: 'default',
  });
  const samples = Object.entries(sampleModules).map(([file, sample]) => ({ file, sample }));

  it('includes importable sample plans', () => {
    expect(samples.length).toBeGreaterThanOrEqual(5);
  });

  it.each(samples)('$file parses and runs a projection', ({ sample }) => {
    expect(sample.version).toBe(2);
    expect(sample.name).toBeTruthy();
    expect(sample.inputs).toBeTruthy();

    const rows = runProjection(sample.inputs, sample.inputs.r, sample.conversionSchedule ?? undefined);

    expect(rows.length).toBeGreaterThan(1);
    expect(rows[0].age).toBe(sample.inputs.age);
    expect(rows[rows.length - 1].age).toBeGreaterThanOrEqual(sample.inputs.lifeExp);
  });
});
