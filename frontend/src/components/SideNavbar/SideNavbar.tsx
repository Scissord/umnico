import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from '@hooks';
import { Box, Icon, Label } from '@ui';
import { LuChevronDownSquare, LuChevronUpSquare } from "react-icons/lu";
import styles from './SideNavbar.module.scss';

interface Route {
  label: string;
  link: string;
  icon: ReactNode;
}

type SideNavbarProps = {
  title: string;
  routes: Route[];
};

export const SideNavbar: FC<SideNavbarProps> = ({ title, routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    title === 'Pages' && setOpen(true)
  }, [title])

  useEffect(() => {
    const activeLabel = routes.find(route => route.link === location.pathname)?.label ?? '/';
    setActiveRoute(activeLabel);
  }, [location.pathname, routes, setActiveRoute]);

  useEffect(() => {
    if(location.pathname === routes.find(route => route.link === location.pathname)?.link) setOpen(true);
  }, [location.pathname, routes])

	const handleClick = useCallback((label: string, link: string) => {
		if (label !== activeRoute) {
			setActiveRoute(label);
			navigate(link);
		}
	}, [activeRoute, setActiveRoute, navigate]);

  return (
    <Box className={styles.container}>
      <Box className={styles.title} onClick={() => setOpen(!open)}>
        <Label className={styles.title_text}>{title}</Label>
        <Icon 
          size="1.2rem"
          icon={open ? <LuChevronUpSquare/> : <LuChevronDownSquare/>} 
        />
      </Box>
      {open && <>
        {routes.map(({ label, link, icon }) => (
          <Box
            key={label}
            className={`${styles.link} ${label === activeRoute ? styles.activeLink : ''}`}
            onClick={() => handleClick(label, link)}
          >
            <Icon mr={9} icon={icon} />
            <Label className={styles.text}>{label}</Label>
          </Box>
        ))}
      </>}
    </Box>
  );
};
