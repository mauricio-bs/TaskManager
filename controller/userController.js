//Controller com funções do para gerenciamento do usuario
const Userdb = require('../model/user')
const bcrypt = require('bcryptjs')
const session = require('express-session')


//Cadastro de usuario
exports.newUser = (req, res) => {
    //Verificações
    var erros = []
    //Verifica se o campo nome possui conteudo
    if(!req.body.name || req.body.name == null || req.body.name == undefined){
        erros.push({texto: 'Nome inválido'})
    }
    //Verifica se o campo 8ID possui conteudo
    if(!req.body.id8 || req.body.id8 == null || req.body.id8 == undefined){
        erros.push({texto: '8ID inválido'})
    }
    if(req.body.id8 != Number){
        erros.push({texto: 'O campo 8ID deve conter apenas números'})
    }
    if(!req.body.department || req.body.department == null || req.body.department == undefined){
        erros.push({texto: 'Insira um departamento'})
    }
    if(req.body.password < 6){
        erros.push({texto: 'A senha deve conter no minim 6 caracteres'})
    }
    if(req.body.username > 4){
        erros.push({texto: 'O nomenewUser deve conter pelo menos 4 caracteres'})
    }
    else{
        Userdb.findOne({id8: req.body.id8}).then((usr) => {
            if(usr){
                req.flash('error_msg', 'Este usuario ja existe')
                res.redirect('/user/register')
            }
            else{
                const newUser = {
                    nome: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    department: req.body.department,
                    psswd: req.body.password
                }
    
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err){
                            req.flash('error_msg', 'Houve um erro durante o salvamento do usuario')
                            res.redirect('/')
                        }else{
                            newUser.password = hash
                            newUser.save().then(() => {
                                req.flash('success_msg', 'Usuario criado com sucesso!')
                                res.redirect('/')
                            })
                            .catch((err) => {
                                req.flash('error_msg', 'Houve um erro ao criar o usuario, tente novamente')
                                res.redirect('/user/register')
                            })
                        }
                    })
                })
            }
        })
    }
}

// exports.editUser = (req, res) => {
//     Userdb.findOne({_id: req.params.id8}).then((user) => {
        
//     })
// }