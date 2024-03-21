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
      "https://pedro-hga.notion.site/Pedro-Henrique-5edc6e62d23945f38b28a32d4f5e3997":
        "ln -s http://www.notion.so ./notion.html",
      "https://guide-me-app-c2d673a36c32.herokuapp.com/":
        "ln -s http://www.guide-me.com ./guide-me.html",
      "https://github.com/pedro-hga/go-local":
        "gh repo view pedro-hga/go-local",
      "https://github.com/pedro-hga/guide-me":
        "gh repo view pedro-hga/guide-me",
      "https://www.linkedin.com/in/pedrohga":
        "ln -s https://www.linkedin.com/in/pedrohga ./linkedin.html",
      // pt-br
      "https://1drv.ms/b/s!AikTJ5jzHHqPqahXQxl_nHizzJgoIA?e=uQfjaF":
        "curl -O https://1drv.ms/b/s!AikTJ5jzHHqPqahXQxl_nHizzJgoIA?e=uQfjaF",
      "/": "cd ~/home",
      "/about": "nvim sobre-mim.md",
      "/projects": "cd ~/home/projetos",
      "/projects/go_local/": "cd go_local/",
      "/projects/guide_me/": "cd guide_me/",
      "/contact_me": "node contato.js",
      "mailto:pedro_hga@proton.me?subject=Olá!&body=Escreva%20seu%20texto%20aqui.":
        "node contato.js",
      // en
      "https://1drv.ms/b/s!AikTJ5jzHHqPqaoeHKSphxo_mPhMhQ?e=9yYBsA":
        "curl -O https://1drv.ms/b/s!AikTJ5jzHHqPqaoeHKSphxo_mPhMhQ?e=9yYBsA",
      "https://pedro-hga.notion.site/Pedro-Henrique-0551f7070c0a45e2a03ff31fdead980c":
        "ln -s http://www.notion.so ./notion.html",
      "/en": "cd ~/home",
      "/en/about": "nvim README.md",
      "/en/projects/go_local/": "cd go_local/",
      "/en/projects/guide_me/": "cd guide_me/",
      "/en/projects": "cd ~/home/projects",
      "/en/contact_me": "node contact_me.js",
      "mailto:pedro_hga@proton.me?subject=Hi!&body=Write%2your%20email%20here.":
        "node contact_me.js",
    };
    return customText[href] || "";
  }
}
