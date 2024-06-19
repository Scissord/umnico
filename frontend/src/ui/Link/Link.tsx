import { FC } from 'react';
// import styles from './Link.module.scss';

type LinkProps = {
	href: string,
	text?: string,
	children?: string,
	className?: string,
}

export const Link: FC<LinkProps> = ({ href, text, children, className }) => {

	return (
		<a
			href={href} 
			className={"inline-block hover:underline hover:text-blue-400 " + className}
		>
			{ text }
			{ children }
		</a>
	)
}
