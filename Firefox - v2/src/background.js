// Create context menu item
ContextMenu = new Menu({
  id: "copy-all-tabs",
  title: "Copy All Tabs",
  contexts: ["page"],
});

browser.runtime.onInstalled.addListener(() => {
  ContextMenu.create();
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  const { menuItemId } = info;

  if (menuItemId === "copy-all-tabs") {
    browser.tabs.query({ currentWindow: true }).then(
      (tabs) => {
        // Create list of Tab URLs
        let count = 1;
        const text = tabs.reduce((acc, curr) => {
          const { title, url } = curr;

          if (!isPrivatePage(title, url)) {
            acc += `${count}. ${title} - ${escapeHTML(url)}\n`;
            count += 1;
          }

          return acc;
        }, "");

        // Execute copying to clipboard on the active tab
        // This lets us access the Clipboard API
        browser.scripting.executeScript({
          target: { tabId: tab.id },
          func: copyToClipboard,
          args: [text],
        });
      },
      (error) => console.error(`Failed to get tabs: ${error}`)
    );
  }
});
