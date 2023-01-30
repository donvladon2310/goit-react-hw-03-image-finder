import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <button className={styles.Buttonload} onClick={onClick}>
            Load more
        </button>
    );
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
};

