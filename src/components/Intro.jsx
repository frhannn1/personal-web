import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import fotoprib from '../assets/fotoprib.jpg'
import Button from 'react-bootstrap/Button';
import '../style/Intro.css'

function Intro() {
  return (
    <Container className='intro' id='intro'>
      <Row className='mb-5'>
        <Col sm={4} className='foto'>
        <Image src={fotoprib} className='foto' rounded/>
        </Col>
        <Col sm={8} >
            <div className='judul text-center text-sm-start'>
                <h1 className='nama ms-sm-5'>FARHAN AINURRAHMAN</h1>
                <h2 className='deskrip ms-sm-5'>Web Developer | Data Scientist | Network Engineer</h2>
                <Button className='ms-sm-5 p-2 mt-sm-3' variant='dark'>Download CV</Button>
            </div>
            <div className=' ms-sm-5 mt-3 text-sm-start text-center justify-content-sm-center'>
                <span className='p-2'>
                  <a href="https://www.instagram.com/farhan.ainurrahman/" target='blank'>
                  <img src="../../public/logo/instagram (1).png" alt="" className='logo'/>
                  </a>
                </span>
                <span className='p-2'>
                  <a href="https://www.linkedin.com/in/farhan-anainurrahman-9b8247261/" target='blank'>
                  <img src="../../public/logo/linkedin.png" alt="" className='logo'/>
                  </a>
                </span>
                <span className='p-2'>
                  <a href="https://github.com/frhannn1" target='blank'> 
                  <img src="../../public/logo/github.png" alt="" className='logo'/>
                  </a>
                </span>
                <span className='p-2'>
                  <a href="https://wa.me/62813535840932" target='blank'>
                  <img src="../../public/logo/whatsapp (1).png" alt="" className='logo'/>
                  </a>
                </span>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;