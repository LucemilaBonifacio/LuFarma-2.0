let carrinho = []

function adicionar(botao) {
    let card = botao.closest(".card-item")

    let img_item = card.querySelector("img.img-card").src
    let nome_item = card.querySelector("p.nome-item").innerHTML
    let preco_item = card.querySelector("p.preco-item").innerHTML

    const selecionado = {
        nome: nome_item,
        preco: preco_item,
        img: img_item
    }

    carrinho.push(selecionado)

    let button = botao
    let container_input = card.querySelector("div.container-input")
    
    button.classList.add("invisible")
    container_input.classList.add("visible")
} 

function subtrair(botao) {
    
    let card = botao.closest(".card-item")
    let input = card.querySelector("input#quantidade")

    let img_item = card.querySelector("img.img-card").src
    let nome_item = card.querySelector("p.nome-item").innerHTML
    let preco_item = card.querySelector("p.preco-item").innerHTML

    const selecionado = {
        nome: nome_item,
        preco: preco_item,
        img: img_item
    }

    if (Number(input.value) <= 1) {
        let botao_add = card.querySelector("button.button-add")
        let container_input = card.querySelector("div.container-input")
        botao_add.classList.remove("invisible")
        container_input.classList.remove("visible")

        let apagado = false
        let i = 0
        while (apagado == false) {
            if (carrinho[i].nome == selecionado.nome) {
                carrinho.splice(i, 1)
                apagado = true
            }
            i += 1
        }
    } else {

        let apagado = false
        let i = 0
        while (apagado == false) {
            if (carrinho[i].nome == selecionado.nome) {
                carrinho.splice(i, 1)
                apagado = true
            }
            i += 1
        }
    
        input.value = Number(input.value) - 1
    }
}

function somar(botao) {
    
    let card = botao.closest(".card-item")
    let input = card.querySelector("input#quantidade")

    let img_item = card.querySelector("img.img-card").src
    let nome_item = card.querySelector("p.nome-item").innerHTML
    let preco_item = card.querySelector("p.preco-item").innerHTML

    const selecionado = {
        nome: nome_item,
        preco: preco_item,
        img: img_item
    }

    carrinho.push(selecionado)
    input.value = Number(input.value) + 1
}

export default carrinho;