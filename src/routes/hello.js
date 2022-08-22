const router = require('express').Router();

//Endpoint 1:
router.route('/').get((req,res) => {
    msg = 'Hello ${req.query.name || "World"} from get request! ';
    res.json({msg}); 
});

//Endpoint 2:
router.route('/:idioma').get((req,res) => {
    switch(req.params.idioma){
        case "espanol":
            msg = "¡Hola mundo!"
            break;
        case "ingles":
            msg = "Hello world!"
            break;
        case "frances":
            msg = "Bonjour Monde!!"
            break;
    }
    res.json({msg});
})

//Endpoint 3:
router.route('/').post((req,res) => {
    let result = req.body.a + req.body.b;
    res.json({result});
})

module.exports = router;