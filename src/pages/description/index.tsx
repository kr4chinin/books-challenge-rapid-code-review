import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import { isLoading, bookData, imageLinks } from 'redux/selectors';
import { Button } from 'components/button';
import * as S from './index.styles';

const DescriptionPage = () => {
  const loading = useSelector(isLoading);
  const { title, categories, authors, description } = useSelector(bookData);
  const label = useSelector(imageLinks);
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
          wrapperStyle={{ marginTop: '10px' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#bb7d81"
        />
      ) : (
        <>
          <Button
            buttonName={'Back'}
            className={'backbutton'}
            handleClick={goBack}
          />
          <S.ContainerLabel>
            <S.Image src={label} alt="label of book" />
          </S.ContainerLabel>
          <S.ContainerDescription>
            <S.Page>
              <S.InlineString>Name:</S.InlineString>
              <S.InlineString>{title}</S.InlineString>
            </S.Page>
            <S.Page>
              <S.InlineString>Categories: </S.InlineString>
              <S.InlineString>{categories}</S.InlineString>
            </S.Page>
            <S.Page>
              <S.InlineString>Authors:</S.InlineString>
              <S.InlineString>{authors}</S.InlineString>
            </S.Page>
            <S.Page>
              <S.InlineString>Description:</S.InlineString>
              <S.InlineString>{description}</S.InlineString>
            </S.Page>
          </S.ContainerDescription>
        </>
      )}
    </S.Container>
  );
};

export default DescriptionPage;
