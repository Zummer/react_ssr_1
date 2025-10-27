import { ImageBlock } from '../ImageBlock';
import style from './style.less';

export const Gallary = ({
    title,
    children,
}) => {
    return (
        <div className={style.gallery}>
            <div className={style.galleryTitle}>{title}</div>
            <div className={style.imagesList}>
                {children}
            </div>
        </div>
    )
}