import { Box } from "./Containers";
import { Image } from "./Image";

export const Gallery = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-center">Galeria</h2>
      <section className="w-full grid h-fit p-2 grid-cols-2">
        <Box classes="flex flex-col gap-4  py-12">
          <Image surce={"/image/foto2.jpg"} />
          <Image surce={"/image/foto-3.jpg"} />
          <Image surce={"/image/vertical1.jpg"} />
        </Box>
        <Box classes="flex flex-col gap-4 p-4">
          <Image surce={"/image/vertical1.jpg"} />

          <Image surce={"/image/foto-3.jpg"} />
          <Image surce={"/image/foto2.jpg"} />
        </Box>
      </section>
    </>
  );
};
