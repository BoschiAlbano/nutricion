import Presentacion from "@/components/Presentacion/Presentacion";
import SobreMi from "@/components/SobreMi/SobreMi";
import Especialidades from "@/components/Especialidades/Especialidades";
import Turnos from "@/components/Turnos/Turnos";
export default function Home() {
    return (
        <>
            <main
                id="Home"
                className="w-full flex flex-col justify-start items-center"
            >
                <Presentacion />

                <section className="w-full flex flex-col justify-start items-center gap-32">
                    <SobreMi />
                    <Especialidades />
                    <Turnos />
                </section>
            </main>
        </>
    );
}
