import { FC } from 'react';
// import styles from './Label.module.scss';

type LabelProps = {
	text?: string,
	children?: string,
	className?: string,
}

export const Label: FC<LabelProps> = ({ text, children, className }) => {

	return (
		<label className={className}>
			{ text }
			{ children }
		</label>
	)
}
