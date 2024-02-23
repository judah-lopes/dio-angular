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
            const newsAuthor = document.createElement("span")
            newsAuthor.textContent = `By ${this.getAttribute("author") || 'Anonymous'}` 

            const newsTitle = document.createElement("h1")
            newsTitle.textContent = this.getAttribute("title")
            
            const newsContent = document.createElement("p")
            newsContent.textContent = this.getAttribute("content")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right")
            const newsImage = document.createElement("img")
            newsImage.src = this.getAttribute("img-src") || "assets/img/default-placeholder.png"

        componentRoot.appendChild(cardLeft)
            cardLeft.appendChild(newsAuthor)
            cardLeft.appendChild(newsTitle)
            cardLeft.appendChild(newsContent)

        componentRoot.appendChild(cardRight)
            cardRight.appendChild(newsImage)

        return componentRoot
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
            card-news{
                display: flex; 
                justify-content: center;
            }
            .card{
                margin: 30px;
                width: 80%;
                height: 180px;
                
                display: flex;
                justify-content: space-between;
            
                box-shadow: 10px 10px 16px 4px #000000a6;
                -webkit-box-shadow: 10px 10px 16px 4px #000000a6;
                -moz-box-shadow: 10px 10px 16px 4px #000000a6;
            }
            
            .card-left{
                padding: 10px;
            
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .card-left span{
                font-weight: 400;
            }
            
            .card-left h1{
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card-left p{
                color: gray;
            }

            .card-right img{
                height: 100%;

            }
        `

        return style
    }

}
customElements.define("card-news", CardNews)