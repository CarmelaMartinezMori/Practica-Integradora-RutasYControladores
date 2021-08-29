//''
const data = require('../data/science');

const heroeController = {
    index: function (req,res) {
        return res.send(data.lista);
    },
    show: function (req,res) {
        let id = req.params.id;
        let resultado = '';
        if (id > data.lista.length) {
            let resultado = 'No encontramos al científico indicado. Por favor, elija otro id';
            return res.send(resultado)
        } else {
            for (let i = 0; i < data.lista.length; i++) {
                if (id == data.lista[i].id) {
                    resultado = `Hola, mi nombre es ${data.lista[i].nombre} y soy ${data.lista[i].profesion}`;
                    return res.send(resultado)
                }
            }
        }
    },
    bio: function (req,res) {
        let id = req.params.id;
        let ok = req.params.ok;
        let resultado = '';
        if (id > data.lista.length ) {
            resultado = 'No encontramos al científico indicado para mostrar su biografía';
            return res.send(resultado)
        } else {
            if (ok == "" || ok !== "ok") {
                for (let i = 0; i < data.lista.length; i++) {
                    resultado = ` ${data.lista[i].nombre} : Lamento que no desees saber más de mi :(`;
                    return res.send(resultado)
                }
            } else {
                for (let i = 0; i < data.lista.length; i++) {
                    resultado = `Nombre: ${data.lista[i].nombre} - Reseña: ${data.lista[i].resenia}`;
                    return res.send(resultado)
                }
            }
        }
    }
};

module.exports = heroeController;