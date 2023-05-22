import pessoas from "../models/Pessoa.js";

class PessoaController{

    static listarPessoas = (req, res) => {
        pessoas.find((err, pessoas) => {
            res.status(200).json(pessoas);
        })
    }

    static listarPessoaPorId = (req, res) => {
        const id = req.params.id;

        pessoas.findById(id, (err, pessoas) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id da Pessoa não localizado.`});
            } else {
                res.status(200).send(pessoas);
            }

        })
    }

    static cadastrarPessoa = (req, res) => {
        let pessoa = new pessoas(req.body);
        let cpf = req.body.cpf

        pessoa.save((err) => {

            if(err){
                res.status(500).send({menssage: `${err.menssage} - falha ao cadastrar Pessoa.`})
            } else {
                res.status(201).send(pessoa.toJSON())
            }
        })
    }

    static atualizarPessoa = (req, res) => {
        const id = req.params.id;

        pessoas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Pessoa atualizado com Sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirPessoa = (req, res) => {
        const id = req.params.id;

        pessoas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Pessoa removido com sucesso'})
            } else {
                res.status(500).send({message: err.menssage})
            }
        })
    }
}

export default PessoaController;