import { ChangeEvent, FC } from 'react';
import * as S from './index.styles';

interface IPropsInput {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleKeyPress: (e: KeyboardEvent) => void
}

const Input: FC<IPropsInput> = ({
  handleChange,
  handleKeyPress,
}): JSX.Element => {
  
  return (
    <S.ContainerInput
      type="text"
      placeholder="Введите название книги"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Input;
