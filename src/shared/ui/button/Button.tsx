import type { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
	content: string;
	isDisabled?: boolean;
	onClick: () => void;
};

const Button: FC<ButtonProps> = ({ content, isDisabled, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={isDisabled}>
			{content}
		</button>
	);
};

export default Button;
