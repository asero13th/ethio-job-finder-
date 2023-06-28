import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteJob } from '../app/reducer/allJobsReducer';
import { db } from '../firebase-config';
import {setJob} from "../app/reducer/allJobsReducer";
import {collection, getDocs} from 'firebase/firestore';
import {  useEffect } from 'react';

function AdminJobList() {
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

    const deleteHandle  = (id) => {
      collection(db,'jobs').doc(id).delete().then(() => {
        console.log("data successfully deleted")
      }).catch((error) =>{
        console.log(error)
      })
    }
    
       
    
  return (
    <div className='container background-grey p-4 mt-3 rounded box-shadow d-flex justify-content-between'>
    {allJobs.map((data) =>{
       
       return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.company_logo} />
        <Card.Body>
        <ListGroup>
            <ListGroup.Item><span>salary: </span>{data.initial_salary}</ListGroup.Item>
            <ListGroup.Item><span>work experiance: </span>{data.work_experiance}</ListGroup.Item>
            <ListGroup.Item><span>vacancies: </span>{data.vacancies}</ListGroup.Item>
            <ListGroup.Item><span>aplicant needed: </span>{ data.applicant_needed}</ListGroup.Item>
            <ListGroup.Item><span>job type: </span>{data.job_type}</ListGroup.Item>
            <ListGroup.Item><span>location: </span>{data.location}</ListGroup.Item>
            
        </ListGroup>
            <Button 
            style={{width: "100%"}} 
            variant="primary" 
            href={`/admin/edit/${data.id}`} 
            className='mb-2 mt-3'>update job's data
            </Button>
            <Button 
            variant="danger"
            style={{width: "100%"}}  
            onClick={() =>{
                deleteHandle(data.id)
               
            }} >delete from dashboard</Button>
        </Card.Body>
     </Card>
       )
    })}
  </div>
  )
}

export default AdminJobList