import carrinho from "./qntd-items.js";
import listaMedicamentos from "../database/remedios.js";
import listaCosmeticos from "../database/cosmeticos.js";

var carrinho_teste = [
    { nome: "Ibuprofeno", preco: 10.99, img: "ibuprofeno.png" },
    { nome: "Paracetamol", preco: 8.99, img: "paracetamol.png" },
    { nome: "Amoxicilina", preco: 25.99, img: "amoxilina.png" },
    { nome: "Base de Maquiagem Natura", preco: 25.99, img: "base-de-maquiagem-natura.jpeg" }
]
console.log(carrinho_teste)

for (let i = 0; i < carrinho_teste.length; i++) {

    let linha = document.createElement("div")
    linha.classList.add("item")

    let left_item = document.createElement("div")
    left_item.classList.add("left-item")

    let img = document.createElement("img")
    img.classList.add("photo-item")

    if (percorrer_remedios(carrinho_teste[i])) {
        img.src = `../assets/img/remedios/${carrinho_teste[i].img}`
        console.log('é remédio')
    } else {
        img.src = `../assets/img/cosmeticos/${carrinho_teste[i].img}`
        console.log('não é remédio')
    }
    
}

function percorrer_remedios(item) {

    for (let remedio = 0; listaMedicamentos.length; remedio++) {
        if (item.img == listaMedicamentos[remedio].img) {
            console.log('é remédio')
            return true
        }
    }

    return false
}
/*
            <div class="item">
                <div class="left-item">
                    <img class="photo-item" src="../assets/img/remedios/amoxilina.png" alt="foto amoxilina">
                    <p class="name-item">nome do produto</p>
                </div>

                <div class="right-item">

                    <p class="price-item">Preço</p>

                    <div class="container-input">
                        <span class="material-symbols-outlined">
                            Remove
                        </span>
                        <input class="input-qntd" type="number" name="quantidade" id="quantidade" placeholder="1">
                        <span class="material-symbols-outlined add">
                            add
                        </span>
                    </div>
                    <span class="material-symbols-outlined delete">
                        Delete
                    </span>

                </div>
            </div>
*/