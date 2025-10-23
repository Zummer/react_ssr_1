import style from './Cars.less';

const Cars = () => {
    return <div>
        <h2>Cars</h2>
        <div>
            <ul className={style.list}>
                <li>Ferrari</li>
                <li>Porsche</li>
                <li>Lamborghini</li>
                <li>Lexus</li>
            </ul>
        </div>
    </div>
}

export default Cars;
