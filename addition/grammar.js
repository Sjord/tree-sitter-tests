module.exports = grammar({
  name: 'addition',

  rules: {
    addition: $ => seq($.number, '+', $.number),
    number: $ => token(repeat1(('1')))
  }
});
