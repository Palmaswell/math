
export const Vector = {
    add(v1: number[], v2: number[]): number[] {
        return v1.map((coord, i) => coord + v2[i])
    },
    substract(v1: number[], v2: number[]): number[] {
        return v1.map((coord, i) => coord - v2[i])
    },
};


export default Vector;