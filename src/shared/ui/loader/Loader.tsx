import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.content}></div>
		</div>
	);
};

export default Loader;
