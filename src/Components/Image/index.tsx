export const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <img
            loading='lazy'
            {...props}
        />
    )
}

