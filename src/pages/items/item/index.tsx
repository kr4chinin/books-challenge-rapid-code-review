import * as S from "./index.styles";

export const Item = ({ state }: any) => {
	const label = state.volumeInfo.imageLinks?.smallThumbnail;
	const name = state.volumeInfo.title;
	const category = state.volumeInfo.categories?.[0];
	const author = state.volumeInfo.authors?.[0];

	return (
		<S.Container>
			<img src={label} alt="label of book" />
			<span className="nameOfcompany"><span className="upperName">Наименование:</span> {name?.length ? name : "Незветсно"}</span>
			<span className="categoryOfcompany"><span className="upperName">Категория:</span> {category?.length ? category : "Неизвестно"}</span>
			<span className="authorOfcompany"><span className="upperName">Автор:</span> {author?.length ? author : "Неизвестно"}</span>
		</S.Container>
	);
};

export default Item;
