import * as S from "./index.styles";
import { useSelector } from "react-redux";
import { Button } from "components/button";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { ICurrentState, IState } from "types";

const DescriptionPage = () => {
	const bookImage = useSelector(
		(state:ICurrentState) => state.books.book.data?.volumeInfo.imageLinks.smallThumbnail,
	);
	const bookName = useSelector(
		(state:ICurrentState) => state.books.book.data?.volumeInfo.title,
	);
	const bookCategories = useSelector(
		(state:ICurrentState) => state.books.book.data?.volumeInfo.categories,
	);
	const bookAuthors = useSelector(
		(state:ICurrentState) => state.books.book.data?.volumeInfo.authors,
	);
	const bookDescription = useSelector(
		(state:ICurrentState) => state.books.book.data?.volumeInfo.description,
	);
	const isLoading = useSelector((state:IState) => state.books?.loading);

	return (
		<S.Container>
			{isLoading ? (
				<MagnifyingGlass
					visible={true}
					height="110"
					width="110"
					ariaLabel="MagnifyingGlass-loading"
					wrapperStyle={{ marginTop: "10px" }}
					wrapperClass="MagnifyingGlass-wrapper"
					glassColor="#c0efff"
					color="#bb7d81"
				/>
			) : (
				<>
					<Link to="/*">
						<Button buttonName={"Back"} className={"backbutton"} />
					</Link>
					<div className="container__label">
						<img src={bookImage} alt="label of book" />
					</div>
					<div className="container__description">
						<p className="name">
							Name: <span className="namingBook">{bookName}</span>
						</p>
						<p className="categories">
							Categories: <span className="namingBook">{bookCategories}</span>
						</p>
						<p className="authors">
							Authors: <span className="namingBook">{bookAuthors}</span>
						</p>
						<p className="description">
							Description: <span className="namingBook">{bookDescription}</span>
						</p>
					</div>
				</>
			)}
		</S.Container>
	);
};

export default DescriptionPage;
