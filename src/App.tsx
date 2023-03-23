import "./App.styles.jsx";
import * as S from "./App.styles";
import { FC } from "react";
import Main from "./pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import DescriptionPage from "pages/description";
import { IDataBooks } from "types/index.js";

const App:FC = ():JSX.Element => {
	const url = useSelector((state: IDataBooks) => state.books.id);

	return (
		<BrowserRouter>
			<S.Container>
				<Routes>
					<Route path="/*" element={<Main />} />
					<Route path={`${url}`} element={<DescriptionPage />} />
				</Routes>
			</S.Container>
		</BrowserRouter>
	);
};

export default App;
