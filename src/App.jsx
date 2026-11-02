import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function App() {
  return (
    <>
       <Navbar className='navbar'bg="dark" data-bs-theme="dark">
        <Container>
          <img src="https://imgs.search.brave.com/yxW53Q-8E0e5j71ocR-JPjeaIp-WbMGcXVurE0aqcNA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTQv/MDM5LzI0Ny9zbWFs/bC9nYW1lLXNob3At/bG9nby10ZW1wbGF0/ZS1kZXNpZ24tZ2Ft/aW5nLXN0b3JlLWxv/Z28tZnJlZS12ZWN0/b3IuanBn"
          alt="logo"
          className='navbar-logo'></img>
          <Navbar.Brand href="#home">Gaming<span>store</span></Navbar.Brand>
          <Nav className="navbar-brand ms-auto">
            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#features">Features</Nav.Link>
            <Nav.Link className='nav-link' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section className="hero-section" id="home">
  <div className="hero-content">
    <h5>WELCOME TO GAMING STORE</h5>

    <h1>
      Play. <span>Explore.</span> Enjoy.
    </h1>
 <Button className='btn' variant="primary">Explore  Games</Button>
    <p>
      Find your next favorite game and start your adventure!
    </p>

    
  </div>

  <div className="hero-image">
    <img
      src="https://plus.unsplash.com/premium_photo-1687919417131-c50f7d9a407a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      alt="Gaming setup"
    />
  </div>
</section>
  <section className="game-grid" id="features">
    <Card className="game-card">
      <Card.Img variant="top" src="https://images.g2a.com/1024x576/1x1x1/call-of-duty-modern-warfare-4-xbox-series-x-s-pc-xbox-live-key-global-i10000514854047/efe198968c1c475386221316" />
      <Card.Body>
        <Card.Title>Modern warfare 4</Card.Title>
        <Card.Text>
 La guerre éclate dans la péninsule coréenne dans Call of Duty®: Modern Warfare® 4, avec la Corée du Nord lançant une invasion, menaçant la stabilité mondiale. Engagé dans des combats intenses sur les champs de bataille 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card className="game-card">
      <Card.Img variant="top" src="https://images.g2a.com/470x276/1x1x0/ea-sports-fc-27-pc-ea-app-key-europe-i10000515240002/b68e0e1d8cb240f2b62b9a4f" />
      <Card.Body>
        <Card.Title>EA Sports FC 27 (PC) </Card.Title>
        <Card.Text>
         EA SPORTS FC 27 est un simulateur de football développé par EA Canada et EA Roumanie, qui comprend des clubs officiels, des matchs compétitifs, le mode carrière, Football Ultimate Team et la nouvelle expérience de football socia
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card className="game-card">
      <Card.Img variant="top" src="https://images.g2a.com/1024x576/1x1x1/the-bus-pc-steam-account-global-i10000246998008/605c6faa46177c7504796234" />
      <Card.Body>
        <Card.Title>The bus</Card.Title>
        <Card.Text>
         The Bus est la nouvelle génération de simulation de conduite de bus urbain, se déroulant dans la capitale allemande, Berlin, sur une échelle réaliste de 1:1. Il transporte des passagers sur plusieurs lignes à travers la ville avec divers...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </section>
      <footer className="site-footer">
        <p>© 2026 Gaming Store. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
