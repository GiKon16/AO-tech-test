import type { FC } from 'react';
import styles from './CatCard.module.scss';

type CatCardProps = {
	imgSrc: string;
};

const CatCard: FC<CatCardProps> = ({ imgSrc }) => {
	return (
		<div className={styles['cat-card']}>
			<img src={imgSrc} alt='Котик' />
		</div>
	);
};

export default CatCard;
