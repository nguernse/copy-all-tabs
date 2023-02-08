/**
 * Safely escape URL for XSS reasons.
 * @param {str} str
 * @returns str
 */
function escapeHTML(str) {
  // Note: string cast using String; may throw if `str` is non-serializable, e.g. a Symbol.
  // Most often this is not the case though.
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Copies text to the user's clipboard.
 *
 * @param {str} text String to copy to user clipboard
 */
function copyToClipboard(text) {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(_, (error) => {
      /* clipboard write failed */
      console.error(`Failed to copy ${error}`);
    });
  }
}

/**
 * Function to identify if a tab is "private", which means
 * we do not want to copy it to the clipboard.
 *
 * @param {str} title
 * @returns boolean
 *
 * @todo Allow user to define pages to ignore when copying tabs.
 */
function isPrivatePage(title, url) {
  const privatePages = [
    "Extensions",
    "about:addons",
    "Debugging - Runtime / this-firefox",
    "Debugging - Setup",
  ];

  const privateURLs = ["about:addons", "about:debugging"];
  const result =
    privatePages.some((target) => title.includes(target)) ||
    privateURLs.some((target) => url.includes(target));

  return result;
}
