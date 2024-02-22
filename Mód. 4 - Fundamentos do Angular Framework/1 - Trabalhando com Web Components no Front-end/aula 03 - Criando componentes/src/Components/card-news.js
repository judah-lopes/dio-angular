
/* classe = molde (poo) */    /* extends = herda os comportamento de um HTML Element */
class CardNews extends HTMLElement {   //<-- uma classe q vai se comportar como um elemento html 
    
    constructor(){
        /* super = constructor de quem se herda (HTMLElement) */
        super()
                       /* adiciona uma shadow em THIS classe */
        const shadow = this.attachShadow({ mode: "open" })    //closed = exterior não mexe (outros arquivos etc.)
        shadow.innerHTML = '<h1>Hello World</h1>'             //open = exterior mexe (js etc.)
    }
}

// definir elemento customizado (nome-da-tag, oQueVaiSerATag)
customElements.define('card-news', CardNews)