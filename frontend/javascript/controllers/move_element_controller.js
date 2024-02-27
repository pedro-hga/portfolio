import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["target"];

  getHref(event) {
    const href = event.currentTarget.closest("a").getAttribute("href");
    const customText = this.getCustomText(href);
    this.targetTarget.textContent = customText;
  }

  resetHref() {
    this.targetTarget.textContent = "";
  }

  getCustomText(href) {
    const customText = {
      "https://github.com/pedro-hga": "gh project list --owner pedro",
      "https://www.linkedin.com/in/pedrohga":
        "ln -s https://www.linkedin.com/in/pedrohga ./linkedin.html",
      "/": "cd ~/home",
      "/about": "nvim README.md",
      "/projects": "cd ~/home/pedro/projects",
      "/projects/go_local/": "cd ~/home/pedro/projects/go_local",
      "/projects/guide_me/": "cd ~/home/pedro/projects/guide_me",
      "/contact_me": "node contact_me.js",
      "/writings": "cd ~/home/pedro/writings",
    };
    return customText[href] || "";
  }
}
