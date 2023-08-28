import { FC, HTMLAttributes } from 'react';
import * as S from './index.styles';

const Select: FC<HTMLAttributes<HTMLSelectElement>> = ({
	...rest
}): JSX.Element => {
	return (
		<S.Select name="sortingBy" id="sortingBy" {...rest}>
			<option value="relevance">relevance</option>
			<option value="newest">newest</option>
		</S.Select>
	);
};

export default Select;
