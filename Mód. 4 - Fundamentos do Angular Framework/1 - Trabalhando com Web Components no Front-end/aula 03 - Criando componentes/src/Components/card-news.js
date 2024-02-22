class CardNews extends HTMLElement {
    
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = 
        `
            <div class="card">
                <div class="card-left">
                    <span>By Pedro Judah</span>
                    <h1>Darth Vader Contrata Devs</h1>
                    <p>Darth Vader procura desenvolvedores que saibam usar components</p>
                </div>
                <div class="card-right">
                    <img src="assets/img/darth-vader.png" alt="darthinho" style="width: 300px;">
                </div>
            </div>
        `
    }
}

// definir elemento customizado (nome-da-tag, oQueVaiSerATag)
customElements.define('card-news', CardNews)