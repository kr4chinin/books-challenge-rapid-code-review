import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getSortingBooks } from 'redux/reducer';
import { state } from 'redux/selectors';
import { Button } from 'components/button';
import Input from 'components/input';
import Select from 'components/select';
import { kindSortButtons } from 'assets/constants';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      dispatch(getBooks(value));
    }
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    const queryParams = `${value}&orderBy=${e.target.value}`;
    dispatch(getSortingBooks(queryParams));
  };

  return (
    <S.Main>
      <S.Header>
        <S.HeaderMain>
          <Input handleChange={handleChange} handleKeyPress={handleKeyPress} />
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
        <Select handleChange={handleChangeSelect} />
      </S.Header>
      <Items state={generalState} sortingField={sortingField} />
    </S.Main>
  );
};

export default Main;
