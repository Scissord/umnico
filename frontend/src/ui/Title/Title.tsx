import { FC } from 'react';
// import styles from './Title.module.scss';

type TitleProps = {
	text?: string,
	children?: string,
	className?: string,
}

export const Title: FC<TitleProps> = ({ text, children, className }) => {

	return (
		<h1 className={className}>
			{ text }
			{ children }
		</h1>
	)
}
