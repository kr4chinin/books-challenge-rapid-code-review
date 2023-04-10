import { kindSortButtons } from 'assets/constants';
import { Button } from 'components/button';
import Input from 'components/input';
import Select from 'components/select';

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/reducer';
import { state } from 'redux/selectors';

import Items from './items';
import * as S from './index.styles';

const Main: FC = (): JSX.Element => {
	const generalState = useSelector(state);
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');
	const [sortingField, setSortingField] = useState<string>('');

	const triggerLoadData = (): void => {
		dispatch(getBooks(value));
	};

	const triggerSortByKind = (name: string): void => {
		setSortingField(name);
	};

	return (
		<S.ContainerMain>
			<S.Header>
				<S.HeaderMain>
					<Input value={value} setValue={setValue} dispatch={dispatch}/>
					<Button handleClick={triggerLoadData} buttonName={'Search'} />
				</S.HeaderMain>
				<S.ButtonGroup>
					{kindSortButtons.map(({ className, name, id }) => (
						<Button
							key={id}
							className={className}
							handleClick={() => triggerSortByKind(name)}
							buttonName={name}
						/>
					))}
				</S.ButtonGroup>
				<Select value={value} dispatch={dispatch}/>
			</S.Header>
			<Items state={generalState} sortingField={sortingField} />
		</S.ContainerMain>
	);
};

export default Main;
