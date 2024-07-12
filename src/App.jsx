
import './App.css'
import { Container, Row , Col, Card, CardLink} from 'react-bootstrap'


function App() {
  const pokemones=[
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" class="card-img-top"></img>,
      num:'N.°0001',
      nombre:'Bulbasaur',
      tipo:'Planta/Veneno'

    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" class="card-img-top"></img>,
      num:'N.°0004',
      nombre:'Charmander',
      tipo:'Fuego'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png" class="card-img-top"></img>,
      num:'N.°0007',
      nombre:'Squirtle',
      tipo:'Agua'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png" class="card-img-top"></img>,
      num:'N.°0025',
      nombre:'Pikachu',
      tipo:'Eléctrico'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png" class="card-img-top"></img>,
      num:'N.°0039',
      nombre:'Jigglypuff',
      tipo:'Normal/Hada'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png" class="card-img-top"></img>,
      num:'N.°0133',
      nombre:'Eevee',
      tipo:'Normal'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png" class="card-img-top"></img>,
      num:'N.°0010',
      nombre:'Caterpie',
      tipo:'Bicho'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png" class="card-img-top"></img>,
      num:'N.°0016',
      nombre:'Pidgey',
      tipo:'Normal/Volador'
    },
    {
      imagen: <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png" class="card-img-top"></img>,
      num:'N.°0023',
      nombre:'Ekans',
      tipo:'Veneno'
    },
  ]

  return (
    <Container>
      <Row>
        <div>
        <img src='./images/logoPokemon.png'></img>
        </div>
      </Row>

      <Row>
        {
          pokemones.map((pokemones,index)=>(
            <Col>
            <Card class="card text-bg-dark mb-3" style={{ width: '18rem', top: '2rem'}}>
              <Card.Body>
                <CardLink>{pokemones.imagen}</CardLink>
                <Card.Text>{pokemones.num}</Card.Text>
                <Card.Text>Nombre: {pokemones.nombre} </Card.Text>
                <Card.Text>Tipo: {pokemones.tipo} </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          ))
        }
      </Row>


    </Container>
  )
}

export default App
