import { Card } from "./Card";

import { FaCamera } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const Services = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-3xl text-center font-semibold ">Servicios</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Card
          icon={<FaCamera size={50} />}
          title="Fotografias"
          text={
            " Capturamos momentos eternos con nuestra habilidad fotográfica. Desde retratos cautivadores hasta imágenes de productos impresionantes, inmortalizamos tus momentos más preciosos con un enfoque artístico y profesional. "
          }
        />
        <Card
          icon={<FaVideo size={50} />}
          title="Videos"
          text="Transformamos ideas en experiencias visuales impactantes. Desde la filmación hasta la edición, creamos videos memorables que transmiten tu mensaje de manera efectiva."
        />
        <Card
          icon={<FaEdit size={50} />}
          title="edicion"
          text="Dale vida a tus imágenes con nuestra edición experta. Perfeccionamos cada detalle para que tus fotos y videos destaquen, agregando un toque único y profesional a tu contenido."
        />
      </div>
    </div>
  );
};
