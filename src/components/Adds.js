import React from 'react'
import Button from 'react-bootstrap/Button';
import { signInWithGoogle } from '../firebase-config';

function Adds() {
  return (
    <div className='custom-image mt-5'>
        <div>
        <h1 className='mt-5'>LET'S START YOUR NEW JOB<br /> WITH US</h1>
        <p>When looking for a job, it’s important to minimize the time spent on activities <br /> that don’t
            contribute to your job search efforts.</p>
        </div>
        <div>
        <Button onClick={signInWithGoogle} variant="warning custom-btn"  text="light">Join now</Button>{' '}
        </div>
    </div>
  )
}
 
export default Adds