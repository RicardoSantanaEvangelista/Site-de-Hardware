const Arquivo = require("./hardware");

module.exports = class ArquivoIMG extends Arquivo{
    constructor(nome,conteudo,descricao, preco){
        super(nome);
        this.conteudo = conteudo;
        this.preco = preco;
        this.descricao = descricao;
        this.tipo = "LINK";
    }
}