import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  updateJob } from "../app/reducer/allJobsReducer";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useEffect } from 'react';
import { setJob } from '../app/reducer/allJobsReducer';
function AdmnEdit() {
    
    const {id} = useParams()
    const JobsCollectionRef = collection(db, "jobs")

    const dispatch = useDispatch()
    
    const allJobs = useSelector((state) => state.jobs.value);
    useEffect(() =>{
      const getJobs = async () => {
          const data = await getDocs(JobsCollectionRef)
          dispatch(setJob(data.docs.map((doc) => ({...doc.data(), id: doc.id}))))
          
      }
      getJobs()
    })
    
    const job = allJobs.filter(item => item.id === id)
    console.log(job)

    const [title, setTitle] = useState(job[0].title)
    const [tag, setTag] = useState(job[0].tag)
    const [location, setLocation] = useState(job[0].location)
    const [jobtype, setJobType] = useState(job[0].job_type)
    const [vacancies, setVacancies] = useState(job[0].vacancies)
    const [applicant_needed, setApplicantNedded] = useState(job[0].applicant_needed)
    const [initial_salary, setInitialSalaray] = useState(job[0].initial_salary)
    const [work_experiance, setWorkExperiance] = useState(job[0].work_experiance)
    const [campany_name, setCompanyName] = useState(job[0].campany_name)
    

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);
    };

    const submitForm =  () =>{
        dispatch(updateJob({
            title: title,
            job_type: jobtype,
            location: location,
            vacancies: vacancies,
            applicant_needed:  applicant_needed,
            work_experiance: work_experiance,
            initial_salary: initial_salary,
            tag: tag,
            campany_name: campany_name
        }))

        alert("submitted")
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
         value={title}
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
         value={tag}
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
       value={location}
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
       value={jobtype}
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
          value={vacancies}
          onChange={(event) => {
           setVacancies(event.target.value)
         }}
          />
       </Form.Group>

       
       <Form.Group as={Col} controlId="formGridCity">
         <Form.Label
         >applicant needed</Form.Label>
         <Form.Control  
         required 
         type="text"
         value={applicant_needed}
         onChange={(event) => {
           setApplicantNedded(event.target.value)
         }}
         />
       </Form.Group>
    

     
         <Form.Group as={Col} controlId="formGridCity">
         <Form.Label>Initial salary</Form.Label>
         <Form.Control   
         required
         type="text"
         value={initial_salary}
         onChange={(event) => {
           setInitialSalaray(event.target.value)
         }}dde
         />
       </Form.Group>
      
     </Row>
     <Form.Group className="mb-3" controlId="formGridAddress2">
       <Form.Label>work experiance</Form.Label>
       <Form.Control  
       required 
       placeholder="work experiance in year" 
       type="text"
       value={work_experiance}
         onChange={(event) => {
           setWorkExperiance(event.target.value)
         }}
       />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGridAddress2">
       <Form.Label>Company name</Form.Label>
       <Form.Control  
       required 
       placeholder="Enter the company name" 
       type="text"
       value={campany_name}
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

export default AdmnEdit