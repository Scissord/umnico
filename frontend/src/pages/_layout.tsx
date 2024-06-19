import { FC, ReactNode } from 'react';
import styles from './_layout.module.scss';

type LayoutProps = {
	display: ReactNode
}

export const Layout: FC<LayoutProps> = ({ display }) => {
	if (!display) return false;

	return (
		<div className={styles.container}>
			{display}
		</div>
	)
}
