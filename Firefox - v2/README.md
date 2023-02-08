# Copy All Tabs

## About

A browser extension to copy all tab URLs in the active browser window.

---

## Installation

1. Open Firefox
2. Navigate to `about:addons`, or click `Add-ons and themes` in the settings menu
3. Click the cog icon at the top to open up a menu
4. Select `Install Add-on from File...`
5. Point to this directory and select the `manifest.json` file
6. You are now ready to Copy All Tabs (CAT *meow*)

---

## How to Use

On any web page, *right click* to open up the context menu. Click the `Copy Tabs` menu item.

This will copy a list of all active tab titles and URLs to your clipboard.

---

## Debugging

If you are working with the source code, you can load the extension temporarily in Firefox:

1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click `Load Temporary Add-on`
3. Open the `Firefox - v2` directory and select the `manifest.json` file

You should now have the extension loaded. You can test it in the browser.

If you want to monitor `console` logs, click `inspect` on the debugging page.