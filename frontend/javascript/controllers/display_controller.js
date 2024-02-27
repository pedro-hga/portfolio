import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["response"];

  changeDisplay() {
    const target = this.responseTarget;
    target.classList.toggle("d-none");
  }
}
