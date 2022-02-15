---
title: Introduction
description: Introduction to Blizzard
---

# Blizzard Programming Language

Blizzard is a cross-platform and [open source](https://github.com/BlizzardLang/) programming language that aims for simplicity while maintaining redability. Blizzard is interpreted (like python), with the hopes of adding intermediate language and natively compiled runtimes in the future.

Blizzard syntax resembles the following:
```bzz:no-line-numbers
/*
 * Example Blizzard program
 * Written by Bradley Myers
 */

str name   = "John Smith"; // The person's name
int age    = 34;           // The person's age
dec salary = 42.15;        // The person's salary

// Amount of money person would have in their entire life
dec money = (age * 365.25 * 24) * salary; 

// Write out the data
WRITELN(name + " is " + age + " years old, and makes $$" + salary + "/h.");
WRITELN("If", name, "had been paid that much for his entire life, he would have already made $$" + money + "!");
```
