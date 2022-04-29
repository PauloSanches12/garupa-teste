import { useEffect } from 'react';
import Pagination from '../../RequestPagination/Pagination';
import useBeers from '../../RequestPagination/useBeers';
import { Container, Div, Li, Image, ContentImage, Span, Title } from './styles';

function ListData() {
  const { beers, requestBeers } = useBeers(3);
  const { actualPage, setActualPage } = Pagination();
  useEffect(() => {
    requestBeers(actualPage)
  }, [actualPage])

  return (
    <Container>
      <Title>Beer List</Title>
      {beers.map((x, key) => (
        <Div key={key}>
          <ul>
            <ContentImage>
              <Image src={x.image_url} width="40px" alt="imagem" />
            </ContentImage>
            <Li><Span>Name:</Span> {x.name}</Li>
            <Li><Span>Slogan:</Span> {x.tagline}</Li>
            <Li><Span>First Brewed:</Span> {x.first_brewed}</Li>
            <Li><Span>Description:</Span> {x.description}</Li>
          </ul>
        </Div>
      ))}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {
          Array(5).fill('').map((_, index) => {
            return <button key={index} onClick={() => setActualPage(index+1)}>{index+1}</button>
          })
        }

      </div>
    </Container>
  );
};

export default ListData;
