import { ChangeEvent, FC } from 'react';
import * as S from './index.styles';

export interface IPropsSelect {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Select: FC<IPropsSelect> = ({ handleChange }): JSX.Element => {
  
  return (
    <S.ContainerSelect onChange={handleChange} name="sortingBy" id="sortingBy">
      <option value="relevance">relevance</option>
      <option value="newest">newest</option>
    </S.ContainerSelect>
  );
};

export default Select;
