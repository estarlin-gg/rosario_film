

export const Button = ({text,classes,icon}) => {
  return (
  <button  className={`${classes} rounded-xl font-semibold text-white`}>{icon} {text}</button>
  )
}
