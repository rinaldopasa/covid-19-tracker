const myFooterElement = document.querySelector("my-footer");
// let classes = ["gold", "blue"];
myFooterElement.setAttribute("class", "blue gold");

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.class = this.classList || null;

    this.innerHTML = `
        
        <footer>
        <p>
          Belajar Fundamental Front-End Web Development
          <span class="${this.class.item(0)}">Dicoding.com</span> &copy; 2020,
          <span class=${this.class.item(1)}>Rinaldo Pasa</span>
        </p>
      </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
