let float_abs = x => x < 0.00 ? -.x : x;
let float_sign = n => n < 0.00 ? -1.00 : 1.00;

/**
 * @name rad_to_deg
 * @type { float }
 * @description convert radians into degrees.
 * 2π r = 360 deg
 * π r = 180 deg
 * r = r * 180 / π
 * (float) => float
 */
let rad_to_deg = r => r *. (180.00 /. 3.141592653589793);
