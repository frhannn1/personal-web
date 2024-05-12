import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../style/About.css";

function About() {
  return (
    <Container className="mt-5 justify-content-center d-flex" id="about">
      <Row>
        <Col>
          <h1 className="about text-center">About</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            veniam. Commodi quam doloremque animi, unde vel velit blanditiis
            provident ex maxime illum laboriosam quas aspernatur quia tempore
            dignissimos doloribus at. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit sint, quod sunt et minus eveniet
            odio omnis deserunt asperiores iusto! Expedita, saepe ipsa accusamus
            est excepturi officia accusantium exercitationem perspiciatis.
          </p>
        </Col>
        {/* SKILLS */}
<Container className="">
    <Row className=" justify-content-center d-flex mt-3">
        <h1 className="text-center mb-4 skill">Skills</h1>
    </Row>
    <Row className="" xs={1} md={2}>
      <Col className="p-2">
       <h5>Java</h5>
      <ProgressBar variant="dark" now={90} label={`${90}%`} />
      </Col>
      <Col className="p-2">
      <h5>Python</h5>
      <ProgressBar variant="dark"  now={60} label={`${60}%`}/>
      </Col>
    </Row>
    <Row className="" xs={1} md={2}>
      <Col className="p-2">
      <h5 >PHP</h5>
      <ProgressBar variant="dark" now={80} label={`${80}%`} />
      </Col>
      <Col className="p-2">
        <h5  className="">MySQL</h5>
      <ProgressBar variant="dark" now={90} label={`${90}%`}/>
      </Col>
    </Row>
    <Row className="" xs={1} md={2}>
      <Col className="p-2">
       <h5>HTML</h5>
      <ProgressBar variant="dark" now={90} label={`${90}%`} />
      </Col>
      <Col className="p-2">
       <h5>CSS</h5>
      <ProgressBar variant="dark" now={70} label={`${70}%`}/>
      </Col>
    </Row>
    <Row className="" xs={1} md={2}>
      <Col className="p-2">
      <h5> React Js</h5>
      <ProgressBar variant="dark" now={70} label={`${70}%`} />
      </Col>
      <Col className="p-2">
      <h5>Laravel</h5>
      <ProgressBar variant="dark" now={80} label={`${80}%`}/>
      </Col>
    </Row>
</Container>
      </Row>
    </Container>
  );
}

export default About;
