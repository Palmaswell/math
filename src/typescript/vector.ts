
export const Vector = {
    // (number[], number[]) = number[]
    add(v1: number[], v2: number[]): number[] {
        return v1.map((coord, i) => coord + v2[i])
    },
    // (number[], number[]) = number[]
    substract(v1: number[], v2: number[]): number[] {
        return v1.map((coord, i) => coord - v2[i])
    },
    // (number, number[]) = number[]
    scalar(n: number, v: number[]): number[] {
        return v.map(coord => coord * n);
    }
};


export default Vector;