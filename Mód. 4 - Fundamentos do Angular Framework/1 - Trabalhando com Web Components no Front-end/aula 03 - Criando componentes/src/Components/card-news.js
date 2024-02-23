class CardNews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }

    build(){
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card-left")
            const newsAutor = document.createElement("span")
            const newsTitle = document.createElement("h1")
            const newsContent = document.createElement("p")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right")
            const newsImage = document.createElement("img")

        componentRoot.appendChild(cardLeft)
            cardLeft.appendChild(newsAutor)
            cardLeft.appendChild(newsTitle)
            cardLeft.appendChild(newsContent)

        componentRoot.appendChild(cardRight)
            cardRight.appendChild(newsImage)


        return componentRoot
    }

    styles(){}

}

customElements.define("card-news", CardNews)