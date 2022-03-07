---
title: Hello World
description: Walks through creating a project and writing hello world to the console
prev: ./editors
---

# Hello World!

Now that you have installed Blizzard, let's write your first Blizzard program. Tradition is to write a program that outputs `Hello World!` to the console, so we will setup a blizzard project and create a hello world program here.

## Making the directories

First we should create a directory (folder) on your computer where you can keep all your programs. It doesn't matter where you create this, but for this tutorial, we will place it in the home directory.

1. Navigate to your home directory. This is `C:\Users\<you>\` on Windows, `~/` on Linux and Mac.
2. Create a new directory for your projects. We will call this `projects`.

When writing Blizzard code, it is best to separate each project into its own directory. This makes it harder to accidentally use code from other files that you shouldn't, which we will discuss later on. Let's create a new directory called `hello_world`.

Now we are all ready to write some code!

## Writing your first Blizzard program

1. Open the `hello_world` folder in VSCode.
2. Create a new file called `main.bzz`. **Blizzard Source Files always have the file extension** `.bzz`.
3. Write the following code into the file you just created.
```bzz
WRITELN("Hello World!");
```
4. Open a terminal in the current directory. In VSCode you can click Terminal > New Terminal.
5. Run the command `Blizzard main.bzz`. You should see the words `Hello World!` on screen.

:tada: Congratulations! You have just written your first Blizzard program!

::: tip Things to Remember
1. Blizzard Source Files always have the file extension `.bzz`
2. We can use the `WRITELN` function to show text on the screen
:::
