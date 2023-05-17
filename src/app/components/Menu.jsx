import styles from '@styles/Menu.module.css'
import Links from '@components/Links';

const Menu = (props) => {
    return (
        <>
            <label className={styles.bar} for="check">
                <input type="checkbox" checked={props.open} className={styles.checkbox} id="check" onChange={props.handle} />
                <span className={styles.top} />
                <span className={styles.middle} />
                <span className={styles.bottom} />
            </label>
            {props.open ? <Links handle={props.handle} /> : null}
        </>
    );
};

export default Menu;
