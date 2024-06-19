import { FC, ReactNode, MouseEvent } from 'react';
import { Icon } from '@ui';

// import styles from './Button.module.scss';
// icon - react-icons
// className "btn"

type ButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  className?: string;
  children?: string;
  icon?: ReactNode,
  leftIcon?: ReactNode;
	leftIconSize?: number | string;
  rightIcon?: ReactNode;
	rightIconSize?: number | string;
};

export const Button: FC<ButtonProps> = (props) => {
	const { 
    text, className, children, 
    onClick, leftIcon, 
    leftIconSize, rightIcon, 
    rightIconSize
  } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e);
  }

  return (
    <button 
      className={className} 
      onClick={e => handleClick(e)}
    >
      {leftIcon && <Icon icon={leftIcon} size={leftIconSize}/>}
      {text}{children}
      {rightIcon && <Icon icon={rightIcon} size={rightIconSize}/>}
    </button>
  );
};
