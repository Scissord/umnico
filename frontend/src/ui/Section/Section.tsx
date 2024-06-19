import { FC, ReactNode } from 'react'

type SectionProps = {
	className?: string,
	bg?: string,
  onClick?: () => void;
	mt?: number | string;
	mb?: number | string;
	mr?: number | string;
	ml?: number | string;
	children: ReactNode,
}

export const Section: FC<SectionProps> = (props) => {
	const { mt, mb, mr, ml, className, bg, onClick, children } = props;

	return (
		<section 
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
		</section>
	)
}