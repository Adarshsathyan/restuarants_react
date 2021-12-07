import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'

function Footer() {
    return (
        <div  >
            <Container className="footer bg-dark p-3" style={{paddingBottom:"60px;"}} fluid >
                <Row className="mt-4">
                    <Col xs={4} md={4} >
                    <p>Privacy</p>    
                    <p>Terms</p>
                    <p>Help</p>
                    </Col> 
                    <Col xs={4} md={4}>
                    <p>Privacy</p>    
                    <p>Terms</p>
                    <p>Help</p>
                    </Col> 
                    <Col xs={4} md={4}>
                    <p>Privacy</p>    
                    <p>Terms</p>
                    <p>Help</p>
                    <p></p>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Footer
