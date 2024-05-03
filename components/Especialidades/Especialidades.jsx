"use client";
import React from "react";
import CucharaTenedor from "../icons/CucharaTenedor";
import useNerScreen from "@/hook/useNerScreen";

const tarjetasData = [
    {
        titulo: "Especialidad",
        descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ipsum quasi? Modi qui atque magnam neque repellendus vel nemo. Repudiandae, excepturi? Voluptatum porro sequi mollitia exercitationem, sit veritatis dolor rem?",
    },
    {
        titulo: "Especialidad",
        descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ipsum quasi? Modi qui atque magnam neque repellendus vel nemo. Repudiandae, excepturi? Voluptatum porro sequi mollitia exercitationem, sit veritatis dolor rem?",
    },
    {
        titulo: "Especialidad",
        descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ipsum quasi? Modi qui atque magnam neque repellendus vel nemo. Repudiandae, excepturi? Voluptatum porro sequi mollitia exercitationem, sit veritatis dolor rem?",
    },
    {
        titulo: "Especialidad",
        descripcion:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ipsum quasi? Modi qui atque magnam neque repellendus vel nemo. Repudiandae, excepturi? Voluptatum porro sequi mollitia exercitationem, sit veritatis dolor rem?",
    },
];

const Especialidades = () => {
    // const { elementRef, isNearScreen } = useNerScreen({
    //     distance: "0px",
    //     once: false,
    // });
    return (
        <div
            id="IdEspecialidades"
            className=" flex flex-col justify-center items-center gap-10 px-[5%] sm:px-0 "
        >
            {/* <p
                ref={elementRef}
                className={`w-full text-VerdeOscuro sm:text-[40px] text-[25px] text-center sm:items-start font-semibold ${
                    isNearScreen ? "showText" : "opacity-0"
                }`}
            >
                Especialidades
            </p> */}

            <div className="grilla ">
                {tarjetasData.map((item, index) => {
                    return (
                        <Tarjeta
                            key={index}
                            descripcion={item.descripcion}
                            titulo={item.titulo}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Especialidades;

function Tarjeta({ titulo, descripcion }) {
    const { elementRef, isNearScreen } = useNerScreen({
        distance: "0px",
        once: false,
    });

    return (
        <div
            ref={elementRef}
            className={`${isNearScreen ? "scale" : "opacity-0"}`}
        >
            <div
                className={`shadow-Animated bg-Aqua  rounded-[5px] flex flex-col justify-center items-center sm:px-10 px-5 sm:py-20 py-10 gap-5 `}
            >
                <div className="w-[50px] h-[50px] z-20">
                    <CucharaTenedor />
                </div>

                <p className="w-full text-VerdeOscuro sm:text-[40px] text-[25px] sm:items-start font-semibold text-center">
                    {titulo}
                </p>

                <p className="w-full text-stone-900 text-sm md:text-base lg:text-lg font-medium text-center">
                    {descripcion}
                </p>
            </div>
        </div>
    );
}
