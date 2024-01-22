

export const Image = ({surce}) => {
  return (
    <div className=" rounded-xl object-cover hover:bg-black/40 after:bg-black">
        <img src={surce} alt="" className="w-full rounded-xl -z-10" />
    </div>
  )
}
