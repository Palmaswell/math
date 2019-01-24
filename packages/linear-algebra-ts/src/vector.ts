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
export function dotProduct(v: number[], w: number[]): number {
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

export function angle(v: number[], w: number[], unit?: Unit ): number {
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

/**
 * @name isOrthogonal
 * @type { boolean }
 * @description Two vectors are orthogonal if their dot product is 0
 * (A 90 degree angle between two vectors)
 * The 0 vector is parallel and orthogonal to all vectors.
 * The 0 vector is the only vector that is orthogonal to itself.
 * w * v = 0
*/
export function isOrthogonal(v1: number[], v2:number[]): boolean {
  return Math.abs(dotProduct(v1, v2)) < 1e-8 ? true : false;
}

/**
 * @name isZero
 * @type { boolean }
 * @description A zero vector is a vector that all
 * elements equal to zero. The zero vector has a length of 0
 *
*/
export function isZero(v: number[]): boolean {
  return magnitude(v) < 1e-10 ? true : false;
}

/**
 * @name isParallel
 * @type { boolean }
 * @description Two vectors are parallel if one is a
 * scalar multiple of the other.
 * Consider two vector to be parallel even if they point
 * in opposite directions.
 *
*/
// export function isParallel(v: number[]): boolean {

// }
