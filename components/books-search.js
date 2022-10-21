import { LitElement, html } from "lit-element";
import styles from "../styles/styles-book-search";

export class BookSearch extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      result: { type: Array },
      dataFromBook: { type: Array },
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.dataFromBook = [];
    this.result = this.dataFromBook;
  }

  filterData() {
    const imgNotFound = "https://goo.su/crvbz";
    const input = this.shadowRoot.querySelector("#search").value.toLowerCase();
    this.result = [];
    this.dataFromBook.map((book) => {
      const name = book.book_title.toLowerCase();
      if (name.indexOf(input) !== -1) this.result = [...this.result, book];
    });
    if (this.result.length < 1)
      this.result = [{ book_title: "Libro No encontrado", img: (URL = imgNotFound) },];
    this.sendData(this.result);
  }

  sendData(data) {
    this.dispatchEvent(
      new CustomEvent("datasave", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="contain">
        <input  @keyup=${this.filterData} type="text" id="search" placeholder="Buscá por título del libro..."/>
        <img class="input-icon" src="../img/loupe.png">
      </div>
    `;
  }
}

customElements.define("books-search", BookSearch);
