import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Restaurants({hotel}) {
    return (
        <>
            <Card style={{ width: '18rem',borderRadius:'20px' }} className="p-3">
                <Card.Img variant="top" src={hotel.photograph} style={{ borderRadius:'20px' }} />
                <Card.Body>
                    <Card.Title className="text-dark">{hotel.name}</Card.Title>
                    <Card.Text>
                    Cuisine: {hotel.cuisine_type}
                    </Card.Text>
                    <Card.Text>
                     {hotel.neighborhood}
                    </Card.Text>
                   <Link to={`/hotel/${hotel.id}`} ><Button variant="primary">View</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Restaurants
