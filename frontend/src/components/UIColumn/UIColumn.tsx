import { FC, Fragment, ReactNode, useCallback } from "react";
import { useNavigate } from "@hooks";
import { Icon } from "@ui";
import { LuChevronDownSquare, LuChevronUpSquare } from "react-icons/lu";
import styles from './UIColumn.module.scss'

interface Component {
	label: string,
	icon: ReactNode,
	link: string
}

type ColumnProps = {
	components: Component[],
	bg: string,
	bgDark: string,
	activeIcon: ReactNode | null,
	setActiveIcon: (icon: ReactNode | null) => void,
}

export const UIColumn: FC<ColumnProps> = ({ components, bg, bgDark, activeIcon, setActiveIcon }) => {
	const navigate = useNavigate();

	const handleClick = useCallback((icon: ReactNode) => {
		setActiveIcon(icon === activeIcon ? null : icon);
	}, [activeIcon, setActiveIcon]);

	return (
		<div className={styles.column}>
			{components.map(({ label, icon, link }) => (
				<Fragment key={label}>
					<div className={styles.card} style={{ backgroundColor: bg }}>
						<section className={styles.top_card} onClick={() => navigate(link)}>
							<label className={styles.top_card_label}>{label}</label>
							<Icon color={bgDark} ml="auto" size="6rem" icon={icon}/>
						</section>
						<section className={styles.bottom_card} style={{ backgroundColor: bgDark }}>
							<label>{'props'}</label>
							<Icon 
								size="1.2rem"
								onClick={() => handleClick(icon === activeIcon ? null : icon)} 
								icon={icon === activeIcon ? <LuChevronUpSquare /> : <LuChevronDownSquare />}
							/>
						</section>
					</div>
					{icon === activeIcon && (
						<div className={styles.props_card}>
							<label className={styles.props_card_title}>{label}Props</label>
						</div>
					)}
				</Fragment>
			))}
		</div>
	)
}