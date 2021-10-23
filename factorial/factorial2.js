factorial = (n) => {
  try {
    if (isNatural(n)) {
      return n === 0 ? 1 : n * factorial(n - 1);
    }
  } catch (err) {
    err += ' y no tienen factorial';
    console.error('Exception:', err);
  }
};

isNatural = (n) => {
  if (n < 0) {
    throw 'Los números negativos no son N';
  } else if (parseInt(String(n)) !== n) {
    throw new Error('Los números decimales no son N');
  }
  return true;
};

module.exports = { factorial, isNatural };
