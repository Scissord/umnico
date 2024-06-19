import { FC } from 'react';
// import styles from './P.module.scss';

type PProps = {
	children: string,
	className?: string,
}

export const P: FC<PProps> = ({ children, className }) => {

	return (
		<p className={className}>{ children }</p>
	)
}
