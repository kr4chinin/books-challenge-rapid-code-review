import { FC, HTMLAttributes } from 'react';
import * as S from './index.styles';

interface IPropsButton extends HTMLAttributes<HTMLButtonElement> {
	buttonName: string;
	className?: string;
}

export const Button: FC<IPropsButton> = ({
	buttonName,
	className,
	...rest
}): JSX.Element => {
	return (
		<S.Button type="button" {...rest} className={className}>
			<S.ButtonName>{buttonName}</S.ButtonName>
		</S.Button>
	);
};
