import { FC, ReactNode } from 'react';
import styles from './Icon.module.scss';

// icon - react-icons
// color - black, white, #5F58CC
// className	{styles.a}	
// size	1em	
// mr margin-right

type IconProps = {
	icon: ReactNode,
	size?: number | string,
	mt?: number | string,
	mb?: number | string,
	mr?: number | string,
	ml?: number | string,
	onClick?: () => void,
}

export const Icon: FC<IconProps> = (props) => {
	const { icon, size, mt, mb, mr, ml, onClick } = props;

	return (
		<div 
			className={styles.container} 
			style={{ 
				fontSize: size ?? '1em',
				marginTop: mt,
				marginBottom: mb,
				marginRight: mr,
				marginLeft: ml,
				userSelect: 'none',
			}}
			onClick={onClick}
		>
			{icon}
		</div>
	)
}
