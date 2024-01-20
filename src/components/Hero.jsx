import { Button } from "./Button";
import { Header } from "./header";

export const Hero = () => (
    <>
        <div className="w-full bg-black/30 h-screen overflow-hidden ">
            <Header />
            <main className="grid grid-cols-1  w-full items-center    ">
                <div className="text-hero p-6 flex flex-col items-center  lg:items-start lg:w-3/6">
                    <h2 className=" font-bold text-center capitalize text-3xl text-white mb-4 lg:text-start">
                        obten las mejores <span className="bg-gradient-to-l from-red-600 to-white text-transparent bg-clip-text ">fotos y videos</span> a la mejor calidad del mercado
                    </h2>
                    <p className="text-center mb-5 text-slate-200 text-xl leading-6 tracking-wide text-pretty lg:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut
                        dolores sed esse suscipit harum.
                    </p>
                    <Button text="Contactanos" />
                </div>
            </main>
        </div>
    </>
);
