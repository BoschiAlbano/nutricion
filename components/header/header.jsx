"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import UseScrollDirection from "@/hook/useScrollDirection";
const links = [
    {
        id: 1,
        titulo: "Sobre Mi",
        href: "#IdSobreMi",
    },
    {
        id: 2,

        titulo: "Especialides",
        href: "#IdEspecialidades",
    },
    {
        id: 3,

        titulo: "Turnos",
        href: "#IdTurno",
    },
];

const Header = () => {
    // const [transparente, setTransparente] = useState(false);
    const MenuRef = useRef();

    const { scrollDirection } = UseScrollDirection();
    useEffect(() => {
        window.addEventListener("blur", () => {
            document.title = "¡No te vayas! 😱";
        });

        window.addEventListener("focus", () => {
            document.title = "Boschi Albano jose";
        });
    }, []);

    // hacer transparente el menu al bajar
    // useEffect(() => {
    //     const EventoMenu = () => {
    //         const _menu = MenuRef.current;
    //         const { y } = _menu.getBoundingClientRect();

    //         const _background = y <= -100 ? false : true;
    //         setTransparente(_background);
    //     };

    //     window.addEventListener("scroll", EventoMenu);
    //     return () => {
    //         window.removeEventListener("scroll", EventoMenu);
    //     };
    // }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div ref={MenuRef}></div>
            <section
                className={`w-[100%] fixed px-10 h-auto z-50 transition-all duration-500  ${
                    scrollDirection === "up" || scrollDirection === null
                        ? "top-0"
                        : " top-[-200px]"
                } `}
            >
                <div className=" mostrar w-full h-[80px] sm:flex flex-row justify-between items-center hidden py-2">
                    <div
                        onClick={() => scrollToTop()}
                        className=" h-[100%] cursor-pointer "
                    >
                        <img
                            className="img_background_transparent h-[100%]"
                            src="/logo.png"
                        />
                    </div>
                    <div className="justify-between items-center flex gap-10">
                        {links.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>
                                    <p className="css_titulo  font-semibold whitespace-nowrap texto_responsive">
                                        {item.titulo}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
