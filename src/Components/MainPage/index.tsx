import style from "./style.less";
import mainImage from "@/assets/djiagrast40-flying-over-field-540.webp";
import spreading from "@/assets/field_spreading_Moment-2048x1152.webp";
import Logo from "@/assets/logo.svg";
import Name from "@/assets/name.svg";
import over from "@/assets/over.webp";
import ochag from "@/assets/ochag.webp";
import wet from "@/assets/wet.webp";
import window from "@/assets/window.webp";
import heavy from "@/assets/heavy-machine.webp";
import classnames from "classnames";
import { ImageBlock } from "../ImageBlock";

export const MainPage = () => {
    return (
        <>
            <div
                className={style.headerImg}
                style={{ backgroundImage: `url(${mainImage})` }}
            >
                <div className={style.headerTop}>
                    <div className={style.headerLogo}>
                        <Logo className={style.logo} />
                        <div className={style.headerText}>
                            <Name className={style.headerSpectr} />
                            <div className={style.slogan}>
                                Мы воплощаем самые смелые мечты в реальность
                            </div>
                        </div>
                    </div>
                    <div className={style.slogan2}>
                        Мы воплощаем самые смелые мечты в реальность
                    </div>
                </div>
                <div className={classnames(style.info, style.columnContainer)}>
                    <div className={style.headerAgro}>Агродрон</div>
                    <div className={style.aboutAgro}>
                        ключевой инструмент для соблюдения графика внесений СЗР,
                        десикации, питания, в критические фазы
                    </div>
                </div>
            </div>
            <div className={style.columnContainer}>
                <p>
                    {`Агродрон как важный инструмент для поддержания 
                    сельскохозяйственного производства путем внесения средств защиты растений (СЗР),
                    десикации и питания растений в ключевые периоды роста. Это устройство 
                    позволяет эффективно соблюдать график обработок, 
                    что особенно актуально в условиях меняющихся погодных условий и 
                    необходимости точного контроля над растениями.`}
                </p>
                <img className={style.paragraphImage} src={spreading} alt="Опыление"/>
                <p>
                    {`Агродроны обеспечивают точное распределение веществ, минимизируя 
                    потери и обеспечивая равномерное покрытие полей. Они оснащены 
                    современными системами навигации и мониторинга, позволяющими 
                    оператору контролировать процесс обработки дистанционно. 
                    Благодаря этому повышается эффективность сельскохозяйственных работ, 
                    снижается риск повреждения культур и улучшается качество урожая.`}
                </p>
                <img className={style.paragraphImage} src={over} alt="Дрон над полем"/>
                <p>
                    {`Использование агродронов является частью современного подхода 
                    к сельскому хозяйству, известного как "точное земледелие".
                     Этот метод включает использование технологий GPS, датчиков и дронов для 
                     оптимизации процессов выращивания и сбора урожая, снижения затрат
                      ресурсов и повышения урожайности.`}
                </p>
                <div className={style.gallery}>
                    <div className={style.galleryTitle}>что особенно важно в условиях:</div>
                    <div className={style.imagesList}>
                        <ImageBlock src={ochag} alt={"Очаг проблемы"} text={"возникновения отдельных очагов"} />
                        <ImageBlock src={heavy} alt={"Тяжела техника"} text={"ограничения доступа тяжёлой техники к полю"} />
                        <ImageBlock src={wet} alt={"Сжатое окно"} text={"сжатого окна между о садками и биологическими фазами"} />
                        <ImageBlock src={window} alt={"Повышенная влажность"} text={"повышенной влажности почвы и сложного рельефа"} />
                    </div>
                </div>
            </div>
        </>
    );
};
