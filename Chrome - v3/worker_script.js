// File to split the main background script into more organizational chunks of code
try {
  importScripts("src/utils.js", "src/menu.js", "src/background.js");
} catch (e) {
  console.log(e);
}
