//''
const mainController = {
    index: function (req,res) {
        return res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
    },
    credits: function (req,res) {
        return res.send('Carmela Martínez Mori')
    }
};

module.exports = mainController;