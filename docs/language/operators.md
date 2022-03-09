---
title: Operators
description: Reference for all the builtin operators in the Blizzard Programming Language
prev: ./types
next: ./functions
---

# Operators

This section outlines all the builtin operators in the Blizzard Programming Language.

[[toc]]

## Mathematical

Mathematical operators follow the order of operations in Blizzard. Multiplication and division will be evaluated first, from left to right. Addition and subtraction will be evaluated second, from left to right. You can make something take precedence by wrapping it in parentheses. Content in parentheses will be evaluated before the other steps, yet the contents in parentheses are still evaluated following order of operations. Nested parentheses take precedence, working from the inside out.

```bzz:no-line-numbers
3 + 5 * 2 // = 3 + 10 = 13
9 * 4 / 3 + 1 // = 36 / 3 + 1 = 12 + 1 = 13
3 * (22 - 2 * (3 + 4) + 1) + 3 // = 3 * (22 - 2 * 7 + 1) + 3 = 3 * (22 - 14 + 1) + 3 = 3 * (8 + 1) + 3 = 3 * 9 + 3 = 27 + 3 = 30
```

::: danger Floating Point Math
It should be noted that some mathematical operations with floating point numbers are slightly imprecise due to the nature of binary. This impreciseness is because the actual result cannot be expressed in binary with the given number of bits. You can read more [here](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html).
:::

### Plus `+`

The plus operator performs addition when applied to 2 numeric type values. It performs string concatenation (appends one value to another as a string) when applied to a character type value and another value.

```bzz:no-line-numbers
3 + 5       // 8
2.2 + 9.1   // 11.3
5 + 4.6     // 9.6

"Hello " + "World"                  // Hello World
"John is " + 23 + " years old"      // John is 23 years old
99 + " bottles of beer on the wall" // 99 bottles of beer on the wall
```

### Minus `-`

The minus operator performs subtraction when applied to 2 numeric type values.

```bzz:no-line-numbers
5 - 3       // 2
9.1 - 2.2   // 6.8999999999999995
8 - 34.7    // -26.700000000000003
```

### Times `*`

The times operator (asterisk) performs multiplication when applied to 2 numeric type values.

```bzz:no-line-numbers
6 * 7       // 42
3.3 * 5.1   // 16.83
4 * -3.5    // -14
```

### Divide `/`

The divide operator (forward slash) performs division when applied to 2 numeric type values.

```bzz:no-line-numbers
12 / 3      // 4
8.2 / 6.3   // 1.3015873015873014
14 / -5.2   // -2.692307692307692
```
