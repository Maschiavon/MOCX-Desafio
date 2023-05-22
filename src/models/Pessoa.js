import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        cpf: {type: String, required: true},
        idade: {type: Number},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

const pessoas = mongoose.model("pessoas", pessoaSchema)

export default pessoas;