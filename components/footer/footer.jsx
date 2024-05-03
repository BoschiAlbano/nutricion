"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Icono from "../svg/icono";

import UseScrollDirection from "@/hook/useScrollDirection";

const Footer = () => {
    const { scrollDirection } = UseScrollDirection();
    const [state, setstate] = useState("animar");

    useEffect(() => {
        if (scrollDirection === null) {
            setstate("animar");
        } else {
            if (scrollDirection === "up") {
                setstate("up");
            } else {
                setstate("down");
            }
        }
        // bottom-0 opacity-1
        console.log(state);
    }, [scrollDirection]);

    return (
        <>
            {/* Mobil */}
            <section
                className={` sm:hidden block  sm:relative fixed  z-[100] w-full mt-24  transition-all duration-1000 ${state} `}
            >
                <div className={`relative `}>
                    <div className="sm:hidden flex  w-full justify-around items-center  px-5 absolute bottom-0 z-[102]">
                        <Link href={"#IdSobreMi"} className="">
                            <p className="css_titulo  font-semibold whitespace-nowrap text-sm ">
                                Sobre Mi
                            </p>
                        </Link>
                        <Link href={"#Home"} className="max-w-[200px] pb-2">
                            {/* <img
                                className="img_background_transparent"
                                src="/logo.png"
                            /> */}

                            <Icono width="40px" height="40px"></Icono>
                        </Link>

                        <Link href={"#IdTurno"} className="">
                            <p className="css_titulo  font-semibold whitespace-nowrap text-sm ">
                                Turnos
                            </p>
                        </Link>
                    </div>

                    <div className=" relative z-[101]">
                        <div className="wave" id="wave1"></div>
                        <div className="wave" id="wave2"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
                </div>
            </section>

            {/* Windows */}
            <div className={`sm:block hidden mt-24 relative `}>
                <div className=" relative z-[101]">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave4"></div>
                </div>
            </div>
        </>
    );
};

export default Footer;
