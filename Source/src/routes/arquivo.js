const arquivos = require("../database/index");

const hardware= require("../models/hardware");
const hardwareTXT = require("../models/hardwareTXT");
const hardwareIMG = require("../models/hardwareIMG");
const hardwareLINK = require("../models/hardwareLINK");


const express = require('express');
const router = express.Router();

router.get("/arquivo/:nome", (req,res) => {
    const nome = req.params.nome;
    //console.log(nome);
    for(var i in arquivos){
        //console.log(arquivos[i].nome,nome);
        if(arquivos[i].nome===nome){
            return res.render("arquivo",{
                nome: arquivos[i].nome,
                conteudo: arquivos[i].conteudo,
                descricao: arquivos[i].descricao,
                preco: arquivos[i].preco,
                tipo: arquivos[i].tipo,
            });
        }
    }
    //console.log("não tem");
    return res.render("index",{
        arquivos:arquivos.map(v => v.nome),
    });
});

router.get("/", (req,res)=>{

    const nomes = arquivos.map(v => v.nome);

    return res.render("index",{
        arquivos:nomes,
    });
});

router.post("/", (req,res)=>{

    const {nome,conteudo,descricao,tipo,preco} = req.body;

    if(tipo==="TXT"){
        const arquivo = new hardwareTXT(nome,conteudo,descricao,preco);
        arquivos.push(arquivo);
    }else{
        if(tipo==="IMG"){
            const arquivo = new hardwareIMG(nome,conteudo,descricao,preco);
            arquivos.push(arquivo);
        }else{
            if(tipo === "LINK"){
                const arquivo = new hardwareLINK(nome,conteudo,descricao,preco);
                arquivos.push(arquivo);
            }else{
                    const arquivo = new hardware(nome);
                    arquivos.push(arquivo);
            }

        }
    }
    const nomes = arquivos.map(v => v.nome);

    return res.render("index",{
        arquivos:nomes,
    });
});

module.exports = router;