"use server";

import { z } from "zod";

const TurnosForm = z.object({
    nombre: z.string({
        invalid_type_error: "Please select a customer.",
    }),
    apellido: z.string({
        invalid_type_error: "Please select a customer.",
    }),
    dni: z.string({
        invalid_type_error: "Please select a customer.",
    }),
    telefono: z.string({
        invalid_type_error: "Please select a customer.",
    }),
});

// NextAuth
export async function FormTurno(prevState, formData) {
    console.log("Entra aqui");
    try {
        // extrar todos los campos
        console.log(formData);
        const rawFormData = Object.fromEntries(formData.entries());
        console.log(rawFormData);

        // Validar Campos
        const _DatosValidados = TurnosForm.safeParse(rawFormData);

        // si se valida correctamente obtengo 'data'
        if (!_DatosValidados.success) {
            return {
                errors: _DatosValidados.error.flatten().fieldErrors,
                message: "Error, Al validar campos Zod",
            };
        }

        //Enviar datos a la base de datos

        console.log(_DatosValidados.data);

        return {
            message: "Todo Ok",
            errors: [],
        };
    } catch (error) {
        return {
            message: "Error, ",
            errors: [],
        };
    }
}
