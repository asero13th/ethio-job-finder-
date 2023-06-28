import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
export default function JobCard({data}) {
  return (
    <Link className='text-decoration-none when-hover' to={`/product/${data.id}`} >
    <Card className='mt-2 mb-1'>
      <Card.Header style={{color: "#333"}} as="h6">{data.company_name}</Card.Header>
      <Card.Body className='d-flex justify-content-between'> 
        <Card.Title>
          {data.title}
          <sup>
          <Badge pill bg="info">
            {data.tag}
          </Badge>{' '}
          </sup>
         <span>
         
         </span>
          
        </Card.Title>
        <Card.Text >
        <Badge pill bg="warning" text="light">
        {data.job_type}
        </Badge>{' '}
        <Badge pill bg="primary" text="light">
        {data.work_experiance}<span>+ years</span>
        </Badge>{' '}
        <Badge pill bg="dark" text="light">
        {data.location}
        </Badge>{' '}
        
        </Card.Text>
        <Button variant="outline-primary">view detail about the job</Button>
      </Card.Body>
    </Card>
    </Link>
  )
}
