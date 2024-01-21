



export const Box = ({classes,children}) => {
    return (
        <div className={`${classes} w-full`}>{children}</div>
    )
}
export const Container = ({classes,children}) => {
    return (
        <div className={`${classes} mx-0 p-4`}>{children}</div>
    )
}