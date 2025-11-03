import style from "./style.less";

export const SiteFooter = () => {
    return (
        <div className={style.footerWrapper}>
            <div className={style.footer}>
                <div className={style.header}>Контакты:</div>
                <div className={style.contacts}>
                    <div className={style.address}>
                        <div className={style.contactsHeader}>Адрес:</div>
                        <div className={style.contactsValue}>
                            г. Новосибирск, проспект Дзержинского, 69/2
                        </div>
                    </div>
                    <div className={style.phones}>
                        <div className={style.contactsHeader}>Телефоны:</div>
                        <div className={style.contactsValue}>
                            <div>+7 913-912-55-01</div>
                            <div>+7 923-106-61-68</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
