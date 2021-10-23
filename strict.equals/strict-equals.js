// export const strictEquals = (a, b) => {

exports.strictEquals = (a, b) => {
  let result;
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    result = false;
  } else if (Object.is(Math.abs(a), 0) && Object.is(Math.abs(b), 0)) {
    result = true;
  } else {
    result = Object.is(a, b);
  }
  return result;
};
