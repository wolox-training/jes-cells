import { LitElement, html } from "lit-element";
import styles from "../styles/styles-book-data";


class BookData extends LitElement {
  static get properties() {
    return {
      allBooks: { type: Array },
      allRestore: { type: Object }
    };
  }

  constructor() {
    super();
    this.allBooks = [];
    this.allRestore=[];
    this.books = [];
    this.dataFromSearch();
  }

  static get styles() {
    return [styles];
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

  dataFromSearch(){
    this.addEventListener('datasave', (e)=> this.processData(e.detail.data));
  }

  processData(data){
    this.allRestore = data.length == 0 ? this.allBooks : data;
    }

    onClick(book) {
      let event = new CustomEvent('book-clicked', {
        detail: book.book_title
      });
      this.dispatchEvent(event);
    }
  
  render() {
    return html`
    <books-search .dataFromBook="${this.allBooks}"></books-search>
    <div class="main">
      ${this.allRestore.map((book) => html`
        <div class="flexcontainer" @click=${()=>this.onClick(book)} .book=${book}>
          <figure class="cover">
            <img class="imgcover" src="${book.img}" />
          </figure>
          <div class="content">
            <div class="encabezado">
              <h1 class="title">${book.book_title}</h1>
              <p class="features">${book.author}</p>
            </div>
          </div>
        </div>     
      `)}
    </div>
     
    `;
  }
}

customElements.define("books-data", BookData);
