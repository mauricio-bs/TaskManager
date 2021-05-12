//tabela de empresas
const mongoose = require("mongoose");

var comp = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    name: String,
    required: true,
  },
  department: {
    type: mongoose.SchemaTypes,
    ref: "department",
  },
});

const company = ("company", comp);
module.exports = company;
