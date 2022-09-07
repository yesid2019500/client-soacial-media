const { Router } = require('express')
const router = Router()

const { getEmpleados, createEmpleados, actualizarEmpleados, eliminarEmpleados, getOneEmpleado} = 
require('../controllers/empleados')

const { validarCampos } = require('../middlewares/validar-campos')

const { isDate } = require('../helpers/isDate')

const { check } =  require('express-validator')




router.get('/', getEmpleados)

router.post('/',
[   
   
    // check('otrosnombres','El otro nombre es oligatorio').not().isEmpty(),

    // check('apellido2','El segundo apellido es oligatorio').not().isEmpty(),
    // check('fecha', 'Fecha de inicio es obligatori').custom(isDate),
    // check('pais','El pais es oligatorio').not().isEmpty(),
    // check('cedula','La cedula es oligatorio').not().isEmpty(),
    // check('idempleado',' Numro de ID').not().isEmpty(),
   

   validarCampos
],

createEmpleados
 
 );

router.put('/:id', actualizarEmpleados)

router.get('/:id', getOneEmpleado)

router.delete('/:id', eliminarEmpleados)




module.exports = router;