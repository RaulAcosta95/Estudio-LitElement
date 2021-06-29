import { LitElement, html } from 'lit-element';

export class LifeCycleExamples extends LitElement {
    static get properties(){
        return{
            mensaje : {
                type: String,
                hasChanged(newVal, oldVal) {
                    console.log(`mensaje: ${newVal} > ${oldVal}. hasChangedExample: true.`);
                  }
                }
        }
    }
    constructor(){
        super();
        this.mensaje = '';
    }
    connectedCallback(){
        super.connectedCallback();
        console.log('Life Cycle Example: Connected Callback Example');
    }
    render(){
        return html `
            <style>
                .LifeCycleExample{
                    width:200px;
                    border: white 5px outset;
                    background-color: rgb(227, 228, 228);
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                }
                input{
                    margin-bottom:5px;
                }
            </style>
            <div class="LifeCycleExample">
                <h3>Life Cycle Example</h3>
                <p>Esta es una propiedad [<b>${this.mensaje}</b>] </p>
                <input type="text" vaule="${this.mensaje}" @change="${this.cambiarMensaje}" placeholder="Cambia la propiedad">
            </div>
        `
    }
    cambiarMensaje(e){
        this.mensaje = e.target.value;
    }
}
customElements.define('life-cycle-example', LifeCycleExamples);