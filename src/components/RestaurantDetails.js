import React, { useEffect, useState } from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom';


function RestaurantDetails() {
    const [details,setDetails]=useState([]);
    let params = useParams();
    useEffect(() => {
      let fetchData =async ()=>{
        await fetch('/restaurants-react.json')
        .then((res)=>res.json())
        .then((data)=>setDetails(data.restaurants))
        .catch(err=>alert("Something went wrong"))
      }
      fetchData();
    }, [])
        
    let detail = details.find((detail)=>detail.id==params.id)
    let no_of_rev
    if(detail){
       no_of_rev = detail.reviews.length
    }
    return (
        <>
        <Link className="btn btn-dark btn-sm " style={{float: 'right'}} to='/'> <i className="fas fa-arrow-left"></i> Back</Link>
            {detail ? (
                
                <Row className="mt-5 p-2" >
                    
                    <Col md={4} sm={12}>
                        <Image src={detail.photograph} fluid sm={12} style={{ borderRadius:'20px' }}></Image>
                    </Col>
                    <Col md={4} sm={12} className="mt-5">
                        <h1 className="text-dark fw-bold">{detail.name}</h1>
                        <p style={{textAlign: 'left'}} className="text-dark ms-3 mt-5"><span className="fw-bold ">({no_of_rev})</span> Reviews <i className="fas fa-check text-success"></i></p>
                        <p style={{textAlign: 'left'}} className="text-dark ms-3  ">
                            {detail.reviews.map((i)=>(
                                <i class="fas fa-star text-warning"></i>
                            ))
                            }  
                        </p>
                        <p style={{textAlign: 'left'}} className="text-dark ms-3 fs-4 mt-4 "> <i class="fas fa-map-marker-alt"></i> {detail.address}, {detail.neighborhood}.</p>
                        <p style={{textAlign: 'left'}} className="text-dark ms-3 fs-4 "> <i class="fas fa-hamburger"></i> Cuisine : {detail.cuisine_type}</p>
                        
                    </Col>
                    <Col md={4} sm={12}>
                    <h4 style={{textAlign: 'left'}}  className="text-dark ms-3 mt-5 fw-bold " >Working hours</h4>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-5 ">Monday : {detail.operating_hours.Monday}</p>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-3 ">Tuesday : {detail.operating_hours.Tuesday}</p>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-3 ">Wednesday : {detail.operating_hours.Wednesday}</p>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-3 ">Thursday : {detail.operating_hours.Thursday}</p>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-3 ">Friday : {detail.operating_hours.Friday}</p>
                    <p style={{textAlign: 'left'}}   className="text-dark ms-3 fs-5 mt-3 ">Saturday : {detail.operating_hours.Saturday}</p>
                    <p style={{textAlign: 'left'}}  className="text-dark ms-3 fs-5 mt-3 ">Sunday : {detail.operating_hours.Sunday}</p>
                    </Col>
                </Row>
            ):null}
            
            
        </>
    )
}

export default RestaurantDetails
