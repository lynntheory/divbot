## Setup

You will need to ensure you have Node.js and NPM installed to set up your environment. While there are multiple ways to do this, it is recommended you use a package manager to do so. 
- [nvm](https://github.com/nvm-sh/nvm) (Linux/Mac) 
- [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) (Windows) (Download nvm-setup.exe from under the latest edition's assets.)

Once NVM or NVM Windows is installed, you will want to open your terminal or command prompt program and navigate to the folder containing divbot.

If you are on Windows and are not comfortable with navigating in command line programs, I highly recommend you download [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3) for this. You can download it from the Windows Store. Open the folder containing divbot. In the address bar of the folder, type powershell and press enter. This should open a new powershell window already navigated to the correct folder.

Once you are in the correct folder, use  `npm install -g .` to install the correct packages. After the install, you should be good to go! Type `divbot version` to test. You should see a version number pop up. To see all commands, use `divbot help`.



## Customizing the trigger word
Make a bin folder in the installation location. Inside, create a javascript file with the name of the command desired to launch the application. For example, if you wanted the launch command word to be "tarot", you would create a file called "tarot.js" in the bin folder. Within this javascript file, copy and paste the following:

```
#!/usr/bin/env node

require('..')()
```

Next, in package.json, find the section that looks like this:
```
  "bin": {
    "pull": "./bin/pull.js"
  },
```

Change the word "pull" to whatever command word you used in the previous step. Make sure you change it in the file path as well.


## Notes
- If you put in a pull request without a deck or with an invalid deck name, the program will default to Rider Waite. 
