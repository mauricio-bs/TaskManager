//Rotas administradoras
const express = require("express");
const adm = express.Router();
//Controller
const adminCont = require("../controller/adminController");
//Autenticação
const { isAdmin } = require("../helpers/Authen");

//Colaboradores

//Pagina lista de colaboradores
adm.get("/colaborators", (req, res) => {
  res.render("admin/colaborator/colaborators");
});

//Registrar colaboradores
adm.get("/colaborators/register", (req, res) => {
  res.render("admin/colaborator/regColaborator");
});

adm.post("/colaborators/register", adminCont.regColab);

//Editar colaborador
adm.get("/colaborators/editColab/:_id", (req, res) => {
  res.render("");
});

//Buscar colaborador
// adm.get('/colaborators/search/:id8', isAdmin, admin.searchColab)

//

//Departamentos
//Pagina de departamentos
adm.get("/departments", (req, res) => {
  res.render("admin/dp/departments");
});

//Cadastro de departamentos
adm.get("/departments/new-department", (req, res) => {
  res.render("admin/dp/regDepartment");
});

adm.post("/departments/new-department", adminCont.regDP);

//Empresas

module.exports = adm;
