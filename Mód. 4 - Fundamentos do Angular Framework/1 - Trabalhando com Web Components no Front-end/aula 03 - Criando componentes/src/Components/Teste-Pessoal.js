class Autor extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        const autor = document.createElement("span")
        autor.textContent = `by ${this.getAttribute("nome")}`

        const style = document.createElement("style")
        style.textContent = `
            span{
                font-weight: 400
            }
        `

        shadow.appendChild(autor)
        shadow.appendChild(style)
    }
}
customElements.define("autor-noticia", Autor)

class Titulo extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})

        const componentRoot = document.createElement("h1")
        componentRoot.textContent = this.getAttribute("titulo")

        const style = document.createElement("style")
        style.textContent = `
            h1{
                margin-top: 15px;
                font-size: 25px;
            }
        `
    
        //enviar para a shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}
customElements.define("titulo-noticia", Titulo)

class Paragrafo extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        const paragrafo = document.createElement("p")
        paragrafo.textContent = this.getAttribute("paragrafo")

        const style = document.createElement("style")
        style.textContent = `
            p{
                color: gray;
            }
        `

        shadow.appendChild(paragrafo)
        shadow.appendChild(style)
    }
}
customElements.define("paragrafo-noticia", Paragrafo)

//---------------- CARD SIDES -----------------

class CardLeft extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
            <autor-noticia nome="Pedro Judah"></autor-noticia>
            <titulo-noticia titulo="Darth Vader Contrata Devs"></titulo-noticia>
            <paragrafo-noticia paragrafo="Darth Vader procura desenvolvedores que saibam usar components"></paragrafo-noticia>
        `

        const style = document.createElement("style")
        style.textContent = `
            card-left{
                padding: 10px;
            
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `
        shadow.appendChild(style)
    }
}
customElements.define("card-left", CardLeft)

class CardRight extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
            <img src="assets/img/darth-vader.png" alt="darthinho" style="width: 300px;">    
        `
    }
}
customElements.define("card-right", CardRight)


//--------------- CARD ---------------

class CardNews extends HTMLElement {
    
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
            <card-left></card-left>
            <card-right></card-right>
        `
    }
}
customElements.define('card-news', CardNews)
