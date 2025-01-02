import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "./Image";

export const Gallery = () => {
  return (
    <>
      <section className="p-4 space-y-6">
        <h2 className="text-4xl font-semibold text-center ">Galeria</h2>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 2, 768: 3, 1024: 4 }}
        >
          <Masonry gutter="15px">
            <Image surce={"/image/foto2.jpg"} />
            <Image surce={"/image/foto3.jpg"} />
            <Image surce={"/image/foto4.jpg"} />
            <Image surce={"/image/foto5.jpg"} />
            <Image surce={"/image/foto6.jpg"} />
            <Image surce={"/image/foto6.jpg"} />
            <Image surce={"/image/foto2.jpg"} />
            <Image surce={"/image/foto2.jpg"} />
            <Image surce={"/image/foto6.jpg"} />
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
};
