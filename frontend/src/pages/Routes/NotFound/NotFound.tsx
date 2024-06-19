import { FC } from 'react';
import { Box } from '@ui';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
	return (
		<Box className={styles.container}>
			<img alt="404" src='pics/404.svg' width="40%" height="40%"/>
		</Box>
	)
}
