import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const NavMenu = ({ children }) => {
    return (
        <>
            <Header />

            <section className="min-h-[100dvh] h-full sm:px-[5%] px-0 z-[-1] overflow-visible">
                <main className=" mb-[15%] sm:mb-0 z-10 relative">
                    {children}
                </main>
            </section>

            <Footer />
        </>
    );
};

export default NavMenu;
