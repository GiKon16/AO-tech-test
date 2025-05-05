import { useEffect, useState } from 'react';
import { useCatQuery } from '../../../features/cat/useCatQuery';
import Button from '../../../shared/ui/button/Button';
import Checkbox from '../../../shared/ui/checkbox/Checkbox';
import Loader from '../../../shared/ui/loader/Loader';
import CatCard from '../cat-card/CatCard';
import styles from './CatFinder.module.scss';

const CatFinder = () => {
	const { data, isFetching, refetch } = useCatQuery();
	const [finderOptions, setFinderOptions] = useState({
		isEnabled: true,
		autoRefetch: false,
	});

	useEffect(() => {
		let intervalId: ReturnType<typeof setInterval> | null = null;

		if (finderOptions.autoRefetch) {
			intervalId = setInterval(() => {
				refetch();
			}, 3000);
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [finderOptions.autoRefetch, refetch]);

	const handleChangeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFinderOptions(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const getNewCat = async () => {
		try {
			await refetch();
		} catch (error) {
			console.error('Ошибка при поиске кота', error);
		}
	};
	return (
		<div className={styles['cat-finder']}>
			<h1>Поиск котов онлайн</h1>
			<div className={styles.option}>
				<Checkbox
					name='isEnabled'
					value={finderOptions.isEnabled}
					onChange={handleChangeOptions}
				/>
				<span>Поиск котов по кнопке</span>
			</div>
			<div className={styles.option}>
				<Checkbox
					name='autoRefetch'
					value={finderOptions.autoRefetch}
					onChange={handleChangeOptions}
				/>
				<span>Автоматический поиск раз в 3 секунды</span>
			</div>
			<Button
				content='Найти кота'
				onClick={getNewCat}
				isDisabled={!finderOptions.isEnabled}
			/>
			{data && <CatCard imgSrc={data} />}
			{isFetching ? <Loader /> : null}
		</div>
	);
};

export default CatFinder;
