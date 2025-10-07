"use strict";
import Joi from "joi";

export const uservalidation = Joi.object({
email: Joi.string().email().required().messages({
    "string.empty": "El email no puede estar vacio.",
    "string.email": "El email debe tener un formato valido.",
    "any.required": "El correo electrónico es obligatorio.",
}),

password: Joi.string()
.min(6)
.max(50)
.pattern(/^(?=.*\d)[\S]{6,50}$/)
.required()
.messages({
    "string.empty": "La contraseña no puede estar vacía.",
    "any.required": "La contraseña es obligatoria.",
    "string.base": "La contraseña debe ser una cadena de texto.",
    "string.min": "La contraseña debe contener minimo 6 caracteres.",
    "string.max": "La contraseña no puede contener mas de 50 caracteres.",
    "string.pattern.base": "La contraseña debe incluir al menos un número y no contener espacios vacios.",
}),

})
.unknown(false)
.messages({
    "object.unknown": "No se permiten campos adicionales.",
});