import { Button } from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export const Card = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-2 shadow-sm p-4 rounded-xl">
      <div className="icon w-full flex justify-center">{icon}</div>
      <div className="text">
        <h3 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 text-center">
          {title}
        </h3>
        <p className="font-normal text-gray-700  text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          explicabo vero ex. Vitae dicta Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="btn flex justify-center p-2">
        <Button
          text="Contactar"
          classes="bg-green-400 p-3 flex items-center gap-2"
          icon={<FaWhatsapp size={20} />}
        />
      </div>
    </div>
  );
};
