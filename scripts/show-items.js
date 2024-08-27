import listaMedicamentos from "../database/remedios.js";
import listaCosmeticos from "../database/cosmeticos.js";

console.log(document.querySelector("nav").parentElement)


for(let n = 0; n < listaMedicamentos.length; n++) {
    
    let card = document.createElement("div")
    card.classList.add("card-item")
    
    let img = document.createElement("img")
    img.classList.add("img-card")
    img.src = `../assets/img/remedios/${listaMedicamentos[n].img}`
    img.alt = `${listaMedicamentos[n].nome}`

    let nome = document.createElement("p")
    nome.classList.add("nome-item")
    nome.innerHTML = `${listaMedicamentos[n].nome}`

    let preco = document.createElement("p")
    preco.classList.add("preco-item")
    preco.innerHTML = `R$ ${listaMedicamentos[n].preco}`

    let button = document.createElement("button")
    button.classList.add("button-add")
    button.innerHTML = "Adicionar"
    button.setAttribute("onclick", "adicionar(this)")

    let container = document.createElement("div")
    container.classList.add("container-input")

    let span1 = document.createElement("span")
    span1.classList.add("material-symbols-outlined")
    span1.classList.add("icon-header")
    span1.setAttribute("onclick", "subtrair(this)")
    span1.innerHTML = "Remove"

    let input = document.createElement("input")
    input.type = "number"
    input.value = 1
    input.min = 1
    input.disabled = true
    input.classList.add("input-qntd")
    input.name = "quantidade"
    input.id = 'quantidade'
    input.placeholder = "1"

    let span2 = document.createElement("span")
    span2.classList.add("material-symbols-outlined")
    span2.classList.add("icon-header")
    span2.setAttribute("onclick", "somar(this)") 
    span2.innerHTML = "add"

    container.appendChild(span1)
    container.appendChild(input)
    container.appendChild(span2)

    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(preco)
    card.appendChild(button)
    card.appendChild(container)

    console.log(card)
    let section = document.getElementById("container-remedios")
    section.appendChild(card)
    
}

for(let n = 0; n < listaCosmeticos.length; n++) {
    
    let card = document.createElement("div")
    card.classList.add("card-item")
    
    let img = document.createElement("img")
    img.classList.add("img-card")
    img.src = `../assets/img/cosmeticos/${listaCosmeticos[n].img}`
    img.alt = `${listaCosmeticos[n].nome}`

    let nome = document.createElement("p")
    nome.classList.add("nome-item")
    nome.innerHTML = `${listaCosmeticos[n].nome}`

    let preco = document.createElement("p")
    preco.classList.add("preco-item")
    preco.innerHTML = `R$ ${listaCosmeticos[n].preco}`

    let button = document.createElement("button")
    button.classList.add("button-add")
    button.innerHTML = "Adicionar"
    button.setAttribute("onclick", "adicionar(this)")

    let container = document.createElement("div")
    container.classList.add("container-input")

    let span1 = document.createElement("span")
    span1.classList.add("material-symbols-outlined")
    span1.classList.add("icon-header")
    span1.setAttribute("onclick", "subtrair(this)")
    span1.innerHTML = "Remove"

    let input = document.createElement("input")
    input.type = "number"
    input.value = 1
    input.min = 1
    input.disabled = true
    input.classList.add("input-qntd")
    input.name = "quantidade"
    input.id = 'quantidade'
    input.placeholder = "1"

    let span2 = document.createElement("span")
    span2.classList.add("material-symbols-outlined")
    span2.classList.add("icon-header")
    span2.setAttribute("onclick", "somar(this)") 
    span2.innerHTML = "add"

    container.appendChild(span1)
    container.appendChild(input)
    container.appendChild(span2)

    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(preco)
    card.appendChild(button)
    card.appendChild(container)

    console.log(card)
    let section = document.getElementById("container-cosmeticos")
    section.appendChild(card)
    
}
/*
            <div class="card-item">
                <img class="img-card" src="../assets/img/remedios/amoxilina.png" alt="amoxilina">
                <p class="nome-item">Amoxilina</p>
                <p class="preco-item">R$ 25,99</p>
                <button onclick="adicionar()" class="button-add">Adicionar</button>
                <div class="container-input">
                    <span onclick="subtrair()" class="material-symbols-outlined icon-header">
                        Remove
                    </span>
                    <input value="1" disabled min="1" class="input-qntd" type="number" name="quantidade" id="quantidade" placeholder="1">
                    <span onclick="somar()" class="material-symbols-outlined icon-header add">
                        add
                    </span>
                </div>
            </div>
*/ 