import "./App.styles.jsx";
import * as S from "./App.styles";
import { FC } from "react";
import Main from "./pages/main";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import DescriptionPage from "pages/description";
import { urlBookId } from "redux/selectors/index";

const App:FC = ():JSX.Element => {
	const url = useSelector(urlBookId);

	return (
		<HashRouter>
			<S.Container>
				<Routes>
					<Route path="/*" element={<Main />} />
					<Route path={`${url}`} element={<DescriptionPage />} />
				</Routes>
			</S.Container>
		</HashRouter>
	);
};

export default App;
