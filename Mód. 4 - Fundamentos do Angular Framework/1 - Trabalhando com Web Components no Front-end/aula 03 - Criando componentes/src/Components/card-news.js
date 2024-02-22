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
        const style = document.createElement("style")
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card-news{
            width: 80%;
            
            display: flex;
            justify-content: space-between;
        
            box-shadow: 14px 10px 16px -7px rgba(0,0,0,0.55);
            -webkit-box-shadow: 14px 10px 16px -7px rgba(0,0,0,0.55);
            -moz-box-shadow: 14px 10px 16px -7px rgba(0,0,0,0.55);
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
        `

        shadow.appendChild(style)
    }
}

customElements.define('card-news', CardNews)