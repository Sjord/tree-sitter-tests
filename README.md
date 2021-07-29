# Tree-sitter

To start, use the [template](template). This contains a `grammar.js` file and an example test file in `test/corpus/hello.txt`. Copy the template directory, `cd` into it, then run:

```
$ tree-sitter generate && tree-sitter test
```

## Addition

The [addition](addition) grammar parses the adding of numbers. Since we want to keep it simple, these numbers only consists of ones:

    11 + 111

But this also works:

    11 + 1 11

Since tree-sitter allows extras between tokens.  To avoid this, either make it a single token:

    number: $ => /1+/

Or use token(.immediate).

    repeat1(token.immediate('1'))  // doesn't work. Why?
    number: $ => token.immediate(repeat1(('1')))  // doesn't work. Why?
    number: $ => seq('1', token.immediate(repeat('1')))  // works, but repeats '1'
    token(repeat1(('1')))  // works. Doesn't allow spacing in between.