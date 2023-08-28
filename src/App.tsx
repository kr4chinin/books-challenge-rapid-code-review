import AppRouter from 'AppRouter';
import { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import * as S from './App.styles';

const App: FC = (): JSX.Element => {
  return (
    <HashRouter>
      <S.Container>
        <AppRouter />
      </S.Container>
    </HashRouter>
  );
};

export default App;
