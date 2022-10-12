import { LitElement, html } from "lit-element";
import styles from "../styles";
import { BookSearch } from "./books-search";

export class BookData extends LitElement {
  static get properties() {
    return {
      data: [],
      books: [],
      allBooks: { type: Array },
      allRestore: { type: Array }
    };
  }

  constructor() {
    super();
    this.allBooks = [];
    this.allRestore=[];
    this.cargaLibros();
    this.books = [];
    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
    this.dataFromSearch();
  }

  static get styles() {
    return [styles];
  }

  async cargaLibros() {
    fetch("../books.json").then((respuesta) => respuesta.json());
  }

  firstUpdated() {
    this.getData();
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
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        this._sendData(data);
      })
      .catch((error) => {
        console.warn("Algo ha fallado", error);
      });
  }

  _dataFormat(data) {
    let books = [];
    data["results"].forEach((book) => {
      books.push({
        img: book.img,
        book_title: book.book_title,
        author: book.author,
      });
    });
    this.allBooks = books;
    this.allRestore=books;
    console.log(this.allBooks);
  }

  dataFromSearch(){
    this.addEventListener('datasave', (e)=> this.processData(e.detail.data));
  }

  processData(data){
    if(data.length==0){
      this.allRestore=this.allBooks;
    }else{
      this.allRestore=data;
    }
  }

  render() {
    return html`
    <books-search .dataFromBook="${this.allBooks}"></books-search>
    <main>
      ${this.allRestore.map((book) => html`
         
          
            <div class="flexcontainer">
              <figure class="portada">
                <img class="cover" src="${book.img}" />
              </figure>
              <div class="contenido">
                <div class="encabezado">
                  <h1 class="titulo">${book.book_title}</h1>
                  <p class="caracteristicas">${book.author}</p>
                </div>
              </div>
            </div>
         
        `
      )}
      </main>
    `;
  }
}

customElements.define("books-data", BookData);
