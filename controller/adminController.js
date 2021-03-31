

exports.regColab = (req, res) => {
    
    var erros = []

    if(!req.body.name || req.body.name == null || req.body.name == undefined){
        erros.push({texto: 'Nome inválido'})
    }
    if(!req.body.department || req.body.department == null || req.body.department == undefined){
        erros.push({texto: 'Selecione um departamento'})
    }
    if(!req.body.company || req.body.company == null || req.body.company == undefined){
        erros.push({texto: 'Selecione uma empresa'})
    }
    if(!req.body.responsability || req.body.responsability == null || req.body.responsability == undefined){
        erros.push({texto: 'Selecione uma empresa'})
    }
    else{
        Userdb.findOne({id8: req.body.id8}).then((usr) => {
            if(usr){
                req.flash('error_msg', 'Este usuario ja existe')
                res.redirect('/user/register')
            }
            else{
                const newColab = {
                    nome: req.body.name,
                    company: req.body.company,
                    department: req.body.department,
                    responsability: req.body.responsability
                }
                
                newColab.save().then(() => {
                    req.flash('success_msg', 'Colaborador cadastrado com sucesso!')
                    res.redirect('/colaborators')
                })
                .catch((err) => {
                    req.flash('error_msg', 'Houve um erro ao salvar o colaborador, tente novamente')
                    res.redirect('/colaborators')
                })
            }
        })
    }
}