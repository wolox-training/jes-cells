import { LitElement, html } from 'lit-element';
import data from './books.json' assert { type: "json" };
import './components/books-data.js';
import './components/books-detail.js';
import './components/books-search.js';

class AppComp extends LitElement {

  static get properties () {
    return {
      path: { attribute: false },
      book: { attribute: false }
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.book = {};
  }

  firstUpdated() {
    window.addEventListener('popstate',  () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if(this.path !== '/') {
      this.book = this.getBookBytitle(this.path.replace('/',''));
      if(!this.book) {
        window.location.pathname = '/';
      }
    }
  }

  bookClicked({detail}){
    this.book = this.getBookBytitle(detail);
    this.path = `/${detail}`;
    window.history.pushState(this.book, '', this.path);
    console.log(detail,this.book);    
  }

  getBookBytitle(title) {
    return data.results.find((book) => book.book_title === title);
  }

  render() {
    return html`
      ${this.path === '/' ?
        html `<books-data @book-clicked=${this.bookClicked} .book=${data.results}></books-data>` :
        html `<books-detail .book=${this.book}></books-detail>`
      }
    `;
  }
}

customElements.define('app-comp', AppComp);
