"use client";
import React from "react";
import Input from "../Input/Input";
import { FormTurno } from "@/lib/actions";
import { useFormState } from "react-dom";

import { IoLogoWhatsapp } from "react-icons/io";
import useNerScreen from "@/hook/useNerScreen";
const estadoinicial = {
    message: "",
    errors: [],
};

// Obtener la fecha actual
const fechaHoy = new Date();
// Formatear la fecha como YYYY-MM-DD (formato requerido para el input date)
const fechaInput = fechaHoy.toISOString().split("T")[0];

const Turnos = () => {
    const [state, dispatch] = useFormState(FormTurno, estadoinicial);

    const { elementRef, isNearScreen } = useNerScreen({
        distance: "0px",
        once: false,
    });

    return (
        <section
            id="IdTurno"
            ref={elementRef}
            className={`w-full sm:h-auto h-[100svh]  flex flex-col justify-center  items-center px-[5%] sm:px-0 ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <p className="w-full mb-5 text-VerdeOscuro sm:text-[40px] text-[25px] text-center sm:items-start font-semibold">
                Turnos
            </p>

            <form
                action={dispatch}
                className="w-[100%] sm:w-[100%] md:w-[85%]  lg:w-[60%] xl:w-[50%]   flex flex-col justify-center items-center gap-7 "
            >
                <Input palabra="Nombre" name="nombre" />
                <Input palabra="Apellido" name="apellido" />
                <Input palabra="DNI" name="dni" type="number" />
                <Input palabra="Telefono" name="telefono" type="number" />

                <div className=" w-full flex flex-row justify-center items-center gap-5">
                    <Input
                        palabra="fecha"
                        name="fecha"
                        type="date"
                        defaultValue={fechaInput}
                    />
                    <select
                        className="w-full h-full p-[10px] font-[600] text-VerdeOscuro"
                        name=""
                        id=""
                    >
                        <option value="1">1:00hs</option>
                        <option value="1">1:00hs</option>
                        <option value="1">1:00hs</option>
                        <option value="1">1:00hs</option>
                        <option value="1">1:00hs</option>
                        <option value="1">1:00hs</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="text-VerdeOscuro sm:text-2xl text-xl cursor-pointer mt-3"
                >
                    <div className=" sm:h-[50px] h-[30px] sm:px-[19px] px-[10px] justify-center items-center gap-2.5 inline-flex">
                        <IoLogoWhatsapp className="text-Verde text-3xl" />

                        <p className=" font-semibold">Enviar</p>
                    </div>
                </button>
            </form>
        </section>
    );
};

export default Turnos;
