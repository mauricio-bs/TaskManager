exports.isAdmin = (req, res, next) => {
    if(req.isAuthenticated() && req.user.isAdmin == 1){
        return next();
    }
    else{
        req.flash('error_msg', 'Somente administradores podem acessar esta pagina')
        res.redirect('/')
    }
}

exports.Authenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    else{
        req.flash('error_msg', 'voce precisa estar logado para acessar esta pagina')
        res.redirect('/')
    }
}