import { FC, ReactNode } from 'react'

type BoxProps = {
	className?: string,
	bg?: string,
  onClick?: () => void;
	mt?: number | string;
	mb?: number | string;
	mr?: number | string;
	ml?: number | string;
	children: ReactNode,
}

export const Box: FC<BoxProps> = (props) => {
	const { mt, mb, mr, ml, className, bg, onClick, children } = props;

	return (
		<div 
			className={className}
			onClick={onClick}
			style={{ 
				marginTop: mt,
				marginBottom: mb,
				marginRight: mr,
				marginLeft: ml,
				backgroundColor: bg,
			}} 
		>
			{ children }
		</div>
	)
}