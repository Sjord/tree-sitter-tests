module.exports = grammar({
  name: 'addition',

  rules: {
    addition: $ => seq($.number, '+', $.number),
    number: $ => token.immediate(repeat1(('1')))
  }
});
