import { FC } from 'react'

type ImgProps = {
	alt: string,
	src: string,
	className?: string, 
}

export const Img: FC<ImgProps> = (props) => {
	const { alt, src, className } = props;

	return (
		<img 
			alt={alt}
			src={src} 
			className={className} 
		/>
	)
}