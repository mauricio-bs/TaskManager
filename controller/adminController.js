const ColabDB = require("../model/colaborator");
const departmentDB = require("../model/department");

exports.regColab = (req, res) => {
  var erros = [];

  if (!req.body.name || req.body.name == null || req.body.name == undefined) {
    erros.push({ texto: "Nome inválido" });
  }
  if (
    !req.body.department ||
    req.body.department == null ||
    req.body.department == undefined
  ) {
    erros.push({ texto: "Selecione um departamento" });
  }
  if (
    !req.body.company ||
    req.body.company == null ||
    req.body.company == undefined
  ) {
    erros.push({ texto: "Selecione uma empresa" });
  }
  if (
    !req.body.responsability ||
    req.body.responsability == null ||
    req.body.responsability == undefined
  ) {
    erros.push({ texto: "Selecione um cargo" });
  } else {
    const newColab = {
      name: req.body.name,
      company: req.body.company,
      department: req.body.department,
      responsability: req.body.responsability,
    };

    newColab
      .save()
      .then(() => {
        req.flash("success_msg", "Colaborador cadastrado com sucesso!");
        res.redirect("/colaborators");
      })
      .catch((err) => {
        req.flash(
          "error_msg",
          "Houve um erro ao salvar o colaborador, tente novamente"
        );
        res.redirect("/colaborators");
      });
  }
};

exports.regDP = (req, res) => {
  var erros = [];

  if (!req.body.name || req.body.name == null || req.body.name == undefined) {
    erros.push({ texto: "Insira um nome" });
  }
  if (
    !req.body.nickname ||
    req.body.nickname == null ||
    req.body.nickname == undefined
  ) {
    erros.push({
      texto: "Insira o acrônimo do departamento. exp: UV, UC, EI, FM...",
    });
  } else {
    const newDP = {
      name: req.body.name,
      nickname: req.body.nickname,
    };

    newDP
      .save()
      .then(() => {
        req.flash("success_msg", "Departamento criado");
        res.redirect("admin/departments");
      })
      .catch((err) => {
        req.flash("error_msg", "Houve um erro ao criar o departamento");
        console.log(err);
        res.redirect("admin/departments");
      });
  }
};
