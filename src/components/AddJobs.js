import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react'
import {  addJob } from "../app/reducer/allJobsReducer";
import { useDispatch } from 'react-redux';
import { addDoc , collection} from "firebase/firestore"
import { db } from '../firebase-config';

function AddJobs() {
    const JobsCollectionRef = collection(db, "jobs")

    const [title, setTitle] = useState("")
    const [tag, setTag] = useState("")
    const [location, setLocation] = useState("")
    const [jobtype, setJobType] = useState("")
    const [vacancies, setVacancies] = useState(0)
    const [applicant_needed, setApplicantNedded] = useState(0)
    const [initial_salary, setInitialSalaray] = useState(0)
    const [work_experiance, setWorkExperiance] = useState(0)
    const [company_name, setCompanyName] = useState("")

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);
    };

  

    const submitForm =  async() =>{
        await addDoc(JobsCollectionRef, {
            title: title,
            job_type: jobtype,
            location: location,
            vacancies: vacancies,
            applicant_needed:  applicant_needed,
            work_experiance: work_experiance,
            initial_salary: initial_salary,
            tag: tag,
            company_name: company_name,
            company_logo: ""
        })    
    }

  return (
   <div className='container mt-3' >
     <div className='d-flex justify-content-center' >
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='rounded' style={{backgroundColor:"#f6f8fa",padding:"40px 20px"}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Job title</Form.Label>
          <Form.Control  
          required 
          type="text" 
          placeholder="Enter job title" 
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTag">
          <Form.Label>Job tag</Form.Label>
          <Form.Control  
          required 
          type="text" 
          placeholder="Job tag"
          onChange={(event) => {
            setTag(event.target.value)
          }} 
          
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Location</Form.Label>
        <Form.Control  
        required 
        placeholder="Addis Ababa" 
        onChange={(event) => {
            setLocation(event.target.value)
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Job type</Form.Label>
        <Form.Control  
        required 
        placeholder="Graphics designer" 
        onChange={(event) => {
            setJobType(event.target.value)
          }}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>vacancies</Form.Label>
          <Form.Control 
           required 
           onChange={(event) => {
            setVacancies(parseInt(event.target.value))
          }}
           />
        </Form.Group>

        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label
          >applicant needed</Form.Label>
          <Form.Control  
          required 
          type="text"
          onChange={(event) => {
            setApplicantNedded(parseInt(event.target.value))
          }}
          />
        </Form.Group>
     

      
          <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Initial salary</Form.Label>
          <Form.Control   
          required
          type="text"
          onChange={(event) => {
            setInitialSalaray(parseInt(event.target.value))
          }}dde
          />
        </Form.Group>
       
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>work_experianceork experiance</Form.Label>
        <Form.Control  
        required 
        placeholder="work experiance in year" 
        type="text"
          onChange={(event) => {
            setWorkExperiance(parseInt(event.target.value))
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Company name</Form.Label>
        <Form.Control  
        required 
        placeholder="Enter the company name" 
        type="text"
          onChange={(event) => {
            setCompanyName(event.target.value)
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={ submitForm }>
        Submit
      </Button>
    </Form>
    </div>
   </div>
  )
}

export default AddJobs