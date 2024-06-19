import { FC, useState } from "react";
import styles from './Tabs.module.scss';

type Tab = {
	label: string;
	content: React.ReactNode;
}

type TabsProps  = {
	tabs: Tab[];
}

const tabs = [
	{ label: 'Главная', content: 'da' },
	{ label: 'Библиотека', content: 'net' },
	{ label: 'Третья', content: 'lol' }
]

export const Tabs: FC<TabsProps> = () => {
	// const { tabs } = props;

	const [tab, setTab] = useState<number>(0); 

	return (
		<div>
			<div className={styles.tabs}>
				{tabs.map((t, i) => (
					<button
						key={i}
						onClick={() => setTab(i)}
					>
						{t.label}
					</button>
				))}
			</div>
			<div className="tab-content">{tabs[tab].content}</div>
		</div>
	)
}
