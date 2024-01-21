import { Card } from "./Card"
import { Box, Container } from "./Containers"
import { FaCamera } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";


export const Services = () => {
  return (
   <Container >
    <h2 className="text-3xl text-center font-semibold mb-4">Servicios</h2>
    <Box  classes="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
        <Card icon={<FaCamera size={50} />} title="Fotografias" />
        <Card icon={<FaVideo size={50}/>} title="Videos" />
        <Card icon={<FaVideo size={50}/>} title="Videos" />

    </Box>
   </Container>
  )
}
