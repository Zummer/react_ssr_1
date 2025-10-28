import style from "./style.less";
import mainImage from "@/assets/header1.jpg";
import spreading from "@/assets/field_spreading_Moment-2048x1152.jpg";
import Logo from "@/assets/logo.svg";
import SiteName from "@/assets/site.svg";
import Name from "@/assets/name.svg";
import over from "@/assets/over.jpg";
import ochag from "@/assets/ochag.jpg";
import wet from "@/assets/wet.jpg";
import window from "@/assets/window.jpg";
import heavy from "@/assets/heavy-machine.jpg";
import dron1 from "@/assets/dron-over-field-1.jpg";
import dron2 from "@/assets/dron-over-field-2.jpg";
import dron3 from "@/assets/dron3.jpg";
import dew from "@/assets/dew.jpg";
import thermo from "@/assets/thermo.jpg";
import { ImageBlock } from "../ImageBlock";
import { Gallary } from "../Gallary";
import { Image } from "../Image";

export const MainPage = () => {
    return (
        <>
            <div className={style.headerImg}>
                <div className={style.headerTop}>
                    <div className={style.headerLogo}>
                        <Logo className={style.logo} />
                        <Name className={style.headerSpectr} />
                    </div>
                    <div className={style.headerTextWraper}>
                        <SiteName className={style.headerText} />
                    </div>
                </div>

                <div
                    className={style.foto}
                    style={{ backgroundImage: `url(${mainImage})` }}
                ></div>
                <div className={style.partnersWrapper}>
                    <ul className={style.partners}>
                        {[
                            "наши партнеры",
                            "АГРОНЕБО.РФ",
                            "Горный ЦОД",
                            "Министерство сельского хозяйства НСО",
                        ].map((text, index) => {
                            return <li key={index}>{text}</li>;
                        })}
                    </ul>
                </div>

                <div className={style.safeZone} />
            </div>
            <div className={style.columnContainer}>
                <div className={style.columnTitle}>
                    {`Хотите увидеть,
                        как работает дрон
                        в реальных условиях?`}
                </div>
                <ul className={style.demoList}>
                    {[
                        `Проведем индивидуальный демо-показ
                        с выездом к вам`,

                        `Презентуем оборудование:
                        как устроен дрон
                        чем он отличается от техники
                        как обслуживается, управляется`,

                        `Организуем практический полёт на вашем поле:
                        увидите вживую, как дрон летает, держит маршрут, вносит препарат и работает в автоматическом режиме`,

                        `Проведем демонстрацию распыления:
                        Вы сможете использовать лакмусовые полоски и оценить на вашей культуре: 
                        дисперсию,
                        плотность покрытия,
                        глубину проникновения капли
                        `,
                    ].map((text, index) => {
                        return <li key={index}>{text}</li>;
                    })}
                </ul>
                <Image
                    className={style.paragraphImage}
                    src={dron3}
                    alt="DJI Agras T50"
                />
                <p>
                    {`Агродрон как важный инструмент для поддержания 
                    сельскохозяйственного производства путем внесения средств защиты растений (СЗР),
                    десикации и питания растений в ключевые периоды роста. Это устройство 
                    позволяет эффективно соблюдать график обработок, 
                    что особенно актуально в условиях меняющихся погодных условий и 
                    необходимости точного контроля над растениями.`}
                </p>
                <Image
                    className={style.paragraphImage}
                    src={spreading}
                    alt="Опыление"
                />
                <p>
                    {`Агродроны обеспечивают точное распределение веществ, минимизируя 
                    потери и обеспечивая равномерное покрытие полей. Они оснащены 
                    современными системами навигации и мониторинга, позволяющими 
                    оператору контролировать процесс обработки дистанционно. 
                    Благодаря этому повышается эффективность сельскохозяйственных работ, 
                    снижается риск повреждения культур и улучшается качество урожая.`}
                </p>
                <Image
                    className={style.paragraphImage}
                    src={over}
                    alt="Дрон над полем"
                />
                <p>
                    {`Использование агродронов является частью современного подхода 
                    к сельскому хозяйству, известного как "точное земледелие".
                     Этот метод включает использование технологий GPS, датчиков и дронов для 
                     оптимизации процессов выращивания и сбора урожая, снижения затрат
                      ресурсов и повышения урожайности.`}
                </p>
                <Gallary title="что особенно важно в условиях:">
                    {[
                        {
                            src: ochag,
                            alt: "Очаг проблемы",
                            text: "возникновения отдельных очагов",
                        },
                        {
                            src: heavy,
                            alt: "Тяжела техника",
                            text: "ограничения доступа тяжёлой техники к полю",
                        },
                        {
                            src: wet,
                            alt: "Сжатое окно",
                            text: "сжатого окна между о садками и биологическими фазами",
                        },
                        {
                            src: window,
                            alt: "Повышенная влажность",
                            text: "повышенной влажности почвы и сложного рельефа",
                        },
                    ].map((props, index) => {
                        return <ImageBlock key={index} {...props} />;
                    })}
                </Gallary>
                <Gallary title="Что обеспечивает агродрон при внесении удобрений в сравнении с традиционной техникой:">
                    {[
                        {
                            src: dron1,
                            alt: "Равномерное распределение",
                            text: `Равномерное распределение
                                по вегетативной массе —
                                особенно актуально в фазах бутонизации,
                                цветения, формирования початков/
                                корзинок
                                `,
                        },
                        {
                            src: dron2,
                            alt: "Снижение потерь",
                            text: `Снижение потерь при
                                обработке высокорослых
                                культур —
                                обработка выполняется
                                бесконтактно, исключая
                                вытаптывание растений`,
                        },
                        {
                            src: dew,
                            alt: "Обработка сразу",
                            text: `Обработка сразу
                                после дождей
                                в нужную фазу —
                                без потерь в окне
                                вегетационного цикла,
                                без уплотнения почвы`,
                        },
                        {
                            src: thermo,
                            alt: "Точечная обработка",
                            text: `Точечная обработка
                                по мультиспектральной
                                карте
                                Возможна обработка только
                                конкретных очагов сорняков
                                и болезней`,
                        },
                    ].map((props, index) => {
                        return <ImageBlock key={index} {...props} />;
                    })}
                </Gallary>
            </div>
        </>
    );
};
