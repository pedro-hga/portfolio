import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["url"];

  getFileName(event) {
    const projectFile = event.currentTarget.getAttribute("data-project-file");
    this.interpolate(projectFile);
  }

  async interpolate(projectFile) {
    try {
      const response = await fetch(`dsc_${projectFile}`);
      if (!response.ok) {
        throw new Error("Failed to fetch partial HTML");
      }

      const partialHTML = await response.text();
      this.urlTarget.innerHTML = partialHTML;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  reset() {
    this.urlTarget.innerHTML = "";
  }
}
