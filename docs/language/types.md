---
title: Types
description: Reference for all the builtin types in the Blizzard Programming Language
prev: ./
next: ./operators
---

# Types

This section outlines all the builtin types in the Blizzard Programming Language.

[[toc]]

## Numeric Types

### `int`

A signed 32 bit integer value from -2,147,483,648 to 2,147,483,647.

```bzz:no-line-numbers
int age = 17;
int id = 31232142;
int num = -32;
```

### `dec`

A signed 64 bit floating point value with ~15-17 digits of precision from -1.79769313486232*e*308 to 1.79769313486232*e*308.

```bzz:no-line-numbers
dec price = 312.99;
dec pi = 3.1415926535;
dec temperature = -12.5;
```

## Character Types

### `str`

A dynamically sized string that can contain any characters. Contents must be wrapped in double quotation marks `"`. It is not ended by a null-terminator.

```bzz:no-line-numbers
str name = "John Smith";
str title = "101 Dalmations";
str spam = "ldaf^klj90&3jj JL*8)@#)❄️!!!";
```

