import { FC } from 'react';
import * as S from './index.styles';

interface IPropsButton {
	buttonName: string;
	className?: string;
	handleClick?: () => void;
}

export const Button: FC<IPropsButton> = ({
	handleClick,
	buttonName,
	className,
}): JSX.Element => {
	
	return (
		<S.Button onClick={handleClick} className={className}>
			<S.ButtonName>{buttonName}</S.ButtonName>
		</S.Button>
	);
};
