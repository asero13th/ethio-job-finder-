import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function JobDetail() {
  const {id} =  useParams();
  const allJobs = useSelector((state) => state.jobs.value);
  console.log(allJobs)
  const job = allJobs.filter(item => item.id === id)
  console.log(job)

  return (
    <div className='container d-flex justify-content-center' style={{backgroundColor: "#f6f8fa", minHeight: "19vh",}}>
      <div style={{width: "40%"}}>
          <Image style={{width: "100%", height: "100%"}} src={job[0].company_logo}/>
      </div>
      <div className='d-flex justify-content-center mt-3 p-5'>
      <ListGroup variant="flush">
      <ListGroup.Item><span>company name: </span>{job[0].company_name}</ListGroup.Item>
      <ListGroup.Item><span>Job title: </span>{job[0].title}</ListGroup.Item>
      <ListGroup.Item><span>Job type: </span>{job[0].job_type}</ListGroup.Item>
      <ListGroup.Item><span>work experiance: </span><span>{job[0].work_experiance}</span>+ years</ListGroup.Item>
      <ListGroup.Item><span>initial salary: </span>{job[0].initial_salary}</ListGroup.Item>
      <ListGroup.Item><span>vacancies: </span>{job[0].vacancies}</ListGroup.Item>
      <ListGroup.Item><span>location: </span>{job[0].location}</ListGroup.Item>
      <ListGroup.Item><span>applicant needed: </span>{job[0].applicant_needed}</ListGroup.Item>
      
    </ListGroup>
      </div>
    </div>
  )
}

export default JobDetail