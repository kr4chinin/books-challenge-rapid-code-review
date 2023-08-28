import DescriptionPage from 'pages/description';
import Main from 'pages/main';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { urlBookId } from 'redux/selectors';

const AppRouter = () => {
  const url = useSelector(urlBookId);

  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path={`${url}`} element={<DescriptionPage />} />

      {/* TODO: Implement 404 page */}
      {/* <Route path="*" element={<Navigate to="/404" />} /> */}
    </Routes>
  );
};

export default AppRouter;
