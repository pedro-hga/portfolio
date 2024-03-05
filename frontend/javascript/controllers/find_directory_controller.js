import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["link"];

  connect() {
    this.getLink();
  }

  getLink() {
    const fullAddress = window.location.href;

    const mainAddressIndex =
      fullAddress.indexOf(window.location.host) + window.location.host.length;
    const mainAddress = fullAddress.substring(mainAddressIndex);

    const customText = this.getCustomText(mainAddress);

    this.linkTarget.textContent = customText;
  }

  getCustomText(href) {
    const customText = {
      "/about": "/sobre",
      "/projects": "/projetos",
      "/projects/go_local/": "/projetos/go_local",
      "/projects/guide_me/": "/projetos/guide_me",
      "/contact_me": "/contato",
    };
    return customText[href] || "";
  }
}
