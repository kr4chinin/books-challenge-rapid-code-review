import * as S from "./index.styles";
import { useSelector } from "react-redux";
import { Button } from "components/button";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import {
	bookAuthors,
	bookCategories,
	bookDescription,
	bookImage,
	bookName,
	isLoading,
} from "redux/selectors";

const DescriptionPage = () => {
	const label = useSelector(bookImage);
	const name = useSelector(bookName);
	const categories = useSelector(bookCategories);
	const authors = useSelector(bookAuthors);
	const description = useSelector(bookDescription);
	const loading = useSelector(isLoading);
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<S.Container>
			{loading ? (
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
					<Button
						buttonName={"Back"}
						className={"backbutton"}
						onClick={goBack}
					/>
					<div className="container__label">
						<img src={label} alt="label of book" />
					</div>
					<div className="container__description">
						<p className="name">
							<span className="nameSpace">Name:</span>
							<span className="namingBook">{name}</span>
						</p>
						<p className="categories">
							<span className="nameSpace">Categories: </span>
							<span className="namingBook">{categories}</span>
						</p>
						<p className="authors">
							<span className="nameSpace">Authors:</span>
							<span className="namingBook">{authors}</span>
						</p>
						<p className="description">
							<span className="nameSpace">Description:</span>
							<span className="namingBook">{description}</span>
						</p>
					</div>
				</>
			)}
		</S.Container>
	);
};

export default DescriptionPage;
