import * as S from "./index.styles";

export const Item = ({ state }: any) => {
	const label = state.volumeInfo.imageLinks?.smallThumbnail;
	const name = state.volumeInfo.title;
	const category = state.volumeInfo.categories?.[0];
	const author = state.volumeInfo.authors?.[0];

	return (
		<S.Container>
			<img src={label} alt="label" />
			<span>Наименование: {name?.length ? name : "Незветсно"}</span>
			<span>Категория: {category?.length ? category : "Неизвестно"}</span>
			<span>Автор: {author?.length ? author : "Неизвестно"}</span>
		</S.Container>
	);
};

export default Item;
