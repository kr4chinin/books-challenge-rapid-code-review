import './App.styles.jsx';
import * as S from "./App.styles";
import { FC } from "react";
import Main from './pages/main';

const App:FC = ():JSX.Element => {

  return (
    <S.Container>
      <div className='container__content'>
        <Main />
      </div>
    </S.Container>
  );
}

export default App;
