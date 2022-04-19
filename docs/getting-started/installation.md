---
title: Installation
description: Walks through installing Blizzard
prev: ./
next: ./editors
---

# Installation

## Download

To simplify the Blizzard installation process, we have made an installer that will download all the required assets for you. The latest release of the installer can be found [here](https://github.com/BlizzardLang/Blizzard_Installer/releases/latest). The files can be found by scrolling down the release page to the `Assets` section. Make sure you download the correct file for your OS.

::: details Downloading the appropriate zip file for your OS
You will first need to know your Operating System and its Architecture to determine which file to download. On Windows this can be found in `Settings > System > About`. On Linux and Mac this can be found by typing `uname -m` into a terminal.

| OS        | Architecture  | File                               |
| :-------- | :------------ | :--------------------------------- |
| Linux     | arm           | BlizzardInstaller_linux-arm.zip    |
| Linux     | x64           | BlizzardInstaller_linux-x64.zip    |
| Mac       | x64           | BlizzardInstaller_osx-x64.zip      |
| Windows   | arm x64       | BlizzardInstaller_win-arm-x64.zip  |
| Windows   | arm           | BlizzardInstaller_win-arm.zip      |
| Windows   | x64           | BlizzardInstaller_win-x64.zip      |
| Windows   | x32           | BlizzardInstaller_win-x86.zip      |
:::

## Post-Download

The installer files come in a zip file, therefore you must extract them before you can use them. If you don't know how to extract zip files, we suggest you search for `extract zip file <your OS>` and follow a tutorial.

Once you have unzipped the files, you can technically run the Blizzard Installer. To make things easier for you later on however, we suggest you move the files to another location and add that folder to PATH. The recommended location for the files is in the home directory in a folder called `Blizzard`. On Windows the path would be `C:\Users\<you>\Blizzard`. On Linux and Mac the path would be `~/Blizzard`.

Once you have downloaded the installer files and placed them in the directory where you wish to install Blizzard, run the `BlizzardInstaller.exe` file (Windows) or the `BlizzardInstaller` file (Linux and Mac). This will fetch the latest release of the Blizzard Programming Language Runtime and install the files to the current directory. After the download finishes, your runtime should be ready to use!

::: details Troubleshooting Installer Issues

If you are getting errors while trying to run the installer, you can run the installer from a terminal and provide some special arguments. Open a terminal to the location of the installer and run the following command.
```bat:no-line-numbers
BlizzardInstaller --target latest -v
```

This specifies to download the latest target version of the Blizzard Runtime and give verbose output including full error messages. If the error message is not enough to help you diagnose the issue, please submit a new issue [here](https://github.com/BlizzardLang/Blizzard_Installer/issues/new?labels=help%20wanted&title=Issue%20Installing%20Blizzard%20Runtime) and give us as many relevant details as you can (eg. OS type, architecture, file path, error message).

:::

To let you run Blizzard code more easily, we suggest adding the folder to PATH. This will allow you to run Blizzard code from anywhere, and avoid typing `C:\Users\<you>\Blizzard\Blizzard.exe` in favor of simply typing `Blizzard`. Search `add folder to path <your OS>` and follow a tutorial to add the folder where your Blizzard installation resides.

## Check Correct Installation

To double check that Blizzard is installed correctly, open a terminal and navigate to the Grammar folder inside where your Blizzard installation is located. You can do this using the `cd` command.

```bat:no-line-numbers
Windows: cd C:\Users\<you>\Blizzard\Grammar
Linux/Mac: cd ~/Blizzard/Grammar
```

We can now make sure Blizzard is working by typing
```bat:no-line-numbers
Blizzard run example.bzz
```

::: tip Follow Up
If you get an output about John and money, Blizzard is successfully installed and you can skip to the next page! If you get an error, there is a problem with your installation and you might have missed one or more steps. If you cannot figure out why Blizzard is not working from the given error, please submit a new issue [here](https://github.com/BlizzardLang/Blizzard/issues/new?labels=help%20wanted&title=Problem%20Installing%20Blizzard) and give us as many relevant details as you can (eg. OS type, architecture, file path, error message).
:::
