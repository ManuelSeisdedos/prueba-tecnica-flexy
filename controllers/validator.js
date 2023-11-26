const validatorFunc = (input) => {
    let errors = {validate: true}
    console.log(input)
    console.log(errors)
    if (!input.nombre) {
        errors.nombre = 'Se necesita un Nombre y Apellido'
    }
    if (!/^[a-zA-Z]+$/.test(input.name)){
        errors.nombre = "No puede contener caracteres especiales";
    }
    if (typeof input.nombre !== "string") {
        errors.nombre = "Solo debe contener letras";
    }
    if (/^[0-9]/.test(input.telefono) && input.telefono.length < 4) {
        errors.telefono = 'Se necesita un numero de telefono'
        
    }
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email) && input.email !== '') {
        errors.email = 'Se necesita un correo electronico.'
    }
    if (!input.contraseña && input.contraseña !== '' ) {
        errors.contraseña = 'Se necesita una contraseña'
    }
    if (input.contraseña.length < 8 && input.contraseña !== '') {
        errors.contraseña = 'La contraseña debe tener 8 caracteres.'
    }
    if (
        input.nombre &&
        input.telefono &&
        input.email &&
        input.contraseña &&
        input.contraseña.length >= 8
    ) {
        errors.validate = false
    }
    console.log(errors)
    return errors 

}

export default validatorFunc