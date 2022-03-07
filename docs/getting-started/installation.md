---
title: Installation
description: Walks through installing Blizzard
prev: ./
next: ./editors
---

# Installation

## Download

Blizzard releases are hosted in the Blizzard GitHub Repository. We recommend you download the latest release unless you have a reason not to. Downloading the latest version ensures you have up to date security patches and access to new features.

The latest release can be found [here](https://github.com/BlizzardLang/Blizzard/releases/latest). All other releases can be found [here](https://github.com/BlizzardLang/Blizzard/releases). You can read the release details or the complete [change log](https://github.com/BlizzardLang/Blizzard/blob/master/CHANGELOG.md) if you desire. The files can be found by scrolling down the release page to the `Assets` section. Make sure you download the correct file for your OS.

::: details Downloading the appropriate zip file for your OS

You will first need to know your Operating System and its Architecture to determine which file to download. On Windows this can be found in `Settings > System > About`. On Linux and Mac this can be found by typing `uname -m` into a terminal.

| OS        | Architecture  | File                      |
| :-------- | :------------ | :------------------------ |
| Linux     | arm           | Blizzard_linux-arm.zip    |
| Linux     | x64           | Blizzard_linux-x64.zip    |
| Mac       | x64           | Blizzard_osx-x64.zip      |
| Windows   | arm x64       | Blizzard_win-arm-x64.zip  |
| Windows   | arm           | Blizzard_win-arm.zip      |
| Windows   | x64           | Blizzard_win-x64.zip      |
| Windows   | x32           | Blizzard_win-x86.zip      |

:::

## Post-Download

The releases come in a zip file, therefore you must extract them before you can use them. If you don't know how to extract zip files, we suggest you search for `extract zip file <your OS>` and follow a tutorial.

Once you have unzipped the file, you can technically run Blizzard code. To make things easier for you later on however, we suggest you move the files to another location and add that folder to PATH. The recommended location for the files is in the home directory in a folder called `Blizzard`. On Windows the path would be `C:\Users\<you>\Blizzard`. On Linux and Mac the path would be `~/Blizzard`.

To let you run Blizzard code more easily, we suggest adding the folder to PATH. This will allow you to run Blizzard code from anywhere, and avoid typing `C:\Users\<you>\Blizzard\Blizzard.exe` in favor of simply typing `Blizzard`. Search `add folder to path <your OS>` and follow a tutorial to add the folder where your Blizzard installation resides.

## Check Correct Installation

To double check that Blizzard is installed correctly, open a terminal and navigate to the Grammar folder inside where your Blizzard installation is located. You can do this using the `cd` command.

```bat:no-line-numbers
Windows: cd C:\Users\<you>\Blizzard\Grammar
Linux/Mac: cd ~/Blizzard/Grammar
```

We can now make sure Blizzard is working by typing
```bat:no-line-numbers
Blizzard example.bzz
```

If you get an output about John and money, Blizzard is successfully installed and you can skip to the next page! If you get an error, there is a problem with your installation and you might have missed one or more steps. If you cannot figure out why Blizzard is not working from the given error, please submit a new issue [here](https://github.com/BlizzardLang/Blizzard/issues/new?labels=help%20wanted&title=Problem%20Installing%20Blizzard) and give us as many relevant details as you can (eg. OS type, architecture, file path, error message).
