import style from './style.less';
import image from '@/assets/das-1.jpg';
import {Image} from '@/Components/Image';
import classnames from 'classnames';

export const InfoBlock = () => {
    return (
        <div className={style.infoBlock}>
            <div className={classnames(style.column, style.left)}>
                <div className={style.title}>Агродроны для сельского хозяйства</div>
                <div className={style.description}>
                    {`
                        Агродрон как важный инструмент для поддержания сельскохозяйственного 
                        производства путем внесения средств защиты растений (СЗР), десикации и 
                        питания растений в ключевые периоды роста. Это устройство позволяет 
                        эффективно соблюдать график обработок, что особенно актуально в условиях 
                        меняющихся погодных условий и необходимости точного контроля над растениями.
                    `}
                </div>
            </div>
            <div className={classnames(style.column, style.right)}>
                    <Image className={style.image} src={image}/>
                <div className={style.description}>
                    {`
                        Агродроны обеспечивают точное распределение веществ, минимизируя потери и 
                        обеспечивая равномерное покрытие полей. Они оснащены современными системами 
                        навигации и мониторинга, позволяющими оператору контролировать процесс 
                        обработки дистанционно. Благодаря этому повышается эффективность 
                        сельскохозяйственных работ, снижается риск повреждения культур и улучшается качество урожая
                    `}
                </div>
            </div>
        </div>
    );
}
