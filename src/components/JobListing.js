import React from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import JobCard from "./JobCard";
import {setJob} from "../app/reducer/allJobsReducer";


function JobListing() {
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

  return (
    <div className='container background-grey p-4 mt-3 rounded box-shadow'>
      {allJobs.map((data) =>{
         return <JobCard data = {data}/>
      })}
    </div>
  )
}
 
export default JobListing