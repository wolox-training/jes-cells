import { LitElement, html } from "lit-element";
import styles from "../styles/styles-book-detail";

export class BookDetail extends LitElement {


  static get properties() {
    return {
      books: { type: Object },
      allBooks : { type: Object }
    };
  }

  static get styles() {
    return [styles];
  }


  constructor() {
    super();
    this.allBooks = [];
    this.allRestore=[];
  }


  getData() {
    fetch("../books.json")
    .then((response) => response.json())
      .then((data) => {
        this._sendData(data);
      })
      .catch((error) => {
        console.warn("Algo ha fallado", error);
      });
  }

  _dataFormat(data) {
    this.allBooks=data.results.map(({img,book_title,author}) => (
      {
        img,
        book_title,
        author,
      }
    ));
    this.allRestore=this.allBooks;
    console.log(this.allBooks);
  }

  firstUpdated() {
    this.getData();
    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }


  render() {
    console.log("Prueba history 2" , history.state.book_title)
    return html`
      <div class="main">
        <div class="flexcontainer">
          <nav class="back">
            <a href="index.html" class="backtext">Atrás</a>
          </nav>
          <figure class="mask">
            <img class="cover" src="${history.state.img}" alt="cover">
            <img class="badge" src="img/badge.png" alt="badge">
          </figure>
          <div class="content">
            <div class="header">
              <h1 class="title">${history.state.book_title}</h1>
              <p class="gender">(${history.state.gender})</p>
            </div>
            <div class="body">
              <h2 class="subtitle">
                Autor del libro:
                <span class="features">${history.state.author}</span>
              </h2>
              <h2 class="subtitle">
                Editorial: <span class="features">${history.state.publisher}</span>
              </h2>
              <h2 class="subtitle">
                Año de publicación:
                <span class="features">${history.state.year}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}
customElements.define("books-detail", BookDetail);
