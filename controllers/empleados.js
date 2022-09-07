const { response} =  require('express')
// el modelo
const Empleado = require('../models/Empleados')

// controladores de los eventos

const getEmpleados = async (req,res = response) => {

    const empleados = await Empleado.find()
                // .populate("user","name")

    res.json({
        ok:true,
        empleados,
       
    })
   
}

const getOneEmpleado = async (req,res = response) => {

    const empleados = await Empleado.findById()
                // .populate("user","name")

    res.json({
        ok:true,
        empleados,
       
    })

    // if (result.length === 0) 
    //         return res.status(404).json({
    //             message: "TAREA NO ENCONTRADA"
    //         })
         
    //     res.json(result[0])
   
}




// POST
const createEmpleados = async (req,res = response) => {

    const { name, profile, likes, date, comments, picture_commet, tags } = req.body

    // if (nombre.length > 20) {
    //     return res.status(404).json({
    //         ok: false,
    //         msg:'El nombre no debe ser mayor a 20 caracteres'
    //     })
    // }   

    // if (idempleado === idempleado) {
    //     return res.status(404).json({
    //         ok: false,
    //         msg:'Ya existe un usuario con ese numeroID no se pude ingresar...'
    //     })
    // }   

    //   console.log(req.body)
     const empleado = new Empleado(req.body)
    //  console.log(empleado)

     try {

        // let validarCedula = await Empleado.findOne({cedula})

        // if (validarCedula) {
        //     return res.status(404).json({
        //         ok: false,
        //         msg:'Un usuario existe con la misma cedula'
        //     })
        //  }

        // empleado.user = req.uid
        // console.log(req.uid)

     const eventoGuardado =  await empleado.save()
        res.json({
            ok: true,
            empleados:eventoGuardado
        })
         
     } catch (error) {
         console.log('The error in query is', error)
       res.status(500).json({
           ok:false,
           msg:"Hable con el administrador"
       })  
     }

}


const actualizarEmpleados = async (req,res = response) => {


// const uid = req.body.cedula;
// console.log(uid)

const eventoId = req.params.id
console.log(eventoId)


try {

    const evento = await Empleado.findById(eventoId)

    // if (!evento) {
    //    return res.status(404).json({
    //         ok:false,
    //         msg:"Evento no existe con ese ID"
    //     })
    // }

    // if (evento.cedula.toString() !== uid) {
    //     return res.status(401).json({
    //         ok:false,
    //         msg:"No tiene privilegio de editar este evento"
    //     })  
    // }

    const nuevoEvento = {
        ...req.body,
        cedula:uid
    }


const eventoActualizado = await Empleado.findByIdAndUpdate(eventoId,{new:true})

if (!eventoActualizado.length === 0) 
    return res.status(404).json({
        ok:false,
        msg: "TAREA NO ENCONTRADA PARA ACTUALIZAR"
    })

res.json({
    ok:true,
    empleados:eventoActualizado
})


    
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok:false,
        msg: "Hable con el administrador"
    })
}

}


const eliminarEmpleados = async (req,res = response) => {

const uid = req.uid;
const eventoId = req.params.id

try {

    const evento = await Empleado.findById(eventoId)

    if (!evento) {
      return res.status(404).json({
            ok:false,
            msg:"Evento no existe con ese ID"
        })
    }

    // if (evento.user.toString() !== uid) {
    //     return res.status(401).json({
    //         ok:false,
    //         msg:"No tiene privilegio de eliminar este evento"
    //     })  
    // }


 await Empleado.findByIdAndDelete(eventoId)
res.json({
    ok:true,
})
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok:false,
        msg: "Hable con el administrador"
    })
}


}




module.exports = {
    getEmpleados,
    createEmpleados,
    actualizarEmpleados,
    eliminarEmpleados,
    getOneEmpleado,
    getOneEmpleado
}   