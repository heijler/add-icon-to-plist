# add-icon-to-plist

A script to add a CFBundleIconFile entry to plist file for exported .app air packages for mac.

This was made to correctly add icons to .app packages built using BowlerHat LLCs [excellent extension for vscode](https://github.com/BowlerHatLLC/vscode-as3mxml). The problem was that the build process of the extension does not correctly add the provided .icns file to the package Info.plist file.


## Setup
```
git clone git@github.com:heijler/add-icon-to-plist.git
cd add-icons-to-plist
npm install
```

## Usage
```
node --experimental-modules index.mjs [absolute path to .app] [icns file name]
```

## Example
```
node --experimental-modules index.mjs /Users/heijler/dev/BulletReign/bin/BulletReign.app game.icns
```