import { Button } from "./Button";
import { Header } from "./Header";

export const Hero = () => (
  <>
    <div className="w-full h-screen overflow-hidden  bg-[url('../public/image/papa.jpg')] bg-center bg-cover bg-black/60 bg-blend-multiply bg-no-repeat ">
      <Header />
      <main className="grid grid-cols-1  w-full items-center   ">
        <div className="text-hero p-6 flex flex-col items-center justify-center lg:items-start lg:w-3/6 mt-10 lg:mt-16 lg:mx-16 ">
          <h1 className=" font-bold text-center capitalize text-5xl text-white mb-4 lg:text-start">
            Consigue las mejores{" "}
            <span className="bg-gradient-to-l from-red-600 to-white text-transparent bg-clip-text ">
              fotos y videos
            </span>{" "}
            a la mejor calidad del mercado
          </h1>
          <p className="text-center mb-5 text-slate-200 text-xl leading-6 tracking-wide text-pretty lg:text-start">
            Obtén las imágenes y videos más impactantes con la mejor calidad del
            mercado. Tu historia merece ser contada con imágenes que brillan por
            su nitidez y detalle.
          </p>
          <Button classes="p-4 bg-red-600" text="Contactar" />
        </div>
      </main>
    </div>
  </>
);
