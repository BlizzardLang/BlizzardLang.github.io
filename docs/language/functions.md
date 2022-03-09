---
title: Functions
description: Reference for all the builtin functions in the Blizzard Programming Language
prev: ./operators
next: ./comments
---

# Functions

This section outlines all the builtin functions in the Blizzard Programming Language. Examples are provided for the functions, and their outputs are in the code block beneath them.

[[toc]]

## IO

### `WRITE`

The `WRITE` function outputs the string representation of its parameters to the terminal executing the program. Separating parameters with `,` will output the string representations of each parameter separated by a space.

```bzz:no-line-numbers
WRITE(123);
WRITE("Hello", "John, it is a", "sunny day out.");
```
> ```:no-line-numbers
> 123Hello John, it is a sunny day out.
> ```

### `WRITELN`

The `WRITELN` function outputs the string representation of its parameters to the terminal executing the program, followed by the operating system's native line terminator (a new line). Separating parameters with `,` will output the string representation of each parameter separated by a space.

```bzz:no-line-numbers
WRITELN(123);
WRITELN("Hello", "John, it is a", "sunny day out.");
```
>```:no-line-numbers
>123
>Hello John, it is a sunny day out.
> 
>```
> Note the new line at the end of *both* `WRITELN` statements.
