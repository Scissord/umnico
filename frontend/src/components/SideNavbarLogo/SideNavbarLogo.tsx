import { FC } from 'react';
import { Box, Img, Label } from '@ui';
import styles from './SideNavbarLogo.module.scss';

type SideNavbarLogo = {
	label: string;
  onClick: () => void;
}

export const SideNavbarLogo: FC<SideNavbarLogo> = (props) => {
	const { label, onClick } = props;

	return (
		<Box className={styles.container} onClick={onClick}>
			<Box className={styles.wrap}>
				<Img 
					alt='bullfinch' 
					src='/logo/logo_white.svg' 
					className={styles.logo}
				/>
				<Label className={styles.label}>
					{label}
				</Label>
			</Box>
		</Box>
	)
}
