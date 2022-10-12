import { LitElement, html } from "lit-element";
import styles from "../styles";

export class BookSearch extends LitElement {

    static get properties(){
        return{
            data: { type: Array },
            result: { type:Array},
            dataFromBook: { type:Array } 

        }
    }

    static get styles() {
        return [styles];
      }

    constructor(){
        super();
        this.dataFromBook=[];
        this.result=this.dataFromBook;
    }

    filterData(){
        const imgNotFound="https://goo.su/crvbz";
        const input=this.shadowRoot.querySelector("#search").value.toLowerCase();
        this.result=[];
        this.dataFromBook.map(book => {
            const name=book.book_title.toLowerCase();
            if(name.indexOf(input) !== -1)
            this.result=[...this.result, book]
        });

        if(this.result.length<1) this.result =[{book_title:'Libro No encontrado', img:URL=imgNotFound}]
        this.sendData(this.result);

    }

    sendData(data){
        this.dispatchEvent(new CustomEvent('datasave', {detail:{data}, bubbles:true, composed:true }));
    }

    render(){
        return html`
        <div class="contenedor">
        <input  @keyup=${this.filterData} type="text" id="search" placeholder="Buscá por título del libro..."/>
        <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
		<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
	</svg>
            

        </div>
        `;
    }

}

customElements.define("books-search", BookSearch);
