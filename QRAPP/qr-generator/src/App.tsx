import { Navbar, Container } from 'react-bootstrap'
import './App.css'
import QrCodeGenerator from './components/qrCode'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              QR Code Generator
            </Navbar.Brand>
          </Container>
        </Navbar>
      <QrCodeGenerator />
    </>
  )
}

export default App
