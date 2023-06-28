import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Testimonial() {
  return (
    <div className='mt-3'>
        <Carousel>
      <Carousel.Item>
        <img
          className="w-100 "
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
          style={{height:"85vh", objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h3>FIND YOUR DREAM JOB FROM HOME</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
          style={{height:"85vh", objectFit:"cover" }}
        />

        <Carousel.Caption>
          <h3>APPLY ON TOP TECH COMPANIES</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="Third slide"
          style={{height:"85vh", objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h3>GET IMMADIATE JOB REALEASE</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
        
    <div className='container d-flex mt-5 justify-content-around'>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Card.Body>
        <Card.Title style={{color:"#ffd723"}}>How to enjoy your works</Card.Title>
        <Card.Text  className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" href='https://energyresourcing.com/blog/love-your-job'>Read more</Button>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Card.Body>
        <Card.Title style={{color:"#ffd723"}}>10 tips for technical intervies</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" href='https://shecancode.io/blog/top-10-technical-interview-tips'>Read more</Button>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Card.Body>
        <Card.Title style={{color:"#ffd723"}}>managing time effectively</Card.Title>
        <Card.Text  className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" href='https://timerichme.com/'>Read more</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Testimonial