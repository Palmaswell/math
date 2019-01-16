import * as Utils from './utils';
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

/**
 *
 * @name magnitude
 * @type { number }
 * @description refers to how much movement a vector quantifies
 * or the distance between the two points it connects.
 * ||v|| = √(entry1)² + (entry2)² + ... + (entryN)²
 */
export const magnitude = (v: number[]) => (
  Math.sqrt(v.map((coord: number) => Math.pow(coord, 2))
  .reduce((acc: number, curr: number) => acc + curr))
);

/**
 *
 * @name directon
 * @type { Array }
 * @description refers to where the director's movement is pointing.
 * A unit vector is a vector whose magnitude is 1
 * 1 / ||v|| * v = u
 */
export const direction = (v: number[]): number[] => v.map(entry =>  +(1 / magnitude(v) * entry).toFixed(3));

/**
 *
 * @name dotProduct
 * @type { number }
 * @description calculates the inner product of
 * two vectors of the same length.
 * Basically we can multiply the corresponding components
 * and add those products together.
 * v * w  = v1 w1 + v2 w2 + v3 w3 + .... + vn wn
 */
export const dotProduct = (v: number[], w: number[]): number => {
  if (v.length !== w.length) {
    console.log(`
    > Dot Product operation can only be executed on vectors of the same size. ⚠️
    `);
    return;
  }
  return v.map((entry: number, i: number) => entry * w[i])
    .reduce((accEntry: number, currEntry: number) => accEntry + currEntry);
}

/**
 * @name angle
 * @type { number }
 * @description the angle betwenn two vectors:
 * which is the inner product divided by the maginitude of
 * both vectors.
 * arccos(v * w / ||v|| * ||w||)
 */

 export enum Unit {
  radians = 'radians',
  degrees = 'degrees'
 }

export const angle = (v: number[], w: number[], unit?: Unit ): number => {
  if (v.length !== w.length) {
    console.log(`
    > Vector angle operation can only be executed on vectors of the same size. ⚠️
    `);
    return;
  }

  switch (unit) {
    case 'degrees':
      return Utils.radToDeg(Math.acos(dotProduct(v, w) / (magnitude(v) * magnitude(w))));
    case 'radians':
    default:
      return Math.acos(dotProduct(v, w) / (magnitude(v) * magnitude(w)));
  }
}

