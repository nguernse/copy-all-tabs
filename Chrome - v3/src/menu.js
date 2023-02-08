/***
 * Initialize Context Menus
 */
class Menu {
  constructor({ parentId, id, title, contexts, menuItems }) {
    this.parentId = parentId;
    this.id = id;
    this.title = title;
    this.contexts = contexts;
    this.menuItems = this.createMenuItems(menuItems);
  }

  create() {
    const config = {
      parentId: this.parentId,
      id: this.id,
      title: this.title,
      contexts: this.contexts,
    };

    chrome.contextMenus.create(config);

    if (this.menuItems) {
      this.menuItems.forEach((item) => item.create());
    }
  }

  createMenuItems(items) {
    if (items) {
      return items.map((item) => {
        return new Menu({
          parentId: this.id,
          contexts: this.contexts,
          ...item,
        });
      });
    }

    return null;
  }
}
