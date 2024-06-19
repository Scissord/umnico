import { FC } from 'react';
// import styles from './Span.module.scss';

type SpanProps = {
	children: string,
	className?: string,
}

export const Span: FC<SpanProps> = ({ children, className }) => {

	return (
		<span className={className}>{ children }</span>
	)
}
