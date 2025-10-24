import style from "./style.less";
import mainImage from "@/assets/djiagrast40-flying-over-field-540.jpg";
import Logo from "@/assets/logo.svg";
import Name from "@/assets/name.svg";
import classnames from "classnames";

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
            </div>
        </>
    );
};
