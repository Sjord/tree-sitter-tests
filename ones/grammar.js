module.exports = grammar({
  name: 'ones',

  rules: {
    ones: $ => token(repeat1('1'))
  }
});
