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
      "http://www.golocal.lol": "ln -s http://www.golocal.lol ./golocal.html",
      "https://phga.notion.site/Curr-culo-5edc6e62d23945f38b28a32d4f5e3997?pvs=74":
        "ln -s http://www.notion.so ./notion.html",
      "https://1drv.ms/b/s!AikTJ5jzHHqPqahXQxl_nHizzJgoIA?e=uQfjaF":
        "curl -O https://1drv.ms/b/s!AikTJ5jzHHqPqahXQxl_nHizzJgoIA?e=uQfjaF",
      "https://guide-me-app-c2d673a36c32.herokuapp.com/":
        "ln -s http://www.guide-me.com ./guide-me.html",
      "mailto:pedro_hga@proton.me?subject=Olá!&body=Escreva%20seu%20texto%20aqui.":
        "node contato.js",
      "https://github.com/pedro-hga/go-local":
        "gh repo view pedro-hga/go-local",
      "https://github.com/pedro-hga/guide-me":
        "gh repo view pedro-hga/guide-me",
      "https://www.linkedin.com/in/pedrohga":
        "ln -s https://www.linkedin.com/in/pedrohga ./linkedin.html",
      "/": "cd ~/home",
      "/about": "nvim README.md",
      "/projects": "cd ~/home/projetos",
      "/projects/go_local/": "cd go_local/",
      "/projects/guide_me/": "cd guide_me/",
      "/contact_me": "node contato.js",
    };
    return customText[href] || "";
  }
}
