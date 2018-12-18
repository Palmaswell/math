// (number[], number[]) => number[]
export const add = (v1: number[], v2: number[]): number[] => (
  v1.map((coord: number, i: number) => coord + v2[i])
);

// (number[], number[]) => number[]
export const substract = (v1: number[], v2: number[]): number[] => (
  v1.map((coord: number, i: number) => coord - v2[i])
);

// (number[], number[]) => number[]
export const scalar = (n: number, v1: number[]) => v1.map((coord: number) => coord * n)

// (number[]) => number
export const magnitude = (v: number[]) => (
  Math.sqrt(v.map((coord: number) => Math.pow(coord, 2))
  .reduce((acc: number, curr: number) => acc + curr))
);

// (number[], number[]) => number[]
export const dotProduct = (v1: number[], v2: number[]) => v1.map((entry: number, i: number) => entry * v2[i]);

