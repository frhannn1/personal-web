import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "../style/Porto.css"
function Portofolio(){
    const cardContents = [
        {
          title: "Situs Peminjaman Buku",
          text: "This is a longer card with supporting text below as a ntent is a little bit longer.",
          src : "../../public/Screenshot (903).png"
        },
        {
          title: "Situs web course",
          text: "Another card with different content. You can customize it as needed.",
          src: "../../public/Screenshot (904).png"
        },
        {
            title : "desain UI/UX labirin apps",
            text : "applikasi laboratorium virtual",
            src : "../../public/Screenshot (905).png"
        },
        {
            title : "analisis data pemasaran produk",
            text : "analisa data dan visualisasi data menggunakan python",
            src : "../../public/Screenshot (906).png"
        },
        {
          title : "desain UI/UX grafica apps",
          text : "applikasi pemberi dan penerima sebuah project untuk masyarakat",
          src : "../../public/grafica.png"
        }
        // Tambahkan lebih banyak objek sesuai kebutuhan
      ];
      const maxHeight = Math.max(
        ...cardContents.map((content) => content.text.length+250) // Menggunakan panjang teks sebagai penanda tinggi kartu
      );
    
    return(
        <Container className="mt-4 p-4" id="porto">
           <Row className="justify-content-center d-flex">
            <Col>
            <h1 className="text-center">Portofolio</h1>
            </Col>
            </Row> 
            <Container className="mt-4">
            <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ height: `${maxHeight}px` }}>
            <Card.Img variant="top" src={cardContents[idx % cardContents.length].src} className="fotoporto m-0" />
            <Card.Body>
              {/* Menggunakan nilai dari array untuk Card.Title dan Card.Text */}
              <Card.Title>{cardContents[idx % cardContents.length].title}</Card.Title>
              <Card.Text>{cardContents[idx % cardContents.length].text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
        </Container>
    );
}

export default Portofolio;