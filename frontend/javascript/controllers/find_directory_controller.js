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

    this.linkTarget.textContent = mainAddress;
  }
}
