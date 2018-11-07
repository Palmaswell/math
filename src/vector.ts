export interface VectorProps {
    coordinates: number[];
    minus(coord: number[]): number[];
    plus(coord: number[]): number[];
    scalar(n: number): number[];
}

// number[] -> number[]
export const Vector = (arr: number[]): VectorProps => {
    return {
        coordinates: arr,
        minus(coord): number[] {
            return this.coordinates.map((n: number, i: number) => n - coord[i]);
        },
        plus(coord: number[]): number[] { 
            return this.coordinates.map((n: number, i: number) => n + coord[i]);
        },
        scalar(multiplier: number): number[] {
            return this.coordinates.map((n: number) => multiplier * n);
        }
    }
}

export default Vector;