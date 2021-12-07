import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restaurants from './Restaurants'

function Home() {
    const [hotels,setHotels]=useState([])
    useEffect(() => {
      let fetchData =async ()=>{
        await fetch('/restaurants-react.json')
        .then((res)=>res.json())
        .then((data)=>setHotels(data.restaurants))
       
      }
      fetchData()
    
    }, [])
    
    return (
        <Row >
          {hotels ?(
              hotels.map((hotel)=>(
                <Col className="my-5" md={3} sm={12} >
                  <Restaurants hotel={hotel}/>
                </Col>
                ))
          ):null}
        </Row>
    )
}

export default Home
