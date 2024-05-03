"use client";
import React from "react";
import Image from "next/image";
import useNerScreen from "@/hook/useNerScreen";

const SobreMi = () => {
    const { isNearScreen, elementRef } = useNerScreen({
        distance: "-50px",
        once: false,
    });

    return (
        <div
            id="IdSobreMi"
            ref={elementRef}
            className={`w-full  flex flex-col sm:justify-center justify-start items-center px-[5%] sm:px-0 ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <div className="w-full py-[30px] gap-[60px] flex flex-col-reverse lg:flex-row justify-center items-center sm:px-5 px-0">
                <Image
                    className="w-full rounded-[5px] sombra_img object-cover"
                    loading="lazy"
                    width={800}
                    height={800}
                    src="/perfil.png"
                />
                <div className="w-full flex-col justify-start items-start  inline-flex gap-5">
                    <div className="w-full text-VerdeOscuro sm:text-[40px] text-[25px] sm:items-start font-semibold">
                        Sobre mí
                    </div>
                    <div className="w-full text-stone-900 text-sm md:text-base lg:text-lg font-medium">
                        <p>
                            Nutricionista por amor a profissão. A palavra paixão
                            caracteristicas dos meus pacientes, podendo fazer um
                            atendimento especilizado, notando suas dúvidas.
                        </p>
                    </div>
                    <div className="w-full text-stone-900 text-sm md:text-base lg:text-lg font-medium">
                        <ul>
                            <li>
                                ✔ Graduada pelo Centro Universitário Metodista
                                Ipa pela universidade Unisinos.
                            </li>
                            <li>
                                ✔ Graduada pelo Centro Universitário Metodista
                                Ipa pela universidade Unisinos.
                            </li>

                            <li>
                                ✔ Graduada pelo Centro Universitário Metodista
                                Ipa pela universidade Unisinos.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreMi;
