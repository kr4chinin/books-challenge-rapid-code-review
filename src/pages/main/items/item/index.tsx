import { FC } from 'react';
import * as S from './index.styles';

export interface IVolumeInfo {
  title: string;
  authors: string[];
  description: string;
  categories: string[];
  imageLinks: { smallThumbnail: string };
}

export interface IPropsItem {
  state: {
    kind: string;
    id: number;
    etag: string;
    selfLink: string;
    volumeInfo: IVolumeInfo;
  };
  handleClick: () => void;
}

export const Item: FC<IPropsItem> = ({ state, handleClick }): JSX.Element => {
  const label = state.volumeInfo.imageLinks?.smallThumbnail;
  const name = state.volumeInfo.title;
  const category = state.volumeInfo.categories?.[0];
  const authors = state.volumeInfo.authors;

  return (
    <S.Container onClick={handleClick}>
      <S.Image src={label} alt="label of book" />
      <S.Text>
        <S.TextUpperCase>Наименование:</S.TextUpperCase>
        {name?.length ? name : 'Незветсно'}
      </S.Text>
      <S.Text>
        <S.TextUpperCase>Категория:</S.TextUpperCase>
        {category?.length ? category : 'Неизвестно'}
      </S.Text>
      <S.Text>
        <S.TextUpperCase>Автор:</S.TextUpperCase>
        {authors?.length ? authors : 'Неизвестно'}
      </S.Text>
    </S.Container>
  );
};

export default Item;
