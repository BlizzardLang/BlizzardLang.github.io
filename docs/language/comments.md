---
title: Comments
description: Reference for all the builtin comments in the Blizzard Programming Language
prev: ./functions
---

# Comments

This section outlines all the builtin comments in the Blizzard Programming Language. Comments are ignored by Blizzard allowing you to write notes for other people about what your code does. Any code that is commented **will not** be executed.

[[toc]]

### Inline `//`

Inline comments are preceded by 2 forward slashes `//` and continue until the end of the line.

```bzz:no-line-numbers
str name = "John Smith"; // Keep track of the person's name
// Do math
int num = 35 + 16 - 4 * 2;

// WRITELN("This won't be run since it is commented out.");
// WRITELN("It is a useful way to edit code without deleting your work.");
```

### Multiline `/* */`

Multiline comments are preceded by a forward slash and an asterisk `/*` and are terminated with an asterisk and a forward slash `*/`. All contents inside of the `/* */` pairs are comments.

```bzz:no-line-numbers
/* This is a comment
that takes
multiple lines */
WRITELN("There is a comment above me!");

/*
 * This is the general format for writing a multiline
 * comment. The extra asterisks are not required, but
 * it is a widely used format because it looks nicer.
 */
WRITELN("There is a nice looking comment above me!");

/*
WRITE("If there is a lot of code you want to change, ");
WRITE("but you don't wan't to put an inline comment ");
WRITE("before every line, you can wrap it all with ");
WRITE("a multiline comment to save time.");
*/
```
