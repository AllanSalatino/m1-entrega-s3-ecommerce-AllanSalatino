class Produto {
    constructor(imagem, titulo, info, preco, id, secao){

        this.imagem = imagem
        this.titulo = titulo
        this.info = info
        this.preco = preco
        this.id = id
        this.secao = secao
    }
}

const produto1 = new Produto ("./assets/imagens/Men-Jacket-Front-Black__15466 1.png", "Lightweight Jacket", "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante.", "R$ 120,00", 0, "Camisetas")
const produto2 = new Produto ("./assets/imagens/image 1 (1).png", "Black Hat", "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que você coma batatas com estilo!", "R$ 40,00", 1, "Acessórios")
const produto3 = new Produto ("./assets/imagens/Surgical-Mask-Black__89554 1.png", "Mask", "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas.", "R$ 15,00", 2, "Acessórios")
const produto4 = new Produto ("./assets/imagens/Men-TShirt-Black-Front__70046 1.png", "T-Shirt", "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de alguma coisa que eu não sei.", "R$ 40,00", 3, "Camisetas")
const produto5 = new Produto ("./assets/imagens/mockup-a0dc2330__62146 1.png", "Short-Sleeve T-Shirt", "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso cepo de madeira.", "R$ 40,00", 4, "Camisetas")
const produto6 = new Produto ("./assets/imagens/mockup-9b9894f1__67347 1.png", "Champion Packable Jacket", "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliéster foi feita para você.", "R$ 150,00", 5, "Camisetas")

const arrProdutos = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5, 
    produto6]