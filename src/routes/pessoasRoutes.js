import express from "express";
import PessoaController from "../controllers/pessoasController.js";

const router = express.Router();

router
    .get("/pessoa", PessoaController.listarPessoas)
    .get("/pessoa/:id", PessoaController.listarPessoaPorId)
    .post("/pessoa", PessoaController.cadastrarPessoa)
    .put("/pessoa/:id", PessoaController.atualizarPessoa)
    .delete("/pessoa/:id", PessoaController.excluirPessoa)

export default router;