import style from './style.less';
import mainImage from '@/assets/djiagrast40-flying-over-field-540.jpg';
import Logo from '@/assets/logo.svg';
import Name from '@/assets/name.svg';

export const MainPage = () => {
    return (
        <div className={style.headerImg} style={{backgroundImage: `url(${mainImage})`}}>
            <div className={style.headerLogo}>
                <Logo className={style.logo} />
                <div className={style.headerText}>
                    <Name width={500} height={100}/>
                    <div className={style.slogan}>Мы воплощаем самые смелые мечты в реальность</div>
                </div>
            </div>
        </div>
    )
}