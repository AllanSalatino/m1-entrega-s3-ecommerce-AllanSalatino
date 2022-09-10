const body = document.querySelector("body")
const mainContainer = document.createElement("main")
mainContainer.classList.add("containerCards")
body.appendChild(mainContainer)

function criaCards(){
    
    arrProdutos.forEach((elem) => {
        const divBox = document.createElement("div")
        divBox.classList.add("boxCard")

        divBox.appendChild(header(elem))
        divBox.appendChild(main(elem))
        divBox.appendChild(footer(elem))

        mainContainer.appendChild(divBox)
    })
}

function header(elem){
    const sectionHeader = document.createElement("section")
    sectionHeader.classList.add("headerCard")

    const img = document.createElement("img")
    img.classList.add("imgCard")
    img.src = elem.imagem

    sectionHeader.append(img)

    return sectionHeader
}

function main(elem){
    const sectionMain = document.createElement("section")
    sectionMain.classList.add("mainCard")

    const spanSecao = document.createElement("span")
    spanSecao.classList.add("secaoCard")
    spanSecao.innerText = elem.secao

    const h3 = document.createElement("h3")
    h3.classList.add("tituloCard")
    h3.innerText = elem.titulo

    const pInfo = document.createElement("p")
    pInfo.classList.add("infoCard")
    pInfo.innerText = elem.info

    sectionMain.append(spanSecao, h3, pInfo)

    return sectionMain
}

function footer(elem) {
    const sectionFooter = document.createElement("section")
    sectionFooter.classList.add("footerCard")

    const spanCard = document.createElement("span")
    spanCard.classList.add("precoCard")
    spanCard.innerText = elem.preco

    const bt_addCarrinho = document.createElement("button")
    bt_addCarrinho.classList.add("bts_addCarrinho")
    bt_addCarrinho.innerText = "Adicionar no carrinho"

    sectionFooter.append(spanCard, bt_addCarrinho)

    return sectionFooter
}

criaCards(arrProdutos)