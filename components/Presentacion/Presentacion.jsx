"use client";
import React from "react";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import useNerScreen from "@/hook/useNerScreen";

import Instagram from "../svg/instagram";
import Facebook from "../svg/facebook";
import Linkedin from "../svg/linkedin";

const Presentacion = () => {
    const { isNearScreen, elementRef } = useNerScreen({
        distance: "0px",
        once: false,
    });

    return (
        <div
            className={`w-full h-[100svh] flex flex-col justify-center items-center px-[5%] sm:px-0 `}
        >
            <div
                className={`w-full h-full py-[30px] flex flex-col-reverse lg:flex-row justify-center items-center sm:gap-0 gap-5 ${
                    isNearScreen ? "scale" : " opacity-0"
                }`}
            >
                <div
                    ref={elementRef}
                    className="w-full sm:h-full h-auto flex flex-col sm:justify-center justify-start items-center sm:gap-[30px] gap-[10px] "
                >
                    <div className="w-full text-VerdeOscuro sm:text-[40px] text-[25px] sm:items-start font-semibold ">
                        <p className="flex justify-center sm:justify-start">
                            Hola, soy una
                        </p>
                        <p className="flex justify-center sm:justify-start">
                            Nutricionista kim.
                        </p>
                    </div>
                    <div className="w-full text-stone-900 text-sm md:text-base lg:text-lg font-medium">
                        <p className="flex justify-center sm:justify-start sm:text-start text-center ">
                            Nutricionista com mais de 10 anos de experiência
                            graduada pelo Centro Universitário Metodista Ipa e
                            Pós graduada em nutrição esportiva funcional pela
                            universidade Unisinos.
                        </p>
                    </div>

                    <Link
                        href={"#IdTurno"}
                        className="jello-horizontal text-stone-900 sm:text-2xl text-xl font-normal cursor-pointer sm:h-[50px] h-[30px] sm:px-[25px] px-[10px] bg-Verde rounded-lg justify-center items-center gap-2.5 inline-flex"
                    >
                        Turnos
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-[30px] ">
                    {/* Circulo */}
                    <div className=" sm:w-[300px] lg:w-[400px] w-[250px] sm:h-[300px] lg:h-[400px] h-[250px]  relative">
                        <div className="w-[93%] h-[93%] left-[92%] top-[10%] absolute origin-top-left rotate-90 bg-red-600 bg-opacity-0 rounded-full border-4 border-gray-200" />
                        <div className="w-[93%] h-[93%] left-[10%] top-[3%] absolute bg-red-600 bg-opacity-0 rounded-full border-4 border-gray-200" />
                        <Image
                            className=" shadow-xl w-[100%] h-[100%] top-0 absolute rounded-full  object-cover"
                            loading="lazy"
                            width={800}
                            height={800}
                            src="/perfil.png"
                        />
                    </div>

                    {/* Redes */}
                    <div className=" flex flex-row justify-center items-center gap-5">
                        <Link
                            href={"/#"}
                            className=" text-Verde jello-horizontal"
                        >
                            <Instagram className="sm:w-[3.2rem] sm:h-[3.2rem] w-[2.2rem] h-[2.2rem]" />
                        </Link>
                        <Link
                            href={"/#"}
                            className=" text-Verde jello-horizontal "
                        >
                            <Facebook className="sm:w-[3rem]  w-[2rem] sm:h-[3rem] h-[2rem]" />
                        </Link>
                        <Link
                            href={"/#"}
                            className=" text-Verde jello-horizontal"
                        >
                            <Linkedin className="sm:w-[3rem]  w-[2rem] sm:h-[3rem] h-[2rem]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentacion;
