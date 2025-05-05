import type { FC } from 'react';
import CheckIconSVG from '../../../assets/check-icon.svg';
import styles from './Checkbox.module.scss';

type CheckBoxProps = {
	name?: string;
	value: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<CheckBoxProps> = ({ name, value, onChange }) => {
	return (
		<label className={styles['checkbox-container']}>
			<input
				className={styles['default-checkbox']}
				type='checkbox'
				name={name}
				checked={value}
				onChange={onChange}
			/>
			<span className={styles['custom-checkbox']}></span>
			<div className={`${styles['checkbox-icon']} ${value && styles.checked}`}>
				<CheckIconSVG />
			</div>
		</label>
	);
};

export default Checkbox;
