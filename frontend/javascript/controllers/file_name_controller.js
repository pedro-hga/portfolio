import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["url"];

  getFileName(event) {
    const projectFile = event.currentTarget.getAttribute("data-project-file");
    this.interpolate(projectFile);
  }

  async interpolate(projectFile) {
    try {
      const locale = document.documentElement.lang;

      const fetchURL =
        locale !== "pt-BR" ? `/en/dsc_${projectFile}` : `/dsc_${projectFile}`;
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error("Fetch failed");
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
