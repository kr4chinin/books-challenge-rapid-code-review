import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { urlBookId } from 'redux/selectors/index';
import DescriptionPage from 'pages/description';
import Main from './pages/main';
import * as S from './App.styles';

const App: FC = (): JSX.Element => {
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
