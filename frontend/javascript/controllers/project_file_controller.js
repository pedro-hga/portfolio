import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    const projectFile = this.element.dataset.projectFile;
    console.log("Project File:", projectFile);
  }
}
