import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Div, Li, Image, ContentImage, Span, Title } from './styles';

interface BeersFormat {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

function ListData() {
  const [beers, setBeers] = useState<BeersFormat[]>([]);

  useEffect(() => {
    api.get("beers?page=1&per_page=10")
      .then(function (response) {

        const { data } = response;

        setBeers(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

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
    </Container>
  );
};

export default ListData;
