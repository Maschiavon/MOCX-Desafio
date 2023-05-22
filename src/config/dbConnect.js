import mongoose from "mongoose"

//mongoose.connect("mongodb+srv://matheuschiavon2208:2Igt4TEgZVjew4xz@alura.av6oqwh.mongodb.net/alura-node");
mongoose.connect("mongodb+srv://matheuschiavon2208:pVzdYm7fnfmREkud@mocxdb.gnxec4p.mongodb.net/mocx-desafio");

let db = mongoose.connection;

export default db;
