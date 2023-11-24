import React, { useState } from 'react'

const validatorFunc = (input) => {
    let errors = {validate: true}
    if (!input.name) {
        errors.name = 'Se necesita un Nombre y Apellido'
    }
    if (!/^[a-zA-Z]+$/.test(input.name)){
        errors.name = "No puede contener caracteres especiales";
    }
    if (typeof input.name !== "string") {
        errors.name = "Solo debe contener letras";
    }
    if (!input.telefono) {
        errors.telefono = 'Se necesita un numero de telefono'
    }
    if (typeof input.telefono !== 'number') {
        errors.telefono = 'Solo puede contener carteres numericos'
    }
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email)) {
        errors.email = 'Se necesita un correo electronico.'
    }
    if (!input.contraseña) {
        errors.contraseña = 'Se necesita una contraseña'
    }
    if (input.contraseña.length < 8) {
        errors.contraseña = 'La contraseña debe tener 8 caracteres.'
    }
    if (
        input.name &&
        input.telefono &&
        input.email &&
        input.contraseña &&
        typeof input.name === 'string' &&
        typeof input.telefono === 'number' &&
        input.contraseña.length >= 8
    ) {
        errors.validate = false
    }
    return errors 
}