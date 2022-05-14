let express = require('express'); // dependencia express
let router = express.Router(); // instanciación del router

router.get('/person',(req, res)=> {
    res.send('Has solicitado el listado de personas');
});

module.exports = router;