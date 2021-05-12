//lista de departamentos (Eletrônica, Mecanica, TI)
const mongoose = require("mongoose");

var departmente = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
    type: String,
    required: true,
  },
});

const department = mongoose.model("department", departmente);
module.exports = department;
