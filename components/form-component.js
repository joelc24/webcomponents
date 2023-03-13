//@ts-check
//@ts-ignore
import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * @typedef {object} Todo
 * @property {string} name
 * @property {string} description
 */

class FormComponent extends LitElement {

    constructor() {
        super()
        this._textButton = 'Submit'
        /**@type {Todo[]} */
        this.todos = []
    }

    static properties = {
        _textButton: {}
    }

    createRenderRoot() {
        return this
    }

    render() {
        return html /* html */ `
        <form id="formTodo" @submit=${this.handleSubmit}>
            <div class="mb-3">
                <label for="nameTodo" class="form-label">Nombre de la tarea</label>
                <input type="text" class="form-control" id="nameTodo" name="nameTodo">
            </div>
            <div class="mb-3">
              <label for="descriptionTodo" class="form-label">Descripcion de la tarea</label>
              <input type="text" class="form-control" id="descriptionTodo" name="descriptionTodo">
            </div>
            <button type="submit" class="btn btn-primary">${this._textButton}</button>
      </form>
        `
    }
    /** @return {HTMLFormElement|null} */
    get form(){
        //@ts-ignore
        return this.renderRoot?.querySelector("#formTodo") ?? null
    }
    
    addTodo(){
        const event = new CustomEvent("addTodo", {
            detail: { name: this.form?.nameTodo.value, description: this.form?.descriptionTodo.value },
            bubbles: true,
            composed: true
        })

        //@ts-ignore
        this.dispatchEvent(event)

    }

    handleSubmit(/**@type {Event} */ e){
        e.preventDefault()
        console.log(e)
        this._textButton = 'Enviado ✅'
        setTimeout(() => {
            this._textButton = 'Submit'
        }, 2000);
        this.addTodo()
    }
}
//@ts-ignore
customElements.define("app-form-component", FormComponent)