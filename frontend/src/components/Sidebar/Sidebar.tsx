import { FC } from 'react';
import { Box } from '@ui';
import { SideNavbar, SideNavbarLogo } from '@components';
import { useNavigate } from '@hooks';
import { pages } from '@constants';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	const navigate = useNavigate();

	return (
		<Box className={styles.container}>
			<SideNavbarLogo label="NCode" onClick={() => navigate('/')}/>
			<SideNavbar title="Routes" routes={pages}/>

		</Box>
	)
}

