const dbPlatos = require('../data/dbPlatos')

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            platos : dbPlatos
        })
    },
    detail : (req,res) => {

        let plato = dbPlatos.find(plato => plato.id === +req.params.id);

        return res.render('detalleMenu', {
            plato,
        })
    }
}