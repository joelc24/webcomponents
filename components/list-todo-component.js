//@ts-check
//@ts-ignore
import {html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

/**
 * @typedef {object} Todo
 * @property {string} name
 * @property {string} description
 */

class ListTodo extends LitElement {

    static properties = {
        todos: {}
    }

    constructor(){
        super()
         /** @type {Todo[]} */
        this.todos = []
        //@ts-ignore
        document.addEventListener("addTodo",this.addTodo )
    }

    createRenderRoot(){
        return this
    }

    render(){
        return html /* html */`
            <ul class="list-group">
                ${this.todos.map((todo) => html`
                    <li @click=${this.active} class="list-group-item">
                        ${todo.name}
                    </li>
                
                `    
                )}
            </ul>
        `
    }

    addTodo(/** @type {CustomEvent} */ e){
        console.log(e.detail)
        console.log(this.todos)
        this.todos = [...this.todos, e.detail]
        // this.todos.push(e.detail)
        // this.todos.push(detail)
    }

    active(e){
        console.log(e.target.className)
        console.log(e.target.classList.toggle("active"))
        // e.target.classList.toggle("active")
        
    }

}

//@ts-ignore
customElements.define("app-list-component",ListTodo)