import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Topbar from "../navbar/Topbar";
import './menu.css';


export default function Menu()
{
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const fetchPlacementData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/fita/placements');
            setCardsData(response.data.message);
          } catch (err) {
            setError(err.response ? err.response.data.message : "Error fetching data");
          } finally {
            setLoading(false);
          }
        };
    
        fetchPlacementData();
    }, []);

    const handleShow = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };
    
    const handleClose = () => {
        setShowModal(false);
        setSelectedCard(null);
    };
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <>

        <Topbar />

        <Container fluid className='bg-light pb-4'>
            <Container>
                <Row className='place'>
                    <Col xs={12} className="text-center mb-4 mt-5 pt-3">
                        <h1 className='mt-5'  >OUR PLACEMENT</h1>
                        <h5>Recent Placed Students</h5>
                    </Col>
                    {cardsData.map((card, index) => {
                    const imageUrl = `http://localhost:5000/uploads/${card.photo}`;

                    return (
                        <Col key={index} sm={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
             
                            <Card className="congratulation-card text-center card-hover-effect" style={{ width: '100%', maxWidth: '450px' }} onClick={() => handleShow(card)} >
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Card.Title style={{ color: '#d9534f', fontSize: '2rem' }}>Congratulations</Card.Title>
                                    <Image src={imageUrl} alt="Student" roundedCircle style={{ width: '150px', height: '150px', border: '3px solid grey', marginBottom: '1rem' }} />
                                
                                    <div className="placement-details ">
                                        <h6>{card.name}</h6>
                                        <h5>For placement in <strong>{card.placementCompany}</strong></h5>
                                        <h5>As <strong>{card.position}</strong></h5>
                                        <h6>Course: <strong>{card.course}</strong></h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                    );
                    })}

                </Row>
            </Container>
        </Container>

        {/* Modal for detailed view */}
        {selectedCard && (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCard.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Image src={selectedCard.photo} alt="Student" roundedCircle style={{ width: '150px', height: '150px' }} />
                    <h5>Details</h5>
                    <p>For placement in <strong>{selectedCard.placementCompany}</strong></p>
                    <p>Position: <strong>{selectedCard.position}</strong></p>
                    <p>Course: <strong>{selectedCard.course}</strong></p>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                </Modal.Footer>
            </Modal>
        )}

        </>
    );
};