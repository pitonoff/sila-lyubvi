import styles from '../styles.module.css'

const CustomButton = ({ title, handleClick }) => {
    return (
        <button
            type="button"
            className={`${styles.btn}`}
            onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton