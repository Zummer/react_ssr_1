import style from './style.less';

interface IProps {
    src: string;
    alt: string;
    text: string;
}

export const ImageBlock: React.FC<IProps> = ({src, alt, text}) => {
    return (
        <div className={style.imageBlock}>
            <img src={src} alt={alt} loading='lazy' />
            <div className={style.imageText}>{text}</div>
        </div>
    )
}